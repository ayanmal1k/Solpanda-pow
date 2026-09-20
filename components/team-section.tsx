'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, ArrowRight } from 'lucide-react'

export default function TeamSection() {
  return (
    <section className="relative w-full bg-[#05030a] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 overflow-hidden select-none">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-[#9945FF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[#00F0FF]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto">
        {/* Main Banner Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-gradient-to-r from-[#0c0819]/95 via-[#080512]/95 to-[#0b0718]/95 border border-white/10 p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_30px_rgba(153,69,255,0.15)] overflow-hidden"
        >
          {/* Subtle Cyberpunk/Grunge Overlay Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00F0FF]/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#9945FF]/10 via-transparent to-transparent pointer-events-none" />

          {/* Top and bottom subtle accent edge lines */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9945FF]/50 via-[#00F0FF]/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00F0FF]/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
            
            {/* ======================================================
                LEFT: TEAM POLAROID IMAGE
                ====================================================== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.03, transition: { duration: 0.3 } }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 xl:col-span-4 flex justify-center lg:justify-start"
            >
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-full max-w-[340px] aspect-square drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
                <Image
                  src="/team-image.png"
                  alt="Solana Raider Team Panda"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 340px"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* ======================================================
                CENTER: MAIN INFO & BADGES
                ====================================================== */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left">
              {/* Slanted Brush Tag: NEED A TEAM */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative inline-block mb-3 sm:mb-4"
              >
                <div className="relative bg-[#c084fc] text-black font-taskor-oblique px-4 py-1 sm:px-5 sm:py-1.5 text-sm sm:text-base tracking-wider uppercase font-bold transform -rotate-2 rounded-sm shadow-[0_4px_14px_rgba(192,132,252,0.4)]">
                  NEED A TEAM
                  {/* Jagged brush cut styling */}
                  <div className="absolute -left-1.5 top-0 bottom-0 w-2 bg-[#c084fc] skew-x-12" />
                  <div className="absolute -right-1.5 top-0 bottom-0 w-2 bg-[#c084fc] -skew-x-12" />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-taskor-oblique text-2xl sm:text-3xl md:text-4xl xl:text-[2.6rem] leading-[1.1] tracking-tight uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-4"
              >
                DEPLOY A COORDINATED<br />
                <span className="text-white">SOLANA RAIDER TEAM.</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-poppins text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-300/90 mb-6 max-w-lg"
              >
                For projects that need more than one operator,<br className="hidden sm:inline" />
                I can coordinate a massive raider team with verified<br className="hidden sm:inline" />
                X accounts for campaign execution.
              </motion.p>

              {/* Glowing Teal Underline Divider */}
              <div className="w-20 h-[2px] bg-gradient-to-r from-[#00F0FF] to-transparent rounded-full mb-6" />

              {/* 3 Stats & Feature Badges in a Row */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-5"
              >
                {/* 50+ RAIDERS */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00F0FF] flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.6)]">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                  <span className="font-poppins font-bold text-xs sm:text-sm text-slate-200 uppercase tracking-wider">
                    50+ RAIDERS
                  </span>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block w-px h-6 bg-white/20" />

                {/* VERIFIED X */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0d091a] border border-[#00F0FF]/40 flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00F0FF]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <span className="font-poppins font-bold text-xs sm:text-sm text-slate-200 uppercase tracking-wider">
                    VERIFIED X
                  </span>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block w-px h-6 bg-white/20" />

                {/* SOLANA NATIVE */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0d091a] border border-[#9945FF]/50 flex items-center justify-center shadow-[0_0_12px_rgba(153,69,255,0.4)] p-1.5">
                    <Image
                      src="/solana-sol-icon.webp"
                      alt="Solana Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-poppins font-bold text-xs sm:text-sm text-slate-200 uppercase tracking-wider">
                    SOLANA NATIVE
                  </span>
                </div>
              </motion.div>
            </div>

            {/* ======================================================
                RIGHT: GRAFFITI QUOTE & CTA BUTTON
                ====================================================== */}
            <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-center lg:items-end justify-between gap-8 h-full">
              {/* Graffiti Styled Quote with Neon Cyan Crown */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center lg:items-start relative group overflow-visible -rotate-2"
              >
                {/* Neon Cyan Hand-drawn Crown Icon */}
                <div className="mb-2 -ml-1">
                  <svg
                    className="w-8 h-8 text-[#00F0FF] filter drop-shadow-[0_0_12px_rgba(0,240,255,0.9)] animate-pulse transform -rotate-12"
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

                {/* Stacked Graffiti Quote - Full width with ample padding so no letter ever clips */}
                <div className="font-marker text-2xl sm:text-3xl md:text-[2.1rem] text-white tracking-wide uppercase leading-[1.08] text-center lg:text-left drop-shadow-[0_0_20px_rgba(255,255,255,0.35)] overflow-visible">
                  <span className="inline-block pr-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    MORE
                  </span>
                  <br />
                  <span className="inline-block pr-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    HANDS
                  </span>
                  <br />
                  <span className="inline-block pr-6 bg-gradient-to-r from-white via-[#d1e8ff] to-[#00F0FF] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                    BIGGER
                  </span>
                  <br />
                  <span className="inline-block pr-6 bg-gradient-to-r from-[#00F0FF] to-[#00FFA3] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,163,0.6)]">
                    IMPACT
                  </span>
                </div>

                {/* Sweeping Cyan Underline Stroke */}
                <svg
                  className="w-36 sm:w-44 h-4 mt-2 pointer-events-none overflow-visible"
                  viewBox="0 0 160 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 4 10 C 45 4, 105 2, 156 10"
                    stroke="#00F0FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    filter="drop-shadow(0 0 8px #00F0FF)"
                  />
                </svg>
              </motion.div>

              {/* Solana Gradient Pill CTA Button */}
              <motion.a
                href="https://t.me/Sol_pandaa"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-gradient-to-r from-[#9945FF] via-[#00F0FF] to-[#00FFA3] text-black font-poppins font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(0,240,255,0.4),0_0_15px_rgba(153,69,255,0.5)] hover:shadow-[0_0_45px_rgba(0,240,255,0.7),0_0_25px_rgba(153,69,255,0.8)] transition-all duration-300"
              >
                <span>WORK WITH US</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
