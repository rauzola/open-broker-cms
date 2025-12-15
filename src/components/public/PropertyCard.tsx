import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Property } from "@/lib/types";
import { Bed, Bath, Move, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PropertyCardProps {
    property: Property;
    variant?: 'popular' | 'luxury';
}

export function PropertyCard({ property, variant = 'popular' }: PropertyCardProps) {
    const isRent = property.listingType === 'RENT';
    const isLuxury = variant === 'luxury';

    // Logic specific to variant
    const total = property.price;
    const downPayment = total * 0.2;
    const loanAmount = total - downPayment;
    const monthlyInstallment = isRent ? property.price : Math.round((loanAmount / 240) * 1.5);

    if (isLuxury) {
        return (
            <Link href={`/luxury/properties/${property.id}`} className="group block h-full">
                <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-500 border-none bg-card ring-1 ring-white/10">
                    <div className="relative h-80 overflow-hidden">
                        <img
                            src={property.images[0]}
                            alt={property.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale-[0.2] group-hover:grayscale-0"
                        />
                        <div className="absolute top-4 left-4">
                            <Badge variant="outline" className="bg-black/40 backdrop-blur-md text-white border-white/20 uppercase tracking-widest text-[10px] font-medium">
                                {property.type}
                            </Badge>
                        </div>
                        <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                            <p className="text-sm font-medium tracking-widest uppercase opacity-80 mb-1">{property.location}</p>
                            <h3 className="text-xl font-display font-light text-white leading-tight mb-2 truncate">{property.title}</h3>
                            <p className="text-2xl font-display text-[oklch(0.85_0.15_85)]">
                                {isRent
                                    ? `R$ ${property.price.toLocaleString('pt-BR')}/mês`
                                    : `R$ ${(property.price / 1000000).toFixed(1)} mi`
                                }
                            </p>
                        </div>
                    </div>
                    {/* Minimal Details for Luxury */}
                    <CardContent className="px-6 py-4 bg-zinc-900 border-t border-white/5">
                        <div className="flex justify-between text-zinc-400 text-sm">
                            <span>{property.specs.beds} Quartos</span>
                            <span>{property.specs.baths} Banheiros</span>
                            <span>{property.specs.area} m²</span>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        )
    }

    // Default "Popular" Variant
    return (
        <Link href={`/popular/properties/${property.id}`} className="group block h-full">
            <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 border border-slate-200 bg-white">
                <div className="relative h-56 overflow-hidden">
                    <img
                        src={property.images[0]}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                        <Badge className="bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-md">
                            {property.type}
                        </Badge>
                        {!isRent && (
                            <Badge className="bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md gap-1">
                                <CheckCircle2 className="w-3 h-3" /> Financiamento
                            </Badge>
                        )}
                    </div>
                </div>

                <CardHeader className="pt-4 pb-2 px-5">
                    <h3 className="text-lg font-bold font-display truncate text-slate-800">{property.title}</h3>
                    <p className="text-sm text-slate-500 truncate font-medium">{property.location}</p>
                </CardHeader>

                <CardContent className="px-5 pb-2">
                    <div className="flex gap-4 text-sm text-slate-600 mb-4">
                        <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md">
                            <Bed className="h-4 w-4 text-blue-600" /> <span className="font-bold">{property.specs.beds}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md">
                            <Bath className="h-4 w-4 text-blue-600" /> <span className="font-bold">{property.specs.baths}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md">
                            <Move className="h-4 w-4 text-blue-600" /> <span className="font-bold">{property.specs.area}m²</span>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="px-5 pb-5 pt-0 flex flex-col items-stretch gap-3">
                    <div className="bg-orange-50 rounded-lg p-3 border border-orange-100">
                        {isRent ? (
                            <div>
                                <p className="text-xs text-orange-600 font-semibold uppercase">Aluguel Mensal</p>
                                <p className="text-2xl font-bold font-display text-orange-600">R$ {property.price.toLocaleString('pt-BR')}</p>
                            </div>
                        ) : (
                            <div>
                                <p className="text-xs text-orange-600 font-semibold uppercase">Parcelas a partir de</p>
                                <p className="text-2xl font-bold font-display text-orange-600">R$ {monthlyInstallment.toLocaleString('pt-BR')}</p>
                                <p className="text-xs text-slate-400 mt-1">Entrada de R$ {downPayment.toLocaleString('pt-BR')}</p>
                            </div>
                        )}
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                        Ver Detalhes
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    )
}
