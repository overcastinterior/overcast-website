'use client';

import arrowTop from "@/../public/images/icons/arrow-top.svg";
import Link from "next/link";
import CommonTitle from "@/components/small/CommonTitle";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import projects from "../../../lib/data/home/projects.json";

const RecentProject = () => {

  return <>
    <section className="w-full py-10 xl:py-20">
      <div className="container">
        {/* common title */}
        <CommonTitle
          feat="Portfolio"
          title="Spaces That"
          sTitle="Speak Style"
          description="Our portfolio is a collection of stories—each design a blend of elegance, functionality, and creativity."
        />
      </div>
      <div className="container-fluid mt-12 md:mt-16 lg:mt-20 xl:mt-24 mx-4 lg:mx-2">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            556: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          className="!overflow-visible recent-projects-slider"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className={`${project.offsetClass}`}>
              <div className="card relative rounded-md lg:rounded-[20px] max-w-[371px]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width="371"
                  height="493"
                  sizes="(max-width: 556px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full max-w-[371px] rounded-md lg:rounded-[20px] h-[493px] object-cover"
                  loading="lazy"
                />
                <div className="absolute top-0 left-0 z-20 w-full h-full p-3 md:p-4 lg:p-5 rounded-md lg:rounded-[20px] flex flex-col justify-between bg-recent-work max-w-[371px]">
                  <ul className="flex items-center gap-x-2">
                    {project.tags.map((tag, tagIndex) => (
                      <li key={tagIndex}>
                        <span className="rounded-full px-4 py-1.5 border border-[#fff] inline-block text-sm lg:text-base font-golos text-white">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <h5 className="font-medium text-base lg:text-lg xl:text-xl text-white font-golos mb-1">
                      {project.title}
                    </h5>
                    <h6 className="font-normal text-sm lg:text-lg text-white font-golos">
                      {project.location}
                    </h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-4 text-center lg:mt-7 xl:mt-10">
          <Link
            href="#"
            className="inline-flex items-center space-x-2 lg:space-x-2.5 rounded-full border border-primary px-2.5 py-2 lg:py-2.5 text-primary font-normal font-cal text-sm lg:text-base xl:pl-4 hover:scale-110 duration-300"
          >
            Explore More
            <span className="w-7 h-7 lg:w-[30px] lg:h-[30px] rounded-full border border-primary items-center justify-center flex ml-2 lg:ml-2.5 p-1">
              <Image src={arrowTop} alt="icon" />
            </span>
          </Link>
        </div>
      </div>
    </section>
    <style jsx global>{`
        .recent-projects-slider .swiper-pagination {
          position: relative !important;
          margin-top: 2rem;
        }
        
        .recent-projects-slider .swiper-pagination-bullet {
          background: rgba(0, 0, 0, 0.2);
          opacity: 1;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .recent-projects-slider .swiper-pagination-bullet-active {
          background: #2563eb;
          transform: scale(1.2);
        }
        
        .recent-projects-slider .swiper-slide {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .recent-projects-slider .swiper-slide-active {
          transform: scale(1.02);
        }
      `}</style>
  </>
};

export default RecentProject