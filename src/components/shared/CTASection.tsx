import Badge from "@/components/small/Badge";
import Link from "next/link";

export default function CTASection() {
    return (
        <section
            className="w-full py-10 lg:py-20 bg-[#F6F6F6]"
            style={{
                backgroundImage: "url('/images/get-start-bg.webp')",
                backgroundPosition: "bottom center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
            }}
        >
            <div className="container">
                <div className="text-center">
                    <Badge
                        text="FAST AND RELIABLE"
                        options="!border-[#CACACA]"
                        options2="!text-black"
                    />
                    <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[60px] text-black leading-[110%] mt-4 xl:mt-[25px]">
                        Contact with {" "}
                        <span className="inline-block text-primary">Overcast</span>
                    </h2>
                    <p className="text-secondary font-normal font-golos text-xs lg:text-sm leading-[120%] xl:text-base mt-4 xl:mt-[25px] xl:max-w-[78%] mx-auto mb-6 lg:mb-12">
                        We are here to help you with any questions or concerns you may have. Please feel free to contact us and we will get back to you as soon as possible.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 rounded-full bg-yellow-500 text-white font-golos text-base lg:text-xl font-medium transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
