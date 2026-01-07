"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/small/Badge";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectGalleryProps {
    images: string[];
    projectTitle: string;
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = "unset";
    };

    const goToPrevious = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
        }
    };

    const goToNext = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
        }
    };

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
        if (selectedImage === null) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") goToPrevious();
        if (e.key === "ArrowRight") goToNext();
    };

    // Add keyboard listener
    if (typeof window !== "undefined") {
        window.addEventListener("keydown", handleKeyDown as any);
    }

    return (
        <section className="w-full py-10 lg:py-16 xl:py-20 bg-[#F6F6F6]">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <Badge text="Project Gallery" options="!border-[#CACACA]" options2="!text-black" />
                    <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[48px] text-black leading-[110%] mt-4 xl:mt-6">
                        Project{" "}
                        <span className="inline-block text-primary">Images</span>
                    </h2>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3]"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={image}
                                alt={`${projectTitle} - Image ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
                            onClick={closeLightbox}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 z-[10000] p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                aria-label="Close lightbox"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Previous Button */}
                            {images.length > 1 && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goToPrevious();
                                    }}
                                    className="absolute left-4 z-[10000] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                            )}

                            {/* Next Button */}
                            {images.length > 1 && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goToNext();
                                    }}
                                    className="absolute right-4 z-[10000] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            )}

                            {/* Image */}
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={images[selectedImage]}
                                    alt={`${projectTitle} - Image ${selectedImage + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>

                            {/* Image Counter */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-golos text-sm">
                                {selectedImage + 1} / {images.length}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
