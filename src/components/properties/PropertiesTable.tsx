"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Property } from "@/lib/types";
import { Edit } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function PropertiesTable({ data }: { data: Property[] }) {
    const [sort, setSort] = useState<'price' | 'createdAt'>('createdAt');

    const sorted = [...data].sort((a, b) => {
        if (sort === 'price') return b.price - a.price;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return (
        <div className="rounded-md border bg-card">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="cursor-pointer hover:text-primary" onClick={() => setSort('price')}>Price (Sort)</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Agent</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sorted.map(p => (
                        <TableRow key={p.id}>
                            <TableCell className="font-medium">{p.title}</TableCell>
                            <TableCell>${p.price.toLocaleString()}</TableCell>
                            <TableCell>
                                <Badge variant={p.status === 'PUBLISHED' ? 'default' : 'secondary'}>
                                    {p.status}
                                </Badge>
                            </TableCell>
                            <TableCell>{p.location}</TableCell>
                            <TableCell>{p.agentId}</TableCell>
                            <TableCell className="text-right">
                                <Link href={`/dashboard/properties/${p.id}`}>
                                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
