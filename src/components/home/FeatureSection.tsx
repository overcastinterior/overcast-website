// src/components/home/FeatureSection.tsx

import Image from "next/image";
import checkIcon from "@/../public/images/icons/check-box.svg";
import feat01 from "@/../public/images/feat-01.webp";
import feat02 from "@/../public/images/feat-02.webp";
import feat03 from "@/../public/images/feat-03.webp";
import Badge from "@/components/small/Badge";
import ButtonTransparent from "@/components/small/ButtonTransparent";

export default function FeatureSection() {
  return (
    <>
      <section
        id="next-section"
        className="w-full object-center"
        style={{
          backgroundImage: "url('/images/feature-bg.webp')",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full feat-ol py-10 pb-6 xl:py-[100px] relative xl:pb-8">
          <div className="container">
            <div className="w-full grid grid-cols-1 gap-y-12 xl:grid-cols-12 xl:gap-y-0 xl:gap-x-10 relative z-10">
              <div className="img flex items-center justify-center xl:col-span-7 xl:order-2 group">
                <div className="w-full max-w-2xl">
                  <div className="transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 hover:rotate-2 hover:shadow-2xl hover:shadow-black/20">
                    <Image
                      src={feat02}
                      alt="feat-02"
                      className="rounded-xl xl:rounded-[25px] w-full transition-all duration-500 hover:brightness-110 hover:contrast-110"
                      loading="lazy"
                      sizes="(max-width: 1280px) 100vw, 700px"
                    />
                  </div>
                </div>
              </div>
              <div className="txt xl:col-span-5 xl:order-1">
                <div className="transform transition-all duration-500 hover:scale-105">
                  <Badge text="Why Choose Us" />
                </div>
                <h2 className="font-cal font-normal text-3xl lg:text-[50px] xl:text-[60px] text-white leading-[110%] mt-3 xl:mt-5">
                  Where Design Meets{" "}
                  <span className="text-primary transform inline-block">Assurance</span>
                </h2>

                <ul className="mt-8 lg:mt-12 xl:mt-[60px] flex flex-col gap-y-4 font-golos xl:gap-y-5">
                  <li className="flex items-center gap-x-2.5 group transform transition-all duration-300 hover:translate-x-2 hover:scale-105">
                    <Image
                      src={checkIcon}
                      alt="icon"
                      className="shrink-0 w-5 xl:w-[24px] transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:brightness-125"
                    />
                    <p className="font-normal text-sm lg:text-base xl:text-lg text-white leading-[110%] transform transition-all duration-300 group-hover:text-primary">
                      Innovative design backed by the latest trends &amp;
                      technology.
                    </p>
                  </li>
                  <li className="flex items-center gap-x-2.5 group transform transition-all duration-300 delay-75 hover:translate-x-2 hover:scale-105">
                    <Image
                      src={checkIcon}
                      alt="icon"
                      className="shrink-0 w-5 xl:w-[24px] transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:brightness-125"
                    />
                    <p className="font-normal text-sm lg:text-base xl:text-lg text-white leading-[110%] transform transition-all duration-300 group-hover:text-primary">
                      15-Year`s quality assurance on all design projects.
                    </p>
                  </li>
                  <li className="flex items-center gap-x-2.5 group transform transition-all duration-300 delay-150 hover:translate-x-2 hover:scale-105">
                    <Image
                      src={checkIcon}
                      alt="icon"
                      className="shrink-0 w-5 xl:w-[24px] transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:brightness-125"
                    />
                    <p className="font-normal text-sm lg:text-base xl:text-lg text-white leading-[110%] transform transition-all duration-300 group-hover:text-primary">
                      Personalized solutions for both homes & businesses.
                    </p>
                  </li>
                  <li className="flex items-center gap-x-2.5 group transform transition-all duration-300 delay-225 hover:translate-x-2 hover:scale-105">
                    <Image
                      src={checkIcon}
                      alt="icon"
                      className="shrink-0 w-5 xl:w-[24px] transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:brightness-125"
                    />
                    <p className="font-normal text-sm lg:text-base xl:text-lg text-white leading-[110%] transform transition-all duration-300 group-hover:text-primary">
                      End-to-end service: from concept to completion.
                    </p>
                  </li>
                </ul>

                <div className="mt-5 lg:mt-12 xl:mt-[60px] transform transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                  <ButtonTransparent text="Book a Free Consultation" link="#" />
                </div>
              </div>
            </div>
            <h2 className="font-cal font-normal text-[90px] leading-[60%] xl:text-[300px] text-white/20 xl:leading-[70%] text-end mt-6 xl:mt-0 transform transition-all duration-1000 hover:text-white/40 hover:scale-105 hover:tracking-wider cursor-default">
              overcast
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
