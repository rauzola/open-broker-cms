export type Role = 'SUPER_ADMIN' | 'MANAGER' | 'AGENT';
export type PropertyStatus = 'DRAFT' | 'PUBLISHED' | 'SOLD';
export type ListingType = 'SALE' | 'RENT';
export type AuditAction = 'CREATE' | 'UPDATE' | 'DELETE';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

export interface PropertySpecs {
  beds: number;
  baths: number;
  area: number;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  status: PropertyStatus;
  listingType: ListingType;
  type: string;
  location: string;
  specs: PropertySpecs;
  agentId: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface AuditChange {
  field: string;
  old: any;
  new: any;
}

export interface AuditLog {
  id: string;
  actorId: string;
  action: AuditAction;
  entity: 'PROPERTY';
  entityId: string;
  changes: AuditChange[];
  timestamp: string;
}
