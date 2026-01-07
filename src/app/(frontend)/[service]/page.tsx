import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIntro from "@/components/services/ServiceIntro";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceProjects from "@/components/services/ServiceProjects";
import ServiceVideo from "@/components/services/ServiceVideo";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";

// Import service data
import residentialData from "@/../lib/data/services/residential-interiors.json";
import commercialData from "@/../lib/data/services/commercial-interiors.json";
import landscapeData from "@/../lib/data/services/landscape-outdoor-design.json";

// Import project data
import residentialProjects from "@/../lib/data/services/residential-projects.json";
import commercialProjects from "@/../lib/data/services/commercial-projects.json";
import landscapeProjects from "@/../lib/data/services/landscape-projects.json";

export const dynamic = "auto";

// Define valid service slugs
const validServices = [
    "residential-interiors",
    "commercial-interiors",
    "landscape-outdoor-design",
];

// Map slugs to data
const serviceDataMap: Record<string, any> = {
    "residential-interiors": residentialData,
    "commercial-interiors": commercialData,
    "landscape-outdoor-design": landscapeData,
};

const projectDataMap: Record<string, any> = {
    "residential-interiors": residentialProjects,
    "commercial-interiors": commercialProjects,
    "landscape-outdoor-design": landscapeProjects,
};

// Generate static params for all service pages
export async function generateStaticParams() {
    return validServices.map((service) => ({
        service,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({
    params,
}: {
    params: { service: string };
}) {
    const serviceData = serviceDataMap[params.service];

    if (!serviceData) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${serviceData.name} | Overcast Interior`,
        description: serviceData.hero.description,
    };
}

export default function ServicePage({
    params,
}: {
    params: { service: string };
}) {
    // Validate service slug
    if (!validServices.includes(params.service)) {
        notFound();
    }

    const serviceData = serviceDataMap[params.service];
    const projects = projectDataMap[params.service];

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative lg:min-h-screen overflow-hidden object-fill"
                style={{
                    backgroundImage: `url('${serviceData.hero.backgroundImage}')`,
                    backgroundPosition: "bottom center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="w-full h-full bg-black/60 xl:pt-[26px] xl:pb-[60px] pt-5 pb-10">
                    <div className="container">
                        <Header />

                        {/* Hero Content */}
                        <ServiceHero
                            badge={serviceData.hero.badge}
                            title={serviceData.hero.title}
                            titleAccent={serviceData.hero.titleAccent}
                            description={serviceData.hero.description}
                            backgroundImage={serviceData.hero.backgroundImage}
                            serviceName={serviceData.name}
                        />
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <ServiceIntro
                badge={serviceData.intro.badge}
                title={serviceData.intro.title}
                titleAccent={serviceData.intro.titleAccent}
                description={serviceData.intro.description}
                offerings={serviceData.offerings}
            />

            {/* Process Section */}
            <ServiceProcess
                badge={serviceData.process.badge}
                title={serviceData.process.title}
                titleAccent={serviceData.process.titleAccent}
                description={serviceData.process.description}
                steps={serviceData.process.steps}
            />

            {/* Projects Section */}
            <ServiceProjects
                badge="Our Portfolio"
                title={`${serviceData.name}`}
                titleAccent="Projects"
                projects={projects}
            />

            {/* Video Section (only for commercial) */}
            {serviceData.video && (
                <ServiceVideo
                    badge={serviceData.video.badge}
                    title={serviceData.video.title}
                    titleAccent={serviceData.video.titleAccent}
                    description={serviceData.video.description}
                    youtubeUrl={serviceData.video.youtubeUrl}
                />
            )}

            {/* CTA Section */}
            <CTASection />

            {/* Footer Section */}
            <Footer />
        </>
    );
}
