"use server";

import { db } from './db';
import { Property, AuditChange, AuditLog } from './types';
import { revalidatePath } from 'next/cache';

// Mock Auth
const CURRENT_USER_ID = 'user-1'; // Alice Admin

export async function getProperties() {
    return db.properties.getAll();
}

export async function getProperty(id: string) {
    return db.properties.getById(id);
}

export async function getAuditLogs(entityId: string) {
    return db.logs.getByEntityId(entityId);
}

function calculateDiff(oldData: any, newData: any): AuditChange[] {
    const changes: AuditChange[] = [];

    const compare = (key: string, oldVal: any, newVal: any) => {
        // Simple equality check, can be improved
        if (oldVal !== newVal) {
            changes.push({ field: key, old: oldVal, new: newVal });
        }
    };

    for (const key in newData) {
        if (Object.prototype.hasOwnProperty.call(newData, key)) {
            if (key === 'specs' && newData.specs) {
                const oldSpecs = oldData.specs || {};
                const newSpecs = newData.specs;
                for (const specKey in newSpecs) {
                    compare(`specs.${specKey}`, oldSpecs[specKey], newSpecs[specKey]);
                }
            } else {
                // @ts-ignore
                compare(key, oldData[key], newData[key]);
            }
        }
    }
    return changes;
}

export async function updateProperty(id: string, data: Partial<Property>) {
    const oldProperty = db.properties.getById(id);
    if (!oldProperty) throw new Error("Property not found");

    const changes = calculateDiff(oldProperty, data);

    if (changes.length > 0) {
        // Perform Update
        const updatedProperty = db.properties.update(id, data);

        // Create Log
        const log: AuditLog = {
            id: Math.random().toString(36).substr(2, 9),
            actorId: CURRENT_USER_ID,
            action: 'UPDATE',
            entity: 'PROPERTY',
            entityId: id,
            changes,
            timestamp: new Date().toISOString()
        };
        db.logs.add(log);

        revalidatePath('/dashboard');
        revalidatePath(`/dashboard/properties/${id}`);
        revalidatePath(`/properties/${id}`);
        return { success: true, changes };
    }

    return { success: true, changes: [] };
}

export async function createProperty(data: Omit<Property, 'id' | 'createdAt' | 'updatedAt'>) {
    const newProp: Property = {
        ...data,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    db.properties.create(newProp);

    const log: AuditLog = {
        id: Math.random().toString(36).substr(2, 9),
        actorId: CURRENT_USER_ID,
        action: 'CREATE',
        entity: 'PROPERTY',
        entityId: newProp.id,
        changes: [{ field: 'all', old: null, new: 'Created' }],
        timestamp: new Date().toISOString()
    };
    db.logs.add(log);

    revalidatePath('/dashboard');
    return newProp;
}
