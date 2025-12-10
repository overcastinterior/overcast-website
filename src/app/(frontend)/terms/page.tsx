import Header from "@/components/header";
import Badge from "@/components/small/Badge";
import Link from "next/link";
import Footer from "@/components/shared/Footer";

export const dynamic = "auto";

export default function TermsPage() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative min-h-[50vh] overflow-hidden object-fill"
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

                        {/* Hero Content */}
                        <div className="flex flex-col items-center justify-center text-center mt-16 lg:mt-20">
                            <Badge text="Legal" />
                            <h1 className="font-cal font-normal text-[36px] lg:text-[50px] xl:text-[60px] text-white leading-[110%] mt-6">
                                Terms &{" "}
                                <span className="inline-block text-primary">
                                    Conditions
                                </span>
                            </h1>
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-x-2 mt-6">
                                <Link
                                    href="/"
                                    className="text-white/70 hover:text-primary font-golos text-sm lg:text-base transition-colors"
                                >
                                    Home
                                </Link>
                                <span className="text-white/50">/</span>
                                <span className="text-primary font-golos text-sm lg:text-base">
                                    Terms & Conditions
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terms Content */}
            <section className="w-full py-10 lg:py-16 xl:py-20 bg-white">
                <div className="container max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-secondary font-golos text-sm lg:text-base mb-6">
                            Last updated: December 10, 2025
                        </p>

                        <div className="space-y-8">
                            {/* Section 1 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    1. <span className="text-primary">Introduction</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    Welcome to Overcast Interior. These Terms and Conditions govern your use of our website and services. By accessing our website or engaging our services, you agree to be bound by these terms. If you disagree with any part of these terms, please do not use our services.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    2. <span className="text-primary">Services</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed mb-3">
                                    Overcast Interior provides professional interior design services including but not limited to:
                                </p>
                                <ul className="list-disc list-inside text-secondary font-golos text-sm lg:text-base leading-relaxed space-y-2 ml-4">
                                    <li>Residential interior design</li>
                                    <li>Commercial interior design</li>
                                    <li>Space planning and consultation</li>
                                    <li>3D visualization and rendering</li>
                                    <li>Project management and execution</li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    3. <span className="text-primary">Project Agreements</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed mb-3">
                                    All projects require a signed agreement outlining:
                                </p>
                                <ul className="list-disc list-inside text-secondary font-golos text-sm lg:text-base leading-relaxed space-y-2 ml-4">
                                    <li>Scope of work and deliverables</li>
                                    <li>Timeline and milestones</li>
                                    <li>Payment terms and schedule</li>
                                    <li>Responsibilities of both parties</li>
                                    <li>Revision and approval process</li>
                                </ul>
                            </div>

                            {/* Section 4 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    4. <span className="text-primary">Payment Terms</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    Payment terms are specified in individual project agreements. Generally, we require an initial deposit to commence work, with subsequent payments tied to project milestones. All payments must be made within the specified timeframe. Late payments may result in project delays or suspension of services.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    5. <span className="text-primary">Intellectual Property</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    All designs, drawings, and creative work produced by Overcast Interior remain our intellectual property until full payment is received. Upon completion of payment, clients receive a license to use the designs for the specified project. We retain the right to showcase completed projects in our portfolio unless otherwise agreed in writing.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    6. <span className="text-primary">Revisions and Changes</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    Each project includes a specified number of revision rounds as outlined in the project agreement. Additional revisions beyond the agreed scope may incur extra charges. Significant changes to project scope will require a new agreement and adjusted timeline and pricing.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    7. <span className="text-primary">Cancellation Policy</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    Clients may cancel projects with written notice. Cancellation fees apply based on the project stage. Work completed up to the cancellation point will be billed accordingly. Deposits are non-refundable but may be applied to future projects within one year of cancellation.
                                </p>
                            </div>

                            {/* Section 8 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    8. <span className="text-primary">Liability</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    While we strive for excellence, Overcast Interior is not liable for delays caused by factors beyond our control, including but not limited to supplier delays, natural disasters, or client-caused delays. Our liability is limited to the total value of the project agreement.
                                </p>
                            </div>

                            {/* Section 9 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    9. <span className="text-primary">Confidentiality</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    We maintain strict confidentiality regarding all client information and project details. We will not disclose any confidential information without prior written consent, except where required by law.
                                </p>
                            </div>

                            {/* Section 10 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    10. <span className="text-primary">Contact Information</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    For questions regarding these Terms and Conditions, please contact us at:
                                </p>
                                <div className="mt-4 p-6 bg-gray-50 rounded-xl">
                                    <p className="text-secondary font-golos text-sm lg:text-base">
                                        <strong>Overcast Interior</strong><br />
                                        Email: websiteovercastinterior@gmail.com<br />
                                        Phone: +88 01315 999944<br />
                                        Address: House no #02 Road no #05, Jan-E-Saba Housing Complex - Jamil Nagar, Bogura - 5870, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </>
    );
}
