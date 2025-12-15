import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LuxuryAboutPage() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-[oklch(0.85_0.15_85)]/30">
            <header className="absolute top-0 w-full z-50 p-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/luxury" className="font-display font-bold text-2xl tracking-tighter text-white">OPEN<span className="text-[oklch(0.85_0.15_85)]">BROKER</span></Link>
                    <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-widest uppercase text-zinc-300">
                        <Link href="/luxury" className="hover:text-white transition-colors">Início</Link>
                        <Link href="/luxury/search" className="hover:text-white transition-colors">Portfólio</Link>
                        <Link href="/luxury/about" className="hover:text-white transition-colors text-white">Nossa História</Link>
                        <Link href="/luxury/contact" className="hover:text-white transition-colors">Contato</Link>
                    </nav>
                </div>
            </header>

            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4 space-y-6">
                    <p className="text-[oklch(0.85_0.15_85)] uppercase tracking-widest text-xs font-medium">Desde 1985</p>
                    <h1 className="text-5xl md:text-7xl font-display font-light leading-tight">Definindo a Arte de <br /> <span className="italic">Viver Bem</span></h1>
                </div>
            </section>

            <section className="container mx-auto px-4 py-24">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8 text-lg font-light text-zinc-300 leading-relaxed">
                        <h2 className="text-3xl font-display text-white">Um Legado de Excelência</h2>
                        <p>
                            Por mais de três décadas, a OpenBroker Luxury tem se mantido como guardiã das propriedades mais excepcionais do mundo. Fundada sobre princípios de integridade, discrição e qualidade intransigente, facilitamos a transferência de propriedades icônicas através dos continentes.
                        </p>
                        <p>
                            Nossos clientes não estão apenas comprando imóveis; eles estão adquirindo história, arte e legado. Entendemos a nuance de transações de alto valor e fornecemos um nível de serviço que é tão sob medida quanto as propriedades que representamos.
                        </p>
                        <div className="pt-8">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" className="h-16 invert opacity-80" alt="Assinatura" />
                            <p className="text-xs uppercase tracking-widest mt-4 text-zinc-500">Raul, CEO & Fundador</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[3/4] overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1587&auto=format&fit=crop" className="w-full h-full object-cover grayscale ml-auto" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-zinc-900 p-8 border border-white/5 max-w-xs hidden md:block">
                            <p className="font-display text-4xl text-[oklch(0.85_0.15_85)]">$4 bi+</p>
                            <p className="uppercase tracking-widest text-xs text-zinc-400 mt-2">Em Vendas Anuais</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-zinc-900 border-y border-white/5">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-display mb-16">Presença Global</h2>
                    <div className="grid md:grid-cols-4 gap-12 font-display text-xl text-zinc-400">
                        <div className="hover:text-white transition-colors cursor-crosshair">Nova York</div>
                        <div className="hover:text-white transition-colors cursor-crosshair">Londres</div>
                        <div className="hover:text-white transition-colors cursor-crosshair">Paris</div>
                        <div className="hover:text-white transition-colors cursor-crosshair">Dubai</div>
                        <div className="hover:text-white transition-colors cursor-crosshair">Hong Kong</div>
                        <div className="hover:text-white transition-colors cursor-crosshair">Miami</div>
                        <div className="hover:text-white transition-colors cursor-crosshair">Los Angeles</div>
                        <div className="hover:text-white transition-colors cursor-crosshair">Mônaco</div>
                    </div>
                </div>
            </section>
        </div>
    )
}
