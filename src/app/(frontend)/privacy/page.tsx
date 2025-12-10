import Header from "@/components/header";
import Badge from "@/components/small/Badge";
import Link from "next/link";
import Footer from "@/components/shared/Footer";

export const dynamic = "auto";

export default function PrivacyPage() {
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
                                Privacy{" "}
                                <span className="inline-block text-primary">
                                    Policy
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
                                    Privacy Policy
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy Content */}
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
                                    At Overcast Interior, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our practices regarding your personal data.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    2. <span className="text-primary">Information We Collect</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed mb-3">
                                    We collect information that you provide directly to us, including:
                                </p>
                                <ul className="list-disc list-inside text-secondary font-golos text-sm lg:text-base leading-relaxed space-y-2 ml-4">
                                    <li>Name, email address, phone number, and mailing address</li>
                                    <li>Project details and design preferences</li>
                                    <li>Payment and billing information</li>
                                    <li>Communications and correspondence with us</li>
                                    <li>Photos and videos of your property (with consent)</li>
                                    <li>Website usage data and cookies</li>
                                </ul>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    3. <span className="text-primary">How We Use Your Information</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed mb-3">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc list-inside text-secondary font-golos text-sm lg:text-base leading-relaxed space-y-2 ml-4">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Process your requests and transactions</li>
                                    <li>Communicate with you about projects and services</li>
                                    <li>Send you marketing communications (with your consent)</li>
                                    <li>Analyze website usage and improve user experience</li>
                                    <li>Comply with legal obligations</li>
                                    <li>Protect against fraud and unauthorized activity</li>
                                </ul>
                            </div>

                            {/* Section 4 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    4. <span className="text-primary">Information Sharing</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed mb-3">
                                    We do not sell your personal information. We may share your information with:
                                </p>
                                <ul className="list-disc list-inside text-secondary font-golos text-sm lg:text-base leading-relaxed space-y-2 ml-4">
                                    <li>Service providers who assist in our operations (contractors, suppliers)</li>
                                    <li>Professional advisors (lawyers, accountants)</li>
                                    <li>Law enforcement when required by law</li>
                                    <li>Third parties with your explicit consent</li>
                                </ul>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed mt-3">
                                    All third parties are required to maintain the confidentiality of your information.
                                </p>
                            </div>

                            {/* Section 5 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    5. <span className="text-primary">Data Security</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                                </p>
                            </div>

                            {/* Section 6 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    6. <span className="text-primary">Cookies and Tracking</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences. Disabling cookies may affect website functionality.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    7. <span className="text-primary">Your Rights</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed mb-3">
                                    You have the right to:
                                </p>
                                <ul className="list-disc list-inside text-secondary font-golos text-sm lg:text-base leading-relaxed space-y-2 ml-4">
                                    <li>Access your personal information</li>
                                    <li>Correct inaccurate or incomplete data</li>
                                    <li>Request deletion of your personal information</li>
                                    <li>Object to processing of your data</li>
                                    <li>Withdraw consent for marketing communications</li>
                                    <li>Request data portability</li>
                                </ul>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed mt-3">
                                    To exercise these rights, please contact us using the information provided below.
                                </p>
                            </div>

                            {/* Section 8 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    8. <span className="text-primary">Data Retention</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Project-related information is typically retained for 7 years for legal and tax purposes.
                                </p>
                            </div>

                            {/* Section 9 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    9. <span className="text-primary">Children's Privacy</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                                </p>
                            </div>

                            {/* Section 10 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    10. <span className="text-primary">Changes to This Policy</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                                </p>
                            </div>

                            {/* Section 11 */}
                            <div>
                                <h2 className="font-cal text-2xl lg:text-3xl text-black mb-4">
                                    11. <span className="text-primary">Contact Us</span>
                                </h2>
                                <p className="text-secondary font-golos text-sm lg:text-base leading-relaxed">
                                    If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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
