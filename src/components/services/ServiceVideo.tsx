"use client";

import { motion } from "framer-motion";
import Badge from "@/components/small/Badge";

interface ServiceVideoProps {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    youtubeUrl: string;
}

export default function ServiceVideo({
    badge,
    title,
    titleAccent,
    description,
    youtubeUrl,
}: ServiceVideoProps) {
    return (
        <section className="w-full py-10 lg:py-16 xl:py-20 bg-white">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <Badge text={badge} options="!border-[#CACACA]" options2="!text-black" />
                    <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[50px] text-black leading-[110%] mt-4 xl:mt-6">
                        {title}{" "}
                        <span className="inline-block text-primary">{titleAccent}</span>
                    </h2>
                    <p className="text-secondary font-normal font-golos text-sm lg:text-base mt-4 max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>

                {/* Video Embed */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
                >
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                        <iframe
                            src={youtubeUrl}
                            title="Service Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
