import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import ServicesSection from './ServicesSection'
import logoImg from './assets/logo.png'
import aboutImg from './assets/about.jpeg'
import flowerDecorImg from './assets/flower_decor.jpeg'
import eventDecorImg from './assets/event_decor.jpeg'
import balloonDecorImg from './assets/balloon_decor.jpeg'
import foodSnacksImg from './assets/food_snacks.png'
import funActivitiesImg from './assets/fun_activities.png'
import entertainmentImg from './assets/entertainment.png'
import gallery2Img from './assets/gallery_2.jpeg'
import heroStageImg from './assets/hero_stage.jpg'

const services = [
  {
    title: 'Flower Decor',
    description: 'Elegant floral arrangements designed around your celebration.',
    image: flowerDecorImg,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 28c0-5.5-4.5-10-10-10 5.5 0 10-4.5 10-10 0 5.5 4.5 10 10 10-5.5 0-10 4.5-10 10z" />
        <circle cx="18" cy="18" r="3" />
      </svg>
    ),
  },
  {
    title: 'Balloon Decor',
    description: 'Creative balloon installations that transform your venue.',
    image: balloonDecorImg,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="18" cy="14" rx="8" ry="11" />
        <path d="M14 25l4 8 4-8" />
        <path d="M15 33h6" />
      </svg>
    ),
  },
  {
    title: 'Fun Activities',
    description: 'Interactive entertainment and activities for unforgettable moments.',
    image: funActivitiesImg,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="18,3 22,13 33,13 24,20 27,31 18,24 9,31 12,20 3,13 14,13" />
      </svg>
    ),
  },
  {
    title: 'Food & Snacks',
    description: 'Beautifully presented food and snack experiences.',
    image: foodSnacksImg,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h24" />
        <path d="M8 18c0-6 4-12 10-12s10 6 10 12" />
        <path d="M10 22h16l-2 8H12l-2-8z" />
      </svg>
    ),
  },
  {
    title: 'Event Decor',
    description: 'Complete venue transformation with premium styling.',
    image: eventDecorImg,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="8" width="26" height="20" rx="2" />
        <path d="M5 14h26" />
        <path d="M14 8v-4" />
        <path d="M22 8v-4" />
      </svg>
    ),
  },
  {
    title: 'Entertainment',
    description: 'Music, games and entertainment designed for your guests.',
    image: entertainmentImg,
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="12" />
        <circle cx="18" cy="18" r="4" />
        <path d="M18 6v4" />
        <path d="M18 26v4" />
        <path d="M6 18h4" />
        <path d="M26 18h4" />
      </svg>
    ),
  },
]

const featureItems = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 5l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" />
      </svg>
    ),
    title: 'Creative Planning',
    description: 'Unique ideas and customized plans for every event.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="28" height="28" rx="3" />
        <path d="M14 20l4 4 8-8" />
      </svg>
    ),
    title: 'Seamless Execution',
    description: 'We handle every detail, you enjoy the moment.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="14" r="6" />
        <path d="M10 32c0-5.5 4.5-10 10-10s10 4.5 10 10" />
      </svg>
    ),
    title: 'Experienced Team',
    description: 'Passionate professionals dedicated to perfection.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6c-7.7 0-14 6.3-14 14 0 4.4 2 8.3 5.2 10.8L14 36l4-3 2 3 2-3 4 3 2.8-5.2C32 28.3 34 24.4 34 20c0-7.7-6.3-14-14-14z" />
        <path d="M15 19l3 3 7-7" />
      </svg>
    ),
    title: 'Trusted by Many',
    description: 'Delivering memorable events since day one.',
  },
]

const portfolioItems = [
  {
    title: 'Grand Palace Wedding Reception',
    tag: 'Flower Decor',
    images: [flowerDecorImg, aboutImg, gallery2Img],
  },
  {
    title: 'Dreamy Pastel Forest Kids Party',
    tag: 'Balloon Decor',
    images: [balloonDecorImg],
  },
  {
    title: 'Interactive Fun Carnival',
    tag: 'Fun Activities',
    images: [funActivitiesImg],
  },
  {
    title: 'Gourmet Delights & Food Street',
    tag: 'Food & Snacks',
    images: [foodSnacksImg],
  },
  {
    title: 'Luxury Golden Stage Gala Reception',
    tag: 'Event Decor',
    images: [eventDecorImg],
  },
  {
    title: 'Symphony Sangeet DJ Night',
    tag: 'Entertainment',
    images: [entertainmentImg],
  },
]



