import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { Plus } from 'lucide-react'

const skillGroups = [
  {
    category: 'Strategy',
    accent: 'p5-red',
    summary: 'How campaigns, funnels, and systems are planned before anything is built.',
    items: [
      {
        name: 'Campaign Strategy',
        detail: 'Planning multi-channel B2B campaigns from ICP definition through channel mix, messaging architecture, and measurement.',
      },
      {
        name: 'Funnel Analysis',
        detail: 'Mapping the full buyer journey — identifying drop-off points, diagnosing root causes, and prioritizing fixes by impact.',
      },
      {
        name: 'Process Improvement',
        detail: 'Auditing marketing workflows for friction and waste, then re-architecting for speed, clarity, and compound output.',
      },
    ],
  },
  {
    category: 'Automation & Operations',
    accent: 'p5-cyan',
    summary: 'The systems layer — lifecycle workflows, lead scoring, and AI-driven execution.',
    items: [
      {
        name: 'Marketing Automation',
        detail: 'Building lifecycle workflows, lead scoring models, and segmentation logic in HubSpot — tuned for sales handoff and pipeline quality.',
      },
      {
        name: 'AI-Enabled Demand Generation',
        detail: 'Using LLMs and AI tooling to scale personalization, accelerate research, and shorten the distance from insight to campaign.',
      },
    ],
  },
  {
    category: 'Analytics & Conversion',
    accent: 'p5-red',
    summary: 'Where data meets craft — turning signals into pages, emails, and experiments that move buyers.',
    items: [
      {
        name: 'Growth Analytics',
        detail: 'Working across GA4, HubSpot reporting, and attribution data to separate vanity metrics from what actually drives revenue.',
      },
      {
        name: 'Landing Page Optimization',
        detail: 'Running structured A/B tests on copy, layout, and form design — grounded in heuristics, validated with behavioral data.',
      },
      {
        name: 'Conversion-Focused Content',
        detail: 'Writing for buyer intent, not brand voice. Pages, emails, and ads that move readers one step closer to a decision.',
      },
    ],
  },
]

const certifications = [
  { name: 'HubSpot Digital Marketing Certification', issuer: 'HubSpot Academy', color: 'p5-red' },
  { name: 'HubSpot Email Marketing Certification', issuer: 'HubSpot Academy', color: 'p5-red' },
  { name: 'Google Ads Search Certification', issuer: 'Google', color: 'p5-cyan' },
  { name: 'Digital Marketing & E-commerce Professional Certificate', issuer: 'Google', color: 'p5-cyan' },
]

const tools = [
  'HubSpot', 'Google Ads', 'GA4', 'Salesforce', 'Zapier',
  'Make', 'Notion', 'Figma', 'ChatGPT', 'Perplexity', 'Ahrefs', 'Hotjar',
]

const foundation = [
  'Digital Marketing',
  'Consumer Behavior',
  'Marketing Services',
  'Marketing Strategies',
  'Strategic Management',
]

// ────────────────────────────────────────────────────────────
// Reusable section header with editorial numbering
// ────────────────────────────────────────────────────────────
function SectionLabel({ number, title, accent = 'p5-red' }) {
  const textClass = accent === 'p5-cyan' ? 'text-p5-cyan' : 'text-p5-red'
  const bgClass = accent === 'p5-cyan' ? 'bg-p5-cyan' : 'bg-p5-red'
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className={`text-[11px] font-black tabular-nums ${textClass}`}>
        {number}
      </span>
      <span className={`w-8 h-px ${bgClass}`} />
      <span className="text-xs font-black uppercase tracking-[0.3em] text-p5-white">
        {title}
      </span>
      <span className="flex-1 h-px bg-p5-white/10" />
    </div>
  )
}

