import Link from "next/link";

export default function LuxuryPressPage() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-[oklch(0.85_0.15_85)]/30">
            <header className="absolute top-0 w-full z-50 p-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/luxury" className="font-display font-bold text-2xl tracking-tighter text-white">OPEN<span className="text-[oklch(0.85_0.15_85)]">BROKER</span></Link>
                    <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-widest uppercase text-zinc-300">
                        <Link href="/luxury" className="hover:text-white transition-colors">Início</Link>
                        <Link href="/luxury/contact" className="hover:text-white transition-colors">Contato para Mídia</Link>
                    </nav>
                </div>
            </header>

            <section className="pt-40 pb-20 container mx-auto px-4 max-w-5xl">
                <h1 className="text-5xl md:text-6xl font-display font-light mb-16 text-center">Sala de Imprensa</h1>

                <div className="space-y-12">
                    {[
                        { date: "OUT 2024", source: "The Wall Street Journal", title: "OpenBroker Lidera Nova Onda de Vendas de Penthouses em NY" },
                        { date: "SET 2024", source: "Architectural Digest", title: "Uma Visita à Propriedade de $50M Vendida pela OpenBroker" },
                        { date: "AGO 2024", source: "Forbes", title: "Jonathan Sterling sobre o Futuro do Real Estate de Luxo" }
                    ].map((news, i) => (
                        <div key={i} className="border-t border-white/5 py-12 flex flex-col md:flex-row gap-8 items-start group cursor-pointer hover:bg-white/5 transition-colors px-6 -mx-6">
                            <div className="w-32 text-xs font-mono text-zinc-500 pt-2">{news.date}</div>
                            <div className="flex-1">
                                <div className="text-[oklch(0.85_0.15_85)] text-xs uppercase tracking-widest mb-2">{news.source}</div>
                                <h2 className="text-3xl font-display group-hover:text-[oklch(0.85_0.15_85)] transition-colors">{news.title}</h2>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                →
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
