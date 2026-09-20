import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { taskor, taskorOblique, poppins, permanentMarker } from '@/lib/fonts'
import { SmoothScroll } from '@/components/smooth-scroll'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: '#9945FF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://solpanda.io'),
  title: {
    default: 'Sol Panda | Leading Solana Community Growth & Raiding Agency',
    template: '%s | Sol Panda',
  },
  description:
    'Sol Panda is the premier Solana growth and community acceleration agency. From coordinated raider teams and 24/7 moderation to strategic shilling and Proof of Work mining, we power the top Web3 ecosystems on Solana.',
  keywords: [
    'Solana',
    'Sol Panda',
    'Solana Raider Team',
    'Web3 Community Management',
    'Crypto Growth Agency',
    'Solana Marketing',
    'Solana Raiding',
    'Proof of Work Solana',
    'Crypto Shilling',
    'Solana Telegram Moderation',
    'Web3 Growth Strategy',
  ],
  authors: [{ name: 'Sol Panda Team', url: 'https://solpanda.io' }],
  creator: 'Sol Panda',
  publisher: 'Sol Panda',
  applicationName: 'Sol Panda',
  category: 'Web3 & Blockchain Services',
  icons: {
    icon: [
      { url: '/solana-sol-icon.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/solana-sol-icon.webp', sizes: '192x192', type: 'image/webp' },
      { url: '/solana-sol-icon.webp', sizes: '512x512', type: 'image/webp' },
    ],
    shortcut: '/solana-sol-icon.webp',
    apple: [
      { url: '/solana-sol-icon.webp', sizes: '180x180', type: 'image/webp' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solpanda.io',
    siteName: 'Sol Panda',
    title: 'Sol Panda | Leading Solana Community Growth & Raiding Agency',
    description:
      'Deploy coordinated raider teams, 24/7 community moderation, and aggressive growth strategies tailored exclusively for Solana projects.',
    images: [
      {
        url: '/hero-bg.avif',
        width: 1200,
        height: 630,
        alt: 'Sol Panda - Solana Community Acceleration Banner',
      },
      {
        url: '/sol shades.png',
        width: 800,
        height: 400,
        alt: 'Sol Panda Cyber Shades',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sol Panda | Leading Solana Community Growth & Raiding Agency',
    description:
      'Deploy coordinated raider teams, 24/7 community moderation, and aggressive growth strategies tailored exclusively for Solana projects.',
    images: [
      {
        url: '/hero-bg.avif',
        alt: 'Sol Panda Hero Banner',
      },
      {
        url: '/sol shades.png',
        alt: 'Sol Panda Cyber Shades',
      },
    ],
    creator: '@sol_panda1',
    site: '@sol_panda1',
  },
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
  alternates: {
    canonical: 'https://solpanda.io',
  },
  other: {
    'geo.region': 'GLOBAL',
    'geo.position': '0;0',
    ICBM: '0, 0',
    'target-audience': 'Web3 Founders, Crypto Enthusiasts, Solana Developers',
    'rating': 'General',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Sol Panda',
    image: [
      'https://solpanda.io/hero-bg.avif',
      'https://solpanda.io/sol shades.png',
    ],
    logo: 'https://solpanda.io/solana-sol-icon.webp',
    url: 'https://solpanda.io',
    description:
      'Premier Web3 community acceleration, coordinated raider teams, 24/7 Telegram/Discord moderation, and growth marketing on Solana.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GLOBAL',
    },
    priceRange: '$$',
    sameAs: [
      'https://x.com/sol_panda1',
      'https://t.me/solpandaa001',
      'https://t.me/Sol_pandaa',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Solana Growth Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Community Management',
            description: 'Keep communities active, organized and welcoming.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Moderation',
            description: 'Maintain a safe, positive and spam-free environment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Raid Management',
            description: 'Organized raids with real engagement and verified accounts.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Growth Strategy & Execution',
            description: 'Data-driven growth strategies for Solana token ecosystems.',
          },
        },
      ],
    },
  }

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${taskor.variable} ${taskorOblique.variable} ${poppins.variable} ${permanentMarker.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#07050e] text-foreground font-poppins antialiased selection:bg-[#9945FF] selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}

