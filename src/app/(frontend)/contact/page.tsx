import Header from "@/components/header";
import Badge from "@/components/small/Badge";
import Link from "next/link";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";

export const dynamic = "auto";

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden object-fill"
                style={{
                    backgroundImage: "url('/images/get-start-bg.webp')",
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
                            <Badge text="Get In Touch" />
                            <h1 className="font-cal font-normal text-[40px] lg:text-[60px] xl:text-[80px] text-white leading-[110%] mt-6 xl:mt-8">
                                Contact{" "}
                                <span className="inline-block text-primary">
                                    Us
                                </span>
                            </h1>
                            <p className="text-white/90 font-golos font-normal text-base lg:text-lg xl:text-xl mt-4 xl:mt-6 max-w-3xl">
                                Let's discuss your next interior design project
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
                                    Contact
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="w-full py-10 lg:py-16 xl:py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
                        {/* Left - Contact Form */}
                        <div>
                            <Badge
                                text="Send Message"
                                options="!border-[#CACACA]"
                                options2="!text-black"
                            />
                            <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[50px] text-black leading-[110%] mt-4 xl:mt-6">
                                Have a Project in{" "}
                                <span className="inline-block text-primary">Mind?</span>
                            </h2>
                            <p className="text-secondary font-normal font-golos text-sm lg:text-base mt-4">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>

                            {/* Contact Form */}
                            <form className="mt-8 space-y-5">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-secondary font-golos text-sm font-medium mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 lg:px-5 lg:py-4 rounded-xl border border-[#CACACA] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 font-golos text-sm lg:text-base"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-secondary font-golos text-sm font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 lg:px-5 lg:py-4 rounded-xl border border-[#CACACA] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 font-golos text-sm lg:text-base"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-secondary font-golos text-sm font-medium mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 lg:px-5 lg:py-4 rounded-xl border border-[#CACACA] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 font-golos text-sm lg:text-base"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-secondary font-golos text-sm font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 lg:px-5 lg:py-4 rounded-xl border border-[#CACACA] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 font-golos text-sm lg:text-base resize-none"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 rounded-full bg-primary text-white font-golos text-base lg:text-lg font-medium transition-all duration-300 hover:shadow-xl hover:bg-secondary hover:scale-[1.02]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Right - Contact Info */}
                        <div>
                            <Badge
                                text="Contact Information"
                                options="!border-[#CACACA]"
                                options2="!text-black"
                            />
                            <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[50px] text-black leading-[110%] mt-4 xl:mt-6">
                                Get in{" "}
                                <span className="inline-block text-primary">Touch</span>
                            </h2>
                            <p className="text-secondary font-normal font-golos text-sm lg:text-base mt-4">
                                We're here to help bring your vision to life. Reach out to us through any of the following channels.
                            </p>

                            {/* Contact Cards */}
                            <div className="mt-8 space-y-5">
                                {/* Address */}
                                <div className="group p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <svg
                                                className="w-6 h-6 text-primary"
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
                                        </div>
                                        <div>
                                            <h3 className="font-cal text-xl text-black mb-2">Office Address</h3>
                                            <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                                House no #02 Road no #05<br />
                                                Jan-E-Saba Housing Complex - Jamil Nagar<br />
                                                Bogura - 5870, Bangladesh
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                            <svg
                                                className="w-6 h-6 text-secondary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-cal text-xl text-black mb-2">Phone Number</h3>
                                            <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                                +88 01315 999944
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="group p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <svg
                                                className="w-6 h-6 text-primary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-cal text-xl text-black mb-2">Email Address</h3>
                                            <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                                websiteovercastinterior@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Working Hours */}
                                <div className="group p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-transparent border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                            <svg
                                                className="w-6 h-6 text-secondary"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-cal text-xl text-black mb-2">Working Hours</h3>
                                            <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                                Saturday: 10:00 AM - 4:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map Section */}
            <section className="w-full py-10 lg:py-16 xl:py-20 bg-[#F6F6F6]">
                <div className="container">
                    <div className="text-center mb-8 lg:mb-12">
                        <Badge
                            text="Find Us"
                            options="!border-[#CACACA]"
                            options2="!text-black"
                        />
                        <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[50px] text-black leading-[110%] mt-4 xl:mt-6">
                            Visit Our{" "}
                            <span className="inline-block text-primary">Office</span>
                        </h2>
                    </div>

                    {/* Google Map Embed */}
                    <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.586495351442!2d89.35339707537037!3d24.843810877940168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc552dceeee559%3A0x46535d5fb8b60970!2sOvercast%20Interior!5e0!3m2!1sen!2sbd!4v1765386126843!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Overcast Interior Office Location"
                        ></iframe>
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
