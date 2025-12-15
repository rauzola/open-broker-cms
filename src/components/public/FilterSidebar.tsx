"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export function FilterSidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentType = searchParams.get('type') || 'SALE';

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    const updateFilter = (name: string, value: string) => {
        router.push(pathname + '?' + createQueryString(name, value));
    };

    return (
        <div className="space-y-8 p-6 bg-card border rounded-xl shadow-sm h-fit sticky top-24">
            <div>
                <h3 className="text-lg font-semibold mb-4">Filtros</h3>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label>Finalidade</Label>
                        <div className="flex gap-2">
                            <Button
                                variant={currentType === 'SALE' ? 'default' : 'outline'}
                                onClick={() => updateFilter('type', 'SALE')}
                                className="flex-1"
                            >Comprar</Button>
                            <Button
                                variant={currentType === 'RENT' ? 'default' : 'outline'}
                                onClick={() => updateFilter('type', 'RENT')}
                                className="flex-1"
                            >Alugar</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Label>Valor Mínimo</Label>
                <Select onValueChange={(v) => updateFilter('minPrice', v)}>
                    <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Sem Mínimo" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="0">Sem Mínimo</SelectItem>
                        <SelectItem value="1000">R$ 1.000</SelectItem>
                        <SelectItem value="500000">R$ 500.000</SelectItem>
                        <SelectItem value="1000000">R$ 1.000.000</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <Label>Tipo de Imóvel</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                    {['Casa', 'Apartamento', 'Terreno', 'Comercial'].map(t => (
                        <Badge
                            key={t}
                            variant="outline"
                            className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                            onClick={() => updateFilter('propType', t)}
                        >
                            {t}
                        </Badge>
                    ))}
                </div>
            </div>

            <Button variant="ghost" className="w-full text-muted-foreground" onClick={() => router.push('/search')}>
                Limpar Filtros
            </Button>
        </div>
    )
}
