import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Overcast Interior - Premium Interior Design',
        short_name: 'Overcast Interior',
        description: 'Transform your space with Overcast Interior. Expert residential, commercial, and landscape design services.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#C49D5A',
        icons: [
            {
                src: '/images/icons/favicon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    };
}
