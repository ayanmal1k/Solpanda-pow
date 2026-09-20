'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function PowSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative w-full bg-[#05030a] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#9945FF]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto">
        {/* ========================================================
            CYBERPUNK GLOWING BANNER CONTAINER
            ======================================================== */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-[#00F0FF]/35 bg-[#06030e] shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_30px_rgba(0,240,255,0.2)] hover:border-[#00F0FF]/60 hover:shadow-[0_0_60px_rgba(0,240,255,0.3),0_0_35px_rgba(153,69,255,0.25)] transition-all duration-500"
        >
          {/* Cyberpunk Top & Bottom Neon Edge Accents */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#00F0FF] via-[#9945FF] to-[#00F0FF] opacity-80" />
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#9945FF] via-[#00F0FF] to-[#9945FF] opacity-80" />

          {/* Cyberpunk Corner Angle Cuts */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00F0FF] rounded-tl-2xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#9945FF] rounded-tr-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#9945FF] rounded-bl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00F0FF] rounded-br-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[340px] sm:min-h-[380px] lg:min-h-[320px]">
            
            {/* ======================================================
                LEFT COLUMN: POW IMAGE (Cleanly positioned on left with 10% right fade)
                ====================================================== */}
            <div className="lg:col-span-4 xl:col-span-4 relative h-64 sm:h-72 lg:h-full w-full min-h-[280px] lg:min-h-[340px] overflow-hidden">
              <Image
                src="/pow-img.jfif"
                alt="Sol Panda Proof of Work"
                fill
                priority
                className="object-cover object-left"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
              {/* Soft Right Edge Fade (Fades 10-15% at the right edge into the card background) */}
              <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-r from-transparent to-[#06030e] hidden lg:block" />
              {/* Bottom Edge Fade on mobile */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#06030e] block lg:hidden" />
            </div>

            {/* ======================================================
                CENTER COLUMN: MAIN TEXT & CTA BUTTON (To the right of the image)
                ====================================================== */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center lg:items-center text-center px-6 sm:px-8 py-8 sm:py-10 lg:py-8">
              {/* Top Tagline */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-poppins text-[11px] sm:text-xs md:text-sm font-bold tracking-widest uppercase text-[#c084fc] drop-shadow-[0_0_10px_rgba(192,132,252,0.6)] mb-2.5"
              >
                STRONGER COMMUNITY, BIGGER REWARDS.
              </motion.span>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-taskor-oblique text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[2.9rem] tracking-tight uppercase leading-[1.08] mb-2.5 drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] overflow-visible"
              >
                <span className="inline-block pr-2 text-[#00F0FF] drop-shadow-[0_0_20px_rgba(0,240,255,0.7)]">
                  JOIN
                </span>{' '}
                <span className="inline-block pr-2 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                  SOL PANDA
                </span>{' '}
                <span className="inline-block pr-4 bg-gradient-to-r from-[#c084fc] via-[#9945FF] to-[#DC1FFF] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(153,69,255,0.8)]">
                  POW
                </span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-poppins text-xs sm:text-sm md:text-[15px] text-slate-300 mb-6 max-w-md"
              >
                Be part of the movement. Mine, earn, grow.
              </motion.p>

              {/* Neon Outline Pill CTA Button */}
              <motion.a
                href="https://t.me/solpandaa001"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="group relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden shadow-[0_0_25px_rgba(0,240,255,0.4),0_0_15px_rgba(153,69,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7),0_0_25px_rgba(153,69,255,0.6)] transition-all duration-300"
              >
                {/* Glowing Solana Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] via-[#9945FF] to-[#00FFA3] rounded-full animate-pulse" />

                {/* Inner Button Body */}
                <div className="relative px-7 py-2.5 sm:px-9 sm:py-3 rounded-full bg-[#070410] group-hover:bg-[#070410]/80 transition-colors duration-300 flex items-center gap-3">
                  <span className="font-poppins font-bold text-xs sm:text-sm md:text-base text-white uppercase tracking-wider">
                    JOIN NOW
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#00F0FF] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.a>
            </div>

            {/* ======================================================
                RIGHT COLUMN: SOL PANDA POW QUOTE IN TASKOR OBLIQUE
                ====================================================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3 xl:col-span-3 flex flex-col items-center lg:items-center px-6 pb-8 lg:pb-0 -rotate-3 overflow-visible"
            >
              {/* Neon Cyan Crown Icon on Top */}
              <div className="mb-1">
                <svg
                  className="w-8 h-8 text-[#00F0FF] filter drop-shadow-[0_0_10px_rgba(0,240,255,0.9)] animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                </svg>
              </div>

              {/* Stacked Text in Taskor Oblique */}
              <div className="font-taskor-oblique text-2xl sm:text-3xl lg:text-[2.3rem] text-center leading-[1.05] tracking-tight uppercase overflow-visible">
                <span className="block pr-4 bg-gradient-to-r from-white via-[#d1e8ff] to-[#00F0FF] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                  SOL
                </span>
                <span className="block pr-4 bg-gradient-to-r from-[#c084fc] via-[#9945FF] to-[#DC1FFF] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(153,69,255,0.7)]">
                  PANDA
                </span>
                <span className="block pr-4 bg-gradient-to-r from-[#00F0FF] via-[#00f5ff] to-[#00FFA3] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,163,0.7)]">
                  POW
                </span>
              </div>

              {/* Sweeping Neon Purple/Cyan Brush Underline */}
              <svg
                className="w-28 sm:w-36 h-3 mt-1.5 pointer-events-none overflow-visible"
                viewBox="0 0 140 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 4 8 C 40 3, 95 3, 136 8"
                  stroke="#c084fc"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 6px #c084fc)"
                />
              </svg>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
