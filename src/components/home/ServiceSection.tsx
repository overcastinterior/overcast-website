// ServiceSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import CommonTitle from "../small/CommonTitle";  
import arrowTop from "@/../public/images/icons/arrow-top.svg";
import Link from "next/link";
import servicesData from "../../../lib/data/home/services.json";

export default function ServiceSection() {
  const [activeService, setActiveService] = useState(servicesData[0]);
  return (
    <>
      <section className="w-full py-10 xl:py-20">
        <div className="container">
          {/* common title */}
          <CommonTitle
            feat="Our Services"
            title="Complete Interior"
            sTitle="Design Solutions"
            description="From luxury residences to modern commercial hubs, we provide a full spectrum of design and planning services tailored to your needs."
          />
        </div>
        <div className="container mt-20 lg:mt-24 xl:mt-28">
          <div className="w-full grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-y-0 lg:gap-x-10 xl:gap-x-14 lg:items-center">
            {/* img */}
            <div className="img lg:col-span-6 relative overflow-hidden rounded-2xl xl:rounded-[25px]">
              <div className="relative w-full h-full">
                {/* Dynamic Image Display */}
                <div className="relative w-full h-full">
                  <Image
                    key={activeService.id}
                    src={activeService.image}
                    alt={activeService.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-2xl xl:rounded-[25px] transition-all duration-700 ease-out transform hover:scale-105"
                  />
                  {/* Smooth fade overlay for image transitions */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent transition-all duration-700 rounded-2xl xl:rounded-[25px]"
                    style={{
                      background: `linear-gradient(45deg, ${activeService.id === '01' ? 'rgba(196,157,90,0.2)' : 
                        activeService.id === '02' ? 'rgba(59,130,246,0.2)' :
                        activeService.id === '03' ? 'rgba(34,197,94,0.2)' :
                        activeService.id === '04' ? 'rgba(168,85,247,0.2)' :
                        activeService.id === '05' ? 'rgba(239,68,68,0.2)' :
                        'rgba(245,101,101,0.2)'} 0%, transparent 100%)`
                    }}
                  ></div>
                </div>
                
                {/* Service indicator */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg transition-all duration-400 transform translate-y-0 opacity-100 shadow-lg">
                  <p className="text-black font-golos font-medium text-sm">
                    {activeService.title}
                  </p>
                  <p className="text-gray-600 font-golos text-xs mt-1">
                    {activeService.description}
                  </p>
                </div>
              </div>
            </div>
            {/* img */}
            {/* txt */}
            <div className="txt lg:col-span-6">
              {/* item */}
              <ul className="flex flex-col gap-y-3 lg:gap-y-6 xl:gap-y-7 divide-y divide-[#CACACA]">
                {servicesData.map((service) => (
                  <li
                    key={service.id}
                    onMouseEnter={() => setActiveService(service)}
                    className={`flex items-center justify-between group pb-2 lg:pb-3.5 xl:pb-4 cursor-pointer transition-all duration-200 ${
                      activeService.id === service.id 
                        ? 'bg-primary/8 px-4 py-3 rounded-xl border-l-4 border-primary' 
                        : 'hover:bg-gray-50/30 hover:px-2 hover:py-1 hover:rounded-lg'
                    }`}
                  >
                    <div className="flex items-center gap-x-3 xl:gap-x-5">
                      <span 
                        className={`font-cal font-normal text-sm lg:text-lg xl:text-[20px] leading-[110%] block transition-colors duration-200 ${
                          activeService.id === service.id 
                            ? 'text-primary font-semibold' 
                            : 'text-black group-hover:text-primary'
                        }`}
                      >
                        {service.id}
                      </span>
                      <p 
                        className={`font-cal font-normal text-base lg:text-xl xl:text-[30px] leading-[110%] transition-colors duration-200 ${
                          activeService.id === service.id 
                            ? 'text-primary font-medium' 
                            : 'text-black group-hover:text-primary'
                        }`}
                      >
                        {service.title}
                      </p>
                    </div>
                    <Link
                      href={service.link}
                      className={`w-6 h-6 lg:w-[34px] lg:h-[34px] rounded-full flex items-center justify-center transition-all duration-200 ${
                        activeService.id === service.id 
                          ? 'bg-primary' 
                          : 'bg-transparent group-hover:bg-primary'
                      }`}
                    >
                      <Image 
                        src={arrowTop} 
                        alt="icon" 
                        className={`w-2 lg:w-3 transition-all duration-200 ${
                          activeService.id === service.id ? 'brightness-0 invert' : 'group-hover:brightness-0 group-hover:invert'
                        }`} 
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              {/* item */}
            </div>
            {/* txt */}
          </div>
        </div>
      </section>
    </>
  );
}
