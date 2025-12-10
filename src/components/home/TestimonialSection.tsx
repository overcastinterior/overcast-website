"use client";

import { useState, useEffect } from "react";
import CommonTitle from "@/components/small/CommonTitle";
import testimonials from "../../../lib/data/home/testimonials.json";

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-scroll testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleTestimonialClick = (index: number) => {
    setActiveTestimonial(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 lg:w-5 lg:h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <>
      <section
        className="w-full py-10 xl:py-20 bg-gradient-to-br from-gray-50 to-white"
        style={{
          backgroundImage: "url('/images/testimonial-bg.svg')",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="container">
          {/* Common Title */}
          <CommonTitle
            feat="Client Feedback"
            title="What Our Clients"
            sTitle="Say About Us"
            description="Discover why our clients trust us with their interior design dreams. Read real experiences from satisfied customers who chose Overcast Interior for their projects."
          />
        </div>

        <div className="container mt-16 lg:mt-20 xl:mt-24">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Testimonial Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`transition-all duration-700 ease-in-out ${index === activeTestimonial
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-4 absolute inset-0"
                      }`}
                  >
                    {/* Quote Icon */}
                    <div className="mb-6 lg:mb-8">
                      <svg
                        className="w-12 h-12 lg:w-16 lg:h-16 text-primary/20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4 lg:mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Feedback Text */}
                    <blockquote className="text-[#585353] font-golos font-normal text-sm lg:text-base xl:text-lg leading-[150%] mb-6 lg:mb-8 italic">
                      &quot;{testimonial.feedback}&quot;
                    </blockquote>

                    {/* Client Info */}
                    <div className="border-l-4 border-primary pl-6">
                      <h4 className="font-cal font-normal text-lg lg:text-xl xl:text-[24px] text-black mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="font-golos font-normal text-sm lg:text-base text-primary mb-1">
                        {testimonial.designation}
                      </p>
                      <p className="font-golos font-normal text-xs lg:text-sm text-[#585353] mb-2">
                        {testimonial.company}
                      </p>
                      <div className="flex items-center gap-4 text-xs lg:text-sm text-[#585353]">
                        <span className="flex items-center gap-1">
                          <svg
                            className="w-3 h-3 lg:w-4 lg:h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {testimonial.location}
                        </span>
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                          {testimonial.projectType}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Navigation - Text Only */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              {/* Client Selection List */}
              <div className="space-y-3">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => handleTestimonialClick(index)}
                    className={`w-full text-left p-4 lg:p-5 rounded-xl transition-all duration-300 transform hover:scale-102 ${index === activeTestimonial
                        ? "bg-primary text-white shadow-lg scale-102"
                        : "bg-white hover:bg-gray-50 text-gray-800 shadow-md"
                      }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-cal font-bold text-sm ${index === activeTestimonial
                                ? "bg-white text-primary"
                                : "bg-primary/10 text-primary"
                              }`}
                          >
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </div>
                          <div>
                            <h5
                              className={`font-cal font-normal text-base lg:text-lg ${index === activeTestimonial
                                  ? "text-white"
                                  : "text-black"
                                }`}
                            >
                              {testimonial.name}
                            </h5>
                            <p
                              className={`font-golos text-xs lg:text-sm ${index === activeTestimonial
                                  ? "text-white/90"
                                  : "text-gray-600"
                                }`}
                            >
                              {testimonial.designation}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${index === activeTestimonial
                                ? "bg-white/20 text-white"
                                : "bg-gray-100 text-gray-600"
                              }`}
                          >
                            <svg
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {testimonial.location}
                          </span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${index === activeTestimonial
                                ? "bg-white text-primary"
                                : "bg-primary/10 text-primary"
                              }`}
                          >
                            {testimonial.projectType}
                          </span>
                        </div>
                      </div>
                      {index === activeTestimonial && (
                        <div className="flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-6 lg:mt-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-golos text-xs lg:text-sm text-[#585353]">
                    Client {activeTestimonial + 1} of {testimonials.length}
                  </span>
                  <span className="font-golos text-xs lg:text-sm text-primary">
                    {Math.round(
                      ((activeTestimonial + 1) / testimonials.length) * 100
                    )}
                    %
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${((activeTestimonial + 1) / testimonials.length) * 100
                        }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;