"use client";

import { motion } from "framer-motion";
import Badge from "@/components/small/Badge";

interface Testimonial {
    text: string;
    author: string;
}

interface ProjectInfoProps {
    clientName: string;
    description: string;
    duration: string;
    tags: string[];
    testimonial?: Testimonial;
}

export default function ProjectInfo({
    clientName,
    description,
    duration,
    tags,
    testimonial,
}: ProjectInfoProps) {
    return (
        <section className="w-full py-10 lg:py-16 xl:py-20 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <Badge text="Project Details" options="!border-[#CACACA]" options2="!text-black" />
                        <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[48px] text-black leading-[110%] mt-4 xl:mt-6">
                            About This{" "}
                            <span className="inline-block text-primary">Project</span>
                        </h2>
                        <p className="text-secondary font-normal font-golos text-sm lg:text-base mt-6 leading-relaxed">
                            {description}
                        </p>

                        {/* Testimonial */}
                        {testimonial && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mt-8 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20"
                            >
                                <svg className="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-secondary font-golos text-base lg:text-lg italic leading-relaxed mb-4">
                                    "{testimonial.text}"
                                </p>
                                <p className="text-black font-golos font-medium">
                                    — {testimonial.author}
                                </p>
                            </motion.div>
                        )}
                    </div>

                    {/* Sidebar - Project Specs */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 space-y-6">
                            <div className="p-6 lg:p-8 rounded-2xl bg-[#F6F6F6] border border-[#CACACA]/20">
                                <h3 className="font-cal text-2xl text-black mb-6">
                                    Project <span className="text-primary">Specifications</span>
                                </h3>

                                <div className="space-y-4">
                                    {/* Client */}
                                    <div className="pb-4 border-b border-[#CACACA]/30">
                                        <p className="text-secondary font-golos text-sm mb-1">Client</p>
                                        <p className="text-black font-golos font-medium text-base">{clientName}</p>
                                    </div>

                                    {/* Duration */}
                                    <div className="pb-4 border-b border-[#CACACA]/30">
                                        <p className="text-secondary font-golos text-sm mb-1">Duration</p>
                                        <p className="text-black font-golos font-medium text-base">{duration}</p>
                                    </div>

                                    {/* Area */}
                                    <div className="pb-4 border-b border-[#CACACA]/30">
                                        <p className="text-secondary font-golos text-sm mb-1">Area</p>
                                        <p className="text-black font-golos font-medium text-base">
                                            {tags.find(tag => tag.includes('sft')) || 'N/A'}
                                        </p>
                                    </div>

                                    {/* Category */}
                                    <div>
                                        <p className="text-secondary font-golos text-sm mb-1">Category</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {tags.filter(tag => !tag.includes('sft')).map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 rounded-full bg-primary/10 text-primary font-golos text-sm font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
