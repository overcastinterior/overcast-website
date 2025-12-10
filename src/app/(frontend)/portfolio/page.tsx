"use client";

import Header from "@/components/header";
import Badge from "@/components/small/Badge";
import Link from "next/link";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import { useState } from "react";

export const dynamic = "auto";

// Portfolio data with all available project images
const portfolioProjects = [
    {
        id: 1,
        title: "Modern Drawing & Dining Space",
        category: "Residential",
        image: "/images/projects/Drawing-Dining-Project-01.webp",
        description: "Elegant contemporary design blending comfort with sophistication",
    },
    {
        id: 2,
        title: "Luxury Dining Experience",
        category: "Residential",
        image: "/images/projects/Drawing-Dining-Project-02.webp",
        description: "Refined dining area with premium finishes and ambient lighting",
    },
    {
        id: 3,
        title: "State-of-the-Art Gym",
        category: "Commercial",
        image: "/images/projects/Gym-Project-03.webp",
        description: "Professional fitness center with modern equipment and design",
    },
    {
        id: 4,
        title: "Executive Office Suite",
        category: "Commercial",
        image: "/images/projects/Office-Project-04.webp",
        description: "Sophisticated workspace designed for productivity and style",
    },
    {
        id: 5,
        title: "Open Concept Living",
        category: "Residential",
        image: "/images/projects/Open-Space-Project-05.webp",
        description: "Spacious open-plan design maximizing natural light and flow",
    },
    {
        id: 6,
        title: "Contemporary Office Design",
        category: "Commercial",
        image: "/images/projects/Office-Project-06.webp",
        description: "Modern office space with collaborative work environments",
    },
    {
        id: 7,
        title: "Family Bedroom Retreat",
        category: "Residential",
        image: "/images/projects/Family-Bed-Project-07.webp",
        description: "Cozy and elegant bedroom sanctuary for the whole family",
    },
    {
        id: 8,
        title: "Luxury Apartment Living",
        category: "Residential",
        image: "/images/projects/Apprtment-Project-08.webp",
        description: "High-end apartment interior with premium materials and finishes",
    },
];

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    // Filter projects based on active category
    const filteredProjects = activeFilter === "All"
        ? portfolioProjects
        : portfolioProjects.filter(project => project.category === activeFilter);

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden object-fill"
                style={{
                    backgroundImage: "url('/images/feature-bg.webp')",
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
                            <Badge text="Our Work" />
                            <h1 className="font-cal font-normal text-[40px] lg:text-[60px] xl:text-[80px] text-white leading-[110%] mt-6 xl:mt-8">
                                Our{" "}
                                <span className="inline-block text-primary">
                                    Portfolio
                                </span>
                            </h1>
                            <p className="text-white/90 font-golos font-normal text-base lg:text-lg xl:text-xl mt-4 xl:mt-6 max-w-3xl">
                                Explore our collection of stunning interior design projects
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
                                    Portfolio
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Introduction Section */}
            <section className="w-full py-10 lg:py-16 xl:py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-8 lg:mb-12 xl:mb-16">
                        <Badge
                            text="Featured Projects"
                            options="!border-[#CACACA]"
                            options2="!text-black"
                        />
                        <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[60px] text-black leading-[110%] mt-4 xl:mt-6">
                            Transforming Spaces,{" "}
                            <span className="inline-block text-primary">
                                Creating Experiences
                            </span>
                        </h2>
                        <p className="text-secondary font-normal font-golos text-sm lg:text-base xl:text-lg mt-4 xl:mt-6 max-w-3xl mx-auto">
                            Each project represents our commitment to excellence, innovation, and
                            timeless design. From residential sanctuaries to commercial masterpieces,
                            discover how we bring visions to life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid Section */}
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
                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 mb-8 lg:mb-12">
                        <button
                            onClick={() => setActiveFilter("All")}
                            className={`px-5 py-2.5 lg:px-6 lg:py-3 rounded-full font-golos text-sm lg:text-base font-medium transition-all duration-300 hover:shadow-lg ${activeFilter === "All"
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-white text-secondary hover:bg-primary hover:text-white"
                                }`}
                        >
                            All Projects
                        </button>
                        <button
                            onClick={() => setActiveFilter("Residential")}
                            className={`px-5 py-2.5 lg:px-6 lg:py-3 rounded-full font-golos text-sm lg:text-base font-medium transition-all duration-300 hover:shadow-lg ${activeFilter === "Residential"
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-white text-secondary hover:bg-primary hover:text-white"
                                }`}
                        >
                            Residential
                        </button>
                        <button
                            onClick={() => setActiveFilter("Commercial")}
                            className={`px-5 py-2.5 lg:px-6 lg:py-3 rounded-full font-golos text-sm lg:text-base font-medium transition-all duration-300 hover:shadow-lg ${activeFilter === "Commercial"
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-white text-secondary hover:bg-primary hover:text-white"
                                }`}
                        >
                            Commercial
                        </button>
                    </div>

                    {/* Portfolio Grid - More Compact */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                            >
                                {/* Project Image - More Compact */}
                                <div className="relative h-[240px] lg:h-[260px] xl:h-[280px] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="px-2.5 py-1 rounded-full bg-primary/90 text-white text-xs font-golos font-medium">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <h3 className="font-cal text-lg lg:text-xl text-white mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-white/90 font-golos text-xs lg:text-sm leading-relaxed line-clamp-2">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Category Badge (Always Visible) */}
                                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm">
                                        <span className="text-secondary text-xs font-golos font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Info (Always Visible) - More Compact */}
                                <div className="p-4 lg:p-5">
                                    <h3 className="font-cal text-lg lg:text-xl text-black mb-1.5 group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-secondary font-golos text-xs lg:text-sm leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>
                                    {/* View Details Link */}
                                    <div className="mt-3 flex items-center gap-2 text-primary font-golos text-xs lg:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>View Details</span>
                                        <svg
                                            className="w-3 h-3 lg:w-4 lg:h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Show message if no projects match filter */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-secondary font-golos text-lg">
                                No projects found in this category.
                            </p>
                        </div>
                    )}

                    {/* Load More Button - Only show when viewing all projects */}
                    {activeFilter === "All" && (
                        <div className="flex justify-center mt-10 lg:mt-12 xl:mt-16">
                            <button className="group px-7 py-3.5 lg:px-8 lg:py-4 rounded-full bg-primary text-white font-golos text-sm lg:text-base font-medium transition-all duration-300 hover:shadow-xl hover:bg-secondary flex items-center gap-3">
                                <span>Load More Projects</span>
                                <svg
                                    className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-y-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Stats Section - More Compact */}
            <section className="w-full py-10 lg:py-16 xl:py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                        {/* Stat 1 */}
                        <div className="text-center p-5 lg:p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                            <div className="font-cal text-[36px] lg:text-[44px] xl:text-[52px] text-primary mb-1">
                                500+
                            </div>
                            <p className="text-secondary font-golos text-xs lg:text-sm">
                                Projects Completed
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="text-center p-5 lg:p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg">
                            <div className="font-cal text-[36px] lg:text-[44px] xl:text-[52px] text-secondary mb-1">
                                98%
                            </div>
                            <p className="text-secondary font-golos text-xs lg:text-sm">
                                Client Satisfaction
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="text-center p-5 lg:p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                            <div className="font-cal text-[36px] lg:text-[44px] xl:text-[52px] text-primary mb-1">
                                15+
                            </div>
                            <p className="text-secondary font-golos text-xs lg:text-sm">
                                Years Experience
                            </p>
                        </div>

                        {/* Stat 4 */}
                        <div className="text-center p-5 lg:p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg">
                            <div className="font-cal text-[36px] lg:text-[44px] xl:text-[52px] text-secondary mb-1">
                                25+
                            </div>
                            <p className="text-secondary font-golos text-xs lg:text-sm">
                                Design Awards
                            </p>
                        </div>
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
