"use client";

import { motion } from "framer-motion";
import Badge from "@/components/small/Badge";
import Link from "next/link";

interface Project {
    id: string;
    slug: string;
    image: string;
    alt: string;
    tags: string[];
    title: string;
    location: string;
    category?: string;
}

interface ServiceProjectsProps {
    badge: string;
    title: string;
    titleAccent: string;
    projects: Project[];
}

export default function ServiceProjects({
    badge,
    title,
    titleAccent,
    projects,
}: ServiceProjectsProps) {
    return (
        <section className="w-full py-10 lg:py-16 xl:py-20 bg-[#F6F6F6]">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <Badge text={badge} options="!border-[#CACACA]" options2="!text-black" />
                    <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[50px] text-black leading-[110%] mt-4 xl:mt-6">
                        {title}{" "}
                        <span className="inline-block text-primary">{titleAccent}</span>
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <Link
                            key={project.id}
                            href={`/portfolio/${project.slug}`}
                            className="block"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            >
                                {/* Project Image */}
                                <div className="relative h-[300px] lg:h-[350px] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.alt}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Tags */}
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-golos font-medium text-black"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View Details Indicator */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="px-6 py-3 rounded-full bg-primary text-white font-golos text-sm font-medium">
                                            View Details
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-0 transition-transform duration-300">
                                    <h3 className="font-cal text-xl lg:text-2xl text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-white/80">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <p className="font-golos text-sm">{project.location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/portfolio"
                        className="inline-block px-8 py-4 rounded-full bg-primary text-white font-golos text-base lg:text-lg font-medium transition-all duration-300 hover:shadow-xl hover:bg-secondary hover:scale-105"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
