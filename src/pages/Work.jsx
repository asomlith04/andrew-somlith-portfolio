import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { HeroSection } from '../components/ui/glass-video-hero'

const caseStudies = [
  {
    id: 1,
    tag: 'Landing Page Optimization',
    title: 'SaaS Trial Conversion Lift',
    subtitle: 'B2B SaaS Platform',
    description:
      'Redesigned a product trial landing page using conversion-rate optimization principles — clearer value props, friction-reduced forms, and social proof placement. Ran A/B tests across headline variants and CTA positioning.',
    lessons: [
      {
        title: 'Specificity beats cleverness',
        detail: 'Headlines that named the exact buyer pain outperformed clever, brand-forward copy every time. The best-performing variant read like a search query, not a slogan.',
      },
      {
        title: 'Every form field is a tax',
        detail: 'Each additional field measurably lowered completion. Ask only for what sales truly needs in the first 24 hours — enrichment tools can fill the rest.',
      },
      {
        title: 'Social proof works when it\'s adjacent to the CTA',
        detail: 'Testimonials at the top of the page were skimmed past. Placing a logo bar or a short quote inline with the signup button shifted hesitation to action.',
      },
    ],
    tags: ['CRO', 'A/B Testing', 'UX Copywriting', 'HubSpot'],
    accent: 'p5-red',
    rotation: '-rotate-1',
  },
  {
    id: 2,
    tag: 'Email Campaign',
    title: 'Product Launch Drip Campaign',
    subtitle: 'B2B SaaS — New Feature Release',
    description:
      'Architected and executed a 6-email nurture sequence for a new product feature launch. Segmented existing users from cold prospects, personalized messaging by buyer persona, and automated follow-ups based on engagement signals.',
    lessons: [
      {
        title: 'Segmentation is the campaign',
        detail: 'The same copy performed wildly differently across personas. Treating existing users and cold prospects as one list would have wasted both groups — the tighter the segment, the sharper the message.',
      },
      {
        title: 'Behavioral triggers beat static schedules',
        detail: 'Follow-ups sent in response to opens and clicks outperformed fixed time-delays. The buyer\'s signal is more valuable than your calendar.',
      },
      {
        title: 'Launch sequences are about sequencing, not volume',
        detail: 'Six emails felt right. Earlier drafts had nine, and the extra touches cannibalized engagement rather than adding to it. Cutting is part of the craft.',
      },
    ],
    tags: ['Email Automation', 'HubSpot', 'Segmentation', 'Demand Gen'],
    accent: 'p5-cyan',
    rotation: 'rotate-1',
  },
]

export default function Work() {
  return (
    <main className="min-h-screen">
      {/* Cinematic video hero banner */}
      <HeroSection
        eyebrow="Selected B2B Case Studies"
        headline={
          <>
            The work behind
            <br />
            the{' '}
            <em
              className="text-p5-red font-black"
              style={{ fontStyle: 'italic' }}
            >
              numbers
            </em>{' '}
            that matter
          </>
        }
        subtext="A closer look at the campaigns, systems, and decisions behind the outcome."
        primaryCta={{ label: 'See Case Studies', href: '#case-studies' }}
        secondaryCta={{ label: 'Get In Touch', href: '/contact' }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20" id="case-studies">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span className="p5-tag text-p5-red border-p5-red mb-4 inline-block">
            Selected Work
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-none mt-3">
            <span className="text-p5-white">CASE</span>{' '}
            <span className="text-stroke">STUDIES</span>
          </h1>
          <div className="h-1 bg-p5-red mt-4" style={{ width: '80px' }} />
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-12">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.15, duration: 0.5 }}
              className={`border-2 border-p5-white/20 bg-p5-gray hover:border-p5-white/60 transition-all duration-200 group ${cs.rotation} hover:rotate-0`}
            >
              <div className="p-8 md:p-12">
                {/* Card header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className={`p5-tag text-xs mb-3 inline-block ${cs.accent === 'p5-red' ? 'text-p5-red border-p5-red' : 'text-p5-cyan border-p5-cyan'}`}>
                      {cs.tag}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-black text-p5-white leading-tight mt-2">
                      {cs.title}
                    </h2>
                    <p className="text-p5-white/40 text-sm font-medium mt-1 uppercase tracking-widest">
                      {cs.subtitle}
                    </p>
                  </div>
                  <div className="text-4xl font-black text-p5-white/10 group-hover:text-p5-white/20 transition-colors duration-200">
                    0{cs.id}
                  </div>
                </div>

                {/* Description */}
                <p className="text-p5-white/60 leading-relaxed mb-8 max-w-2xl">
                  {cs.description}
                </p>

                {/* Lessons Learned */}
                <div className="border-t border-p5-white/10 pt-6 mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-p5-white/30 mb-5">
                    Lessons Learned
                  </p>
                  <div className="flex flex-col gap-5">
                    {cs.lessons.map(({ title, detail }, idx) => (
                      <div key={title} className="flex gap-4">
                        <span
                          className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border-2 font-black text-xs ${
                            cs.accent === 'p5-red'
                              ? 'border-p5-red text-p5-red'
                              : 'border-p5-cyan text-p5-cyan'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <div>
                          <p
                            className={`font-bold text-sm md:text-base leading-snug mb-1 ${
                              cs.accent === 'p5-red' ? 'text-p5-red' : 'text-p5-cyan'
                            }`}
                          >
                            {title}
                          </p>
                          <p className="text-p5-white/60 text-sm leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium border border-p5-white/20 text-p5-white/40 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-p5-white/40 text-sm mb-4 uppercase tracking-widest">
            Want to see what I can do for your pipeline?
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-p5-red border-2 border-p5-red text-p5-white font-black text-sm uppercase tracking-widest hover:bg-transparent hover:text-p5-red transition-all duration-150 cursor-pointer"
          >
            Let&apos;s Talk →
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
