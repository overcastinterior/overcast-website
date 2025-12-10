import Header from "@/components/header";
import AboutSection from "@/components/home/AboutSection";
import Button from "@/components/small/Button";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import ServiceSection from "@/components/home/ServiceSection";
import StatsSection from "@/components/home/StatsSection";
import StepsSection from "@/components/home/StepsSection";
import RecentProject from "@/components/home/RecentProject";
import TeamSection from "@/components/home/TeamSection";
import VideoSection from "@/components/home/VideoSection";
import FaqSection from "@/components/home/FaqSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";

// export as auto for better dev performance
export const dynamic = "auto";

export default function HomePage() {
  return (
    <>
      {/* hero section */}
      <section
        className="relative lg:min-h-screen overflow-hidden  object-fill"
        style={{
          backgroundImage: "url('/images/hero-bg.webp')",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full bg-black/60 xl:pt-[26px] xl:pb-[60px] pt-5 pb-10">
          <div className="container">
            <Header />

            {/* hero start */}
            <HeroSection />
            {/* hero end */}
          </div>
        </div>
      </section>

      {/* about section start */}
      <AboutSection />
      {/* about section end */}

      {/* feature section start */}
      <FeatureSection />
      {/* feature section end */}

      {/* service section start */}
      <ServiceSection />
      {/* service section end */}

      {/* stats section start */}
      <StatsSection />
      {/* stats section end */}

      {/* step section start */}
      <StepsSection />
      {/* step section end */}

      {/* recent projects section start */}
      <RecentProject />
      {/* recent projects section end */}



      {/* team section start */}
      {/* <TeamSection /> */}
      {/* team section end */}

      {/* video play section end */}
      <VideoSection />
      {/* video play section end */}



      {/* testimonial section start */}
      <TestimonialSection />
      {/* testimonial section end */}


      {/* cta section start */}
      <CTASection />
      {/* cta section end */}

      {/* footer section start */}
      <Footer />
      {/* footer section end */}
    </>
  );
}
