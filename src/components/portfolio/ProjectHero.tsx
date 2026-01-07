"use client";

import { motion } from "framer-motion";
import Badge from "@/components/small/Badge";
import Link from "next/link";

interface ProjectHeroProps {
    title: string;
    category: string;
    image: string;
    location: string;
    tags: string[];
    completionDate: string;
}

export default function ProjectHero({
    title,
    category,
    image,
    location,
    tags,
    completionDate,
}: ProjectHeroProps) {
    return (
        <section className="relative min-h-[70vh] lg:min-h-[80vh] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container h-full min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-end pb-12 lg:pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge text={category} />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-cal font-normal text-[36px] lg:text-[56px] xl:text-[72px] text-white leading-[110%] mt-4 xl:mt-6"
                >
                    {title}
                </motion.h1>

                {/* Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap gap-3 mt-6"
                >
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-golos text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </motion.div>

                {/* Quick Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap gap-6 mt-8 text-white/90"
                >
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-golos text-sm lg:text-base">{location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-golos text-sm lg:text-base">{completionDate}</span>
                    </div>
                </motion.div>

                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex items-center gap-x-2 mt-6"
                >
                    <Link href="/" className="text-white/70 hover:text-primary font-golos text-sm transition-colors">
                        Home
                    </Link>
                    <span className="text-white/50">/</span>
                    <Link href="/portfolio" className="text-white/70 hover:text-primary font-golos text-sm transition-colors">
                        Portfolio
                    </Link>
                    <span className="text-white/50">/</span>
                    <span className="text-primary font-golos text-sm">{title}</span>
                </motion.div>
            </div>
        </section>
    );
}
