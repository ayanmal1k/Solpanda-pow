'use client'

import { motion } from 'framer-motion'
import {
  Users,
  ShieldCheck,
  Rocket,
  Megaphone,
  TrendingUp,
  UserCheck,
} from 'lucide-react'

interface ServiceItem {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  gradientId: string
  gradientFrom: string
  gradientTo: string
}

const services: ServiceItem[] = [
  {
    id: 'community-management',
    title: 'COMMUNITY\nMANAGEMENT',
    description: 'Keep communities active, organized and welcoming.',
    icon: Users,
    gradientId: 'grad-comm',
    gradientFrom: '#9945FF',
    gradientTo: '#00F0FF',
  },
  {
    id: 'moderation',
    title: 'MODERATION',
    description: 'Maintain a safe, positive and spam-free environment.',
    icon: ShieldCheck,
    gradientId: 'grad-mod',
    gradientFrom: '#00F0FF',
    gradientTo: '#9945FF',
  },
  {
    id: 'raid-management',
    title: 'RAID\nMANAGEMENT',
    description: 'Organized raids with real engagement and impact.',
    icon: Rocket,
    gradientId: 'grad-raid',
    gradientFrom: '#9945FF',
    gradientTo: '#00F0FF',
  },
  {
    id: 'shilling',
    title: 'SHILLING',
    description: 'Spread the word, create hype and build momentum.',
    icon: Megaphone,
    gradientId: 'grad-shill',
    gradientFrom: '#00F0FF',
    gradientTo: '#9945FF',
  },
  {
    id: 'growth-strategy',
    title: 'GROWTH\nSTRATEGY',
    description: 'Data-driven strategies for long-term community growth.',
    icon: TrendingUp,
    gradientId: 'grad-strat',
    gradientFrom: '#9945FF',
    gradientTo: '#00F0FF',
  },
  {
    id: 'community-growth',
    title: 'COMMUNITY\nGROWTH',
    description: 'Turn audiences into loyal supporters and holders.',
    icon: UserCheck,
    gradientId: 'grad-growth',
    gradientFrom: '#00F0FF',
    gradientTo: '#00FFA3',
  },
]

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-[#05030a] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#9945FF]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top subtle section divider line with neon gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9945FF]/40 via-[#00F0FF]/40 to-transparent" />

      <div className="max-w-[1600px] mx-auto">
        {/* ========================================================
            MAIN 2-COLUMN LAYOUT
            Left: Title, Description, and Sweeping Curved SVG Arrow
            Right: 2 Rows of 3 Service Cards
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* ======================================================
              LEFT COLUMN: Title, Badge, Description & Pointing Arrow
              ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 xl:col-span-4 flex flex-col items-start relative pr-0 lg:pr-4"
          >
            {/* Title with Cyberpunk Accents */}
            <div className="relative inline-flex flex-col items-start">
              {/* Top-Left Cyberpunk Decorative Angled Strokes */}
              <svg
                className="absolute -top-4 -left-3 w-16 h-8 pointer-events-none"
                viewBox="0 0 60 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="22"
                  y1="2"
                  x2="6"
                  y2="24"
                  stroke="url(#title-neon-cyan)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M26 3L38 3"
                  stroke="url(#title-neon-magenta)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="title-neon-cyan" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00F0FF" />
                    <stop offset="100%" stopColor="#9945FF" />
                  </linearGradient>
                  <linearGradient id="title-neon-magenta" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#DC1FFF" />
                    <stop offset="100%" stopColor="#00F0FF" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Main Title Heading */}
              <h2 className="font-taskor-oblique text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl tracking-tight uppercase overflow-visible pt-1 leading-none">
                <span className="block bg-gradient-to-r from-white via-[#d1e8ff] to-[#00f0ff] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]">
                  MY
                </span>
                <span className="block mt-1 bg-gradient-to-r from-[#00f0ff] via-[#00f5ff] to-[#00ffa3] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,240,255,0.6)]">
                  SERVICES
                </span>
              </h2>

              {/* Bottom Cyberpunk Underline Brush */}
              <svg
                className="w-48 sm:w-64 h-3 mt-3 pointer-events-none"
                viewBox="0 0 300 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5L140 5C180 5 240 5 298 5"
                  stroke="url(#underline-grad-services)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline-grad-services" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00F0FF" />
                    <stop offset="60%" stopColor="#9945FF" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Description Text */}
            <p className="font-poppins text-sm sm:text-base leading-relaxed text-slate-300/90 mt-6 max-w-md">
              Whether you need a dedicated operator or a coordinated raiding team, I focus on execution, engagement and proof of work.
            </p>

            {/* ====================================================
                DYNAMIC NEON SVG ARROW GOING AROUND TITLE TO POINT RIGHT
                ==================================================== */}
            <div className="hidden lg:block relative w-full max-w-[340px] h-28 sm:h-32 mt-4 pointer-events-none">
              <svg
                viewBox="0 0 340 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                <defs>
                  {/* Glowing Arrow Gradient */}
                  <linearGradient id="arrow-neon-grad" x1="0%" y1="0%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#9945FF" stopOpacity="0.2" />
                    <stop offset="35%" stopColor="#9945FF" />
                    <stop offset="70%" stopColor="#00F0FF" />
                    <stop offset="100%" stopColor="#00FFA3" />
                  </linearGradient>

                  {/* Arrow Glow Filter */}
                  <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Decorative Origin Ring / Loop */}
                <circle
                  cx="24"
                  cy="24"
                  r="6"
                  stroke="#9945FF"
                  strokeWidth="2"
                  fill="#110c26"
                  opacity="0.8"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="2"
                  fill="#00F0FF"
                  className="animate-ping"
                  style={{ transformOrigin: '24px 24px', animationDuration: '2.5s' }}
                />

                {/* Sweeping Curved Path around title going downwards and curving right to point towards services */}
                <motion.path
                  d="M 24 30 C 24 75, 45 100, 110 100 L 290 100"
                  stroke="url(#arrow-neon-grad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#neon-glow)"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                />

                {/* Secondary dashed trajectory line */}
                <path
                  d="M 32 30 C 32 65, 50 92, 110 92 L 275 92"
                  stroke="#00F0FF"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  strokeOpacity="0.4"
                />

                {/* Arrowhead Pointing Right */}
                <motion.g
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <path
                    d="M 285 88 L 306 100 L 285 112 Z"
                    fill="url(#arrow-neon-grad)"
                    filter="url(#neon-glow)"
                  />
                  <path
                    d="M 292 93 L 302 100 L 292 107"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.g>

                {/* Tech Coordinate / Label Accent */}
                <text
                  x="115"
                  y="116"
                  fill="#00F0FF"
                  fillOpacity="0.6"
                  fontSize="9"
                  fontFamily="monospace"
                  letterSpacing="0.15em"
                >
                  EXPLORE [01-06] →
                </text>
              </svg>
            </div>
          </motion.div>

          {/* ======================================================
              RIGHT COLUMN: 6 Services Organized in 2 Rows (3x2)
              ====================================================== */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-4.5 xl:gap-5">
              {services.map((service, index) => {
                const IconComponent = service.icon

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="group relative rounded-2xl p-[2px] overflow-hidden shadow-[0_0_20px_rgba(153,69,255,0.25),0_0_15px_rgba(20,241,149,0.2)] hover:shadow-[0_0_40px_rgba(153,69,255,0.5),0_0_30px_rgba(20,241,149,0.45)] transition-all duration-300"
                  >
                    {/* ==================================================
                        CONTINUOUS HIGH-VISIBILITY FAST SOLANA GRADIENT BORDER
                        ================================================== */}
                    <div
                      className="absolute -inset-[200%] animate-solana-spin opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background:
                          'conic-gradient(from 0deg, #9945FF 0%, #00F0FF 20%, #14F195 40%, #DC1FFF 60%, #00F0FF 80%, #9945FF 100%)',
                      }}
                    />

                    {/* ==================================================
                        CARD INNER CONTENT CONTAINER
                        ================================================== */}
                    <div className="relative w-full h-full rounded-[14px] bg-gradient-to-b from-[#0f0a1f] via-[#090514] to-[#06030c] flex flex-col items-center text-center p-5 sm:p-6 overflow-hidden">
                      {/* Interactive Animated Shifting Gradient on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9945FF]/30 via-[#14F195]/25 to-[#00F0FF]/30 opacity-0 group-hover:opacity-100 animate-gradient-shift transition-opacity duration-300 pointer-events-none" />

                      {/* Subtle Top-Right Ambient Light Point */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#14F195]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {/* ==================================================
                          PENTAGON / HEXAGON SVG BADGE CONTAINER
                          ================================================== */}
                      <div className="relative w-20 h-24 sm:w-22 sm:h-26 mb-4 sm:mb-5 flex items-center justify-center">
                        <svg
                          className="absolute inset-0 w-full h-full filter drop-shadow-[0_0_10px_rgba(0,240,255,0.4)] group-hover:drop-shadow-[0_0_18px_rgba(20,241,149,0.8)] transition-all duration-300"
                          viewBox="0 0 100 115"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id={service.gradientId}
                              x1="0"
                              y1="0"
                              x2="1"
                              y2="1"
                            >
                              <stop offset="0%" stopColor={service.gradientFrom} />
                              <stop offset="100%" stopColor={service.gradientTo} />
                            </linearGradient>
                          </defs>

                          {/* Outer Neon Gradient Polygon Outline */}
                          <path
                            d="M50 6 L92 30 L92 84 L50 108 L8 84 L8 30 Z"
                            stroke={`url(#${service.gradientId})`}
                            strokeWidth="3.5"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            className="transition-all duration-300"
                          />

                          {/* Inner Translucent Dark Fill */}
                          <path
                            d="M50 10 L88 32 L88 82 L50 104 L12 82 L12 32 Z"
                            fill="#0b0717"
                            fillOpacity="0.85"
                          />
                        </svg>

                        {/* Icon centered with neon glow and smooth hover bounce */}
                        <div className="relative z-10 text-white transition-transform duration-300 group-hover:scale-110">
                          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] group-hover:drop-shadow-[0_0_12px_#14F195]" />
                        </div>
                      </div>

                      {/* ==================================================
                          CARD TITLE
                          ================================================== */}
                      <h3 className="relative z-10 font-poppins font-bold text-xs sm:text-sm tracking-wider text-white uppercase mb-2.5 min-h-[2.5rem] flex items-center justify-center whitespace-pre-line leading-tight group-hover:text-[#00F0FF] transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* ==================================================
                          CARD DESCRIPTION
                          ================================================== */}
                      <p className="relative z-10 font-poppins text-[11px] sm:text-xs leading-relaxed text-slate-400 font-normal group-hover:text-slate-200 transition-colors duration-200">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

