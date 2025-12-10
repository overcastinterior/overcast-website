"use client";

import { useState } from "react";
import arrowLeft from "@/../public/images/icons/arrow-left.svg";
import CommonTitle from "@/components/small/CommonTitle";
import Image from "next/image";
import Link from "next/link";
import teamMembers from "../../../lib/data/home/team.json";

const TeamSection = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  return (
    <>
      <section
        className="w-full py-10 xl:py-20"
        style={{
          backgroundImage: "url('/images/team-bg.svg')",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="container">
          {/* common title */}
          <CommonTitle
            feat="Meet Our Design Team"
            title="The Creative Minds"
            sTitle="Behind Overcast"
            description="Our passionate team of architects, designers, and managers transforms ideas into exceptional spaces—combining creativity, expertise, and personal care in every project."
          />
        </div>
        <div className="container mt-20 lg:mt-24 xl:mt-28">
          <div className="w-full grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-y-0 lg:gap-x-10 xl:gap-x-14 lg:items-center">
            {/* img */}
            <div className="img lg:col-span-6 relative overflow-hidden">
              <div className="relative lg:max-w-[60%] lg:ml-auto">
                {teamMembers.map((member, index) => (
                  <div
                    key={member.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${index === activeTeamMember
                      ? "opacity-100 scale-100 translate-x-0"
                      : "opacity-0 scale-105 translate-x-4"
                      }`}
                  >
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.designation}`}
                      width="396"
                      height="452"
                      className="w-full rounded-2xl xl:rounded-[25px] object-cover h-[452px]"
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                ))}
                {/* Base image for sizing */}
                <Image
                  src={teamMembers[0].image}
                  alt="Manageing Directory"
                  width="396"
                  height="452"
                  className="w-full rounded-2xl xl:rounded-[25px] opacity-0 h-[452px]"
                />

                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 rounded-2xl xl:rounded-[25px] pointer-events-none transition-opacity duration-500"></div>
              </div>
            </div>
            {/* img */}
            {/* txt */}
            <div className="txt lg:col-span-6">
              {/* item */}
              <ul className="flex flex-col gap-y-3 lg:gap-y-5 xl:gap-y-6 divide-y divide-[#CACACA]">
                {teamMembers.map((member, index) => (
                  <li
                    key={member.id}
                    className={`flex items-center justify-between group pb-3 lg:pb-5 xl:pb-6 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent hover:-mx-4 hover:px-4 hover:rounded-lg ${index === activeTeamMember
                      ? "bg-gradient-to-r from-primary/10 to-transparent -mx-4 px-4 rounded-lg"
                      : ""
                      }`}
                    onMouseEnter={() => setActiveTeamMember(index)}
                  >
                    <div className="flex items-center gap-x-3 xl:gap-x-5">
                      <div className="flex items-center gap-x-2 relative">
                        <Link
                          href="#"
                          className={`absolute -left-1 anim -top-1 z-20 w-6 h-6 lg:w-[34px] lg:h-[34px] rounded-full bg-primary items-center justify-center transition-all duration-300 transform ${index === activeTeamMember ||
                            "group-hover:flex group-hover:scale-100"
                            } ${index === activeTeamMember
                              ? "flex scale-100"
                              : "hidden scale-75"
                            }`}
                        >
                          <Image
                            src={arrowLeft}
                            alt="icon"
                            className="w-2 lg:w-3 transition-transform duration-200 group-hover:rotate-0"
                          />
                        </Link>
                        <span
                          className={`font-cal font-normal text-sm lg:text-lg xl:text-[20px] leading-[110%] block transition-all duration-300 ${index === activeTeamMember
                            ? "text-primary scale-105"
                            : "text-black group-hover:text-primary group-hover:scale-105"
                            }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p
                        className={`font-cal font-normal text-base lg:text-xl xl:text-[30px] leading-[110%] transition-all duration-300 ${index === activeTeamMember
                          ? "text-primary scale-105"
                          : "text-black group-hover:text-primary group-hover:scale-105"
                          }`}
                      >
                        {member.name}
                      </p>
                    </div>
                    <div className="block">
                      <p
                        className={`font-golos text-sm lg:text-base transition-colors duration-300 ${index === activeTeamMember
                          ? "text-primary/80"
                          : "text-[#585353] group-hover:text-primary/80"
                          }`}
                      >
                        {member.designation}
                      </p>
                    </div>
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
};

export default TeamSection;
