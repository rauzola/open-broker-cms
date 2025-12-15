"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface PropertyGalleryProps {
    images: string[];
    title: string;
    variant?: 'popular' | 'luxury';
}

export function PropertyGallery({ images, title, variant = 'popular' }: PropertyGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const isLuxury = variant === 'luxury';

    return (
        <div className="space-y-4">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <div className={cn(
                        "relative group cursor-pointer overflow-hidden",
                        isLuxury ? "h-[600px] bg-zinc-900" : "h-96 md:h-[500px] rounded-xl bg-slate-100 shadow-md"
                    )}>
                        <img
                            src={images[currentIndex]}
                            alt={`${title} - Imagem ${currentIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay Hover Icon */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <Maximize2 className="text-white w-12 h-12 drop-shadow-lg" />
                        </div>

                        {/* Navigation Arrows (On Image) */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <Button variant="ghost" size="icon" className="pointer-events-auto bg-black/50 text-white hover:bg-black/70 rounded-full h-10 w-10" onClick={prevImage}>
                                <ChevronLeft className="w-6 h-6" />
                            </Button>
                            <Button variant="ghost" size="icon" className="pointer-events-auto bg-black/50 text-white hover:bg-black/70 rounded-full h-10 w-10" onClick={nextImage}>
                                <ChevronRight className="w-6 h-6" />
                            </Button>
                        </div>

                        <div className={cn(
                            "absolute bottom-4 right-4 px-3 py-1 text-xs font-bold rounded-full",
                            isLuxury ? "bg-black/60 text-[oklch(0.85_0.15_85)] border border-[oklch(0.85_0.15_85)]/30" : "bg-black/60 text-white"
                        )}>
                            {currentIndex + 1} / {images.length}
                        </div>
                    </div>
                </DialogTrigger>

                <DialogContent className="max-w-[100vw] w-screen h-screen bg-black/95 border-none p-0 flex items-center justify-center rounded-none data-[state=open]:duration-300">
                    <div className="relative w-full h-full flex items-center justify-center p-2">
                        <img
                            src={images[currentIndex]}
                            alt={`${title} - Zoom`}
                            className="w-full h-full object-contain"
                        />

                        <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-16 w-16" onClick={prevImage}>
                            <ChevronLeft className="w-10 h-10" />
                        </Button>
                        <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-16 w-16" onClick={nextImage}>
                            <ChevronRight className="w-10 h-10" />
                        </Button>

                        {/* Close button is handled by DialogContent default, but we can customize or add another one if needed. 
                            The default close button might be hidden or hard to see on black bg. */}
                    </div>
                </DialogContent>
            </Dialog>

            {/* Thumbnails (Slider Passador) */}
            <div className="relative">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={cn(
                                "relative flex-shrink-0 h-24 w-32 rounded-lg overflow-hidden transition-all snap-start border-2",
                                currentIndex === i
                                    ? (isLuxury ? "border-[oklch(0.85_0.15_85)] opacity-100" : "border-orange-500 opacity-100 ring-2 ring-orange-200")
                                    : "border-transparent opacity-60 hover:opacity-100"
                            )}
                        >
                            <img src={img} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
