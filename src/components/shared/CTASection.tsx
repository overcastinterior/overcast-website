import Badge from "@/components/small/Badge";
import Button from "@/components/small/Button";

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
                        text="Subscribe to the newsletter"
                        options="!border-[#CACACA]"
                        options2="!text-black"
                    />
                    <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[60px] text-black leading-[110%] mt-4 xl:mt-[25px]">
                        Join Our{" "}
                        <span className="inline-block text-primary">Design Circle</span>
                    </h2>
                    <p className="text-secondary font-normal font-golos text-xs lg:text-sm leading-[120%] xl:text-base mt-4 xl:mt-[25px] xl:max-w-[78%] mx-auto mb-6 lg:mb-12">
                        Join our newsletter. Learn something new, gain access to exclusive
                        content, and stay informed <br /> with the latest updates in the
                        industry.
                    </p>
                    <Button
                        text="Contact Us"
                        options="!bg-yellow-500 lg:!px-12 lg:!text-xl  hover:!bg-yellow-600"
                    />
                </div>
            </div>
        </section>
    );
}
