import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '../../lib/utils'

gsap.registerPlugin(ScrollTrigger)

/**
 * CinematicHero — a splash landing that precedes the portfolio home.
 *
 * Art direction:
 *   - Full-bleed cinematic stage with layered noise + vignette
 *   - Massive brandmark → tagline → tilted gradient "dossier" card
 *   - Floating Persona-red chips and a live counter ring
 *   - GSAP scroll pin reveals the card + badges, then releases to the site
 */
export default function CinematicHero({
  brandName = 'SOMLITH',
  taglineTop = 'Growth that compounds.',
  taglineBottom = 'Campaigns that convert.',
  cardEyebrow = 'Dossier · 01',
  cardHeading = 'B2B marketing, engineered.',
  cardBody = 'Andrew Somlith builds demand systems — automation, analytics, and conversion-first content — for B2B teams that want pipeline, not vanity.',
  counterLabel = 'Campaigns Shipped',
  counterTarget = 42,
  primaryCta = { label: 'Enter Portfolio', to: '/home' },
  secondaryCta = { label: 'View Work', to: '/work' },
}) {
  const rootRef = useRef(null)
  const stageRef = useRef(null)
  const brandRef = useRef(null)
  const cardRef = useRef(null)
  const badgeARef = useRef(null)
  const badgeBRef = useRef(null)
  const badgeCRef = useRef(null)
  const [count, setCount] = useState(0)

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.cin-eyebrow', { opacity: 0, y: 12, duration: 0.6 })
        .from(
          '.cin-brand-char',
          { opacity: 0, y: 80, duration: 0.9, stagger: 0.05 },
          '-=0.2'
        )
        .from('.cin-tagline-top', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from('.cin-tagline-bottom', { opacity: 0, y: 20, duration: 0.6 }, '-=0.45')
        .from('.cin-meta', { opacity: 0, duration: 0.5 }, '-=0.3')
        .from(
          cardRef.current,
          { opacity: 0, y: 60, rotate: 4, duration: 0.9 },
          '-=0.4'
        )
        .from(
          [badgeARef.current, badgeBRef.current, badgeCRef.current],
          { opacity: 0, scale: 0.8, y: 20, duration: 0.5, stagger: 0.08 },
          '-=0.5'
        )
        .from('.cin-cta', { opacity: 0, y: 14, duration: 0.5, stagger: 0.1 }, '-=0.4')
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // Scroll parallax on brand + card
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(brandRef.current, {
        yPercent: -25,
        scale: 0.95,
        scrollTrigger: {
          trigger: stageRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      gsap.to(cardRef.current, {
        yPercent: -12,
        rotate: -1.5,
        scrollTrigger: {
          trigger: stageRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  // Counter animation
  useEffect(() => {
    const obj = { v: 0 }
    const tween = gsap.to(obj, {
      v: counterTarget,
      duration: 2.2,
      delay: 1.4,
      ease: 'power2.out',
      onUpdate: () => setCount(Math.round(obj.v)),
    })
    return () => tween.kill()
  }, [counterTarget])

  const progress = Math.min(count / counterTarget, 1)
  const circumference = 2 * Math.PI * 28

  return (
    <div ref={rootRef} className="relative bg-p5-black text-p5-white overflow-hidden">
      {/* Stage */}
      <section
        ref={stageRef}
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-12 py-20"
      >
        {/* Background layers */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(28,10,12,0.8) 0%, rgba(8,8,10,0.95) 60%, #080808 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-60"
          style={{
            background:
              'radial-gradient(circle 600px at 15% 85%, rgba(229,27,35,0.22), transparent 65%), radial-gradient(circle 500px at 85% 15%, rgba(229,27,35,0.14), transparent 65%)',
          }}
        />
        {/* Vertical line texture */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none mix-blend-screen"
          style={{
            background: [
              'repeating-linear-gradient(90deg, rgba(245,245,240,0.04) 0px, rgba(245,245,240,0.04) 1.5px, transparent 1.5px, transparent 140px)',
              'repeating-linear-gradient(90deg, rgba(245,245,240,0.02) 0px, rgba(245,245,240,0.02) 1px, transparent 1px, transparent 48px)',
            ].join(', '),
          }}
        />
        {/* Grain */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
        {/* Edge vignette */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,8,10,0.85) 0%, transparent 18%, transparent 78%, rgba(8,8,10,0.95) 100%)',
          }}
        />

        {/* Top meta bar */}
        <div className="cin-meta absolute top-6 left-6 right-6 z-20 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.35em] text-p5-white/40">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-p5-red rounded-full animate-pulse" />
            Live · 2026
          </span>
          <span className="hidden sm:inline">Andrew Somlith · Portfolio</span>
        </div>

        {/* Content grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — Brand + taglines */}
          <div className="relative">
            <div className="cin-eyebrow flex items-center gap-4 mb-8">
              <span className="w-10 h-px bg-p5-red" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-p5-white/55">
                {cardEyebrow}
              </span>
            </div>

            <h1
              ref={brandRef}
              className="font-black leading-[0.85] tracking-[-0.04em] text-[20vw] sm:text-[16vw] lg:text-[11rem] xl:text-[13rem]"
              aria-label={brandName}
            >
              {brandName.split('').map((ch, i) => (
                <span
                  key={`${ch}-${i}`}
                  className={cn(
                    'cin-brand-char inline-block',
                    i % 3 === 1 ? 'text-p5-red' : 'text-p5-white'
                  )}
                >
                  {ch}
                </span>
              ))}
            </h1>

            <div className="mt-8 space-y-1 max-w-lg">
              <p className="cin-tagline-top text-lg md:text-2xl font-light text-p5-white/85 leading-snug">
                {taglineTop}
              </p>
              <p className="cin-tagline-bottom text-lg md:text-2xl font-light text-p5-white/50 leading-snug">
                {taglineBottom}
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to={primaryCta.to}
                className="cin-cta group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-p5-red border-2 border-p5-red text-p5-white text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-transparent hover:text-p5-red hover:shadow-[0_0_24px_rgba(229,27,35,0.4)] transition-all duration-200 cursor-pointer"
              >
                {primaryCta.label}
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
              <Link
                to={secondaryCta.to}
                className="cin-cta inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-p5-white/25 text-p5-white/80 text-[11px] font-bold uppercase tracking-[0.25em] hover:text-p5-white hover:border-p5-white hover:bg-p5-white/5 backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* RIGHT — Dossier card + badges */}
          <div className="relative flex items-center justify-center min-h-[520px]">
            {/* Dossier card */}
            <Link
              to={primaryCta.to}
              aria-label={`${primaryCta.label} — open dossier`}
              ref={cardRef}
              className="group relative block w-full max-w-md rotate-2 border-2 border-p5-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.6)] hover:border-p5-red hover:shadow-[0_30px_80px_rgba(229,27,35,0.35)] hover:-translate-y-1 hover:rotate-0 transition-all duration-300 cursor-pointer"
              style={{
                background:
                  'linear-gradient(160deg, #2A0608 0%, #140305 55%, #0A0A0C 100%)',
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-p5-white/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-p5-red">
                  Case File
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-p5-white/40">
                  042 / ∞
                </span>
              </div>

              {/* Card body */}
              <div className="px-6 pt-6 pb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-p5-white/45 mb-4">
                  {cardEyebrow}
                </p>
                <h2 className="text-2xl md:text-3xl font-black leading-tight text-p5-white mb-4">
                  {cardHeading}
                </h2>
                <p className="text-sm text-p5-white/65 leading-relaxed">
                  {cardBody}
                </p>

                {/* Counter ring */}
                <div className="mt-8 flex items-center gap-5 pt-6 border-t border-p5-white/10">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        stroke="rgba(245,245,240,0.1)"
                        strokeWidth="3"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        fill="none"
                        stroke="#E51B23"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference * (1 - progress)}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-black text-p5-white">
                      {count}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-p5-white/40">
                      {counterLabel}
                    </p>
                    <p className="text-sm text-p5-white/80 font-medium mt-0.5">
                      Across B2B verticals
                    </p>
                  </div>
                </div>
              </div>

              {/* Open-dossier hint */}
              <div className="px-6 py-3 border-t border-p5-white/10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.3em] text-p5-white/50 group-hover:text-p5-red transition-colors duration-200">
                <span>Open Dossier</span>
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </div>

              {/* Corner tick */}
              <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-p5-red" />
              <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-p5-red" />
            </Link>

            {/* Floating badges */}
            <div
              ref={badgeARef}
              className="absolute -top-4 -left-2 sm:-left-6 rotate-[-6deg] px-3 py-2 bg-p5-black border-2 border-p5-red flex items-center gap-2 shadow-[4px_4px_0_0_rgba(229,27,35,0.6)]"
            >
              <span className="text-lg leading-none">📈</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-p5-white">
                Pipeline Built
              </span>
            </div>

            <div
              ref={badgeBRef}
              className="absolute bottom-10 -right-2 sm:-right-8 rotate-[5deg] px-3 py-2 bg-p5-black border-2 border-p5-white/25 flex items-center gap-2 shadow-[4px_4px_0_0_rgba(245,245,240,0.1)]"
            >
              <span className="text-lg leading-none">🎯</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-p5-white/85">
                Campaign Live
              </span>
            </div>

            <div
              ref={badgeCRef}
              className="absolute top-1/2 -right-4 sm:right-4 -translate-y-1/2 translate-x-1/2 rotate-[-3deg] px-3 py-1.5 bg-p5-red flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-p5-white rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-p5-white">
                Recording
              </span>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-p5-white/40">
          <span className="text-[9px] font-bold uppercase tracking-[0.35em]">
            Scroll
          </span>
          <span className="w-px h-8 bg-p5-white/30 animate-pulse" />
        </div>
      </section>
    </div>
  )
}

export { CinematicHero }
