"use client";

import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function PopularContactPage() {
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

    const handleWhatsapp = () => {
        const text = `Ola Raul vindo site da imobiliaria url ${window.location.href}. Nome: ${formData.name}. Msg: ${formData.message}`;
        const url = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="font-sans text-slate-900 bg-slate-50 min-h-screen">
            <header className="bg-blue-800 text-white py-4 shadow-sm">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/popular" className="font-bold text-xl tracking-tight">OpenBroker <span className="text-orange-400">Popular</span></Link>
                    <Link href="/popular"><Button variant="ghost" className="text-white hover:text-white hover:bg-blue-700">Voltar para Home</Button></Link>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="bg-blue-600 p-10 text-white flex flex-col justify-between">
                            <div>
                                <h1 className="text-3xl font-bold font-display mb-6">Fale Conosco</h1>
                                <p className="text-blue-100 mb-8">Estamos prontos para realizar seu sonho. Entre em contato por telefone, WhatsApp ou visite nosso escritório.</p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-blue-200 uppercase font-bold">Ligue Grátis</p>
                                            <p className="font-bold text-lg">+55 44 99165-8351</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                            <MessageCircle className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-blue-200 uppercase font-bold">WhatsApp</p>
                                            <p className="font-bold text-lg">+55 44 99165-8351</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-blue-200 uppercase font-bold">Endereço</p>
                                            <p className="font-bold text-lg">Maringá, Paraná</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/20">
                                <p className="text-sm text-blue-200">Segunda a Sexta: 09h às 18h <br /> Sábado: 09h às 13h</p>
                            </div>
                        </div>

                        <div className="p-10">
                            <div className="space-y-4">
                                <h2 className="text-xl font-bold text-slate-800 mb-4">Envie uma mensagem</h2>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-600">Nome</label>
                                        <Input
                                            placeholder="Seu nome"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-600">Telefone</label>
                                        <Input
                                            placeholder="(00) 00000-0000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-600">Mensagem</label>
                                    <Textarea
                                        placeholder="Gostaria de saber mais sobre financiamento..."
                                        className="h-32"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <Button onClick={handleWhatsapp} className="w-full h-12 bg-orange-500 hover:bg-orange-600 font-bold text-lg shadow-md">
                                    Enviar Mensagem (WhatsApp)
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
