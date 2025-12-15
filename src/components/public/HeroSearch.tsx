"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Home, MapPin, DollarSign, LayoutGrid } from "lucide-react";
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface HeroSearchProps {
    variant?: 'popular' | 'luxury';
}

export function HeroSearch({ variant = 'popular' }: HeroSearchProps) {
    const router = useRouter();
    const [propertyType, setPropertyType] = useState('');
    const [location, setLocation] = useState('');
    const [priceRange, setPriceRange] = useState('');

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (location) params.set('q', location);
        if (propertyType) params.set('propType', propertyType);

        if (priceRange) {
            const [min, max] = priceRange.split('-');
            if (min) params.set('minPrice', min);
            if (max && max !== '+') params.set('maxPrice', max);
            if (max === '+') params.set('minPrice', '5000000'); // Higher bound for luxury
        }

        router.push(`/${variant}/search?${params.toString()}`);
    }

    if (variant === 'luxury') {
        return (
            <div
                className="bg-black/50 backdrop-blur-xl rounded-none p-6 md:p-8 animate-fade-in-up border border-white/10"
            >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-[oklch(0.85_0.15_85)] font-bold pl-1">Tipo de Imóvel</label>
                        <Select value={propertyType} onValueChange={setPropertyType}>
                            <SelectTrigger className="h-12 bg-transparent border-0 border-b border-white/20 text-white rounded-none px-0 text-lg font-light focus:ring-0 focus:border-white">
                                <SelectValue placeholder="Todos os Tipos" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-950 border-white/10 text-white">
                                <SelectItem value="Casa">Casa</SelectItem>
                                <SelectItem value="Apartamento">Apartamento</SelectItem>
                                <SelectItem value="Cobertura">Cobertura</SelectItem>
                                <SelectItem value="Mansão">Mansão</SelectItem>
                                <SelectItem value="Terreno">Terreno</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-[oklch(0.85_0.15_85)] font-bold pl-1">Localização</label>
                        <Input
                            type="text"
                            placeholder="Cidade ou Bairro"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="h-12 bg-transparent border-0 border-b border-white/20 text-white rounded-none px-0 text-lg font-light focus-visible:ring-0 focus-visible:border-white placeholder:text-zinc-600"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-[oklch(0.85_0.15_85)] font-bold pl-1">Faixa de Preço</label>
                        <Select value={priceRange} onValueChange={setPriceRange}>
                            <SelectTrigger className="h-12 bg-transparent border-0 border-b border-white/20 text-white rounded-none px-0 text-lg font-light focus:ring-0 focus:border-white">
                                <SelectValue placeholder="Qualquer Valor" />
                            </SelectTrigger>
                            <SelectContent className="bg-zinc-950 border-white/10 text-white">
                                <SelectItem value="1000000-3000000">R$ 1 mi - R$ 3 mi</SelectItem>
                                <SelectItem value="3000000-5000000">R$ 3 mi - R$ 5 mi</SelectItem>
                                <SelectItem value="5000000-10000000">R$ 5 mi - R$ 10 mi</SelectItem>
                                <SelectItem value="10000000+">Acima de R$ 10 mi</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button
                        onClick={handleSearch}
                        className="h-12 w-full bg-white text-black hover:bg-[oklch(0.85_0.15_85)] hover:text-white uppercase tracking-[0.2em] font-medium text-xs rounded-none transition-all"
                    >
                        Buscar
                    </Button>
                </div>
            </div>
        )
    }

    // Default Popular
    return (
        <div
            className="bg-white rounded-2xl p-6 shadow-2xl animate-fade-in-up border border-slate-100"
        >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block ml-1">O que você busca?</label>
                    <div className="relative">
                        <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 z-10 pointer-events-none" />
                        <Select value={propertyType} onValueChange={setPropertyType}>
                            <SelectTrigger className="h-12 pl-10 bg-slate-50 border-slate-200 focus:ring-blue-500 rounded-lg text-slate-900 font-medium w-full relative">
                                <SelectValue placeholder="Tipo de Imóvel" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Casa">Casa</SelectItem>
                                <SelectItem value="Apartamento">Apartamento</SelectItem>
                                <SelectItem value="Terreno">Terreno</SelectItem>
                                <SelectItem value="Comercial">Comercial</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block ml-1">Onde?</label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 z-10 pointer-events-none" />
                        <Input
                            type="text"
                            placeholder="Cidade ou Bairro"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="h-12 pl-10 bg-slate-50 border-slate-200 focus-visible:ring-blue-500 rounded-lg text-slate-900 font-medium placeholder:text-slate-400 w-full"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 block ml-1">Quanto quer investir?</label>
                    <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500 z-10 pointer-events-none" />
                        <Select value={priceRange} onValueChange={setPriceRange}>
                            <SelectTrigger className="h-12 pl-10 bg-slate-50 border-slate-200 focus:ring-blue-500 rounded-lg text-slate-900 font-medium w-full relative">
                                <SelectValue placeholder="Faixa de Preço" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="0-200000">Até R$ 200 mil</SelectItem>
                                <SelectItem value="200000-500000">R$ 200 mil - R$ 500 mil</SelectItem>
                                <SelectItem value="500000-1000000">R$ 500 mil - R$ 1 mi</SelectItem>
                                <SelectItem value="1000000+">Acima de R$ 1 mi</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <Button
                    onClick={handleSearch}
                    className="h-12 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base rounded-lg shadow-lg hover:shadow-xl transition-all uppercase tracking-wide"
                >
                    Buscar Agora
                </Button>
            </div>
        </div>
    )
}
