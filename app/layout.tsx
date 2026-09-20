import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { taskor, taskorOblique, poppins } from '@/lib/fonts'
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

export const metadata: Metadata = {
  title: 'Solana Panda | Solana Community & Growth',
  description: 'We help Web3 projects build, grow and activate communities on Solana. From engagement to real growth — the Panda way.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${taskor.variable} ${taskorOblique.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen bg-[#07050e] text-foreground font-poppins antialiased selection:bg-[#9945FF] selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
