import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Maximize2, Minimize2 } from 'lucide-react'

/**
 * HeroSection — cinematic, moody, editorial video hero for case-study landings.
 *
 * Art direction:
 *   - Heavy central vignette for readability
 *   - Atmospheric glow pushed to bottom-left (not dominant)
 *   - Layered vertical line pattern with varied opacity/thickness for depth
 *   - Sharp editorial typography; tightly anchored content container
 *
 * Props:
 *   videoUrl?: string
 *   eyebrow?: string                    — small, editorial label above the headline
 *   headline?: React.ReactNode          — supports JSX for emphasis
 *   subtext?: string
 *   primaryCta?: { label, href?, onClick? }
 *   secondaryCta?: { label, href?, onClick? }
 */
const HeroSection = ({
  videoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4',
  eyebrow = 'Selected B2B Case Studies',
  headline = (
    <>
      The work behind
      <br />
      the{' '}
      <em className="italic text-p5-red font-black not-italic-fallback" style={{ fontStyle: 'italic' }}>
        numbers
      </em>{' '}
      that matter
    </>
  ),
  subtext = 'A closer look at the campaigns, systems, and decisions behind the outcome.',
  primaryCta = { label: 'See Case Studies', href: '#case-studies' },
  secondaryCta = { label: 'Get In Touch', href: '/contact' },
}) => {
  const [fullBleed, setFullBleed] = useState(true)

  const renderCta = (cta, variant) => {
    const base =
      'group inline-flex items-center gap-2 px-7 py-3.5 font-bold text-[11px] uppercase tracking-[0.25em] transition-all duration-200 cursor-pointer'

    const primary =
      'bg-p5-red text-p5-white border-2 border-p5-red hover:bg-transparent hover:text-p5-red hover:shadow-[0_0_24px_rgba(229,27,35,0.35)]'

    const secondary =
      'text-p5-white/80 border border-p5-white/25 hover:text-p5-white hover:border-p5-white hover:bg-p5-white/5 backdrop-blur-sm'

    const className = `${base} ${variant === 'primary' ? primary : secondary}`
    const arrow =
      variant === 'primary' ? (
        <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
          →
        </span>
      ) : null

    // Internal route — use React Router Link for proper SPA nav
    if (cta.to) {
      return (
        <Link to={cta.to} className={className}>
          {cta.label}
          {arrow}
        </Link>
      )
    }
    if (cta.href) {
      // In-page anchor (e.g. "#case-studies"): scroll smoothly without
      // polluting the router hash (HashRouter would treat it as a route).
      if (cta.href.startsWith('#')) {
        const targetId = cta.href.slice(1)
        const handleAnchorClick = (e) => {
          e.preventDefault()
          const el = document.getElementById(targetId)
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        return (
          <a href={cta.href} onClick={handleAnchorClick} className={className}>
            {cta.label}
            {arrow}
          </a>
        )
      }
      return (
        <a href={cta.href} className={className}>
          {cta.label}
          {arrow}
        </a>
      )
    }
    return (
      <button onClick={cta.onClick} className={className}>
        {cta.label}
        {arrow}
      </button>
    )
  }

  return (
    <section
      className={`relative w-full overflow-hidden transition-all duration-500 ease-in-out ${
        fullBleed ? 'min-h-screen' : 'py-32 lg:py-40'
      }`}
      style={{ backgroundColor: '#080808' }}
    >
      {/* ── Height toggle (minimal, top-right) ───────────────────── */}
      <button
        onClick={() => setFullBleed(!fullBleed)}
        aria-label={fullBleed ? 'Shrink hero' : 'Expand hero'}
        className="absolute top-5 right-5 z-30 w-9 h-9 flex items-center justify-center border border-p5-white/20 bg-p5-black/50 backdrop-blur-md text-p5-white/60 hover:text-p5-white hover:border-p5-white/60 transition-all duration-200 cursor-pointer"
      >
        {fullBleed ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
      </button>

      {/* ── Layer 0 — Video (heavily muted to match landing hue) ─── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-110 opacity-25"
        style={{ filter: 'contrast(1.1) saturate(0.35) brightness(0.55) hue-rotate(-15deg)' }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* ── Layer 1 — Central cinematic gradient (matches landing hue) */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(28,10,12,0.82) 0%, rgba(8,8,10,0.95) 60%, #080808 100%)',
        }}
      />

      {/* ── Layer 2 — Dual red corner glows (matches landing) ─────── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle 600px at 15% 85%, rgba(229,27,35,0.22), transparent 65%), radial-gradient(circle 500px at 85% 15%, rgba(229,27,35,0.14), transparent 65%)',
        }}
      />

      {/* ── Layer 4 — Layered vertical line texture (varied) ─────── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none mix-blend-screen"
        style={{
          background: [
            // widely spaced thicker lines, faint
            'repeating-linear-gradient(90deg, rgba(245,245,240,0.04) 0px, rgba(245,245,240,0.04) 1.5px, transparent 1.5px, transparent 140px)',
            // medium lines, finer
            'repeating-linear-gradient(90deg, rgba(245,245,240,0.025) 0px, rgba(245,245,240,0.025) 1px, transparent 1px, transparent 70px)',
            // tight hairlines, almost invisible
            'repeating-linear-gradient(90deg, rgba(245,245,240,0.015) 0px, rgba(245,245,240,0.015) 1px, transparent 1px, transparent 24px)',
          ].join(', '),
        }}
      />
      {/* ── Layer 4b — Horizontal fade on the lines (stagger/depth) */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(8,8,10,0.7) 0%, transparent 15%, transparent 85%, rgba(8,8,10,0.7) 100%)',
        }}
      />

      {/* ── Layer 5 — Top & bottom hard vignette ─────────────────── */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(8,8,10,0.85) 0%, transparent 18%, transparent 78%, rgba(8,8,10,0.95) 100%)',
        }}
      />

      {/* ── Layer 6 — Subtle grain for cinematic texture ─────────── */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full max-w-5xl mx-auto px-6 md:px-10 pt-28 pb-24 md:pt-32 md:pb-28">
          {/* Eyebrow — editorial, minimal, no pill */}
          <div className="flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-p5-red/70" />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-p5-white/55">
              {eyebrow}
            </span>
          </div>

          {/* Headline — anchored, cinematic */}
          <h1 className="font-sans font-black text-p5-white text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-[-0.025em] max-w-4xl">
            {headline}
          </h1>

          {/* Subtext — short, editorial */}
          <p className="mt-8 text-p5-white/65 text-base md:text-lg leading-relaxed font-light max-w-xl">
            {subtext}
          </p>

          {/* Divider before CTAs — visual anchor */}
          <div className="mt-10 mb-10 h-px w-20 bg-p5-red/60" />

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {renderCta(primaryCta, 'primary')}
            {renderCta(secondaryCta, 'secondary')}
          </div>
        </div>
      </div>

      {/* ── Footer meta bar ──────────────────────────────────────── */}
      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.3em] text-p5-white/35 pointer-events-none">
        <span>Portfolio · 2026</span>
        <span className="hidden sm:inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-p5-red rounded-full animate-pulse" />
          Recording
        </span>
      </div>
    </section>
  )
}

export { HeroSection }
export default HeroSection
