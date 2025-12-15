import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart } from "lucide-react";

export default function PopularAboutPage() {
    return (
        <div className="font-sans text-slate-900 bg-slate-50 min-h-screen">
            <header className="bg-blue-800 text-white py-4 shadow-sm">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/popular" className="font-bold text-xl tracking-tight">OpenBroker <span className="text-orange-400">Popular</span></Link>
                    <Link href="/popular"><Button variant="ghost" className="text-white hover:text-white hover:bg-blue-700">Voltar para Home</Button></Link>
                </div>
            </header>

            {/* Hero About */}
            <section className="bg-blue-700 text-white py-20 text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Nossa Missão é Realizar Sonhos</h1>
                    <p className="text-xl text-blue-100 leading-relaxed">
                        Acreditamos que a casa própria é um direito de todos. Trabalhamos incansavelmente para tornar o financiamento imobiliário acessível, transparente e simples.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Users, title: "Para Todos", desc: "Não importa sua renda, temos uma solução que cabe no seu bolso." },
                        { icon: Target, title: "Transparência", desc: "Sem letras miúdas. Explicamos cada detalhe do contrato para você." },
                        { icon: Heart, title: "Cuidado", desc: "Acompanhamos você desde a simulação até a entrega das chaves." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow-sm text-center border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900 font-display">Quem Somos</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Fundada em 2020, a OpenBroker Popular nasceu da necessidade de simplificar o mercado imobiliário para a grande maioria dos brasileiros.
                            Percebemos que o processo de compra era burocrático e excludente.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Hoje, somos líderes em vendas no segmento popular, com mais de 5.000 famílias atendidas e índice de satisfação de 98%.
                        </p>
                        <Link href="/popular/contato">
                            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 font-bold mt-4">Fale com um Consultor</Button>
                        </Link>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop" className="rounded-xl shadow-lg" alt="Team meeting" />
                    </div>
                </div>
            </section>
        </div>
    )
}
