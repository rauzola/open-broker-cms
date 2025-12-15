import { getProperty } from "@/lib/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Move, MapPin, Phone, ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { PropertyGallery } from "@/components/public/PropertyGallery";

export default async function LuxuryPropertyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const property = await getProperty(id);

    if (!property) return <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">Property not found</div>;

    const isRent = property.listingType === 'RENT';

    return (
        <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-amber-900/50">
            {/* Navigation Overlay */}
            <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                <Link href="/luxury/search" className="text-white hover:text-[oklch(0.85_0.15_85)] transition-colors"><ArrowLeft className="h-6 w-6" /></Link>
                <div className="font-display font-medium tracking-widest uppercase text-sm">{property.title}</div>
                <div className="w-6"></div> {/* Spacer */}
            </nav>

            {/* Immersive Hero */}
            <div className="relative h-screen w-full">
                <img src={property.images[0]} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-20">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                            <div className="space-y-4 animate-fade-in-up">
                                <Badge variant="outline" className="text-[oklch(0.85_0.15_85)] border-[oklch(0.85_0.15_85)]/30 bg-black/20 backdrop-blur-md uppercase tracking-widest px-4 py-2 rounded-none">
                                    {property.type}
                                </Badge>
                                <h1 className="text-5xl md:text-7xl font-display font-light leading-none max-w-4xl">{property.title}</h1>
                                <div className="flex items-center text-zinc-400 font-light tracking-wide text-lg">
                                    <MapPin className="h-5 w-5 mr-3 text-[oklch(0.85_0.15_85)]" />
                                    {property.location}
                                </div>
                            </div>

                            <div className="text-right animate-fade-in-up">
                                <p className="text-zinc-500 uppercase tracking-widest text-sm mb-2">{isRent ? 'Monthly Lease' : 'Acquisition Price'}</p>
                                <div className="text-4xl md:text-5xl font-display font-light text-[oklch(0.85_0.15_85)]">
                                    {isRent
                                        ? `R$ ${property.price.toLocaleString('pt-BR')}`
                                        : `R$ ${(property.price / 1000000).toFixed(1)} M`}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-16">

                        {/* Specs - Minimalist */}
                        <div className="flex justify-between border-y border-white/10 py-10">
                            <div className="text-center md:text-left px-8 first:pl-0 border-r border-white/10 last:border-0 last:pr-0 w-full">
                                <div className="text-[oklch(0.85_0.15_85)] mb-2"><Bed className="h-6 w-6 mx-auto md:mx-0" /></div>
                                <div className="text-3xl font-display">{property.specs.beds}</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Bedrooms</div>
                            </div>
                            <div className="text-center md:text-left px-8 border-r border-white/10 w-full">
                                <div className="text-[oklch(0.85_0.15_85)] mb-2"><Bath className="h-6 w-6 mx-auto md:mx-0" /></div>
                                <div className="text-3xl font-display">{property.specs.baths}</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Bathrooms</div>
                            </div>
                            <div className="text-center md:text-left px-8 border-r border-white/10 w-full">
                                <div className="text-[oklch(0.85_0.15_85)] mb-2"><Move className="h-6 w-6 mx-auto md:mx-0" /></div>
                                <div className="text-3xl font-display">{property.specs.area}</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Sq Meters</div>
                            </div>
                        </div>

                        <div className="space-y-8 font-light text-lg text-zinc-300 leading-relaxed max-w-3xl">
                            <h3 className="text-2xl font-display text-white">The Residence</h3>
                            <p>{property.description}</p>
                            <p>
                                Every detail of this residence has been meticulously curated to offer an unparalleled living experience.
                                From the bespoke finishes to the panoramic views, this property represents the pinnacle of luxury real estate.
                            </p>
                        </div>

                        {/* Mosaic Gallery */}
                        {/* Gallery Slider */}
                        <PropertyGallery images={property.images} title={property.title} variant="luxury" />
                    </div>

                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32 p-10 bg-zinc-900 border border-white/5">
                            <div className="text-center space-y-6">
                                <div className="h-20 w-20 rounded-full bg-cover bg-center mx-auto ring-2 ring-[oklch(0.85_0.15_85)]" style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=luxury_agent')` }} />
                                <div>
                                    <h3 className="text-xl font-display text-white">Alexandra V.</h3>
                                    <p className="text-[oklch(0.85_0.15_85)] text-xs uppercase tracking-widest mt-1">Private Client Advisor</p>
                                </div>
                                <hr className="border-white/10" />
                                <p className="text-zinc-400 italic font-serif text-sm">"I am at your disposal for a private showing of this masterpiece."</p>

                                <Button className="w-full h-14 bg-white text-black hover:bg-[oklch(0.85_0.15_85)] hover:text-white transition-all uppercase tracking-widest font-medium text-xs rounded-none">
                                    Inquire
                                </Button>
                                <Button variant="outline" className="w-full h-14 border-white/20 text-white hover:bg-white/5 uppercase tracking-widest font-medium text-xs rounded-none">
                                    Brochure
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
