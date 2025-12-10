// app/layout.tsx or page.tsx
import { Metadata } from 'next'

export const homePageMetaData: Metadata = {

  // Basic SEO
  title: 'Overcast Interior',
  description: 'Description for search engines',
  keywords: ['keyword1', 'keyword2', 'keyword3'],

  // Authors & Generator
  authors: [{ name: 'Akram', url: 'http://overcastinteriorltd.com/' }],
  creator: 'Akram',
  publisher: 'Overcast Interior',
  generator: 'Next.js',

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: 'Overcast Interior',
    description: 'Description for social media',
    url: 'http://overcastinteriorltd.com/',
    siteName: 'Overcast Interior',
    images: [
      {
        url: '/og-image.jpg', // 1200x630px recommended
        width: 1200,
        height: 630,
        alt: 'Alt text for image',
      }
    ],
    locale: 'en_US',
    type: 'website', // or 'article', 'product', etc.
  },

  // Twitter/X
  twitter: {
    card: 'summary_large_image', // or 'summary'
    title: 'Your Page Title',
    description: 'Description for Twitter',
    creator: '@yourusername',
    site: '@yoursite',
    images: ['/twitter-image.jpg'], // 1200x600px recommended
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
    canonical: 'https://yoursite.com/current-page',
    languages: {
      'en-US': 'https://yoursite.com/en',
      'es-ES': 'https://yoursite.com/es',
    },
  },

  // Icons & Manifest
  icons: {
    icon: '/images/favicon.svg',
    apple: '/images/favicon.svg',
    shortcut: '/images/favicon.svg',
  },
  manifest: '/images/site.webmanifest',

  // Verification (Google, Bing, etc.)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },

  // Additional Meta Tags
  other: {
    'theme-color': '#C49D5A',
    'color-scheme': 'light',
  },
}