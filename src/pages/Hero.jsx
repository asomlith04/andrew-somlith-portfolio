import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ScrambledTitle } from '../components/ui/modern-animated-hero-section'

const specialties = [
  'Marketing Automation',
  'Growth Analytics',
  'AI-Enabled Demand Generation',
  'Conversion-Focused Content',
]

// B2B logo — handshake mark, red
const B2BIcon = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 md:w-9 md:h-9"
    aria-hidden="true"
  >
    <path
      d="M8 18l8-6 6 4 4-3 6 4 8-5v16l-8 5-6-4-4 3-6-4-8 6V18z"
      stroke="#E51B23"
      strokeWidth="2.5"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="18" cy="26" r="2" fill="#E51B23" />
    <circle cx="30" cy="22" r="2" fill="#E51B23" />
  </svg>
)

const stats = [
  { value: '✦', label: 'Execution Driven', isIcon: false },
  { value: <B2BIcon />, label: <><span className="text-p5-white/35">B2B</span>{' '}Focused</>, isIcon: true },
  { value: '⚙', label: 'System Powered', isIcon: false },
  { value: '∞', label: 'Growth Mindset', isIcon: false },
]

// Scramble cycle — lands on the name
const namePhrases = ['STRATEGIST', 'OPERATOR', 'BUILDER', 'ANDREW SOMLITH']

export default function Hero() {
  return (
    <main className="relative min-h-screen flex items-center overflow-hidden pt-14">
      {/* Corner accents */}
      <div className="pointer-events-none absolute top-20 left-0 w-24 h-24 border-l-2 border-t-2 border-p5-white/10 z-10" />
      <div className="pointer-events-none absolute bottom-8 right-0 w-24 h-24 border-r-2 border-b-2 border-p5-white/10 z-10" />

      <div className="relative w-full max-w-5xl mx-auto px-6 py-16 z-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-p5-cyan" />
          <span className="p5-tag text-p5-cyan border-p5-cyan">
            B2B Digital Marketing Strategist
          </span>
          <span className="w-8 h-px bg-p5-cyan" />
        </motion.div>

        {/* Intro + Scrambled Name */}
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-p5-white/50 mb-5"
          >
            Hey, I&apos;m
          </motion.p>

          {/* Scrambled headline — cycles role words, lands on the name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <ScrambledTitle
              phrases={namePhrases}
              finalPhrase="ANDREW SOMLITH"
              interval={1400}
              className="text-6xl md:text-8xl lg:text-[8.5rem] font-black leading-[0.9] tracking-tight text-p5-white uppercase"
            />
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.85, duration: 0.5, ease: 'easeOut' }}
            className="h-1.5 bg-p5-red mt-7 mx-auto w-32 origin-center"
          />
        </div>

        {/* Specialty pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl"
        >
          {specialties.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.06, duration: 0.3 }}
              className="px-4 py-1.5 border border-p5-white/25 text-xs font-medium text-p5-white/70 uppercase tracking-wider hover:border-p5-red hover:text-p5-red transition-colors duration-150 cursor-default"
            >
              {s}
            </motion.span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <Link
            to="/work"
            className="group px-9 py-3.5 bg-p5-red border-2 border-p5-red text-p5-white font-black text-xs uppercase tracking-widest hover:bg-transparent hover:text-p5-red transition-all duration-150 cursor-pointer"
          >
            View My Work
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-150">
              →
            </span>
          </Link>
          <Link
            to="/contact"
            className="px-9 py-3.5 bg-transparent border-2 border-p5-white/40 text-p5-white/80 font-black text-xs uppercase tracking-widest hover:border-p5-white hover:text-p5-white transition-all duration-150 cursor-pointer"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className="border-t border-p5-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl"
        >
          {stats.map(({ value, label, isIcon }, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div
                className={`text-3xl md:text-4xl font-black text-p5-red group-hover:text-p5-cyan transition-colors duration-200 leading-none flex items-center justify-center ${
                  isIcon ? 'h-10 md:h-11' : ''
                }`}
              >
                {value}
              </div>
              <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-widest text-p5-white/40 mt-3 leading-tight">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

    </main>
  )
}
