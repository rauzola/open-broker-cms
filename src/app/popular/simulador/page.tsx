import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calculator, ArrowLeft, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function PopularSimulatorPage() {
    return (
        <div className="font-sans text-slate-900 bg-slate-50 min-h-screen">
            <header className="bg-blue-800 text-white py-4 shadow-sm">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/popular" className="font-bold text-xl tracking-tight">OpenBroker <span className="text-orange-400">Popular</span></Link>
                    <div className="flex gap-4">
                        <Link href="/popular"><Button variant="ghost" className="text-white hover:text-white hover:bg-blue-700 gap-2"><ArrowLeft className="w-4 h-4" /> Voltar</Button></Link>
                    </div>
                </div>
            </header>

            <section className="bg-blue-700 text-white py-12 text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <Calculator className="w-16 h-16 mx-auto mb-4 text-orange-400" />
                    <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">Simulador Habitacional</h1>
                    <p className="text-lg text-blue-100">
                        Faça uma simulação e descubra o valor das parcelas e do subsídio para conquistar sua casa própria.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12 -mt-8">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="font-bold text-xl text-slate-800 border-b pb-2">Seus Dados</h3>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-600">Renda Bruta Familiar (Mensal)</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">R$</span>
                                        <Input placeholder="0,00" className="pl-10 text-lg font-bold text-slate-800" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-600">Data de Nascimento do Comprador Mais Velho</label>
                                    <Input type="date" className="text-lg" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-600">Possui 3 anos de trabalho sob regime do FGTS somando todos os períodos?</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-2 border p-3 rounded-lg cursor-pointer hover:bg-slate-50 w-full">
                                            <input type="radio" name="fgts" className="w-4 h-4 text-blue-600" /> Sim
                                        </label>
                                        <label className="flex items-center gap-2 border p-3 rounded-lg cursor-pointer hover:bg-slate-50 w-full">
                                            <input type="radio" name="fgts" className="w-4 h-4 text-blue-600" /> Não
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-bold text-xl text-slate-800 border-b pb-2">Dados do Imóvel</h3>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-600">Cidade onde pretende comprar</label>
                                    <div className="flex items-center border rounded-md px-3 bg-white">
                                        <Building2 className="w-5 h-5 text-slate-400 mr-2" />
                                        <select className="w-full py-2 bg-transparent outline-none">
                                            <option>São Paulo - SP</option>
                                            <option>Rio de Janeiro - RJ</option>
                                            <option>Belo Horizonte - MG</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-600">Valor do Imóvel</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">R$</span>
                                        <Input placeholder="200.000,00" className="pl-10 text-lg font-bold text-slate-800" />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <Button size="lg" className="w-full h-14 bg-orange-500 hover:bg-orange-600 font-bold text-xl shadow-md">
                                    Calcular Agora
                                </Button>
                                <p className="text-xs text-center text-slate-400 mt-4">
                                    *Esta é uma simulação e não garante aprovação de crédito. Sujeito a análise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
