"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Badge from "@/components/small/Badge";
import Link from "next/link";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";
import testimonials from "../../../../lib/data/home/testimonials.json";

export const dynamic = "auto";

export default function ReviewsPage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-scroll testimonials
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveTestimonial((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handleTestimonialClick = (index: number) => {
        setActiveTestimonial(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 lg:w-6 lg:h-6 ${i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden object-fill"
                style={{
                    backgroundImage: "url('/images/step-01.webp')",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="w-full h-full bg-black/60 xl:pt-[26px] xl:pb-[60px] pt-5 pb-10">
                    <div className="container">
                        <Header />

                        {/* Hero Content */}
                        <div className="flex flex-col items-center justify-center text-center mt-16 lg:mt-24 xl:mt-32">
                            <Badge text="Client Feedback" />
                            <h1 className="font-cal font-normal text-[40px] lg:text-[60px] xl:text-[80px] text-white leading-[110%] mt-6 xl:mt-8">
                                Client{" "}
                                <span className="inline-block text-primary">
                                    Reviews
                                </span>
                            </h1>
                            <p className="text-white/90 font-golos font-normal text-base lg:text-lg xl:text-xl mt-4 xl:mt-6 max-w-3xl">
                                Discover why our clients trust us with their interior design dreams
                            </p>
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-x-2 mt-6 lg:mt-8">
                                <Link
                                    href="/"
                                    className="text-white/70 hover:text-primary font-golos text-sm lg:text-base transition-colors"
                                >
                                    Home
                                </Link>
                                <span className="text-white/50">/</span>
                                <span className="text-primary font-golos text-sm lg:text-base">
                                    Reviews
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="w-full py-10 lg:py-16 xl:py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                        <div className="text-center p-5 lg:p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10">
                            <div className="font-cal text-[36px] lg:text-[44px] xl:text-[52px] text-primary mb-1">
                                {testimonials.length}+
                            </div>
                            <p className="text-secondary font-golos text-xs lg:text-sm">
                                Happy Clients
                            </p>
                        </div>
                        <div className="text-center p-5 lg:p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10">
                            <div className="font-cal text-[36px] lg:text-[44px] xl:text-[52px] text-secondary mb-1">
                                5.0
                            </div>
                            <p className="text-secondary font-golos text-xs lg:text-sm">
                                Average Rating
                            </p>
                        </div>
                        <div className="text-center p-5 lg:p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10">
                            <div className="font-cal text-[36px] lg:text-[44px] xl:text-[52px] text-primary mb-1">
                                100%
                            </div>
                            <p className="text-secondary font-golos text-xs lg:text-sm">
                                Satisfaction Rate
                            </p>
                        </div>
                        <div className="text-center p-5 lg:p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10">
                            <div className="font-cal text-[36px] lg:text-[44px] xl:text-[52px] text-secondary mb-1">
                                500+
                            </div>
                            <p className="text-secondary font-golos text-xs lg:text-sm">
                                Projects Done
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Reviews Grid */}
            <section
                className="w-full py-10 lg:py-16 xl:py-20 bg-[#F6F6F6]"
                style={{
                    backgroundImage: "url('/images/about-bg.svg')",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <div className="text-center mb-8 lg:mb-12">
                        <Badge
                            text="Testimonials"
                            options="!border-[#CACACA]"
                            options2="!text-black"
                        />
                        <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[50px] text-black leading-[110%] mt-4 xl:mt-6">
                            What Our Clients{" "}
                            <span className="inline-block text-primary">Say</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className="group bg-white rounded-2xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Quote Icon */}
                                <div className="mb-4">
                                    <svg
                                        className="w-10 h-10 lg:w-12 lg:h-12 text-primary/20"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                    </svg>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1 mb-4">
                                    {renderStars(testimonial.rating)}
                                </div>

                                {/* Feedback */}
                                <blockquote className="text-secondary font-golos text-sm lg:text-base leading-relaxed mb-6 italic">
                                    "{testimonial.feedback}"
                                </blockquote>

                                {/* Client Info */}
                                <div className="border-t border-gray-200 pt-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <h4 className="font-cal text-lg lg:text-xl text-black mb-1">
                                                {testimonial.name}
                                            </h4>
                                            <p className="font-golos text-sm text-primary mb-1">
                                                {testimonial.designation}
                                            </p>
                                            <p className="font-golos text-xs text-secondary">
                                                {testimonial.company}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-golos font-medium mb-2">
                                                {testimonial.projectType}
                                            </span>
                                            <p className="font-golos text-xs text-secondary flex items-center justify-end gap-1">
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />

            {/* Footer Section */}
            <Footer />
        </>
    );
}
