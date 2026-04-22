import { HeroSection } from '../components/ui/glass-video-hero'

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
        primaryCta={{ label: 'See Case Studies', to: '/case-studies' }}
        secondaryCta={{ label: 'Get In Touch', to: '/contact' }}
      />
    </main>
  )
}
