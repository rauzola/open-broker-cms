import { getProperty } from "@/lib/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Move, MapPin, Phone, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PropertyGallery } from "@/components/public/PropertyGallery";

export default async function PopularPropertyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const property = await getProperty(id);

    if (!property) return <div className="min-h-screen flex items-center justify-center">Imóvel não encontrado</div>;

    const isRent = property.listingType === 'RENT';

    // Mass Market Calc
    const total = property.price;
    const downPayment = total * 0.2;
    const loanAmount = total - downPayment;
    const monthlyInstallment = isRent ? property.price : Math.round((loanAmount / 240) * 1.5);

    return (
        <div className="bg-slate-50 min-h-screen pb-20 font-sans">
            <header className="bg-white border-b py-4 sticky top-0 z-40">
                <div className="container mx-auto px-4 flex items-center gap-4">
                    <Link href="/popular/search"><Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button></Link>
                    <span className="font-bold text-lg text-slate-800 truncate">{property.title}</span>
                </div>
            </header>

            <div className="container mx-auto px-4 py-6">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        {/* Simple Gallery */}
                        <PropertyGallery images={property.images} title={property.title} variant="popular" />

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                <Badge className="bg-blue-600">{property.type}</Badge>
                                <Badge variant="outline" className="text-slate-600 border-slate-200">Código: {property.id}</Badge>
                            </div>

                            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 font-display">{property.title}</h1>

                            <div className="flex items-center text-slate-500 mb-6">
                                <MapPin className="h-4 w-4 mr-1 text-orange-500" />
                                {property.location}
                            </div>

                            <div className="grid grid-cols-3 gap-4 py-6 border-t border-slate-100">
                                <div className="text-center">
                                    <div className="font-bold text-slate-900 text-xl">{property.specs.beds}</div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold">Quartos</div>
                                </div>
                                <div className="text-center border-l border-slate-100">
                                    <div className="font-bold text-slate-900 text-xl">{property.specs.baths}</div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold">Banheiros</div>
                                </div>
                                <div className="text-center border-l border-slate-100">
                                    <div className="font-bold text-slate-900 text-xl">{property.specs.area}</div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold">Área (m²)</div>
                                </div>
                            </div>

                            <div className="prose text-slate-600 mt-6 leading-relaxed">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Descrição</h3>
                                <p>{property.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="sticky top-24 space-y-4">
                            <div className="p-6 rounded-xl border border-orange-100 bg-orange-50 shadow-md">
                                <p className="text-orange-800 font-semibold mb-1 text-sm uppercase tracking-wide">
                                    {isRent ? 'Aluguel Mensal' : 'Condição Especial'}
                                </p>

                                <div className="text-4xl font-extrabold text-orange-600 font-display mb-2">
                                    R$ {isRent ? property.price.toLocaleString('pt-BR') : monthlyInstallment.toLocaleString('pt-BR')}
                                    {!isRent && <span className="text-lg font-medium text-orange-400"> /mês*</span>}
                                </div>

                                {!isRent && (
                                    <div className="bg-white/50 rounded-lg p-3 space-y-1 mb-4 text-sm text-orange-900/80">
                                        <div className="flex justify-between">
                                            <span>Valor Total:</span>
                                            <span className="font-bold">R$ {property.price.toLocaleString('pt-BR')}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Entrada (20%):</span>
                                            <span className="font-bold">R$ {downPayment.toLocaleString('pt-BR')}</span>
                                        </div>
                                    </div>
                                )}

                                <Button className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg shadow-lg">
                                    <Phone className="mr-2 h-5 w-5" /> Chamar no WhatsApp
                                </Button>
                                <p className="text-xs text-center text-orange-800/60 mt-3">*Simulação estimada. Sujeito a análise de crédito.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-slate-100 overflow-hidden">
                                        <img src="https://i.pravatar.cc/150?u=pop_agent" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">Plantão de Vendas</div>
                                        <div className="text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full w-fit">Online Agora</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
