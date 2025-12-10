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
            <div className="img lg:col-span-6 relative overflow-hidden rounded-2xl xl:rounded-[25px] aspect-[4/3]">
              <div className="relative w-full h-full">
                {/* Dynamic Image Display with smooth transitions */}
                {servicesData.map((service) => (
                  <div
                    key={service.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeService.id === service.id ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-2xl xl:rounded-[25px]"
                      priority={service.id === '01'}
                    />
                    {/* Smooth fade overlay for image transitions */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-2xl xl:rounded-[25px]"
                      style={{
                        background: `linear-gradient(45deg, ${service.id === '01' ? 'rgba(196,157,90,0.2)' :
                          service.id === '02' ? 'rgba(59,130,246,0.2)' :
                            service.id === '03' ? 'rgba(34,197,94,0.2)' :
                              service.id === '04' ? 'rgba(168,85,247,0.2)' :
                                service.id === '05' ? 'rgba(239,68,68,0.2)' :
                                  'rgba(245,101,101,0.2)'} 0%, transparent 100%)`
                      }}
                    ></div>
                  </div>
                ))}

                {/* Service indicator */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg transition-all duration-500 z-20 shadow-lg">
                  <p className="text-black font-golos font-medium text-sm transition-all duration-500">
                    {activeService.title}
                  </p>
                  <p className="text-gray-600 font-golos text-xs mt-1 transition-all duration-500">
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
                    className={`flex items-center justify-between group pb-2 lg:pb-3.5 xl:pb-4 px-4 py-3 rounded-xl border-l-4 cursor-pointer transition-all duration-300 ease-in-out ${activeService.id === service.id
                        ? 'bg-primary/10 border-primary shadow-sm'
                        : 'bg-transparent border-transparent hover:bg-gray-50/50 hover:border-gray-200'
                      }`}
                  >
                    <div className="flex items-center gap-x-3 xl:gap-x-5">
                      <span
                        className={`font-cal font-normal text-sm lg:text-lg xl:text-[20px] leading-[110%] block transition-all duration-300 ${activeService.id === service.id
                            ? 'text-primary font-semibold'
                            : 'text-black group-hover:text-primary'
                          }`}
                      >
                        {service.id}
                      </span>
                      <p
                        className={`font-cal font-normal text-base lg:text-xl xl:text-[30px] leading-[110%] transition-all duration-300 ${activeService.id === service.id
                            ? 'text-primary font-medium'
                            : 'text-black group-hover:text-primary'
                          }`}
                      >
                        {service.title}
                      </p>
                    </div>
                    <Link
                      href={service.link}
                      className={`w-6 h-6 lg:w-[34px] lg:h-[34px] rounded-full flex items-center justify-center transition-all duration-300 ${activeService.id === service.id
                          ? 'bg-primary scale-110'
                          : 'bg-gray-200 group-hover:bg-primary group-hover:scale-110'
                        }`}
                    >
                      <Image
                        src={arrowTop}
                        alt="icon"
                        className={`w-2 lg:w-3 transition-all duration-300 ${activeService.id === service.id ? 'brightness-0 invert' : 'group-hover:brightness-0 group-hover:invert'
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
