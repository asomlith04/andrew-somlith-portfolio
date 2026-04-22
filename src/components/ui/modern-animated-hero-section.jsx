import { useState, useEffect, useCallback, useRef } from 'react'

// Persona 5 palette
const P5_RED = '#E51B23'
const P5_WHITE = '#F5F5F0'

/**
 * TextScramble — iteratively resolves scrambled characters into the target phrase.
 */
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#'
    this.queue = []
    this.frame = 0
    this.frameRequest = 0
    this.resolve = () => {}
    this.update = this.update.bind(this)
  }

  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => {
      this.resolve = resolve
    })
    this.queue = []

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }

    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }

  update() {
    let output = ''
    let complete = 0

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)]
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }

    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
}

/**
 * ScrambledTitle — scrambles through a list of phrases and optionally lands on a final phrase.
 * Exported as a named export so it can be dropped into any hero layout.
 *
 * Props:
 *   phrases: string[]           — phrases to cycle through while scrambling
 *   finalPhrase?: string        — if provided, stops on this phrase after one full pass
 *   className?: string          — override styling
 *   interval?: number           — ms between phrase swaps (default 2000)
 */
export const ScrambledTitle = ({
  phrases,
  finalPhrase,
  className = 'text-p5-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9]',
  interval = 2000,
}) => {
  const elementRef = useRef(null)
  const scramblerRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (elementRef.current && !scramblerRef.current) {
      scramblerRef.current = new TextScramble(elementRef.current)
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    if (!mounted || !scramblerRef.current) return

    let counter = 0
    let timeoutId
    let cancelled = false

    const next = () => {
      if (cancelled || !scramblerRef.current) return

      const currentPhrase = phrases[counter]
      scramblerRef.current.setText(currentPhrase).then(() => {
        if (cancelled) return

        counter++
        if (counter >= phrases.length) {
          // If a finalPhrase is provided, end on it. Otherwise loop.
          if (finalPhrase) {
            timeoutId = setTimeout(() => {
              if (scramblerRef.current && !cancelled) {
                scramblerRef.current.setText(finalPhrase)
              }
            }, interval)
            return
          }
          counter = 0
        }
        timeoutId = setTimeout(next, interval)
      })
    }

    next()

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
    }
  }, [mounted, phrases, finalPhrase, interval])

  return (
    <h1 ref={elementRef} className={className}>
      {phrases[0]}
    </h1>
  )
}

/**
 * RainingLetters — Persona 5-themed raining character rain.
 *
 * Props:
 *   density?: number            — number of characters (default 300)
 *   baseColor?: string          — dim character color
 *   activeColor?: string        — flickered character color (default red)
 *   fontFamily?: string         — font override
 *   showTitle?: boolean         — show centered scramble title (default true)
 *   phrases?: string[]          — phrases for the scramble title
 */
const RainingLetters = ({
  density = 300,
  baseColor = 'rgba(245, 245, 240, 0.15)',
  activeColor = P5_RED,
  fontFamily = "'Space Grotesk', system-ui, sans-serif",
  showTitle = true,
  phrases = [
    'STRATEGY.',
    'SYSTEMS.',
    'GROWTH.',
    'EXECUTION.',
    'ANDREW SOMLITH',
  ],
}) => {
  const [characters, setCharacters] = useState([])
  const [activeIndices, setActiveIndices] = useState(new Set())

  const createCharacters = useCallback(() => {
    const allChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
    const newCharacters = []
    for (let i = 0; i < density; i++) {
      newCharacters.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: 0.1 + Math.random() * 0.3,
      })
    }
    return newCharacters
  }, [density])

  useEffect(() => {
    setCharacters(createCharacters())
  }, [createCharacters])

  useEffect(() => {
    const updateActiveIndices = () => {
      const newActiveIndices = new Set()
      const numActive = Math.floor(Math.random() * 3) + 3
      for (let i = 0; i < numActive; i++) {
        newActiveIndices.add(Math.floor(Math.random() * characters.length))
      }
      setActiveIndices(newActiveIndices)
    }

    const flickerInterval = setInterval(updateActiveIndices, 50)
    return () => clearInterval(flickerInterval)
  }, [characters.length])

  useEffect(() => {
    let animationFrameId
    const allChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

    const updatePositions = () => {
      setCharacters((prevChars) =>
        prevChars.map((char) => ({
          ...char,
          y: char.y + char.speed,
          ...(char.y >= 100 && {
            y: -5,
            x: Math.random() * 100,
            char: allChars[Math.floor(Math.random() * allChars.length)],
          }),
        })),
      )
      animationFrameId = requestAnimationFrame(updatePositions)
    }

    animationFrameId = requestAnimationFrame(updatePositions)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="relative w-full h-full bg-p5-black overflow-hidden">
      {showTitle && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <ScrambledTitle phrases={phrases} />
        </div>
      )}

      {characters.map((char, index) => {
        const active = activeIndices.has(index)
        return (
          <span
            key={index}
            className="absolute transition-colors duration-100 font-bold"
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              color: active ? activeColor : baseColor,
              transform: `translate(-50%, -50%) ${active ? 'scale(1.25)' : 'scale(1)'}`,
              textShadow: active
                ? `0 0 8px ${activeColor}, 0 0 14px rgba(229, 27, 35, 0.5)`
                : 'none',
              opacity: active ? 1 : 0.5,
              transition: 'color 0.1s, transform 0.1s, text-shadow 0.1s',
              willChange: 'transform, top',
              fontSize: '1.8rem',
              fontFamily,
              zIndex: active ? 10 : 1,
            }}
          >
            {char.char}
          </span>
        )
      })}
    </div>
  )
}

export default RainingLetters
