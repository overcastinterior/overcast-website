import Header from "@/components/header";
import Badge from "@/components/small/Badge";
import Link from "next/link";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";
import aboutImg from "@/../public/images/feat-01.webp";
import openHouse from "@/../public/images/open-house.webp";
import Image from "next/image";

export const dynamic = "auto";

export default function AboutPage() {
    return (
        <>
            {/* hero section */}
            <section
                className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden object-fill"
                style={{
                    backgroundImage: "url('/images/hero-bg.webp')",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="w-full h-full bg-black/60 xl:pt-[26px] xl:pb-[60px] pt-5 pb-10">
                    <div className="container">
                        <Header />

                        {/* hero content */}
                        <div className="flex flex-col items-center justify-center text-center mt-16 lg:mt-24 xl:mt-32">
                            <Badge text="About Us" />
                            <h1 className="font-cal font-normal text-[40px] lg:text-[60px] xl:text-[80px] text-white leading-[110%] mt-6 xl:mt-8">
                                Crafting Spaces,{" "}
                                <span className="inline-block text-primary">
                                    Creating Stories
                                </span>
                            </h1>
                            <p className="text-white/90 font-golos font-normal text-base lg:text-lg xl:text-xl mt-4 xl:mt-6 max-w-3xl">
                                Discover the passion and expertise behind Overcast Interior
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
                                    About Us
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Overview Section */}
            <section
                className="w-full py-10 lg:py-20 xl:py-[100px] bg-[#F6F6F6]"
                style={{
                    backgroundImage: "url('/images/about-bg.svg')",
                    backgroundPosition: "bottom center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                        {/* Left - Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden">
                                <Image src={aboutImg} alt="aboutImg" />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
                        </div>

                        {/* Right - Content */}
                        <div>
                            <Badge
                                text="Our Story"
                                options="!border-[#CACACA]"
                                options2="!text-black"
                            />
                            <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[60px] text-black leading-[110%] mt-4 xl:mt-6">
                                Building Dreams{" "}
                                <span className="inline-block text-primary">Since Day One</span>
                            </h2>
                            <p className="text-secondary font-normal font-golos text-sm lg:text-base xl:text-lg leading-[160%] mt-4 xl:mt-6">
                                Overcast Interior was founded with a singular vision: to
                                transform ordinary spaces into extraordinary experiences. Our
                                journey began with a passion for design and an unwavering
                                commitment to excellence.
                            </p>
                            <p className="text-secondary font-normal font-golos text-sm lg:text-base xl:text-lg leading-[160%] mt-4">
                                Over the years, we&apos;ve grown from a small team of dedicated
                                designers into a full-service interior design firm, serving
                                clients across residential and commercial sectors. Every
                                project we undertake is a testament to our belief that great
                                design has the power to inspire, comfort, and elevate everyday
                                living.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="w-full py-10 lg:py-20 xl:py-[100px] bg-white">
                <div className="container">
                    <div className="text-center mb-10 lg:mb-16 xl:mb-20">
                        <Badge
                            text="Our Purpose"
                            options="!border-[#CACACA]"
                            options2="!text-black"
                        />
                        <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[60px] text-black leading-[110%] mt-4 xl:mt-6">
                            Mission &{" "}
                            <span className="inline-block text-primary">Vision</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
                        {/* Mission Card */}
                        <div className="group relative bg-gradient-to-br from-primary/5 to-transparent p-8 lg:p-10 xl:p-12 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                >
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3 className="font-cal font-normal text-2xl lg:text-3xl xl:text-4xl text-black mb-4 lg:mb-6">
                                Our Mission
                            </h3>
                            <p className="text-secondary font-golos text-sm lg:text-base xl:text-lg leading-[160%]">
                                To create inspiring, functional, and beautiful interior spaces
                                that enhance the quality of life for our clients. We are
                                committed to delivering exceptional design solutions that blend
                                aesthetics with practicality, while maintaining the highest
                                standards of craftsmanship and customer service.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="group relative bg-gradient-to-br from-secondary/5 to-transparent p-8 lg:p-10 xl:p-12 rounded-2xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                            <div className="absolute top-6 right-6 text-secondary/10 group-hover:text-secondary/20 transition-colors">
                                <svg
                                    width="60"
                                    height="60"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3 className="font-cal font-normal text-2xl lg:text-3xl xl:text-4xl text-black mb-4 lg:mb-6">
                                Our Vision
                            </h3>
                            <p className="text-secondary font-golos text-sm lg:text-base xl:text-lg leading-[160%]">
                                To be recognized as the leading interior design firm that sets
                                the benchmark for innovation, sustainability, and excellence in
                                the industry. We envision a future where every space we design
                                becomes a masterpiece that stands the test of time and inspires
                                generations to come.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section
                className="w-full py-10 lg:py-20 xl:py-[100px] bg-[#F6F6F6]"
                style={{
                    backgroundImage: "url('/images/about-bg.svg')",
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <div className="text-center mb-10 lg:mb-16 xl:mb-20">
                        <Badge
                            text="What Drives Us"
                            options="!border-[#CACACA]"
                            options2="!text-black"
                        />
                        <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[60px] text-black leading-[110%] mt-4 xl:mt-6">
                            Our Core{" "}
                            <span className="inline-block text-primary">Values</span>
                        </h2>
                        <p className="text-secondary font-normal font-golos text-sm lg:text-base xl:text-lg mt-4 xl:mt-6 max-w-3xl mx-auto">
                            These principles guide every decision we make and every project we
                            undertake
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {/* Quality */}
                        <div className="group bg-white p-6 lg:p-8 xl:p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <svg
                                    className="w-8 h-8 lg:w-10 lg:h-10 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-cal font-normal text-xl lg:text-2xl xl:text-3xl text-black mb-3 lg:mb-4 group-hover:text-primary transition-colors">
                                Quality
                            </h3>
                            <p className="text-secondary font-golos text-sm lg:text-base leading-[160%]">
                                We never compromise on quality. From materials to execution,
                                excellence is our standard in every detail of our work.
                            </p>
                        </div>

                        {/* Tradition */}
                        <div className="group bg-white p-6 lg:p-8 xl:p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <svg
                                    className="w-8 h-8 lg:w-10 lg:h-10 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-cal font-normal text-xl lg:text-2xl xl:text-3xl text-black mb-3 lg:mb-4 group-hover:text-primary transition-colors">
                                Tradition
                            </h3>
                            <p className="text-secondary font-golos text-sm lg:text-base leading-[160%]">
                                We honor timeless design principles while embracing modern
                                innovation, creating spaces that are both classic and
                                contemporary.
                            </p>
                        </div>

                        {/* Customer Satisfaction */}
                        <div className="group bg-white p-6 lg:p-8 xl:p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <svg
                                    className="w-8 h-8 lg:w-10 lg:h-10 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-cal font-normal text-xl lg:text-2xl xl:text-3xl text-black mb-3 lg:mb-4 group-hover:text-primary transition-colors">
                                Customer Satisfaction
                            </h3>
                            <p className="text-secondary font-golos text-sm lg:text-base leading-[160%]">
                                Your vision is our priority. We listen, collaborate, and deliver
                                results that exceed expectations every single time.
                            </p>
                        </div>

                        {/* Sustainability */}
                        <div className="group bg-white p-6 lg:p-8 xl:p-10 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <svg
                                    className="w-8 h-8 lg:w-10 lg:h-10 text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="font-cal font-normal text-xl lg:text-2xl xl:text-3xl text-black mb-3 lg:mb-4 group-hover:text-primary transition-colors">
                                Sustainability
                            </h3>
                            <p className="text-secondary font-golos text-sm lg:text-base leading-[160%]">
                                We&apos;re committed to eco-friendly practices, using sustainable
                                materials and methods that protect our planet for future
                                generations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="w-full py-10 lg:py-20 xl:py-[100px] bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                        {/* Left - Content */}
                        <div>
                            <Badge
                                text="Why Us"
                                options="!border-[#CACACA]"
                                options2="!text-black"
                            />
                            <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[60px] text-black leading-[110%] mt-4 xl:mt-6">
                                Why Choose{" "}
                                <span className="inline-block text-primary">
                                    Overcast Interior
                                </span>
                            </h2>
                            <p className="text-secondary font-normal font-golos text-sm lg:text-base xl:text-lg leading-[160%] mt-4 xl:mt-6">
                                Choosing the right interior design partner is crucial to
                                bringing your vision to life. Here&apos;s what sets us apart:
                            </p>

                            <div className="mt-8 space-y-6">
                                {/* Point 1 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-primary font-cal text-xl">01</span>
                                    </div>
                                    <div>
                                        <h4 className="font-cal text-lg lg:text-xl text-black mb-2">
                                            Expert Team
                                        </h4>
                                        <p className="text-secondary font-golos text-sm lg:text-base leading-[160%]">
                                            Our team of certified designers brings decades of combined
                                            experience and creative expertise to every project.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 2 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-primary font-cal text-xl">02</span>
                                    </div>
                                    <div>
                                        <h4 className="font-cal text-lg lg:text-xl text-black mb-2">
                                            Personalized Approach
                                        </h4>
                                        <p className="text-secondary font-golos text-sm lg:text-base leading-[160%]">
                                            We believe every client is unique. We tailor our designs
                                            to match your lifestyle, preferences, and budget.
                                        </p>
                                    </div>
                                </div>

                                {/* Point 3 */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-primary font-cal text-xl">03</span>
                                    </div>
                                    <div>
                                        <h4 className="font-cal text-lg lg:text-xl text-black mb-2">
                                            Proven Track Record
                                        </h4>
                                        <p className="text-secondary font-golos text-sm lg:text-base leading-[160%]">
                                            Hundreds of satisfied clients and award-winning projects
                                            speak to our commitment to excellence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Image */}
                        <div className="relative order-first lg:order-last">
                            <div className="relative rounded-2xl overflow-hidden">
                                <Image src={openHouse} alt="openHouse" />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 rounded-2xl -z-10"></div>
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
