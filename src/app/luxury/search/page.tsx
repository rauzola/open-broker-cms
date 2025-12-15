import { getProperties } from "@/lib/actions";
import { PropertyCard } from "@/components/public/PropertyCard";
import { ArrowLeft } from "lucide-react";
import { HeroSearch } from "@/components/public/HeroSearch";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function LuxurySearchPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const params = await searchParams;
    const q = params.q as string || '';
    const type = params.propType as string || '';
    const minPrice = params.minPrice ? Number(params.minPrice) : 0;
    const maxPrice = params.maxPrice ? Number(params.maxPrice) : Infinity;

    const allProperties = await getProperties();

    // Filter logic
    const properties = allProperties.filter(p => {
        const matchesStatus = p.status === 'PUBLISHED';
        const matchesType = type ? p.type === type : true;
        const matchesLocation = q ? p.location.toLowerCase().includes(q.toLowerCase()) : true;
        const matchesPrice = p.price >= minPrice && p.price <= maxPrice;

        // Luxury filter: Typically create a threshold, but here we just rely on the brand context
        // or filter out very cheap properties if we wanted strict separation.

        return matchesStatus && matchesType && matchesLocation && matchesPrice;
    });

    return (
        <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-[oklch(0.85_0.15_85)]/30">
            <header className="sticky top-0 w-full z-50 p-6 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/luxury" className="font-display font-bold text-2xl tracking-tighter text-white">OPEN<span className="text-[oklch(0.85_0.15_85)]">BROKER</span></Link>
                    <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-widest uppercase text-zinc-300">
                        <Link href="/luxury" className="hover:text-white transition-colors">Início</Link>
                        <Link href="/luxury/search" className="text-white">Portfólio</Link>
                        <Link href="/luxury/about" className="hover:text-white transition-colors">História</Link>
                    </nav>
                </div>
            </header>

            <section className="bg-zinc-900 border-b border-white/5 py-12">
                <div className="container mx-auto px-4">
                    <HeroSearch variant="luxury" />
                </div>
            </section>

            <section className="container mx-auto px-4 py-12">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <p className="text-[oklch(0.85_0.15_85)] uppercase tracking-widest text-xs font-medium mb-2">Coleção Curada</p>
                        <h1 className="text-3xl font-display font-light">
                            {properties.length} Residências Exclusivas
                        </h1>
                    </div>
                </div>

                {properties.length === 0 ? (
                    <div className="text-center py-32 border border-white/5 bg-white/5">
                        <p className="text-xl text-zinc-400 font-light mb-6">Nenhuma propriedade encontrada com estes critérios nos nossos registros públicos.</p>
                        <div className="space-x-4">
                            <Link href="/luxury/search">
                                <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black rounded-none uppercase tracking-widest text-xs">Ver Todas</Button>
                            </Link>
                            <Link href="/luxury/contact">
                                <Button className="bg-[oklch(0.85_0.15_85)] text-black hover:bg-white rounded-none uppercase tracking-widest text-xs font-bold">Contatar Private Office</Button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {properties.map(p => (
                            <div key={p.id} className="animate-fade-in-up">
                                <PropertyCard property={p} variant="luxury" />
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}
