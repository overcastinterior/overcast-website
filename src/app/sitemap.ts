import { MetadataRoute } from 'next';

// Import project data to generate dynamic URLs
import residentialProjects from '@/../lib/data/services/residential-projects.json';
import commercialProjects from '@/../lib/data/services/commercial-projects.json';
import landscapeProjects from '@/../lib/data/services/landscape-projects.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.overcastinteriorltd.com/';

    // Combine all projects
    const allProjects = [
        ...residentialProjects,
        ...commercialProjects,
        ...landscapeProjects,
    ];

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about/`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio/`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact/`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/team/`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/reviews/`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.6,
        },
        {
            url: `${baseUrl}/terms/`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
        {
            url: `${baseUrl}/privacy/`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        },
    ];

    // Service pages
    const servicePages = [
        {
            url: `${baseUrl}/residential-interiors/`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/commercial-interiors/`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/landscape-outdoor-design/`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ];

    // Portfolio project pages
    const portfolioPages = allProjects.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}/`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...servicePages, ...portfolioPages];
}
