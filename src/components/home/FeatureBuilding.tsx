import Image from "next/image";
import longHouse from "@/../public/images/long-house.webp";

const FeatureBuilding = () => {
  return (
    <>
      <section className="w-full py-16 lg:py-24 xl:py-32 overflow-hidden relative">


        <div className="container">
          <div className="w-full text-center relative">
            {/* Enhanced house image with better positioning */}
            <div className="relative z-20 transform hover:scale-105 transition-transform duration-700 ease-out">
              <Image
                src={longHouse}
                alt="Overcast Interior Design - Modern Architecture"
                className="w-full mx-auto lg:max-w-[70%] drop-shadow-2xl"
                priority
              />
            </div>

            {/* Enhanced main title with glowing border effect - positioned behind image */}
            <div className="absolute left-0 top-0 w-full z-10">
              <h2 className="font-cal font-normal text-[90px] lg:text-[220px] xl:text-[300px] text-gradient leading-[70%] tracking-tight ">
                overcast
              </h2>

            </div>

            {/* Subtitle with enhanced typography */}
            <div className="mt-8 lg:mt-12 max-w-2xl mx-auto relative z-20">
              <p className="text-base md:text-lg lg:text-xl text-secondary/80 font-golos font-light leading-relaxed tracking-wide">
                Crafting exceptional spaces that blend
                <span className="text-primary font-medium"> innovation </span>
                with timeless
                <span className="text-primary font-medium"> elegance</span>
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeatureBuilding