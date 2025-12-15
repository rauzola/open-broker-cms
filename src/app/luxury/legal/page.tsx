import Link from "next/link";

export default function LuxuryLegalPage() {
    return (
        <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-[oklch(0.85_0.15_85)]/30">
            <header className="absolute top-0 w-full z-50 p-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/luxury" className="font-display font-bold text-2xl tracking-tighter text-white">OPEN<span className="text-[oklch(0.85_0.15_85)]">BROKER</span></Link>
                    <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-widest uppercase text-zinc-300">
                        <Link href="/luxury" className="hover:text-white transition-colors">Início</Link>
                        <Link href="/luxury/contact" className="hover:text-white transition-colors">Contato</Link>
                    </nav>
                </div>
            </header>

            <section className="pt-40 pb-20 container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl font-display font-light mb-12">Legal & Privacidade</h1>

                <div className="space-y-12 text-zinc-400 font-light leading-relaxed">
                    <div>
                        <h2 className="text-white text-xl uppercase tracking-widest mb-4">Política de Privacidade</h2>
                        <p>
                            A OpenBroker compromete-se a proteger a privacidade de seus clientes ilustres. Todas as informações compartilhadas com nosso Private Office são tratadas com o mais alto nível de confidencialidade e segurança, em conformidade com as leis internacionais de proteção de dados.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-white text-xl uppercase tracking-widest mb-4">Termos de Uso</h2>
                        <p>
                            O acesso ao portfólio Off-Market é restrito a membros qualificados. A reprodução de qualquer material deste site sem autorização expressa é estritamente proibida. As propriedades apresentadas estão sujeitas a verificação de disponibilidade e alterações de preço sem aviso prévio.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-white text-xl uppercase tracking-widest mb-4">Compliance</h2>
                        <p>
                            A OpenBroker adere rigorosamente às regulamentações Anti-Money Laundering (AML) e Know Your Customer (KYC) em todas as jurisdições onde operamos.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
