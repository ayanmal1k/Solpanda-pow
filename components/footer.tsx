'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Send, MessageSquare } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#040209] py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 overflow-hidden border-t border-white/10 select-none">
      {/* Background Ambient Solana Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#9945FF]/20 via-[#00F0FF]/20 to-[#00FFA3]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#9945FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#00F0FF]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top subtle neon divider gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9945FF]/50 via-[#00F0FF]/50 to-transparent" />

      <div className="max-w-[1600px] mx-auto">
        {/* ========================================================
            MAIN 3-COLUMN FOOTER LAYOUT
            Left: Solana Logo + Hero Text (SOL PANDA)
            Middle: BIG SOL SHADES with Glowing Solana Gradient
            Right: X + 2 Telegram Icons (Channel & DM) + "LET'S TALK" Button Below
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          
          {/* ======================================================
              LEFT COLUMN: SOLANA LOGO + SOL PANDA HERO TEXT
              ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 xl:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Logo Lockup: Solana Logo on left of SOL PANDA hero text */}
            <div className="flex items-center gap-4 sm:gap-5 mb-5">
              {/* Solana Logo */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 p-2 rounded-2xl bg-[#0f0922] border border-[#9945FF]/40 shadow-[0_0_20px_rgba(153,69,255,0.4)] flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                <Image
                  src="/solana-sol-icon.webp"
                  alt="Solana Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>

              {/* Hero Text (SOL PANDA Logo Graphic) */}
              <div className="relative w-48 sm:w-56 md:w-60 h-14 sm:h-16 flex items-center">
                <Image
                  src="/hero-text.png"
                  alt="SOL PANDA"
                  fill
                  className="object-contain object-left"
                  sizes="240px"
                />
              </div>
            </div>
          </motion.div>

          {/* ======================================================
              MIDDLE COLUMN: BIG SOL SHADES WITH VIBRANT GLOW
              ====================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 xl:col-span-4 flex items-center justify-center relative py-4 lg:py-0"
          >
            {/* Pulsating Solana Gradient Aura Behind Shades */}
            <div className="absolute inset-0 max-w-[380px] max-h-[180px] mx-auto my-auto rounded-full bg-gradient-to-r from-[#9945FF] via-[#00F0FF] to-[#00FFA3] opacity-35 blur-3xl animate-pulse pointer-events-none" />

            {/* Floating Sol Shades Graphic */}
            <motion.div
              whileHover={{ scale: 1.08, rotate: [0, -2, 2, 0], transition: { duration: 0.4 } }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="relative w-72 sm:w-80 md:w-96 lg:w-[380px] xl:w-[420px] aspect-[2.6/1] drop-shadow-[0_15px_35px_rgba(0,240,255,0.4)] cursor-pointer"
            >
              <Image
                src="/sol shades.png"
                alt="Solana Cyber Shades"
                fill
                sizes="(max-width: 768px) 320px, 420px"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* ======================================================
              RIGHT COLUMN: SOCIALS (X + 2 TELEGRAMS) & "LET'S TALK" BUTTON
              ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 xl:col-span-4 flex flex-col items-center lg:items-end justify-center gap-6"
          >
            {/* Social Icons Row (X + Telegram Channel + Telegram DM) */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* 1. X (Twitter) Icon */}
              <motion.a
                href="https://x.com/sol_panda1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#0c071a] border border-white/10 hover:border-[#00F0FF]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
                title="Follow on X (@sol_panda1)"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00F0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <svg
                  className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>

              {/* 2. Telegram Channel Icon */}
              <motion.a
                href="https://t.me/solpandaa001"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#0c071a] border border-white/10 hover:border-[#00F0FF]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
                title="Telegram Channel (@solpandaa001)"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00F0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <Send className="w-5 h-5 text-slate-300 group-hover:text-[#00F0FF] transition-colors duration-200" />
                {/* Micro badge indicator */}
                <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full bg-[#00F0FF] text-[9px] font-extrabold text-black uppercase tracking-tighter">
                  CH
                </span>
              </motion.a>

              {/* 3. Telegram DM Icon */}
              <motion.a
                href="https://t.me/Sol_pandaa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#0c071a] border border-white/10 hover:border-[#9945FF]/60 hover:shadow-[0_0_20px_rgba(153,69,255,0.4)] transition-all duration-300"
                title="Telegram Direct Message (@Sol_pandaa)"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#9945FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <MessageSquare className="w-5 h-5 text-slate-300 group-hover:text-[#c084fc] transition-colors duration-200" />
                {/* Micro badge indicator */}
                <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 rounded-full bg-[#9945FF] text-[9px] font-extrabold text-white uppercase tracking-tighter">
                  DM
                </span>
              </motion.a>
            </div>

            {/* "LET'S TALK" CTA Button below the social icons */}
            <motion.a
              href="https://t.me/Sol_pandaa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-gradient-to-r from-[#9945FF] via-[#00F0FF] to-[#00FFA3] text-black font-poppins font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(0,240,255,0.4),0_0_15px_rgba(153,69,255,0.5)] hover:shadow-[0_0_45px_rgba(0,240,255,0.7),0_0_30px_rgba(153,69,255,0.8)] transition-all duration-300"
            >
              <span>LET&apos;S TALK</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </footer>
  )
}
