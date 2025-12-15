import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LuxuryCareersPage() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-[oklch(0.85_0.15_85)]/30">
            <header className="absolute top-0 w-full z-50 p-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/luxury" className="font-display font-bold text-2xl tracking-tighter text-white">OPEN<span className="text-[oklch(0.85_0.15_85)]">BROKER</span></Link>
                    <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-widest uppercase text-zinc-300">
                        <Link href="/luxury" className="hover:text-white transition-colors">Início</Link>
                        <Link href="/luxury/contact" className="hover:text-white transition-colors">Contato RH</Link>
                    </nav>
                </div>
            </header>

            <section className="pt-40 pb-20 container mx-auto px-4 max-w-4xl text-center">
                <p className="text-[oklch(0.85_0.15_85)] uppercase tracking-widest text-xs font-medium mb-6">Junte-se à Elite</p>
                <h1 className="text-5xl md:text-6xl font-display font-light mb-12">Carreiras na OpenBroker</h1>
                <p className="text-xl text-zinc-400 font-light leading-relaxed mb-16">
                    Estamos sempre em busca de talentos excepcionais para integrar nossa equipe global de consultores, analistas e estrategistas.
                </p>

                <div className="space-y-4 text-left">
                    {[
                        { title: "Senior Real Estate Advisor", loc: "New York", type: "Full-Time" },
                        { title: "Diretor de Marketing Global", loc: "London", type: "Full-Time" },
                        { title: "Analista de Investimentos", loc: "Dubai", type: "Full-Time" }
                    ].map((job, i) => (
                        <div key={i} className="bg-white/5 p-8 flex justify-between items-center hover:bg-white/10 transition-colors border border-white/5">
                            <div>
                                <h3 className="text-2xl font-display font-light text-white">{job.title}</h3>
                                <p className="text-zinc-500 text-sm mt-1">{job.loc} · {job.type}</p>
                            </div>
                            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black rounded-none uppercase tracking-widest text-xs">Aplicar</Button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
