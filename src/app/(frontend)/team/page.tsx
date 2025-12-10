import Header from "@/components/header";
import Badge from "@/components/small/Badge";
import Link from "next/link";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import teamMembers from "../../../../lib/data/home/team.json";

export const dynamic = "auto";

export default function TeamPage() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden object-fill"
                style={{
                    backgroundImage: "url('/images/step-bg.webp')",
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
                            <Badge text="Our Team" />
                            <h1 className="font-cal font-normal text-[40px] lg:text-[60px] xl:text-[80px] text-white leading-[110%] mt-6 xl:mt-8">
                                Meet Our{" "}
                                <span className="inline-block text-primary">
                                    Experts
                                </span>
                            </h1>
                            <p className="text-white/90 font-golos font-normal text-base lg:text-lg xl:text-xl mt-4 xl:mt-6 max-w-3xl">
                                The creative minds behind every exceptional design
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
                                    Team
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Introduction Section */}
            <section className="w-full py-10 lg:py-16 xl:py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-8 lg:mb-12 xl:mb-16 max-w-4xl mx-auto">
                        <Badge
                            text="Design Experts"
                            options="!border-[#CACACA]"
                            options2="!text-black"
                        />
                        <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[60px] text-black leading-[110%] mt-4 xl:mt-6">
                            The Creative Minds{" "}
                            <span className="inline-block text-primary">
                                Behind Overcast
                            </span>
                        </h2>
                        <p className="text-secondary font-normal font-golos text-sm lg:text-base xl:text-lg mt-4 xl:mt-6">
                            Our passionate team of architects, designers, and managers transforms ideas into exceptional spaces—combining creativity, expertise, and personal care in every project.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members Grid Section */}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.id}
                                className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Member Image */}
                                <div className="relative h-[360px] lg:h-[400px] overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={`${member.name} - ${member.designation}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                                    {/* Member Number Badge */}
                                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                                        <span className="font-cal text-white text-lg">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    {/* Social Links - Show on Hover */}
                                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                                        <Link
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                {/* Member Info */}
                                <div className="p-6 lg:p-7">
                                    <h3 className="font-cal text-xl lg:text-2xl text-black mb-2 group-hover:text-primary transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary/80 font-golos text-sm lg:text-base font-medium mb-4">
                                        {member.designation}
                                    </p>

                                    {/* Decorative Line */}
                                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mb-4 group-hover:w-full transition-all duration-500"></div>

                                    {/* Contact Button */}
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-secondary font-golos text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-primary"
                                    >
                                        <span>Get in touch</span>
                                        <svg
                                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join Us Section */}
            {/* <section className="w-full py-10 lg:py-16 xl:py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-8 lg:mb-12">
                        <Badge
                            text="Join Our Team"
                            options="!border-[#CACACA]"
                            options2="!text-black"
                        />
                        <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[50px] text-black leading-[110%] mt-4 xl:mt-6">
                            Want to Work{" "}
                            <span className="inline-block text-primary">With Us?</span>
                        </h2>
                        <p className="text-secondary font-normal font-golos text-sm lg:text-base mt-4 max-w-2xl mx-auto">
                            We're always looking for talented individuals to join our growing team. If you're passionate about interior design, we'd love to hear from you.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full bg-primary text-white font-golos text-base lg:text-lg font-medium transition-all duration-300 hover:shadow-xl hover:bg-secondary hover:scale-105"
                        >
                            Send Your Resume
                        </Link>
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <CTASection />

            {/* Footer Section */}
            <Footer />
        </>
    );
}
