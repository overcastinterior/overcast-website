"use client";

import { motion } from "framer-motion";
import Badge from "@/components/small/Badge";

interface Offering {
    title: string;
    description: string;
}

interface ServiceIntroProps {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    offerings: Offering[];
}

export default function ServiceIntro({
    badge,
    title,
    titleAccent,
    description,
    offerings,
}: ServiceIntroProps) {
    return (
        <section className="w-full py-10 lg:py-16 xl:py-20 bg-white">
            <div className="container">
                {/* Intro Content */}
                <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
                    <Badge text={badge} options="!border-[#CACACA]" options2="!text-black" />
                    <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[50px] text-black leading-[110%] mt-4 xl:mt-6">
                        {title}{" "}
                        <span className="inline-block text-primary">{titleAccent}</span>
                    </h2>
                    <p className="text-secondary font-normal font-golos text-sm lg:text-base mt-4 lg:mt-6 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Offerings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg text-center"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>

                            {/* Content */}
                            <h3 className="font-cal text-lg lg:text-xl text-black mb-2">
                                {offering.title}
                            </h3>
                            <p className="text-secondary font-golos text-sm leading-relaxed">
                                {offering.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
