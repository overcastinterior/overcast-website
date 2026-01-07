// app/layout.tsx or page.tsx
import { Metadata } from 'next'

export const homePageMetaData: Metadata = {

  // Metadata Base URL (fixes social media image resolution warning)
  metadataBase: new URL('https://www.overcastinteriorltd.com'),

  // Basic SEO
  title: 'Overcast Interior',
  description: 'Best Interior Design Company in Bangladesh',
  keywords: ['interior design', 'interior design company', 'interior design services', 'interior design company in', 'interior design company in ', 'interior design company in ', 'interior design company in ', 'interior design company in ', 'interior design company in ', 'interior design company in '],

  // Authors & Generator
  authors: [{ name: 'Nayan Akram', url: 'https://nayan-akram.vercel.app/' }],
  creator: 'Nayan Akram',
  publisher: 'Overcast Interior',
  generator: 'Next.js',

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: 'Overcast Interior',
    description: 'Best Interior Design Company in Bangladesh',
    url: 'https://www.overcastinteriorltd.com/',
    siteName: 'Overcast Interior',
    images: [
      {
        url: '/images/open-graph.jpg', // JPG is required for best WhatsApp compatibility
        width: 1200,
        height: 630,
        alt: 'Overcast Interior',
        type: 'image/jpeg',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter/X
  twitter: {
    card: 'summary_large_image',
    title: 'Overcast Interior',
    description: 'Best Interior Design Company in Bangladesh',
    creator: '@OvercastInterior',
    site: '@OvercastInterior',
    images: ['/images/open-graph.jpg'],
  },

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: 'https://www.overcastinteriorltd.com/',
    languages: {
      'en-US': 'https://www.overcastinteriorltd.com/en',
    },
  },

  // Icons & Manifest
  icons: {
    icon: '/images/favicon.svg',
    apple: '/images/favicon.svg',
    shortcut: '/images/favicon.svg',
  },
  manifest: '/images/site.webmanifest',

  // Additional Meta Tags
  other: {
    'theme-color': '#C49D5A',
    'color-scheme': 'light',
  },
}