const galleryItems = [
  { category: 'Balloon Decor', src: balloonDecorImg },
  { category: 'Food & Snacks', src: foodSnacksImg },
  { category: 'Fun Activities', src: funActivitiesImg },
  { category: 'Entertainment', src: entertainmentImg },
  { category: 'Flower Decor', src: aboutImg },
  { category: 'Flower Decor', src: gallery2Img },
  { category: 'Event Decor', src: eventDecorImg },
  { category: 'Flower Decor', src: flowerDecorImg },
]

const testimonials = [
  {
    quote:
      'Uptown Events transformed our celebration into something we will remember forever.',
    name: 'Ananya & Rohan',
    type: 'Wedding Celebration',
  },
  {
    quote:
      'From décor to entertainment, every detail felt thoughtful, premium and beautifully executed.',
    name: 'Meera Kapoor',
    type: 'Birthday Bash',
  },
  {
    quote:
      'The setup was stunning and the guest experience was simply unforgettable. Truly exceptional work.',
    name: 'Siddharth Nair',
    type: 'Corporate Event',
  },
]



const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Portfolio', href: '#portfolio' },

  { label: 'Contact', href: '#contact' },
]

const galleryFilters = ['ALL', 'FLOWER DECOR', 'BALLOON DECOR', 'FUN ACTIVITIES', 'FOOD & SNACKS', 'EVENT DECOR', 'ENTERTAINMENT']

/* ── Scroll Reveal Hook ── */
function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    /* respect prefers-reduced-motion */
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) {
      el.classList.add('revealed')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

function RevealSection({ className = '', children, ...rest }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal-on-scroll ${className}`} {...rest}>
      {children}
    </div>
  )
}

/* ── Reusable Premium Text Animation Components ── */
export function AnimatedLabel({ children, className = '' }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal-on-scroll label-container ${className}`}>
      <span className="reveal-up" style={{ display: 'inline-block' }}>{children}</span>
      <span className="label-gold-line delay-200"></span>
    </div>
  )
}

export function AnimatedHeading({ children, className = '', mask = false }) {
  const ref = useScrollReveal()
  
  if (mask) {
    return (
      <h2 ref={ref} className={`reveal-on-scroll ${className}`} style={{ margin: 0 }}>
        <span className="text-mask-wrapper">
          <span className="text-mask-content">{children}</span>
        </span>
      </h2>
    )
  }

  if (typeof children === 'string') {
    const words = children.split(' ')
    return (
      <h2 ref={ref} className={`reveal-on-scroll ${className}`}>
        {words.map((word, i) => {
          const isGold = word.toLowerCase().includes('passion') || 
                         word.toLowerCase().includes('created') || 
                         word.toLowerCase().includes('do') ||
                         word.toLowerCase().includes('amazing')
          return (
            <span 
              key={i} 
              className={`reveal-up delay-${Math.min(i * 100, 600)} ${isGold ? 'gold-text gold-shimmer' : ''}`}
              style={{ display: 'inline-block', marginRight: '0.28em' }}
            >
              {word}
            </span>
          )
        })}
      </h2>
    )
  }

  return (
    <h2 ref={ref} className={`reveal-on-scroll reveal-up ${className}`}>
      {children}
    </h2>
  )
}

export function AnimatedParagraph({ children, className = '', delay = 150 }) {
  const ref = useScrollReveal()
  return (
    <p ref={ref} className={`reveal-on-scroll reveal-up delay-${delay} ${className}`}>
      {children}
    </p>
  )
}

