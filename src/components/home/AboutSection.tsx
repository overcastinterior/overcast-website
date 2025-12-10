// AboutSection.tsx

import Image from "next/image";
import CommonTitle from "../small/CommonTitle";
import aboutIcon1 from "@/../public/images/icons/about-1.svg";
import aboutIcon2 from "@/../public/images/icons/about-2.svg";
import aboutIcon3 from "@/../public/images/icons/about-3.svg";
import aboutIcon4 from "@/../public/images/icons/about-4.svg";
import serviceData from "../../../lib/data/home/about.json";

// Create an array of imported icons
const icons = [aboutIcon1, aboutIcon2, aboutIcon3, aboutIcon4];

export default function AboutSection() {
  return (
    <>
      <section
        className="w-full py-10 bg-[#F6F6F6] xl:py-[100px] bg-fixed"
        style={{
          backgroundImage: "url('/images/about-bg.svg')",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          {/* common title */}
          <CommonTitle
            feat="Who We Are"
            title="Your Partner in"
            sTitle="Inspired Living"
            description="At Overcast Interior, every space tells a story. With expertise in architecture and modern design, we create spaces that reflect who you are—bringing comfort, energy, and life to every room."
          />
        </div>
        <div className="container mt-10 lg:mt-12 xl:mt-[60px]">
          <div className="w-full grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-4 lg:gap-x-5 xl:gap-x-6 xl:gap-y-0 items-stretch">
            {/* loop 4 items */}
            {serviceData.map((item, index) => (
              <div
                key={index}
                className="group w-full p-5 lg:p-6 xl:p-[30px] rounded-2xl xl:rounded-[20px] bg-white cursor-pointer transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 hover:rotate-1"
              >
                <div className="flex items-center justify-between mb-16 gap-x-2">
                  <h4 className="text-2xl xl:text-[30px] leading-[110%] font-cal font-nromal text-black group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h4>

                  {/* Architectural Icon */}
                  <div className="w-fit transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Image 
                      src={icons[index]} 
                      alt={item.name} 
                      className="max-w-8 lg:max-w-11 xl:max-w-[50px] transition-all duration-300 group-hover:brightness-110" 
                    />
                  </div>
                </div>

                {/* Separator Line */}
                <div className="w-full h-px bg-[#CACACA] mb-5 mt-[60px] xl:mb-[30px] xl:mt-[100px] transform origin-left transition-all duration-500 group-hover:scale-x-110 group-hover:bg-primary"></div>

                {/* Description Text */}
                <p className="text-secondary text-sm lg:text-base font-normal font-golos transform transition-all duration-300 group-hover:text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