// ────────────────────────────────────────────────────────────
// Accordion item
// ────────────────────────────────────────────────────────────
function PracticeAccordion({ group, isOpen, onToggle, index }) {
  const accentText = group.accent === 'p5-cyan' ? 'text-p5-cyan' : 'text-p5-red'
  const accentBg = group.accent === 'p5-cyan' ? 'bg-p5-cyan' : 'bg-p5-red'

  return (
    <div className="border-b border-p5-white/10 last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-6 py-6 text-left group cursor-pointer"
      >
        {/* Index */}
        <span className="text-[11px] font-black tabular-nums text-p5-white/30 group-hover:text-p5-white/60 transition-colors duration-150 w-6">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Title + summary */}
        <div className="flex-1 min-w-0">
          <h3
            className={`text-xl md:text-2xl font-black uppercase tracking-tight leading-tight transition-colors duration-150 ${
              isOpen ? accentText : 'text-p5-white group-hover:text-p5-white'
            }`}
          >
            {group.category}
          </h3>
          <p className="text-sm text-p5-white/40 mt-1 leading-snug">
            {group.summary}
          </p>
        </div>

        {/* Count */}
        <span className="hidden sm:inline-block text-[11px] font-bold text-p5-white/30 tabular-nums">
          {String(group.items.length).padStart(2, '0')}
        </span>

        {/* Toggle icon */}
        <span
          className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 transition-all duration-200 ${
            isOpen
              ? `${accentBg} border-transparent text-p5-white`
              : 'border-p5-white/25 text-p5-white/60 group-hover:border-p5-white group-hover:text-p5-white'
          }`}
        >
          <Plus
            size={18}
            className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pl-12 pr-4 pb-8 pt-2">
              <div className="flex flex-col gap-6">
                {group.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + ii * 0.05, duration: 0.3 }}
                    className="flex gap-4"
                  >
                    <span className={`flex-shrink-0 w-1 self-stretch ${accentBg}`} />
                    <div>
                      <p className="text-sm font-bold text-p5-white uppercase tracking-wide leading-tight">
                        {item.name}
                      </p>
                      <p className="text-sm text-p5-white/60 leading-relaxed mt-2 max-w-2xl">
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ────────────────────────────────────────────────────────────
// Page
// ────────────────────────────────────────────────────────────
export default function About() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <main className="min-h-screen pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* ── Page Header ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-32"
        >
          <span className="p5-tag text-p5-cyan border-p5-cyan mb-4 inline-block">
            About Me
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-none mt-3">
            <span className="text-stroke">THE</span>{' '}
            <span className="text-p5-white">STRATEGIST</span>
          </h1>
          <div className="h-1 bg-p5-red mt-5" style={{ width: '80px' }} />
        </motion.div>

        {/* ── 01 · Philosophy ──────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-32"
        >
          <SectionLabel number="01" title="Philosophy" />
          <div className="max-w-3xl">
            <p className="text-p5-white text-2xl md:text-3xl font-bold leading-[1.3] tracking-tight mb-8">
              I build marketing systems that scale. My work sits at the intersection of automation, data, and creative strategy — turning complex B2B buyer journeys into measurable pipeline.
            </p>
            <p className="text-p5-white/60 text-base md:text-lg leading-relaxed">
              I believe great demand generation isn&apos;t just about volume — it&apos;s about precision. AI-enabled workflows, rigorous funnel analysis, and conversion-obsessed content are how I generate growth that compounds.
            </p>
          </div>
        </motion.section>

        {/* ── 02 · Practice Areas (accordion) ──────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-32"
        >
          <SectionLabel number="02" title="Practice Areas" />
          <div className="border-t border-p5-white/10">
            {skillGroups.map((group, i) => (
              <PracticeAccordion
                key={group.category}
                group={group}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </motion.section>

        {/* ── 03 · Toolkit + Foundation ────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-32"
        >
          <SectionLabel number="03" title="Toolkit" accent="p5-cyan" />

          <div className="grid md:grid-cols-2 gap-16">
            {/* Tools */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-p5-white/40 mb-5">
                Tools & Platforms
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 border border-p5-white/20 text-xs font-bold text-p5-white/60 uppercase tracking-wide hover:border-p5-red hover:text-p5-red transition-all duration-150 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Foundation */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-p5-white/40 mb-5">
                Academic Foundation
              </p>
              <ul className="flex flex-col">
                {foundation.map((course, i) => (
                  <li
                    key={course}
                    className="group flex items-center gap-4 border-b border-p5-white/5 last:border-b-0 py-2.5"
                  >
                    <span className="text-[10px] font-bold text-p5-white/25 tabular-nums w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium text-p5-white/75 group-hover:text-p5-red transition-colors duration-150">
                      {course}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* ── 04 · Certifications ──────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel number="04" title="Certifications" />
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="border-2 border-p5-white/10 bg-p5-gray p-6 hover:border-p5-white/30 transition-colors duration-200 group"
              >
                <div className={`w-8 h-1 mb-4 ${cert.color === 'p5-red' ? 'bg-p5-red' : 'bg-p5-cyan'}`} />
                <p className="text-p5-white font-bold leading-snug mb-2">{cert.name}</p>
                <p className={`text-xs font-bold uppercase tracking-widest ${cert.color === 'p5-red' ? 'text-p5-red' : 'text-p5-cyan'}`}>
                  {cert.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  )
}
