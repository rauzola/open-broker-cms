import { getProperties } from "@/lib/actions";
import { PropertyCard } from "@/components/public/PropertyCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroSearch } from "@/components/public/HeroSearch";

export default async function PopularSearchPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const params = await searchParams;
    const q = params.q as string || '';
    const type = params.propType as string || '';
    const minPrice = params.minPrice ? Number(params.minPrice) : 0;
    const maxPrice = params.maxPrice ? Number(params.maxPrice) : Infinity;

    const allProperties = await getProperties();

    const properties = allProperties.filter(p => {
        const matchesStatus = p.status === 'PUBLISHED';
        const matchesType = type ? p.type === type : true;
        const matchesLocation = q ? p.location.toLowerCase().includes(q.toLowerCase()) : true;
        const matchesPrice = p.price >= minPrice && p.price <= maxPrice;

        // Filter out Luxury specific types for popular view if needed, but for now show matches
        // Ideally we might want to filter high price items, but let's trust the user filter

        return matchesStatus && matchesType && matchesLocation && matchesPrice;
    });

    return (
        <div className="font-sans text-slate-900 bg-slate-50 min-h-screen">
            <header className="bg-blue-800 text-white py-4 shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/popular" className="font-bold text-xl tracking-tight">OpenBroker <span className="text-orange-400">Popular</span></Link>
                    <div className="flex gap-4">
                        <Link href="/popular"><Button variant="ghost" className="text-white hover:text-white hover:bg-blue-700 gap-2"><ArrowLeft className="w-4 h-4" /> Voltar</Button></Link>
                    </div>
                </div>
            </header>

            <div className="bg-blue-700 pb-12 pt-6">
                <div className="container mx-auto px-4">
                    <HeroSearch variant="popular" />
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 -mt-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-slate-800">
                        {properties.length} Imóveis Encontrados
                        {(q || type) && <span className="text-slate-500 font-normal text-lg ml-2">para sua busca</span>}
                    </h1>
                </div>

                {properties.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-slate-100">
                        <p className="text-xl text-slate-500 mb-4">Nenhum imóvel encontrado com esses critérios.</p>
                        <Link href="/popular/search">
                            <Button variant="outline">Limpar Filtros</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {properties.map(p => (
                            <PropertyCard key={p.id} property={p} variant="popular" />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
