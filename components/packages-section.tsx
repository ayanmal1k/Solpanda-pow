'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { User, Users, Check } from 'lucide-react'
import gsap from 'gsap'

export default function PackagesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)

  // GSAP 3D Magnetic tilt effect on cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement | null) => {
      if (!card) return
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(card, {
        rotationY: x * 0.04,
        rotationX: -y * 0.04,
        transformPerspective: 1000,
        ease: 'power1.out',
        duration: 0.4,
      })
    }

    const handleMouseLeave = (card: HTMLDivElement | null) => {
      if (!card) return
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        ease: 'power2.out',
        duration: 0.6,
      })
    }

    const c1 = card1Ref.current
    const c2 = card2Ref.current

    const onMove1 = (e: MouseEvent) => handleMouseMove(e, c1)
    const onLeave1 = () => handleMouseLeave(c1)
    const onMove2 = (e: MouseEvent) => handleMouseMove(e, c2)
    const onLeave2 = () => handleMouseLeave(c2)

    c1?.addEventListener('mousemove', onMove1)
    c1?.addEventListener('mouseleave', onLeave1)
    c2?.addEventListener('mousemove', onMove2)
    c2?.addEventListener('mouseleave', onLeave2)

    return () => {
      c1?.removeEventListener('mousemove', onMove1)
      c1?.removeEventListener('mouseleave', onLeave1)
      c2?.removeEventListener('mousemove', onMove2)
      c2?.removeEventListener('mouseleave', onLeave2)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#05030a] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#9945FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top subtle section divider line with neon gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9945FF]/40 via-[#00F0FF]/40 to-transparent" />

      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-start">
          
          {/* ======================================================
              LEFT COLUMN: SECTION TITLE & DESCRIPTION
              ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 xl:col-span-4 flex flex-col items-start pt-2 sm:pt-4"
          >
            {/* Crown Icon Above Title */}
            <div className="relative mb-2">
              <Image
                src="/crown-icon.png"
                alt="Crown"
                width={46}
                height={34}
                className="object-contain filter drop-shadow-[0_0_12px_rgba(0,240,255,0.8)] -rotate-12 animate-pulse"
              />
            </div>

            {/* Title with Cyberpunk Brush Angle */}
            <div className="relative inline-block overflow-visible -rotate-2">
              <h2 className="font-taskor-oblique text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] tracking-tight uppercase leading-[1.05] overflow-visible">
                <span className="inline-block pr-6 bg-gradient-to-r from-[#c084fc] via-[#9945FF] to-[#00F0FF] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(153,69,255,0.6)]">
                  SIMPLE
                </span>
                <br />
                <span className="inline-block pr-6 bg-gradient-to-r from-[#00F0FF] via-[#00f5ff] to-[#00FFA3] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.7)]">
                  PACKAGES
                </span>
              </h2>

              {/* Slanted Underline Strokes */}
              <svg
                className="w-44 sm:w-52 h-4 mt-2 pointer-events-none overflow-visible"
                viewBox="0 0 200 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Cyan Brush Stroke */}
                <path
                  d="M 4 8 C 60 2, 140 2, 196 8"
                  stroke="#00F0FF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 6px #00F0FF)"
                />
                {/* Magenta Sub-stroke */}
                <path
                  d="M 12 13 C 50 9, 110 9, 150 13"
                  stroke="#9945FF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                />
              </svg>
            </div>

            {/* Description Text */}
            <p className="font-poppins text-sm sm:text-base leading-relaxed text-slate-300/90 mt-6 max-w-sm">
              Choose the plan that fits your goals.
              <br />
              All packages include dedicated support and transparent execution.
            </p>
          </motion.div>

          {/* ======================================================
              RIGHT COLUMN: 2 PACKAGES CARDS
              ====================================================== */}
          <div className="lg:col-span-8 xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6 xl:gap-8">
            
            {/* ====================================================
                CARD 1: INDIVIDUAL SUPPORT ($100 / WEEK)
                ==================================================== */}
            <motion.div
              ref={card1Ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group relative rounded-3xl p-[1.5px] overflow-hidden bg-gradient-to-b from-[#191133] via-[#0d0822] to-[#070412] border border-[#00F0FF]/30 hover:border-[#00F0FF]/70 shadow-[0_0_30px_rgba(0,0,0,0.8),0_0_20px_rgba(153,69,255,0.15)] hover:shadow-[0_0_40px_rgba(0,240,255,0.3),0_0_25px_rgba(153,69,255,0.35)] transition-all duration-300"
            >
              {/* Subtle Ambient Hover Glow Inside */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#9945FF]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative w-full h-full rounded-[22px] bg-[#090514]/90 backdrop-blur-md p-6 sm:p-7 md:p-8 flex flex-col justify-between">
                <div>
                  {/* Top Header: Icon + Title */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#130b29] border border-[#00F0FF]/40 flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.25)] group-hover:border-[#00F0FF] transition-colors duration-300">
                      <User className="w-5 h-5 text-[#00F0FF]" />
                    </div>
                    <h3 className="font-poppins font-bold text-sm sm:text-base tracking-wider text-white uppercase">
                      INDIVIDUAL SUPPORT
                    </h3>
                  </div>

                  {/* Price Brush Tag: $100 / WEEK */}
                  <div className="relative inline-block mb-5">
                    <div
                      className="relative px-5 py-2 rounded-xl text-black font-taskor-oblique text-xl sm:text-2xl font-bold tracking-tight uppercase transform -rotate-1 shadow-[0_4px_20px_rgba(153,69,255,0.4)] group-hover:scale-105 transition-transform duration-300"
                      style={{
                        background:
                          'linear-gradient(90deg, #c084fc 0%, #9945FF 40%, #00F0FF 100%)',
                      }}
                    >
                      $100 / WEEK
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-poppins text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                    Dedicated personal support for your Web3 services.
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-2">
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-poppins">
                      <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[#c084fc]">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span>Community management support</span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-poppins">
                      <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[#c084fc]">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span>Raiding & shilling support</span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-poppins">
                      <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[#c084fc]">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span>Growth strategy & execution</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* ====================================================
                CARD 2: MASSIVE RAIDER TEAM ($200)
                ==================================================== */}
            <motion.div
              ref={card2Ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="group relative rounded-3xl p-[1.5px] overflow-hidden bg-gradient-to-b from-[#111a33] via-[#091124] to-[#050914] border border-[#00F0FF]/40 hover:border-[#00FFA3]/70 shadow-[0_0_30px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_40px_rgba(0,240,255,0.4),0_0_25px_rgba(0,255,163,0.35)] transition-all duration-300"
            >
              {/* Subtle Ambient Hover Glow Inside */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#00F0FF]/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative w-full h-full rounded-[22px] bg-[#070d18]/90 backdrop-blur-md p-6 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden">
                {/* Mini Crown Sticker on Top-Right */}
                <div className="absolute top-7 right-7">
                  <Image
                    src="/crown-icon.png"
                    alt="Crown Sticker"
                    width={28}
                    height={20}
                    className="object-contain filter drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] -rotate-6 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Panda Watermark on Bottom-Right */}
                <div className="absolute -bottom-4 -right-4 w-28 h-28 opacity-25 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none rotate-12">
                  <Image
                    src="/panda-icon.png"
                    alt="Panda Watermark"
                    fill
                    sizes="120px"
                    className="object-contain filter invert opacity-60"
                  />
                </div>

                <div className="relative z-10">
                  {/* Top Header: Icon + Title */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#0a1829] border border-[#00F0FF]/40 flex items-center justify-center shadow-[0_0_12px_rgba(0,240,255,0.3)] group-hover:border-[#00FFA3] transition-colors duration-300">
                      <Users className="w-5 h-5 text-[#00F0FF]" />
                    </div>
                    <h3 className="font-poppins font-bold text-sm sm:text-base tracking-wider text-white uppercase pr-8">
                      MASSIVE RAIDER TEAM
                    </h3>
                  </div>

                  {/* Price Brush Tag: $200 */}
                  <div className="relative inline-block mb-5">
                    <div
                      className="relative px-6 py-2 rounded-xl text-black font-taskor-oblique text-xl sm:text-2xl font-bold tracking-tight uppercase transform -rotate-1 shadow-[0_4px_20px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform duration-300"
                      style={{
                        background:
                          'linear-gradient(90deg, #00F0FF 0%, #00f5ff 50%, #00FFA3 100%)',
                      }}
                    >
                      $200
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-poppins text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                    For projects that need a coordinated team for campaign execution.
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-2">
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-poppins">
                      <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[#00F0FF]">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span>50+ raider team capability</span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-poppins">
                      <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[#00F0FF]">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span>Verified X accounts</span>
                    </li>
                    <li className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-poppins">
                      <div className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[#00F0FF]">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span>Coordinated raid execution</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
