'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative w-full bg-[#06040d] border-b border-white/10 z-50 select-none">
      {/* Subtle top/bottom neon accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9945FF]/40 via-[#00F0FF]/40 to-transparent" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-4 sm:py-5 flex items-center justify-between">
        
        {/* ======================================================
            LEFT: SOLANA LOGO + SOL PANDA HERO TEXT
            ====================================================== */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
        >
          {/* Solana Logo */}
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 p-1.5 rounded-xl bg-[#0f0922] border border-[#9945FF]/40 shadow-[0_0_15px_rgba(153,69,255,0.35)] flex items-center justify-center group-hover:scale-105 group-hover:border-[#00F0FF]/60 transition-all duration-300">
            <Image
              src="/solana-sol-icon.webp"
              alt="Solana Logo"
              width={26}
              height={26}
              className="object-contain"
              priority
            />
          </div>

          {/* Hero Text (SOL PANDA Logo Graphic) */}
          <div className="relative w-36 sm:w-44 md:w-48 h-9 sm:h-10 flex items-center">
            <Image
              src="/hero-text.png"
              alt="SOL PANDA"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 150px, 200px"
              priority
            />
          </div>
        </motion.a>

        {/* ======================================================
            RIGHT: "LET'S TALK" CTA BUTTON
            ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="https://t.me/Sol_pandaa"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 py-2.5 sm:px-7 sm:py-3 rounded-full bg-gradient-to-r from-[#9945FF] via-[#00F0FF] to-[#00FFA3] text-black font-poppins font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.35),0_0_10px_rgba(153,69,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6),0_0_20px_rgba(153,69,255,0.7)] transition-all duration-300"
          >
            <span>LET&apos;S TALK</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

      </div>
    </header>
  )
}
