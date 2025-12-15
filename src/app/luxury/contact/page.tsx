"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function LuxuryContactPage() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', inquiry: '' });

    const handleWhatsapp = () => {
        const text = `ola raul vindo site da imobiliaria url ${window.location.href}. Name: ${formData.firstName} ${formData.lastName}. Inquiry: ${formData.inquiry}`;
        const url = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-[oklch(0.85_0.15_85)]/30">
            <header className="absolute top-0 w-full z-50 p-6">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/luxury" className="font-display font-bold text-2xl tracking-tighter text-white">OPEN<span className="text-[oklch(0.85_0.15_85)]">BROKER</span></Link>
                    <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-widest uppercase text-zinc-300">
                        <Link href="/luxury" className="hover:text-white transition-colors">Início</Link>
                        <Link href="/luxury/search" className="hover:text-white transition-colors">Portfólio</Link>
                        <Link href="/luxury/about" className="hover:text-white transition-colors">Nossa História</Link>
                        <Link href="/luxury/contact" className="hover:text-white transition-colors text-white">Contato</Link>
                    </nav>
                </div>
            </header>

            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                <div className="relative z-10 text-center space-y-4">
                    <p className="text-[oklch(0.85_0.15_85)] uppercase tracking-widest text-xs font-medium">Private Office</p>
                    <h1 className="text-5xl md:text-6xl font-display font-light">Entre em Contato</h1>
                </div>
            </section>

            <section className="container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-display font-light mb-6">Sede Global</h2>
                            <p className="text-zinc-400 font-light leading-relaxed max-w-md">
                                Nossos consultores privados estão disponíveis para auxiliá-lo com suas necessidades imobiliárias, garantindo discrição e atenção personalizada em cada etapa.
                            </p>
                        </div>

                        <div className="grid gap-10">
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-[oklch(0.85_0.15_85)] group-hover:bg-[oklch(0.85_0.15_85)] group-hover:text-black transition-all">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="uppercase tracking-widest text-xs mb-2 text-zinc-500">Linha Privada</h3>
                                    <p className="text-xl font-display">+55 44 99165-8351</p>
                                    <p className="text-zinc-500 text-sm mt-1">Disponível 24/7 para Membros Titanium</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-[oklch(0.85_0.15_85)] group-hover:bg-[oklch(0.85_0.15_85)] group-hover:text-black transition-all">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="uppercase tracking-widest text-xs mb-2 text-zinc-500">Email Concierge</h3>
                                    <p className="text-xl font-display">private@openbroker.com</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-[oklch(0.85_0.15_85)] group-hover:bg-[oklch(0.85_0.15_85)] group-hover:text-black transition-all">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="uppercase tracking-widest text-xs mb-2 text-zinc-500">Escritório Maringá</h3>
                                    <p className="text-xl font-display">Maringá, Paraná</p>
                                    <p className="text-zinc-500 font-light mt-1">Brasil</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-900 border border-white/5 p-10 md:p-14">
                        <h3 className="text-2xl font-display font-light mb-8">Solicitar Atendimento</h3>
                        <div className="space-y-8">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="uppercase tracking-widest text-xs text-zinc-500">Nome</label>
                                    <Input
                                        className="bg-transparent border-0 border-b border-white/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[oklch(0.85_0.15_85)] text-lg placeholder:text-zinc-700"
                                        placeholder="João"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="uppercase tracking-widest text-xs text-zinc-500">Sobrenome</label>
                                    <Input
                                        className="bg-transparent border-0 border-b border-white/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[oklch(0.85_0.15_85)] text-lg placeholder:text-zinc-700"
                                        placeholder="Silva"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="uppercase tracking-widest text-xs text-zinc-500">Endereço de Email</label>
                                <Input className="bg-transparent border-0 border-b border-white/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[oklch(0.85_0.15_85)] text-lg placeholder:text-zinc-700" placeholder="joao.silva@exemplo.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="uppercase tracking-widest text-xs text-zinc-500">Mensagem</label>
                                <Textarea
                                    className="bg-transparent border-0 border-b border-white/10 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[oklch(0.85_0.15_85)] min-h-[100px] text-lg placeholder:text-zinc-700"
                                    placeholder="Estou interessado em..."
                                    value={formData.inquiry}
                                    onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                                />
                            </div>

                            <Button
                                onClick={handleWhatsapp}
                                className="w-full bg-white text-black hover:bg-[oklch(0.85_0.15_85)] hover:text-white uppercase tracking-[0.2em] font-medium text-xs h-14 transition-all"
                            >
                                Enviar Solicitação (WhatsApp)
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
