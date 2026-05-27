import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import {
  NIGHT_SNACK_STORE_URL,
  OG_IMAGE,
  SEO_KEYWORDS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  SOCIAL_PROFILES,
} from '@/lib/seo'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Daksh Sharma',
  },
  description: SITE_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: 'Daksh Sharma', url: SITE_URL }],
  creator: 'Daksh Sharma',
  publisher: 'Daksh Sharma',
  applicationName: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: SITE_NAME,
    images: [OG_IMAGE],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/IMG_2043-modified.png',
        type: 'image/png',
      },
    ],
    shortcut: '/IMG_2043-modified.png',
    apple: '/IMG_2043-modified.png',
  },
  manifest: '/site.webmanifest',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Daksh Sharma',
      url: SITE_URL,
      image: `${SITE_URL}${OG_IMAGE.url}`,
      jobTitle: 'Cybersecurity Engineer and Software Engineer',
      description: SITE_DESCRIPTION,
      email: 'mailto:daksh20031231@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangalore',
        addressCountry: 'IN',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'JAIN University',
      },
      knowsAbout: [
        'Cybersecurity',
        'Penetration Testing',
        'Red Teaming',
        'AI Security',
        'Java Development',
        'Software Engineering',
        'Network Security',
        'Vulnerability Assessment',
      ],
      sameAs: SOCIAL_PROFILES,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: 'en-IN',
      publisher: {
        '@id': `${SITE_URL}/#person`,
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      isPartOf: {
        '@id': `${SITE_URL}/#website`,
      },
      mainEntity: {
        '@id': `${SITE_URL}/#person`,
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${NIGHT_SNACK_STORE_URL}#software`,
      name: 'Night Snack Store',
      url: NIGHT_SNACK_STORE_URL,
      applicationCategory: 'FoodDeliveryApplication',
      operatingSystem: 'Web',
      description:
        'Night Snack Store is a full-stack hostel food delivery application built with Next.js, NextAuth, Google OAuth, MongoDB, and UPI/cash checkout.',
      creator: {
        '@id': `${SITE_URL}/#person`,
      },
      sameAs: NIGHT_SNACK_STORE_URL,
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
