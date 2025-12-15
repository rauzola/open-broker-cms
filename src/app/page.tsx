import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SplitLandingPage() {
    return (
        <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden">

            {/* Popular Side (Left) */}
            <div className="relative flex-1 group overflow-hidden bg-blue-900 border-r-4 border-white z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight font-[family-name:var(--font-poppins)]">
                        Casa para <br /><span className="text-orange-400">Todos</span>
                    </h2>
                    <p className="text-blue-100 max-w-sm text-lg font-medium">
                        Financiamento fácil, subsídios e parcelas que cabem no bolso.
                    </p>
                    <Link href="/popular">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-orange-500/20 transition-all transform hover:-translate-y-1">
                            Acessar Popular
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Center Divider / Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-4 shadow-2xl border-4 border-slate-100 hidden md:block">
                <span className="font-bold text-slate-900 px-2 uppercase tracking-widest text-sm">Select Experience</span>
            </div>

            {/* Luxury Side (Right) */}
            <div className="relative flex-1 group overflow-hidden bg-zinc-950 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-light text-white leading-tight">
                        Premium <br /><span className="text-[oklch(0.85_0.15_85)] italic">Living</span>
                    </h2>
                    <p className="text-zinc-400 max-w-sm text-lg font-light tracking-wide">
                        Exclusive properties for the discerning few.
                    </p>
                    <Link href="/luxury">
                        <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-black font-medium px-10 py-6 text-xl rounded-none tracking-widest transition-all">
                            ENTER LUXURY
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
