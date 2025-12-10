import Badge from "@/components/small/Badge";
import Link from "next/link";
import stepsData from "../../../lib/data/home/steps.json";

const StepsSection = () => {
  return (
    <>
      <section
        className="w-full py-10 mt-[130px] xl:py-20 bg-[#F0F0F0] lg:mt-[250px] bg-fixed"
        style={{
          backgroundImage: "url('/images/step-bg.webp')",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[98%] mx-auto relative -mt-[120px] lg:-mt-[200px]">
          <h2 className="font-cal font-normal text-[90px] lg:text-[220px] xl:text-[300px] text-[#F0F0F0] leading-[110%]">
            overcast
          </h2>
          <div className="w-full -mt-12 lg:absolute lg:right-0 lg:z-10 lg:-top-20 lg:max-w-[50%] aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
            <p className="text-secondary/30 font-golos text-lg">Process Visualization</p>
          </div>
        </div>
        <div className="container lg:pt-5">
          <div className="flex flex-col">
            <div className="w-full">
              <Badge
                text="Our Process"
                options2="!text-black !capitalize"
                options="!border-[#CACACA]"
              />
            </div>
            <div className="right lg:mt-3">
              <h2 className="font-cal font-normal text-[28px] lg:text-[40px] xl:text-[60px] text-black leading-[100%]">
                How We Turn Ideas <br />
                <span className="text-primary"> Into Reality</span>
              </h2>
              <p className="text-secondary font-normal font-golos text-xs lg:text-sm leading-[120%] xl:text-base mt-4 xl:mt-[25px] lg:max-w-[42%] lg:ml-auto xl:mr-8">
                At Overcast Interior, we follow a clear process—from
                consultation to delivery—combining creativity and precision to
                bring your vision to life with ease and excellence.
              </p>
            </div>
          </div>
          <div className="w-full mt-12 lg:-mt-32 grid grid-cols-1 lg:grid-cols-4 lg:gap-x-4 xl:gap-x-6 items-center">
            {stepsData.map((step, index) => (
              <div
                key={step.id}
                className={`group w-full bg-white cursor-pointer transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/10 ${index === 0
                  ? "rounded-t-2xl lg:rounded-2xl"
                  : index === stepsData.length - 1
                    ? "rounded-b-2xl lg:rounded-2xl"
                    : "lg:rounded-2xl"
                  } px-2.5 py-4 ${index % 2 === 1 ? "text-end lg:text-start" : ""
                  } ${step.className}`}
              >
                {/* Step Number */}
                <h4 className="font-cal text-4xl lg:text-5xl xl:text-[62px] text-[#CCCCCC] transition-all duration-300 group-hover:text-primary group-hover:scale-110 transform origin-left">
                  {step.id}
                </h4>

                {/* Step Title */}
                <h5 className="font-cal font-normal text-lg lg:text-2xl xl:text-[28px] text-primary leading-[110%] mb-2 lg:mb-4 xl:mb-5 transition-all duration-300 group-hover:text-black group-hover:font-medium">
                  {step.title}
                </h5>

                {/* Step Description */}
                <p className="font-golos font-normal text-xs lg:text-base text-[#585353] leading-[110%] transition-all duration-300 group-hover:text-gray-700">
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <div className="w-0 h-1 bg-primary mt-4 transition-all duration-500 group-hover:w-full rounded-full"></div>
              </div>
            ))}
          </div>
          <div className="text-center flex justify-center items-center gap-x-2 mt-8 lg:mt-12">
            <p className="font-normal font-golos text-[#585353] text-xs lg:text-sm xl:text-base">
              Start your journey with us today.
            </p>
            <Link
              href="#"
              className="font-normal font-cal text-primary text-xs lg:text-sm xl:text-base underline transition-all duration-300 hover:text-black hover:no-underline hover:bg-primary hover:px-3 hover:py-1 hover:rounded-full"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StepsSection;
