import { getProperties } from "@/lib/actions";
import { PropertyCard } from "@/components/public/PropertyCard";
import { Button } from "@/components/ui/button";
import { HeroSearch } from "@/components/public/HeroSearch";
import Link from "next/link";
import { CheckCircle2, Globe, TrendingUp, ShieldCheck, Mail } from "lucide-react";

export default async function LuxuryHomePage() {
    const properties = (await getProperties()).filter(p => p.status === 'PUBLISHED');
    const luxuryProps = properties.slice(0, 3);

    return (
        <div className="bg-zinc-950 text-white min-h-screen font-sans selection:bg-[oklch(0.85_0.15_85)]/30">
            <header className="absolute top-0 w-full z-50 p-6 transition-all duration-300">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="font-display font-bold text-2xl tracking-tighter text-white z-50">OPEN<span className="text-[oklch(0.85_0.15_85)]">BROKER</span></Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-widest uppercase text-zinc-300">
                        <Link href="/luxury" className="hover:text-white transition-colors text-white">Início</Link>
                        <Link href="/luxury/search" className="hover:text-white transition-colors">Portfólio</Link>
                        <Link href="/luxury/about" className="hover:text-white transition-colors">Nossa História</Link>
                        <Link href="/luxury/contact" className="hover:text-white transition-colors">Contato</Link>
                    </nav>

                    <div className="flex gap-4 items-center z-50">
                        <Link href="/dashboard"><Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-black transition-all text-xs tracking-widest px-6 h-10 uppercase">Acesso VIP</Button></Link>
                    </div>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 bg-zinc-900">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom opacity-60"
                        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 pt-20">
                    <div className="max-w-6xl mx-auto text-center space-y-12">
                        {/* Headline */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-4 text-[oklch(0.85_0.15_85)]/80 uppercase tracking-[0.4em] text-xs font-medium animate-fade-in border-b border-[oklch(0.85_0.15_85)]/20 pb-4 mb-4">
                                <span>Global</span>
                                <span className="w-1 h-1 rounded-full bg-[oklch(0.85_0.15_85)]"></span>
                                <span>Exclusivo</span>
                                <span className="w-1 h-1 rounded-full bg-[oklch(0.85_0.15_85)]"></span>
                                <span>Sob Medida</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 animate-fade-in font-display tracking-tight leading-[0.9]">
                                Curadoria para <br />
                                <span className="font-serif italic font-light text-[oklch(0.95_0.05_85)]">Verdadeiros Connoisseurs</span>
                            </h1>
                            <p className="text-xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
                                Descubra um portfólio de residências que transcendem o comum. Onde a maestria arquitetônica encontra a elegância atemporal.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto pt-8">
                            <HeroSearch variant="luxury" />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </section>

            {/* SERVICES / PHILOSOPHY */}
            <section className="bg-zinc-900 py-32 border-b border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-display font-light text-white leading-tight">
                                Serviços Além <br /> da Transação
                            </h2>
                            <div className="w-20 h-[1px] bg-[oklch(0.85_0.15_85)]"></div>
                            <p className="text-zinc-400 text-lg leading-relaxed font-light">
                                Na OpenBroker Luxury, entendemos que adquirir uma propriedade de prestígio é mais que uma compra; é a aquisição de um estilo de vida. Nosso Private Office oferece consultoria sob medida para nossos clientes mais exigentes.
                            </p>
                            <ul className="space-y-6 pt-4">
                                {[
                                    { title: "Gestão Global de Portfólio", icon: Globe },
                                    { title: "Estratégia de Investimento & Analytics", icon: TrendingUp },
                                    { title: "Concierge Privado & Relocação", icon: ShieldCheck }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[oklch(0.85_0.15_85)] group-hover:text-black transition-all">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-lg font-light tracking-wide">{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[600px] bg-zinc-800 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                            <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md p-6 border border-white/10 max-w-xs">
                                <p className="font-serif italic text-xl">"O luxo deve ser confortável, caso contrário não é luxo."</p>
                                <p className="text-xs uppercase tracking-widest mt-4 text-[oklch(0.85_0.15_85)]">Coco Chanel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED COLLECTION */}
            <section className="container mx-auto px-4 py-32 space-y-24">
                <div className="space-y-16">
                    <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8 gap-8">
                        <div className="space-y-4">
                            <p className="text-[oklch(0.85_0.15_85)] uppercase tracking-widest text-xs font-medium">Seleção Curada</p>
                            <h2 className="text-4xl md:text-5xl font-display font-light text-white">Residências em Destaque</h2>
                        </div>
                        <Link href="/luxury/search">
                            <Button variant="link" className="text-white hover:text-[oklch(0.85_0.15_85)] uppercase tracking-widest text-sm hover:no-underline">Ver Portfólio Completo &rarr;</Button>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {luxuryProps.map(p => (
                            <div key={p.id} className="animate-fade-in-up">
                                <PropertyCard property={p} variant="luxury" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EDITORIAL / NEWS */}
            <section className="py-32 bg-zinc-900">
                <div className="container mx-auto px-4 text-center max-w-4xl space-y-10">
                    <h2 className="text-4xl font-display font-light">Journal</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="group cursor-pointer">
                            <div className="h-64 overflow-hidden mb-6">
                                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p className="text-xs text-[oklch(0.85_0.15_85)] uppercase tracking-widest mb-2">Tendências de Mercado</p>
                            <h3 className="text-2xl font-display mb-3 group-hover:text-[oklch(0.85_0.15_85)] transition-colors">Por que Ultra-High-Net-Worth Individuals estão migrando para Propriedades Costeiras</h3>
                            <p className="text-zinc-500 font-light">Uma análise dos movimentos do mercado no 3º trimestre de 2024...</p>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="h-64 overflow-hidden mb-6">
                                <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <p className="text-xs text-[oklch(0.85_0.15_85)] uppercase tracking-widest mb-2">Arquitetura</p>
                            <h3 className="text-2xl font-display mb-3 group-hover:text-[oklch(0.85_0.15_85)] transition-colors">O Renascimento do Design Minimalista em Penthouses Urbanas</h3>
                            <p className="text-zinc-500 font-light">Arquitetos renomados discutem a mudança para espaços abertos...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRE-FOOTER CTA */}
            <section className="py-32 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-20"></div>
                <div className="container mx-auto px-4 text-center relative z-10 space-y-8">
                    <h2 className="text-5xl font-display font-light italic">"Excelência não é um ato, mas um hábito."</h2>
                    <p className="text-zinc-400 tracking-widest uppercase text-sm">Aristóteles</p>
                    <div className="pt-8">
                        <Link href="/luxury/contact">
                            <Button className="bg-[oklch(0.85_0.15_85)] text-black hover:bg-white px-10 py-8 text-sm uppercase tracking-[0.2em] rounded-none transition-all duration-500 font-medium h-auto">
                                Consultar Private Office
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="bg-black text-zinc-500 py-20 border-t border-white/10 font-light text-sm">
                <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <Link href="/" className="font-display font-bold text-xl tracking-tighter text-white">OPEN<span className="text-[oklch(0.85_0.15_85)]">BROKER</span></Link>
                        <p>
                            A autoridade líder mundial em imóveis de luxo. Conectando os compradores mais afluentes do globo com suas propriedades mais prestigiadas.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white uppercase tracking-widest text-xs mb-6">Portfólio</h4>
                        <ul className="space-y-3">
                            <li><Link href="/luxury/search?type=Estates" className="hover:text-white transition-colors">Estates</Link></li>
                            <li><Link href="/luxury/search?type=Penthouses" className="hover:text-white transition-colors">Penthouses</Link></li>
                            <li><Link href="/luxury/search?type=Islands" className="hover:text-white transition-colors">Ilhas Privadas</Link></li>
                            <li><Link href="/luxury/off-market" className="hover:text-white transition-colors">Off-Market</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white uppercase tracking-widest text-xs mb-6">A Firma</h4>
                        <ul className="space-y-3">
                            <li><Link href="/luxury/about" className="hover:text-white transition-colors">Nosso Legado</Link></li>
                            <li><Link href="/luxury/leadership" className="hover:text-white transition-colors">Liderança</Link></li>
                            <li><Link href="/luxury/press" className="hover:text-white transition-colors">Sala de Imprensa</Link></li>
                            <li><Link href="/luxury/careers" className="hover:text-white transition-colors">Carreiras</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white uppercase tracking-widest text-xs mb-6">Private Office</h4>
                        <ul className="space-y-3">
                            <li>New York · Londres · Dubai</li>
                            <li>+1 (212) 555-0199</li>
                            <li>private@openbroker.com</li>
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto px-4 mt-20 pt-8 border-t border-white/5 flex justify-between items-center text-xs">
                    <div>© 2024 OpenBroker Luxury. Todos os direitos reservados.</div>
                    <div className="flex gap-4">
                        <Link href="/luxury/legal">Política de Privacidade</Link>
                        <Link href="/luxury/legal">Termos de Uso</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
