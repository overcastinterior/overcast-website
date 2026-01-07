import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProjectHero from "@/components/portfolio/ProjectHero";
import ProjectInfo from "@/components/portfolio/ProjectInfo";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import ProjectVideo from "@/components/portfolio/ProjectVideo";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";

// Import all project data
import residentialProjects from "@/../lib/data/services/residential-projects.json";
import commercialProjects from "@/../lib/data/services/commercial-projects.json";
import landscapeProjects from "@/../lib/data/services/landscape-projects.json";

export const dynamic = "auto";

// Combine all projects
const allProjects = [
    ...residentialProjects,
    ...commercialProjects,
    ...landscapeProjects,
];

// Generate static params for all projects
export async function generateStaticParams() {
    return allProjects.map((project) => ({
        slug: project.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const project = allProjects.find((p) => p.slug === params.slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Overcast Interior Portfolio`,
        description: project.description,
    };
}

export default function ProjectDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    // Find the project by slug
    const project = allProjects.find((p) => p.slug === params.slug);

    // Return 404 if project not found
    if (!project) {
        notFound();
    }

    return (
        <>
            {/* Header with Hero Background */}
            <section className="relative">
                <div className="absolute top-0 left-0 right-0 z-50 xl:pt-[26px] pt-5 px-4 lg:px-8">
                    <div className="container">
                        <Header />
                    </div>
                </div>

                {/* Hero Section */}
                <ProjectHero
                    title={project.title}
                    category={project.category}
                    image={project.image}
                    location={project.location}
                    tags={project.tags}
                    completionDate={project.completionDate}
                />
            </section>

            {/* Project Info Section */}
            <ProjectInfo
                clientName={project.clientName}
                description={project.description}
                duration={project.duration}
                tags={project.tags}
                testimonial={project.testimonial}
            />

            {/* Project Gallery Section */}
            <ProjectGallery images={project.images} projectTitle={project.title} />

            {/* Project Video Section (conditional) */}
            {project.videoUrl && (
                <ProjectVideo videoUrl={project.videoUrl} projectTitle={project.title} />
            )}

            {/* CTA Section */}
            <CTASection />

            {/* Footer Section */}
            <Footer />
        </>
    );
}
