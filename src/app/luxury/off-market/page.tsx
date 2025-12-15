import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LuxuryOffMarketPage() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-[oklch(0.85_0.15_85)]/30">
            <header className="absolute top-0 w-full z-50 p-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/luxury" className="font-display font-bold text-2xl tracking-tighter text-white">OPEN<span className="text-[oklch(0.85_0.15_85)]">BROKER</span></Link>
                    <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-widest uppercase text-zinc-300">
                        <Link href="/luxury" className="hover:text-white transition-colors">Início</Link>
                        <Link href="/luxury/search" className="hover:text-white transition-colors">Portfólio</Link>
                        <Link href="/luxury/off-market" className="text-white border-b border-white pb-1">Off-Market</Link>
                        <Link href="/luxury/contact" className="hover:text-white transition-colors">Contato</Link>
                    </nav>
                </div>
            </header>

            <section className="relative h-screen flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513584685908-2274fc080609?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>

                <div className="relative z-10 text-center max-w-2xl mx-auto px-4 space-y-8 animate-fade-in-up">
                    <div className="w-16 h-16 border border-[oklch(0.85_0.15_85)] rounded-full flex items-center justify-center mx-auto mb-8">
                        <span className="font-display text-2xl italic text-[oklch(0.85_0.15_85)]">P</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-light">Coleção Privada</h1>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed">
                        Acesso exclusivo a propriedades que nunca chegam ao mercado público.
                        Para a máxima discrição e exclusividade.
                    </p>

                    <div className="pt-8">
                        <Link href="/luxury/contact">
                            <Button className="bg-white text-black hover:bg-[oklch(0.85_0.15_85)] hover:text-white px-8 py-6 text-xs uppercase tracking-[0.2em] rounded-none transition-all">
                                Solicitar Acesso
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-24 border-t border-white/5 bg-zinc-900">
                <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4">
                        <h3 className="text-white font-display text-2xl">Confidencialidade</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Todas as listagens Off-Market são protegidas por acordos rigorosos de não divulgação (NDAs) para preservar a privacidade de nossos vendedores.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-white font-display text-2xl">Pré-Lançamentos</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Seja o primeiro a saber sobre novos desenvolvimentos de ultra-luxo antes de serem anunciados ao público geral.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-white font-display text-2xl">Negociação Direta</h3>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Facilitamos negociações diretas e discretas entre compradores qualificados e proprietários motivados.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
