import { getProperties } from "@/lib/actions";
import { PropertyCard } from "@/components/public/PropertyCard";
import { Button } from "@/components/ui/button";
import { HeroSearch } from "@/components/public/HeroSearch";
import Link from "next/link";
import { CheckCircle2, BadgePercent, Key, Calculator, Users, MessageCircle, FileCheck, Home } from "lucide-react";

export default async function PopularHomePage() {
    const properties = (await getProperties()).filter(p => p.status === 'PUBLISHED');
    const forSale = properties.filter(p => p.listingType === 'SALE').slice(0, 3);
    const forRent = properties.filter(p => p.listingType === 'RENT').slice(0, 3);

    return (
        <div className="font-sans text-slate-900 bg-slate-50">
            <header className="bg-blue-800 text-white py-4 sticky top-0 z-50 shadow-lg">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
                        <Home className="text-orange-400" />
                        OpenBroker <span className="text-orange-400">Popular</span>
                    </Link>
                    <div className="hidden md:flex gap-6 items-center font-medium">
                        <Link href="/popular" className="hover:text-orange-300">Início</Link>
                        <Link href="/popular/search" className="hover:text-orange-300">Imóveis</Link>
                        <Link href="/popular/sobre" className="hover:text-orange-300">Sobre</Link>
                        <Link href="/popular/contato" className="hover:text-orange-300">Contato</Link>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/popular/search"><Button variant="ghost" className="text-white hover:text-white hover:bg-blue-700 md:hidden">Buscar</Button></Link>
                        <Link href="/dashboard"><Button variant="outline" className="border-white/20 hover:bg-white/10 text-white">Area do Cliente</Button></Link>
                    </div>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop')` }}
                >
                    <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply" />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 pt-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in shadow-lg">
                            Programa Casa Fácil
                        </span>
                        {/* Headline */}
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in drop-shadow-md font-display leading-tight">
                            Seu Sonho da Casa Própria <br />
                            Começa <span className="text-orange-400">Aqui e Agora</span>
                        </h1>
                        <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto animate-fade-in font-medium">
                            Milhares de famílias já saíram do aluguel. Use seu FGTS, parcele a entrada e conquiste sua liberdade.
                        </p>

                        <HeroSearch variant="popular" />

                        {/* Trust Indicators */}
                        <div
                            className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12 animate-fade-in text-white/90"
                        >
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                                <CheckCircle2 className="text-green-400 w-5 h-5" />
                                <span className="font-semibold text-sm">Aprovação em 24h</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                                <BadgePercent className="text-green-400 w-5 h-5" />
                                <span className="font-semibold text-sm">Juros Baixos</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                                <Key className="text-green-400 w-5 h-5" />
                                <span className="font-semibold text-sm">Chaves na Mão</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Curve separator */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
                    </svg>
                </div>
            </section>

            {/* FEATURED PROPERTIES */}
            <section className="container mx-auto px-4 py-16 space-y-20">
                <div className="space-y-8">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 font-display">Ofertas da Semana</h2>
                        <p className="text-slate-500 text-lg">Selecionamos as melhores oportunidades com documentação grátis e entrada facilitada.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {forSale.map(p => (
                            <PropertyCard key={p.id} property={p} variant="popular" />
                        ))}
                    </div>
                    <div className="text-center pt-8">
                        <Link href="/popular/search?type=SALE">
                            <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 font-bold text-lg h-14 shadow-lg shadow-blue-600/20">Ver Todas as Ofertas</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="bg-white py-20 border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Passo a Passo</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 font-display">Conquiste seu imóvel em 4 passos</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: Calculator, title: "1. Simulação", desc: "Faça uma simulação online e descubra seu poder de compra em minutos." },
                            { icon: FileCheck, title: "2. Aprovação", desc: "Enviamos sua documentação para o banco e aprovamos seu crédito." },
                            { icon: Home, title: "3. Escolha", desc: "Visite os imóveis que cabem no seu bolso e escolha o ideal." },
                            { icon: Key, title: "4. Mudança", desc: "Assine o contrato e pegue as chaves. O imóvel é seu!" }
                        ].map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="bg-slate-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors border border-slate-100 h-full text-center">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-xl text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                                </div>
                                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-slate-200 transform -translate-y-1/2 z-10" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
                        <img src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2000&auto=format&fit=crop" className="relative z-10 rounded-2xl shadow-xl border-4 border-white" alt="Happy Couple" />
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-sm">Histórias Reais</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
                            "Pensamos que era impossível, mas o OpenBroker fez acontecer."
                        </h2>
                        <p className="text-lg text-slate-500">
                            "Pagávamos aluguel há 8 anos. A equipe nos ajudou a usar o FGTS na entrada e conseguimos uma parcela menor que nosso aluguel antigo. Hoje temos nosso próprio teto!"
                        </p>

                        <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                            <div>
                                <p className="font-bold text-slate-900">Mariana e Pedro</p>
                                <p className="text-sm text-slate-500">Compraram no Residencial Flores</p>
                            </div>
                            <div className="flex text-orange-400 ml-auto">
                                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HELP / CONTACT BANNER */}
            <section className="bg-blue-600 py-16">
                <div className="container mx-auto px-4 text-center text-white space-y-6">
                    <h2 className="text-3xl font-bold">Ainda com dúvidas?</h2>
                    <p className="text-blue-100 max-w-xl mx-auto text-lg">Nossa equipe de consultores está online agora para responder suas perguntas sobre subsídios e financiamento.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 h-14 px-8 text-lg font-bold">
                            <MessageCircle className="mr-2 w-5 h-5" /> Falar no Chat
                        </Button>
                        <Link href="/popular/contato">
                            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg font-bold">
                                Ver Telefones
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="bg-slate-900 text-slate-300 py-12">
                <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8 border-b border-slate-800 pb-8">
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-xl flex items-center gap-2">
                            <Home className="text-orange-500" /> OpenBroker Popular
                        </h3>
                        <p className="text-sm">Realizando o sonho da casa própria para milhares de brasileiros com transparência e facilidade.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/popular/search" className="hover:text-white">Buscar Imóveis</Link></li>
                            <li><Link href="/popular/sobre" className="hover:text-white">Sobre Nós</Link></li>
                            <li><Link href="#" className="hover:text-white">Simulador Caixa</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Contato</h4>
                        <ul className="space-y-2 text-sm">
                            <li>0800 123 4567</li>
                            <li>contato@openbroker.com.br</li>
                            <li>Av. Paulista, 1000 - SP</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Novidades</h4>
                        <div className="flex gap-2">
                            <input className="bg-slate-800 border-none rounded-lg px-3 py-2 text-sm w-full" placeholder="Seu email" />
                            <Button className="bg-orange-500 hover:bg-orange-600">Ok</Button>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 text-center text-xs text-slate-600">
                    © 2024 OpenBroker Popular. Todos os direitos reservados.
                </div>
            </footer>
        </div>
    )
}