export function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const numericPart = parseInt(value, 10)
    if (isNaN(numericPart)) {
      setCount(value)
      return
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) {
      setCount(numericPart)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const end = numericPart
          const duration = 1200
          const steps = Math.min(end, 50)
          const increment = Math.max(Math.ceil(end / steps), 1)
          const stepTime = Math.max(Math.floor(duration / steps), 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, stepTime)

          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  const suffix = typeof value === 'string' ? value.replace(/[0-9]/g, '') : ''
  return <strong ref={ref}>{count}{suffix}</strong>
}

/* ── Decorative gold curve SVG ── */
function GoldCurve({ className = '' }) {
  return (
    <svg className={`gold-curve ${className}`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 180 Q 60 10, 190 60" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" opacity="0.35" />
      <circle cx="10" cy="180" r="3" fill="#D4AF37" opacity="0.5" />
      <circle cx="190" cy="60" r="3" fill="#D4AF37" opacity="0.5" />
      <circle cx="100" cy="85" r="2" fill="#D4AF37" opacity="0.3" />
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function GoldDots({ className = '' }) {
  return (
    <svg className={`gold-dots ${className}`} width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {[...Array(5)].map((_, row) =>
        [...Array(5)].map((_, col) => (
          <circle key={`${row}-${col}`} cx={12 + col * 24} cy={12 + row * 24} r="2" fill="#D4AF37" opacity={0.15 + Math.random() * 0.2} />
        ))
      )}
    </svg>
  )
}

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let particles = []
    const particleCount = window.innerWidth < 768 ? 15 : 35

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.6 + 0.4,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: -Math.random() * 0.25 - 0.05,
        opacity: Math.random() * 0.6 + 0.15,
        pulseSpeed: Math.random() * 0.008 + 0.002,
        pulseDir: Math.random() > 0.5 ? 1 : -1
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        // Move
        p.x += p.speedX
        p.y += p.speedY

        // Reset if off canvas
        if (p.y < 0) {
          p.y = canvas.height
          p.x = Math.random() * canvas.width
        }
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0

        // Pulsing opacity
        p.opacity += p.pulseSpeed * p.pulseDir
        if (p.opacity > 0.7) {
          p.opacity = 0.7
          p.pulseDir = -1
        } else if (p.opacity < 0.15) {
          p.opacity = 0.15
          p.pulseDir = 1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 170, 74, ${p.opacity})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Respect prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!motionQuery.matches) {
      animate()
    } else {
      // Draw static particles once
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 170, 74, ${p.opacity})`
        ctx.fill()
      })
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-particle-canvas" aria-hidden="true" />
}

function GoldWavesLeft() {
  return (
    <svg className="hero-bg-waves-left" viewBox="0 0 500 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Bright primary wave */}
      <path d="M-60 0 C 80 150, -20 400, 180 500 C 360 600, 100 750, 200 900" stroke="url(#wL1)" strokeWidth="2.5" opacity="0.7" />
      {/* Secondary wave */}
      <path d="M-40 50 C 100 180, 10 420, 200 530 C 370 630, 120 770, 230 900" stroke="url(#wL2)" strokeWidth="1.8" opacity="0.55" />
      {/* Tertiary thin wave */}
      <path d="M-80 20 C 60 160, -50 430, 160 540 C 330 640, 80 790, 180 900" stroke="url(#wL3)" strokeWidth="1.2" opacity="0.4" />
      {/* Fine accent lines */}
      <path d="M-30 100 C 120 240, 30 460, 220 560 C 380 660, 140 800, 250 900" stroke="url(#wL1)" strokeWidth="0.8" opacity="0.3" />
      <path d="M-70 -30 C 50 130, -30 390, 150 490 C 310 590, 70 740, 160 900" stroke="url(#wL4)" strokeWidth="1" opacity="0.35" />
      {/* Bright highlight thread */}
      <path d="M-20 200 C 130 310, 50 490, 240 580" stroke="url(#wLhigh)" strokeWidth="1.5" opacity="0.8" />
      <defs>
        <linearGradient id="wL1" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="25%" stopColor="#D4AF37" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#E2C35A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wL2" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" stopOpacity="0" />
          <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wL3" x1="0%" y1="0%" x2="55%" y2="100%">
          <stop offset="0%" stopColor="#E2C35A" stopOpacity="0" />
          <stop offset="35%" stopColor="#E2C35A" stopOpacity="0.7" />
          <stop offset="75%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wL4" x1="0%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wLhigh" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="40%" stopColor="#E2C35A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function GoldWavesRight() {
  return (
    <svg className="hero-bg-waves-right" viewBox="0 0 500 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Bright primary wave */}
      <path d="M560 0 C 420 150, 520 400, 320 500 C 140 600, 400 750, 300 900" stroke="url(#wR1)" strokeWidth="2.5" opacity="0.7" />
      {/* Secondary wave */}
      <path d="M540 50 C 400 180, 490 420, 300 530 C 130 630, 380 770, 270 900" stroke="url(#wR2)" strokeWidth="1.8" opacity="0.55" />
      {/* Tertiary thin wave */}
      <path d="M580 20 C 440 160, 550 430, 340 540 C 170 640, 420 790, 320 900" stroke="url(#wR3)" strokeWidth="1.2" opacity="0.4" />
      {/* Fine accent lines */}
      <path d="M530 100 C 380 240, 470 460, 280 560 C 120 660, 360 800, 250 900" stroke="url(#wR1)" strokeWidth="0.8" opacity="0.3" />
      <path d="M570 -30 C 450 130, 530 390, 350 490 C 190 590, 430 740, 340 900" stroke="url(#wR4)" strokeWidth="1" opacity="0.35" />
      {/* Bright highlight thread */}
      <path d="M520 200 C 370 310, 450 490, 260 580" stroke="url(#wRhigh)" strokeWidth="1.5" opacity="0.8" />
      <defs>
        <linearGradient id="wR1" x1="100%" y1="0%" x2="40%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="25%" stopColor="#D4AF37" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#E2C35A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wR2" x1="100%" y1="0%" x2="40%" y2="100%">
          <stop offset="0%" stopColor="#C9A227" stopOpacity="0" />
          <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wR3" x1="100%" y1="0%" x2="45%" y2="100%">
          <stop offset="0%" stopColor="#E2C35A" stopOpacity="0" />
          <stop offset="35%" stopColor="#E2C35A" stopOpacity="0.7" />
          <stop offset="75%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wR4" x1="100%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="40%" stopColor="#D4AF37" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wRhigh" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="40%" stopColor="#E2C35A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function GoldCircles() {
  return (
    <svg className="hero-bg-circles" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Outer dashed rotating ring */}
      <circle className="circle-outer" cx="400" cy="400" r="340" stroke="url(#cGrad)" strokeWidth="1.2" strokeDasharray="6, 14" opacity="0.35" />
      {/* Solid inner ring — more visible */}
      <circle className="circle-inner" cx="400" cy="400" r="295" stroke="url(#cGrad2)" strokeWidth="1" opacity="0.5" />
      {/* Innermost subtle glow ring */}
      <circle cx="400" cy="400" r="250" stroke="url(#cGrad)" strokeWidth="0.6" opacity="0.2" />
      <defs>
        <linearGradient id="cGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.9" />
          <stop offset="25%" stopColor="#E2C35A" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.9" />
          <stop offset="75%" stopColor="#C9A227" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="cGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#E2C35A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [portfolioOffset, setPortfolioOffset] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `*New Event Enquiry - Uptown Events*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name || 'N/A')}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A` +
      `*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A` +
      `*Event Type:* ${encodeURIComponent(formData.eventType || 'N/A')}%0A` +
      `*Event Date:* ${encodeURIComponent(formData.eventDate || 'N/A')}%0A` +
      `*Message:* ${encodeURIComponent(formData.message || 'N/A')}`

    const whatsappUrl = `https://wa.me/918088854400?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  const getCardClass = (index) => {
    let diff = index - activeIndex
    const len = portfolioItems.length
    if (diff < -len / 2) diff += len
    if (diff > len / 2) diff -= len

    if (diff === 0) return 'active'
    if (diff === -1) return 'prev-1'
    if (diff === 1) return 'next-1'
    if (diff === -2) return 'prev-2'
    if (diff === 2) return 'next-2'
    return 'hidden'
  }

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrev()
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setPortfolioOffset((current) => current + 1)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const filteredGallery = useMemo(() => {
    if (activeFilter === 'ALL') return galleryItems
    return galleryItems.filter((item) => item.category.toUpperCase() === activeFilter)
  }, [activeFilter])

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  const showNextImage = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev + 1) % filteredGallery.length)
  }

  const showPreviousImage = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length)
  }

  return (
    <div className="page-shell">
      <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
        <div className="navbar-container">
          <a href="#home" className="brand" aria-label="Uptown Events home">
            <img src={logoImg} alt="Uptown Events" className="brand-logo" />
          </a>

          <nav className="desktop-nav" aria-label="Desktop navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="desktop-cta">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram-nav-link" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#contact" className="nav-button">
              Plan Your Event
            </a>
          </div>

          {/* Instagram icon visible only in mobile top bar */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="instagram-nav-link mobile-insta-topbar"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>

          <button
            type="button"
            className={`nav-toggle ${mobileNavOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`mobile-nav-drawer ${mobileNavOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileNavOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram-nav-link" onClick={() => setMobileNavOpen(false)} aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#contact" className="nav-button mobile-cta" onClick={() => setMobileNavOpen(false)}>
              Plan Your Event
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="hero-section" id="home">
          {/* Animated Background Layer */}
          <div className="hero-bg-glow" aria-hidden="true" />
          <GoldCircles />
          <GoldWavesLeft />
          <GoldWavesRight />
          <ParticleCanvas />
          <div className="hero-bg-bottom-light" aria-hidden="true" />

          {/* Two-Column Layout Container */}
          <div className="hero-two-col-container">
            {/* Left Column (Content) */}
            <div className="hero-col-left">
              <RevealSection className="hero-left-content">
                <div className="hero-eyebrow reveal-up delay-100">
                  <span className="eyebrow-line"></span>
                  MAKING MOMENTS
                </div>
                
                <h1 className="hero-heading-editorial text-mask-wrapper">
                  <span className="text-mask-content reveal-up delay-200">
                    Memorable
                  </span>
                  <span className="gold-text gold-shimmer text-mask-content reveal-up delay-300">
                    Events,
                  </span>
                  <span className="text-mask-content reveal-up delay-400">
                    Flawlessly Done
                  </span>
                </h1>
                
                <p className="hero-description-editorial reveal-up delay-450">
                  From intimate gatherings to grand celebrations, we bring your vision to life with creativity, precision and passion.
                </p>
                
                <div className="hero-actions-editorial reveal-up delay-550">
                  <a href="#services" className="primary-button">
                    OUR SERVICES
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </a>
                  <a href="#contact" className="secondary-button">
                    CONTACT US
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </a>
                </div>
              </RevealSection>
            </div>

            {/* Right Column (Image) */}
            <div className="hero-col-right">
              <div className="hero-image-blend-wrapper">
                <img src={heroStageImg} alt="Luxury event decoration stage" className="hero-image-blend" />
                <div className="hero-image-gradient-overlay" />
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════ ABOUT ═══════════════ */}
        <section className="intro section-spacing" id="about">
          <div className="intro-grid">
            <RevealSection className="intro-copy">
              <AnimatedLabel>ABOUT US</AnimatedLabel>
              <AnimatedHeading>YOUR CELEBRATION, OUR PASSION.</AnimatedHeading>
              <AnimatedParagraph delay={200}>
                From intimate celebrations to grand occasions, Uptown Events creates beautifully designed
                experiences that turn special moments into unforgettable memories.
              </AnimatedParagraph>

              <div className="stats-grid">
                <div className="stat-item reveal-up delay-300">
                  <AnimatedNumber value="10+" />
                  <span>Years of Experience</span>
                </div>
                <div className="stat-item reveal-up delay-400">
                  <AnimatedNumber value="3200+" />
                  <span>Events Created</span>
                </div>
                <div className="stat-item reveal-up delay-500">
                  <AnimatedNumber value="100%" />
                  <span>Passion</span>
                </div>
              </div>
            </RevealSection>
            <RevealSection className="intro-image-wrap">
              <img
                src={aboutImg}
                alt="Elegant event decoration setup"
              />
            </RevealSection>
          </div>
        </section>

        {/* ═══════════════ SERVICES ═══════════════ */}
        <ServicesSection />

        {/* ═══════════════ GALLERY ═══════════════ */}
        <section className="gallery section-spacing" id="gallery">
          <div className="section-heading center-heading">
            <AnimatedLabel>OUR GALLERY</AnimatedLabel>
            <AnimatedHeading>Moments We've Created</AnimatedHeading>
          </div>

          <div className="filter-row" aria-label="Gallery filters">
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={filter === activeFilter ? 'filter active' : 'filter'}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="masonry-grid">
            {filteredGallery.map((item, index) => (
              <button
                key={`${item.src}-${index}`}
                type="button"
                className={`masonry-item ${item.aspect}`}
                onClick={() => setLightboxIndex(index)}
                aria-label={`Open image ${index + 1}`}
              >
                <img src={item.src} alt={`${item.category} event decor`} loading="lazy" />
                <span className="gallery-hover">
                  <span className="view-icon">VIEW</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* ═══════════════ PORTFOLIO ═══════════════ */}
        <section className="portfolio section-spacing" id="portfolio">
          <div className="section-heading center-heading">
            <AnimatedLabel>OUR PORTFOLIO</AnimatedLabel>
            <AnimatedHeading>OUR PORTFOLIO</AnimatedHeading>
            <AnimatedParagraph className="section-subtitle" delay={150}>"Moments we've created. Memories that stay."</AnimatedParagraph>
          </div>

          <div className="portfolio-carousel-container">
            <div
              className="portfolio-carousel-wrapper"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {portfolioItems.map((item, index) => {
                const cardClass = getCardClass(index)
                return (
                  <article
                    key={item.title}
                    className={`portfolio-carousel-card ${cardClass}`}
                    onClick={() => {
                      if (cardClass === 'prev-1') handlePrev()
                      if (cardClass === 'next-1') handleNext()
                    }}
                  >
                    <div className="portfolio-card-image-wrap">
                      <div className="portfolio-photo-badge">
                        {(portfolioOffset % item.images.length) + 1} / {item.images.length}
                      </div>
                      <img
                        src={item.images[portfolioOffset % item.images.length]}
                        alt={item.title}
                        key={`${item.title}-${portfolioOffset % item.images.length}`}
                        className="portfolio-swap-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="portfolio-card-content">
                      <span className="portfolio-card-tag">{item.tag}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Carousel Controls */}
            <div className="portfolio-carousel-controls">
              <button
                type="button"
                className="carousel-control-btn prev"
                onClick={handlePrev}
                aria-label="Previous event"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                className="carousel-control-btn next"
                onClick={handleNext}
                aria-label="Next event"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* ═══════════════ TESTIMONIALS ═══════════════ */}
        <section className="testimonials section-spacing" id="testimonials">
          <div className="section-heading center-heading">
            <AnimatedLabel>TESTIMONIALS</AnimatedLabel>
            <AnimatedHeading>WORDS FROM OUR CLIENTS</AnimatedHeading>
          </div>
          <div className="testimonial-card" key={testimonialIndex}>
            <div className="testimonial-gold-quote" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M14 28c-3.3 0-6-2.7-6-6 0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h2c3.3 0 6 2.7 6 6s-2.7 6-6 6zm20 0c-3.3 0-6-2.7-6-6 0-6.6 5.4-12 12-12v4c-4.4 0-8 3.6-8 8h2c3.3 0 6 2.7 6 6s-2.7 6-6 6z" fill="#D4AF37" opacity="0.6" />
              </svg>
            </div>
            <div className="stars">★ ★ ★ ★ ★</div>
            <p className="testimonial-quote">"{testimonials[testimonialIndex].quote}"</p>
            <div className="testimonial-meta">
              <strong>{testimonials[testimonialIndex].name}</strong>
              <span>{testimonials[testimonialIndex].type}</span>
            </div>
            <div className="testimonial-controls">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`dot ${i === testimonialIndex ? 'active' : ''}`}
                  onClick={() => setTestimonialIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════ CONTACT ═══════════════ */}
        <section className="contact section-spacing" id="contact">
          <div className="contact-grid">
            <RevealSection className="contact-copy">
              <AnimatedLabel>CONTACT</AnimatedLabel>
              <AnimatedHeading>LET'S CREATE SOMETHING BEAUTIFUL</AnimatedHeading>
              <div className="contact-details">
                <div className="reveal-up delay-100">
                  <span className="detail-icon">☎</span>
                  <a href="tel:+918088854400">+91 8088854400</a>
                </div>
                <div className="reveal-up delay-150">
                  <span className="detail-icon">✉</span>
                  <a href="mailto:uptownevent2020@gmail.com">uptownevent2020@gmail.com</a>
                </div>
                <div className="reveal-up delay-200">
                  <span className="detail-icon">✆</span>
                  <a href="https://wa.me/918088854400" target="_blank" rel="noreferrer">WhatsApp</a>
                </div>
                <div className="reveal-up delay-250">
                  <span className="detail-icon">◎</span>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                </div>
              </div>

              {/* Rectangular Google Map on Left Side */}
              <div className="map-inline-container reveal-up delay-300">
                <iframe
                  title="Uptown Events Location Map"
                  src="https://maps.google.com/maps?q=Uptown+Event,+15,+Kempegowda+Layout,+Kamala+Nagar,+Bengaluru,+Karnataka+560058&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </RevealSection>

            <RevealSection>
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="field-row reveal-up delay-100">
                  <label>
                    Name
                    <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleInputChange} required />
                  </label>
                  <label>
                    Phone Number
                    <input type="tel" name="phone" placeholder="Your phone" value={formData.phone} onChange={handleInputChange} required />
                  </label>
                </div>

                <div className="field-row reveal-up delay-200">
                  <label>
                    Email
                    <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleInputChange} />
                  </label>
                  <label>
                    Event Type
                    <input type="text" name="eventType" placeholder="Wedding, birthday..." value={formData.eventType} onChange={handleInputChange} />
                  </label>
                </div>

                <label className="reveal-up delay-300">
                  Event Date
                  <input type="date" name="eventDate" value={formData.eventDate} onChange={handleInputChange} />
                </label>

                <label className="reveal-up delay-400">
                  Message
                  <textarea name="message" rows="5" placeholder="Tell us about your dream celebration..." value={formData.message} onChange={handleInputChange}></textarea>
                </label>

                <button type="submit" className="primary-button form-button reveal-up delay-500">
                  SEND ENQUIRY
                </button>
              </form>
            </RevealSection>
          </div>
        </section>
      </main>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="brand footer-brand-name" aria-label="Uptown Events home">
              <img src={logoImg} alt="Uptown Events" className="brand-logo" />
            </a>
            <p></p>
          </div>

          <div className="footer-links">
            <h3>Navigation</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li>Flower Decor</li>
              <li>Balloon Decor</li>
              <li>Entertainment</li>
              <li>Food & Snacks</li>
              <li>Event Decor</li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Contact</h3>
            <ul>
              <li><a href="tel:+918088854400">+91 8088854400</a></li>
              <li><a href="mailto:uptownevent2020@gmail.com">uptownevent2020@gmail.com</a></li>
              <li><a href="https://maps.app.goo.gl/cJEsowg8BWGwpRf19" target="_blank" rel="noreferrer">Kamala Nagar, Bengaluru</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Uptown Events. All Rights Reserved.</span>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://wa.me/918088854400" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
            <a href="tel:+918088854400" aria-label="Phone">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
          </div>
        </div>
      </footer>

      {lightboxIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Event gallery image viewer">
          <button type="button" className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close gallery">
            ×
          </button>
          <button type="button" className="lightbox-nav prev" onClick={showPreviousImage} aria-label="Previous image">
            ‹
          </button>
          <img src={filteredGallery[lightboxIndex].src} alt={filteredGallery[lightboxIndex].category} />
          <button type="button" className="lightbox-nav next" onClick={showNextImage} aria-label="Next image">
            ›
          </button>
        </div>
      )}
    </div>
  )
}

export default App
