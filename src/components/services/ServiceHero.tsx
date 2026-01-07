"use client";

import { motion } from "framer-motion";
import Badge from "@/components/small/Badge";
import Link from "next/link";

interface ServiceHeroProps {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    backgroundImage: string;
    serviceName: string;
}

export default function ServiceHero({
    badge,
    title,
    titleAccent,
    description,
    backgroundImage,
    serviceName,
}: ServiceHeroProps) {
    return (
        <section
            className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden object-fill"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="w-full h-full bg-black/60 xl:pt-[26px] xl:pb-[60px] pt-5 pb-10">
                <div className="container">
                    {/* Hero Content */}
                    <div className="flex flex-col items-center justify-center text-center mt-16 lg:mt-24 xl:mt-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge text={badge} />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-cal font-normal text-[40px] lg:text-[60px] xl:text-[80px] text-white leading-[110%] mt-6 xl:mt-8"
                        >
                            {title}{" "}
                            <span className="inline-block text-primary">{titleAccent}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-white/90 font-golos font-normal text-base lg:text-lg xl:text-xl mt-4 xl:mt-6 max-w-3xl"
                        >
                            {description}
                        </motion.p>

                        {/* Breadcrumb */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex items-center gap-x-2 mt-6 lg:mt-8"
                        >
                            <Link
                                href="/"
                                className="text-white/70 hover:text-primary font-golos text-sm lg:text-base transition-colors"
                            >
                                Home
                            </Link>
                            <span className="text-white/50">/</span>
                            <span className="text-primary font-golos text-sm lg:text-base">
                                {serviceName}
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
