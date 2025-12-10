// src/components/home/HeroSection.tsx
"use client";

import Image from "next/image";
import heroCircle from "@/../public/images/hero-circle.webp";
import arrowDown from "@/../public/images/icons/arrow-down.svg";
import Badge from "@/components/small/Badge";
import Link from "next/link";
import ButtonTransparent from "@/components/small/ButtonTransparent";

export default function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection =
      document.querySelector("#next-section") ||
      document.querySelector("section:not([data-hero])") ||
      document.querySelector("[data-section]");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="text-center relative z-10 mt-20 xl:text-start lg:mt-[100px] xl:mt-[120px] animate-fade-in">
        <div className="animate-slide-up">
          <Badge text="FAST AND RELIABLE" options="new" />
        </div>

        <h1 className="font-cal text-white font-normal text-4xl lg:text-[110px] lg:leading-[110%] mt-4 animate-slide-up-delayed">
          Design That Inspires, <br /> Spaces That Transform
        </h1>

        <div className="xl:ml-24 xl:flex items-center justify-between">
          <div className="w-full xl:max-w-1/2">
            <p className="text-sm lg:text-base 2xl:text-base font-regular font-golos leading-[130%] text-white mt-6 lg:mt-10 xl:mt-12 animate-slide-up-delayed-2">
              Overcast Interior crafts timeless interiors where elegance meets
              functionality. From homes to commercial spaces, we bring your
              vision to life with creativity, precision, and passion.
            </p>

            <div className="flex mt-5 items-center space-x-2 lg:space-x-2.5 animate-slide-up-delayed-3">
              <div className="transform transition-all duration-200 hover:scale-105 active:scale-95">
                <ButtonTransparent text="Book a Free Consultation" link="#" />
              </div>
              <div className="transform transition-all duration-200 hover:scale-102">
                <Link
                  href="#"
                  className="block font-normal text-white font-golos text-sm lg:text-base 2xl:text-lg underline hover:text-primary transition-colors duration-200"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>
          </div>
          {/* circle */}
          <div className="mt-10 relative z-10 flex justify-center items-center animate-scale-in">
            <div className="circle bg-white/20 w-40 h-40 lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] rounded-full border border-b-primary p-4 text-center backdrop-blur-sm flex justify-center items-center flex-col shrink-0 xl:p-6 animate-slide-in-left relative z-10">
              <h5 className="text-2xl font-cal font-normal xl:text-5xl text-white  animate-pulse animate-scale-in-delayed">
                45+
              </h5>
              <p className="text-white text-xs lg:text-sm xl:text-base font-golos leading-[120%] font-normal mb-2 xl:mb-6 animate-slide-up-delayed-4">
                Successful Projects And Counting
              </p>
              <span className="text-white text-xs lg:text-sm xl:text-base font-golos leading-[120%] block font-semibold animate-slide-up-delayed-5">
                Tech Specifications Design Project 3D Visualisation
              </span>
            </div>
            <div className="shrink-0 w-40 h-40 lg:w-[200px] lg:h-[200px] xl:w-[250px] xl:h-[250px] -ml-10 border border-b-primary rounded-full animate-slide-in-right-rotate">
              <Image
                src={heroCircle}
                alt="circle"
                className="object-fill rounded-full w-full h-full"
                priority={true}
                sizes="(max-width: 1024px) 200px, 250px"
              />
            </div>
          </div>
        </div>
        <div className="text-center flex justify-center animate-slide-up-delayed-6">
          <button
            type="button"
            onClick={scrollToNextSection}
            className="group transform transition-all duration-200 hover:scale-110 hover:translate-y-1 active:scale-90"
          >
            <div className="animate-bounce">
              <Image
                src={arrowDown}
                alt="Scroll to next section"
                className="max-w-5 cursor-pointer group-hover:opacity-80 transition-opacity duration-200"
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
