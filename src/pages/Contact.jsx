import { motion } from 'motion/react'
import { useState } from 'react'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/andrewsomlith', handle: '/in/andrewsomlith' },
  { label: 'Email', href: 'mailto:asomlith04@gmail.com', handle: 'asomlith04@gmail.com' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText('asomlith04@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span className="p5-tag text-p5-red border-p5-red mb-4 inline-block">
            Let&apos;s Connect
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-none mt-3">
            <span className="text-p5-white">GET IN</span>
            <br />
            <span className="text-stroke-red">TOUCH</span>
          </h1>
          <div className="h-1 bg-p5-red mt-4" style={{ width: '80px' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — pitch */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-xl text-p5-white/80 leading-relaxed mb-6">
              Looking to accelerate your B2B pipeline, automate your marketing engine, or get more from your demand generation budget?
            </p>
            <p className="text-p5-white/50 leading-relaxed mb-10">
              I work with SaaS companies and B2B teams to build scalable marketing systems — from conversion-optimized landing pages to AI-powered nurture campaigns. Let&apos;s talk about what&apos;s possible.
            </p>

            {/* Social links */}
            <div className="flex flex-col gap-4">
              {socials.map(({ label, href, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-2 border-p5-white/20 px-6 py-4 hover:border-p5-white hover:bg-p5-gray transition-all duration-150 cursor-pointer"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-p5-white/40 mb-0.5">
                      {label}
                    </p>
                    <p className="text-p5-white font-bold text-sm">{handle}</p>
                  </div>
                  <span className="text-p5-white/30 group-hover:text-p5-red group-hover:translate-x-1 transition-all duration-150">
                    →
                  </span>
                </a>
              ))}

              {/* Copy email button */}
              <button
                onClick={copyEmail}
                className="group flex items-center justify-between border-2 border-p5-red px-6 py-4 hover:bg-p5-red transition-all duration-150 cursor-pointer w-full text-left"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-p5-red/60 group-hover:text-p5-white/60 mb-0.5 transition-colors duration-150">
                    Quick Copy
                  </p>
                  <p className="text-p5-red group-hover:text-p5-white font-bold text-sm transition-colors duration-150">
                    {copied ? '✓ Copied!' : 'Copy Email Address'}
                  </p>
                </div>
                <span className="text-p5-red group-hover:text-p5-white transition-colors duration-150">
                  {copied ? '✓' : '⎘'}
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right — availability card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            {/* Availability */}
            <div className="border-2 border-p5-white/20 bg-p5-gray p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-p5-cyan animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-p5-cyan">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-p5-white/60 text-sm leading-relaxed mb-6">
                Currently exploring full-time and contract opportunities in B2B marketing strategy, demand generation, and marketing operations.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Full-time B2B Marketing Roles',
                  'Fractional CMO / Demand Gen',
                  'Campaign Strategy Consulting',
                  'Marketing Automation Setup',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-p5-red flex-shrink-0" />
                    <span className="text-p5-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div className="border-2 border-p5-red/40 bg-p5-red/5 p-8 -rotate-1 hover:rotate-0 transition-transform duration-200">
              <p className="text-p5-white/80 text-lg font-medium leading-relaxed italic">
                &ldquo;Good marketing creates interest. Great marketing creates intent.&rdquo;
              </p>
              <p className="text-p5-red text-xs font-bold uppercase tracking-widest mt-4">
                — Andrew Somlith
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
