"use client";

import { useState } from "react";
import CommonTitle from "@/components/small/CommonTitle";
import faqData from "../../../lib/data/home/faq.json";

const FaqSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <>
      <section
        className="w-full py-10 xl:py-20"
        style={{
          backgroundImage: "url('/images/faq-bg.svg')",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="container">
          {/* Common Title */}
          <CommonTitle
            feat="Frequently Asked Questions"
            title="Everything You Need"
            sTitle="to Know"
            description="Get answers to the most common questions about our interior design services, process, timelines, and more to help you make informed decisions."
          />
        </div>

        <div className="container mt-16 lg:mt-20 xl:mt-24">
          <div className="w-full max-w-4xl mx-auto">
            {/* FAQ Accordion */}
            <div className="space-y-4 lg:space-y-6">
              {faqData.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`group bg-white rounded-2xl lg:rounded-[25px] border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${index === activeAccordion
                      ? "shadow-xl border-primary/20 bg-gradient-to-br from-white to-primary/5"
                      : "hover:border-gray-200"
                    }`}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full cursor-pointer px-6 lg:px-8 py-6 lg:py-8 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 lg:gap-6 flex-1">
                        {/* Question Number */}
                        <div
                          className={`flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 flex items-center justify-center font-cal font-normal text-sm lg:text-base transition-all duration-300 ${index === activeAccordion
                              ? "bg-primary border-primary text-white scale-110"
                              : "border-gray-300 text-gray-600 group-hover:border-primary group-hover:text-primary"
                            }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        {/* Question Text */}
                        <h3
                          className={`font-cal font-normal text-base lg:text-xl xl:text-[24px] leading-[120%] transition-all duration-300 ${index === activeAccordion
                              ? "text-primary"
                              : "text-black group-hover:text-primary"
                            }`}
                        >
                          {faq.question}
                        </h3>
                      </div>

                      {/* Accordion Icon */}
                      <div
                        className={`flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 transform ${index === activeAccordion
                            ? "bg-primary border-primary rotate-180 scale-110"
                            : "border-gray-300 group-hover:border-primary"
                          }`}
                      >
                        <svg
                          className={`w-3 h-3 lg:w-4 lg:h-4 transition-colors duration-300 ${index === activeAccordion
                              ? "text-white"
                              : "text-gray-600 group-hover:text-primary"
                            }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${index === activeAccordion
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                      <div className="pl-12 lg:pl-16 border-l-2 border-primary/20">
                        <p className="font-golos font-normal text-sm lg:text-base text-[#585353] leading-[140%]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 lg:mt-16 p-8 lg:p-10 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl lg:rounded-[25px] border border-primary/10">
              <h4 className="font-cal font-normal text-xl lg:text-2xl xl:text-[28px] text-black mb-4">
                Still Have Questions?
              </h4>
              <p className="font-golos font-normal text-sm lg:text-base text-[#585353] mb-6 max-w-2xl mx-auto">
                Our team is here to help. Get in touch for personalized answers and free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-primary hover:bg-primary/90 text-white font-cal font-normal text-sm lg:text-base px-6 lg:px-8 py-3 lg:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                  <span className="flex items-center gap-2">
                    Book Free Consultation
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
                <button className="group cursor-pointer border-2 border-primary text-primary hover:bg-primary hover:text-white font-cal font-normal text-sm lg:text-base px-6 lg:px-8 py-3 lg:py-4 rounded-full transition-all duration-300 hover:scale-105">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;