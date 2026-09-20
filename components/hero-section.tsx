'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function HeroSection() {
  const serviceItems = [
    'COMMUNITY',
    'MODERATION',
    'RAIDS',
    'SHILLING',
    'GROWTH STRATEGY',
    'COMMUNITY GROWTH',
  ]

  return (
    <section className="relative w-full min-h-[100svh] md:min-h-screen flex flex-col justify-between md:justify-center overflow-hidden bg-[#06040d]">
      {/* ========================================================
          BACKGROUND IMAGES (End-to-End, Full Width Bleed)
          ======================================================== */}
      {/* Desktop Background (1920x1280) */}
      <div className="absolute inset-0 hidden md:block select-none pointer-events-none">
        <Image
          src="/hero-bg.avif"
          alt="Solana Panda Cyberpunk World"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-center 2xl:object-center"
        />
        {/* Subtle vignette / depth accent on desktop left side for ultra crisp typography */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#06040d]/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Mobile Background (Character at bottom, top empty for text) */}
      <div className="absolute inset-0 block md:hidden select-none pointer-events-none">
        <Image
          src="/hero-bg-mobile.avif"
          alt="Solana Panda Mobile Background"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-bottom"
        />
        {/* Soft top gradient to ensure text readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06040d]/80 via-[#06040d]/30 to-transparent pointer-events-none h-2/3" />
      </div>

      {/* Ambient Neon Glow Overlay Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#9945FF]/15 rounded-full blur-3xl pointer-events-none" />

      {/* ========================================================
          HERO CONTENT CONTAINER (End-to-End Responsive Padding)
          ======================================================== */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-start md:justify-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 pt-8 sm:pt-12 md:pt-0 pb-64 sm:pb-72 md:pb-0">
        <div className="w-full max-w-xl lg:max-w-2xl xl:max-w-2xl 2xl:max-w-3xl flex flex-col items-start space-y-4 sm:space-y-5 md:space-y-6">
          
          {/* 1. Sol Panda Hero Logo Image */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-52 sm:w-64 md:w-72 lg:w-84 xl:w-96 aspect-[380/130]">
              <Image
                src="/hero-text.png"
                alt="SOL PANDA"
                fill
                priority
                sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 384px"
                className="object-contain object-left filter drop-shadow-[0_0_20px_rgba(0,240,255,0.45)] drop-shadow-[0_0_40px_rgba(153,69,255,0.35)] transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* 2. Main Heading: SOLANA COMMUNITY & GROWTH */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="flex flex-col overflow-visible"
          >
            <h1 className="font-taskor-oblique text-[1.3rem] sm:text-2xl md:text-3xl lg:text-[2.6rem] xl:text-[2.85rem] leading-[1.18] tracking-tight uppercase overflow-visible">
              <span className="inline-block pr-3 sm:pr-4 py-0.5 bg-gradient-to-r from-[#00f5ff] via-[#00f0ff] to-[#00ffa3] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.45)]">
                SOLANA COMMUNITY &amp;
              </span>
              <br />
              <span className="inline-block pr-5 sm:pr-7 py-0.5 bg-gradient-to-r from-[#00f5ff] via-[#00f0ff] to-[#00ffa3] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.45)]">
                GROWTH
              </span>
            </h1>
          </motion.div>

          {/* 3. Sub-tagline: BUILD THE COMMUNITY. MOVE ONCHAIN. */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          >
            <h2 className="font-poppins font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-[#00E5FF] tracking-wide uppercase drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
              BUILD THE COMMUNITY.
              <br />
              MOVE ONCHAIN.
            </h2>
          </motion.div>

          {/* 4. Pipe-separated Services List */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="w-full"
          >
            <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1.5 text-[11px] sm:text-xs md:text-[13px] font-poppins font-medium tracking-wider text-slate-200 uppercase">
              {serviceItems.map((item, index) => (
                <div key={item} className="flex items-center gap-2.5 sm:gap-3">
                  <span className="hover:text-[#00F0FF] transition-colors duration-200 cursor-default">
                    {item}
                  </span>
                  {index < serviceItems.length - 1 && (
                    <span className="text-white/40 font-light select-none">|</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5. Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
            className="font-poppins text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-lg lg:max-w-xl drop-shadow-sm"
          >
            We help Web3 projects build, grow and activate communities on Solana. From engagement to real growth — the Panda way.
          </motion.p>

          {/* 6. CTA Button: JOIN THE PANDA NETWORK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
            className="pt-2 sm:pt-3"
          >
            <a
              href="#join"
              className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-poppins font-bold text-xs sm:text-sm tracking-wider uppercase text-[#06040d] overflow-hidden transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(90deg, #9945FF 0%, #7B2CBF 40%, #00F0FF 100%)',
                boxShadow: '0 0 25px rgba(153, 69, 255, 0.65), 0 0 45px rgba(0, 240, 255, 0.4)',
              }}
            >
              {/* Shimmer sweep effect on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              
              <span className="relative z-10 flex items-center gap-2">
                JOIN THE PANDA NETWORK
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
