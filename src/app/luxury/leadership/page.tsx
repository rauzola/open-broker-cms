import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LuxuryLeadershipPage() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-[oklch(0.85_0.15_85)]/30">
            <header className="absolute top-0 w-full z-50 p-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/luxury" className="font-display font-bold text-2xl tracking-tighter text-white">OPEN<span className="text-[oklch(0.85_0.15_85)]">BROKER</span></Link>
                    <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-widest uppercase text-zinc-300">
                        <Link href="/luxury" className="hover:text-white transition-colors">Início</Link>
                        <Link href="/luxury/about" className="hover:text-white transition-colors">Nossa História</Link>
                        <Link href="/luxury/contact" className="hover:text-white transition-colors">Contato</Link>
                    </nav>
                </div>
            </header>

            <section className="pt-40 pb-20 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <p className="text-[oklch(0.85_0.15_85)] uppercase tracking-widest text-xs font-medium mb-4">Visão & Direção</p>
                    <h1 className="text-5xl md:text-6xl font-display font-light">Liderança Executiva</h1>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {[
                        { name: "Jonathan Sterling", role: "Fundador & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop" },
                        { name: "Elena Volkov", role: "VP de Vendas Globais", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop" },
                        { name: "Marcus Thorne", role: "Diretor de Investimentos", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop" }
                    ].map((leader, i) => (
                        <div key={i} className="group">
                            <div className="aspect-[4/5] overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-700">
                                <img src={leader.img} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-2xl font-display text-white">{leader.name}</h3>
                            <p className="text-[oklch(0.85_0.15_85)] text-xs uppercase tracking-widest mt-2">{leader.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
