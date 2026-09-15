import { useEffect, useRef, useState, useCallback } from 'react'
import { AnimatedLabel, AnimatedHeading } from './App'
import './Services.css'
import flowerDecorImg from './assets/flower_decor.jpeg'
import flowerShowHouseImg from './assets/flower_show_house.jpg'
import eventDecorImg from './assets/event_decor.jpeg'
import balloonDecorImg from './assets/balloon_decor.jpeg'
import foodSnacksImg from './assets/food_snacks.png'
import funActivitiesImg from './assets/fun_activities.png'
import entertainmentImg from './assets/entertainment.png'
import aboutImg from './assets/about.jpeg'
import gallery2Img from './assets/gallery_2.jpeg'

// Dynamically import all 24 flower show images and sort them numerically
const flowerShowImagesMap = import.meta.glob('./assets/flower_show/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true, import: 'default' })
const flowerShowImages = Object.keys(flowerShowImagesMap)
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10)
    const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10)
    return numA - numB
  })
  .map(key => flowerShowImagesMap[key])

// Dynamically import all 10 wedding flower decor images and sort them numerically
const weddingImagesMap = import.meta.glob('./assets/flower_decor_weddings/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true, import: 'default' })
const weddingImages = Object.keys(weddingImagesMap)
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10)
    const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10)
    return numA - numB
  })
  .map(key => weddingImagesMap[key])

// Dynamically import all 14 reception flower decor images and sort them numerically
const receptionImagesMap = import.meta.glob('./assets/flower_decor_receptions/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true, import: 'default' })
const receptionImages = Object.keys(receptionImagesMap)
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10)
    const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10)
    return numA - numB
  })
  .map(key => receptionImagesMap[key])

// Dynamically import all 10 naming ceremony flower decor images and sort them numerically
const namingImagesMap = import.meta.glob('./assets/flower_decor_naming_ceremonies/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true, import: 'default' })
const namingImages = Object.keys(namingImagesMap)
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10)
    const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10)
    return numA - numB
  })
  .map(key => namingImagesMap[key])

// Dynamically import all 17 temple inauguration flower decor images and sort them numerically
const templeImagesMap = import.meta.glob('./assets/flower_decor_temples/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true, import: 'default' })
const templeImages = Object.keys(templeImagesMap)
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10)
    const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10)
    return numA - numB
  })
  .map(key => templeImagesMap[key])

// Dynamically import all 4 house warming flower decor images and sort them numerically
const houseWarmingImagesMap = import.meta.glob('./assets/flower_decor_house_warmings/*.{png,jpg,jpeg,PNG,JPG,JPEG}', { eager: true, import: 'default' })
const houseWarmingImages = Object.keys(houseWarmingImagesMap)
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10)
    const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10)
    return numA - numB
  })
  .map(key => houseWarmingImagesMap[key])

/* ═══════════════════════════════════════════
   SERVICE DATA
   ═══════════════════════════════════════════ */

const servicesData = [
  {
    id: 'flower-decor',
    title: 'Flower Decor',
    description: 'Elegant floral arrangements meticulously designed around your celebration — from intimate ceremonies to grand receptions.',
    image: weddingImages[0] || flowerDecorImg,
    galleryImages: [...weddingImages, ...receptionImages, ...namingImages, ...templeImages, ...houseWarmingImages],
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 28c0-5.5-4.5-10-10-10 5.5 0 10-4.5 10-10 0 5.5 4.5 10 10 10-5.5 0-10 4.5-10 10z" />
        <circle cx="18" cy="18" r="3" />
      </svg>
    ),
    categories: [
      { title: 'Weddings', image: weddingImages[0] || flowerDecorImg, description: 'Grand wedding stage decorations, mandaps, traditional entry gates, and customized wedding hall setups.', galleryImages: weddingImages },
      { title: 'Reception', image: receptionImages[0] || aboutImg, description: 'Elegant floral styling, stage backdrops, premium photobooth setups, and tablescapes for reception parties.', galleryImages: receptionImages },
      { title: 'Haldhi', image: gallery2Img, description: 'Vibrant yellow and orange floral decorations, photogenic swings, and traditional Haldi backdrops.' },
      { title: 'Mehandi', image: flowerDecorImg, description: 'Colorful floral decor, cozy seating setups, and creative floral canopies for Mehendi functions.' },
      { title: 'Half Saree Ceremony', image: aboutImg, description: 'Charming floral backdrops, stage designs, and traditional half saree ceremony decorations.' },
      { title: 'Naming Ceremony', image: namingImages[0] || gallery2Img, description: 'Beautiful floral cradles, welcome boards, and delicate floral stage setups for naming ceremonies.', galleryImages: namingImages },
      { title: 'House Warming', image: houseWarmingImages[0] || flowerDecorImg, description: 'Traditional door hangings (Torans) with mango leaves and marigolds, and elegant home decor setups.', galleryImages: houseWarmingImages },
      { title: 'Temple Inauguration', image: templeImages[0] || aboutImg, description: 'Divine and elaborate temple floral arrangements, altar decorations, and spiritual venue setups.', galleryImages: templeImages },
    ],
    detailDescription: 'Our expert floral designers craft breathtaking arrangements for every occasion. From grand wedding stages to intimate naming ceremonies, we bring nature\'s beauty to your celebration.',
  },
  {
    id: 'balloon-decor',
    title: 'Balloon Decor',
    description: 'Creative balloon installations and sculptural designs that transform any venue into a magical celebration space.',
    image: balloonDecorImg,
    galleryImages: [balloonDecorImg, aboutImg, gallery2Img, balloonDecorImg, aboutImg, gallery2Img],
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="18" cy="14" rx="8" ry="11" />
        <path d="M14 25l4 8 4-8" />
        <path d="M15 33h6" />
      </svg>
    ),
    categories: [
      { title: 'Birthday Party', image: balloonDecorImg, description: 'Premium birthday balloon setups.' },
      { title: 'Welcome Baby Decor', image: aboutImg, description: 'Elegant baby welcome balloon arrangements.' },
      { title: 'Basic Home Decor', image: gallery2Img, description: 'Simple and tasteful home balloon decoration.' },
      { title: 'Corporate Events', image: balloonDecorImg, description: 'Professional corporate balloon installations.' },
      { title: 'Anniversary Party', image: aboutImg, description: 'Romantic anniversary balloon setups.' },
      { title: 'Retirement Party', image: gallery2Img, description: 'Celebratory retirement decoration.' },
      { title: 'Holy Communion', image: balloonDecorImg, description: 'Elegant and reverent communion decor.' },
      { title: 'Private Party', image: aboutImg, description: 'Custom private party balloon decoration.' },
    ],
    detailDescription: 'From fun birthday arches to sophisticated corporate setups, our balloon artists create visually stunning installations tailored to every event type and budget.',
  },
  {
    id: 'flower-show',
    title: 'Flower Show',
    description: 'Stunning live flower show displays and curated floral exhibitions that add a magical touch to any event or venue.',
    image: flowerShowHouseImg,
    galleryImages: [flowerShowHouseImg, ...flowerShowImages],
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="13" r="5" />
        <path d="M18 18v10" />
        <path d="M13 23c0-3 5-4 5-4s5 1 5 4" />
        <path d="M8 13c0-5 5-5 10-5s10 0 10 5" />
        <path d="M9 20c-2-1-3-3-3-5" />
        <path d="M27 20c2-1 3-3 3-5" />
      </svg>
    ),
    detailDescription: 'Our Flower Show service brings the beauty of nature to life with spectacular floral installations and live displays. From dramatic entrance walls to delicate table centrepieces, every arrangement is crafted to captivate and inspire.',
  },
  {
    id: 'food-snacks',
    title: 'Food & Snacks',
    description: 'Beautifully presented food and snack experiences that delight your guests and complement your event perfectly.',
    image: foodSnacksImg,
    galleryImages: [foodSnacksImg, aboutImg, gallery2Img, foodSnacksImg, aboutImg, entertainmentImg],
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h24" />
        <path d="M8 18c0-6 4-12 10-12s10 6 10 12" />
        <path d="M10 22h16l-2 8H12l-2-8z" />
      </svg>
    ),
    categories: [
      { title: 'Chocolate Fountain', image: foodSnacksImg, description: '₹4,500 — 100 pieces. A cascading chocolate experience.' },
      { title: 'Popcorn', image: aboutImg, description: '₹4,000 — 100 pieces. Freshly popped gourmet popcorn.' },
      { title: 'Sweet Corn', image: gallery2Img, description: '₹4,500 — 100 pieces. Buttery sweet corn on the cob.' },
      { title: 'Cotton Candy', image: foodSnacksImg, description: '₹4,000 — 100 pieces. Fluffy spun sugar delights.' },
    ],
    detailDescription: 'Our food and snack stations add a delightful culinary dimension to your event. From elegant chocolate fountains to nostalgic cotton candy stalls, every bite is a moment to remember.',
  },
  {
    id: 'photography-videography',
    title: 'Photography & Videography',
    description: 'Professional photography and cinematic videography that preserves your most precious event memories in stunning detail.',
    image: eventDecorImg,
    galleryImages: [eventDecorImg, flowerDecorImg, gallery2Img, aboutImg, balloonDecorImg, entertainmentImg],
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="10" width="30" height="20" rx="3" />
        <circle cx="18" cy="20" r="5" />
        <path d="M26 10l3-5" />
        <path d="M7 10l3-5" />
        <circle cx="28" cy="15" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    categories: [
      { title: 'Still Photography', image: eventDecorImg, description: '₹4,000 — 4 hrs, unlimited photos, soft copies.' },
      { title: 'HD Photography', image: gallery2Img, description: '₹6,000 — 4 hrs, professional quality, soft copies.' },
      { title: 'Candid Photography', image: aboutImg, description: '₹10,000 — 4 hrs, candid style, unlimited photos.' },
      { title: 'HD Videography', image: flowerDecorImg, description: '₹8,000 — Full event coverage in HD quality.' },
      { title: 'Cinematic Video', image: eventDecorImg, description: '₹12,000 — Cinematic edit with music & transitions.' },
    ],
    detailDescription: 'Every event deserves to be remembered beautifully. Our professional photographers and videographers capture candid emotions, grand moments, and intimate details — delivering a timeless collection you will treasure forever.',
  },
  {
    id: 'fun-entertainment',
    title: 'Fun & Entertainment',
    description: 'A complete entertainment experience — live performances, interactive activities, emcees, magicians and more, all under one roof.',
    image: entertainmentImg,
    galleryImages: [entertainmentImg, funActivitiesImg, aboutImg, entertainmentImg, gallery2Img, funActivitiesImg],
    icon: (
      <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="12" />
        <circle cx="18" cy="18" r="4" />
        <path d="M18 6v4M18 26v4M6 18h4M26 18h4" />
      </svg>
    ),
    categories: [
      { title: 'Emcee / Anchor', image: entertainmentImg, description: '₹6,000 / 1 hour — Charismatic professional hosts.' },
      { title: 'Magician', image: funActivitiesImg, description: '₹6,000 / 1 hour — Mind-bending magic performances.' },
      { title: 'Caricature Artist', image: aboutImg, description: '₹4,500 / 3 hours — Live caricature art sessions.' },
      { title: 'Tattoo Artist', image: funActivitiesImg, description: '₹3,500 / 3 hours — Professional body art.' },
      { title: 'Nail Art', image: entertainmentImg, description: '₹4,000 / 3 hours — Creative nail design station.' },
      { title: 'Balloon Crafting', image: funActivitiesImg, description: '₹2,500 / 3 hours — Live balloon sculptures.' },
      { title: 'Bounce Castle', image: entertainmentImg, description: '₹4,500–₹5,000 / 3 hours — Fun for all ages.' },
      { title: 'Cartoon Character', image: funActivitiesImg, description: '₹3,500 / 2 hours — Beloved characters for kids.' },
      { title: 'Gun Shooting', image: entertainmentImg, description: '₹3,500 / 3 hours — Fun target shooting stall.' },
      { title: 'Sound System', image: funActivitiesImg, description: '₹3,500 / 4 hours — Premium audio setup.' },
      { title: 'Dry Ice Pot', image: entertainmentImg, description: '₹2,500 — 2 pots. Dramatic dry ice effects.' },
      { title: 'Cold Pyro', image: funActivitiesImg, description: '₹500 each — Dazzling cold sparkler effects.' },
    ],
    detailDescription: 'From energetic emcees and awe-inspiring magicians to balloon sculpting and bounce castles — our Fun & Entertainment package covers everything needed to keep guests of all ages delighted throughout your event.',
  },
]

const additionalServices = [
  { name: 'Magician', price: '₹6,000', meta: '1 hour' },
  { name: 'Tattoo Artist', price: '₹3,500', meta: '3 hours' },
  { name: 'Caricature Artist', price: '₹4,500', meta: '3 hours' },
  { name: 'Mug Caricature', price: '₹9,000', meta: '30 mugs · 3 hours' },
  { name: 'Chocolate Fountain', price: '₹4,500', meta: '100 pieces' },
  { name: 'Popcorn', price: '₹4,000', meta: '100 pieces' },
  { name: 'Sweet Corn', price: '₹4,500', meta: '100 pieces' },
  { name: 'Emcee / Anchor', price: '₹6,000', meta: '1 hour' },
  { name: 'Magician with Emcee', price: '₹10,000', meta: '1 hour' },
  { name: 'Cotton Candy', price: '₹4,000', meta: '100 pieces' },
  { name: 'Gun Shooting', price: '₹3,500', meta: '3 hours' },
  { name: 'Bounce Castle', price: '₹4,500 / ₹5,000', meta: '3 hours' },
  { name: 'Cartoon Character', price: '₹3,500', meta: '2 hours' },
  { name: 'Balloon Crafting', price: '₹2,500', meta: '3 hours' },
  { name: 'Nail Art', price: '₹4,000', meta: '3 hours' },
  { name: 'Mehendi', price: '₹4,000', meta: '3 hours' },
  { name: 'Sound System', price: '₹3,500', meta: '4 hours' },
  { name: 'Jumping Bounce Castle', price: '₹4,000 / ₹5,000', meta: '3 hours' },
  { name: 'Dry Ice Pot', price: '₹2,500', meta: '2 pots' },
  { name: 'Cold Pyro', price: '₹500', meta: 'each' },
  { name: 'Car Entry', price: '₹3,000', meta: '' },
]

const photographyServices = [
  {
    title: 'Normal Still Photography',
    price: '₹4,000',
    features: ['4 hrs session', 'Unlimited photos', 'Soft copies'],
    featured: false,
  },
  {
    title: 'HD / Professional Photography',
    price: '₹6,000',
    features: ['4 hrs session', 'Unlimited photos', 'Soft copies'],
    featured: false,
  },
  {
    title: 'Candid Photography',
    price: '₹10,000',
    features: ['4 hrs session', 'Unlimited photos', 'Soft copies'],
    featured: true,
  },
]

const videographyServices = [
  {
    title: 'HD Videography',
    price: '₹8,000',
    features: ['Full event coverage', 'HD quality', 'Soft copy delivery'],
    featured: false,
  },
  {
    title: 'Cinematic Video',
    price: '₹12,000',
    features: ['Full event coverage', 'Cinematic edit', 'Music & transitions'],
    featured: true,
  },
]

/* ═══════════════════════════════════════════
   SCROLL REVEAL HOOK (local copy)
   ═══════════════════════════════════════════ */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) { el.classList.add('revealed'); return }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('revealed'); obs.unobserve(el) } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Reveal({ className = '', children, style }) {
  const ref = useReveal()
  return <div ref={ref} className={`reveal-on-scroll ${className}`} style={style}>{children}</div>
}

/* ═══════════════════════════════════════════
   SERVICE CARD COMPONENT
   ═══════════════════════════════════════════ */
function ServiceCard({ service, onOpen, index }) {
  return (
    <Reveal style={{ transitionDelay: `${index * 80}ms` }}>
      <article
        className="service-card-img"
        role="button"
        tabIndex={0}
        aria-label={`View details for ${service.title}`}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(service)}
      >
        <div
          className="svc-card-bg"
          style={{ backgroundImage: `url(${service.image})` }}
          role="img"
          aria-label={`${service.title} background`}
        />
        <div className="svc-card-overlay" />
        <div className="svc-card-content">
          <h3 className="svc-card-title">{service.title}</h3>
          <p className="svc-card-desc">{service.description}</p>
          <button
            type="button"
            className="svc-card-btn"
            onClick={(e) => { e.stopPropagation(); onOpen(service) }}
          >
            View Details <span aria-hidden="true">→</span>
          </button>
        </div>
      </article>
    </Reveal>
  )
}

/* ═══════════════════════════════════════════
   SERVICE DETAIL MODAL
   ═══════════════════════════════════════════ */
function ServiceDetailModal({ service, onClose }) {
  const [activeCategory, setActiveCategory] = useState(null)
  const [lightboxPhotos, setLightboxPhotos] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const overlayRef = useRef(null)

  const activeCatObj = service.categories?.find(c => c.title === activeCategory)
  const displayImages = (activeCatObj && activeCatObj.galleryImages && activeCatObj.galleryImages.length > 0)
    ? activeCatObj.galleryImages
    : service.galleryImages

  const showNextImage = (e) => {
    e.stopPropagation()
    if (lightboxIndex === null || lightboxPhotos === null) return
    setLightboxIndex((prev) => (prev + 1) % lightboxPhotos.length)
  }

  const showPreviousImage = (e) => {
    e.stopPropagation()
    if (lightboxIndex === null || lightboxPhotos === null) return
    setLightboxIndex((prev) => (prev - 1 + lightboxPhotos.length) % lightboxPhotos.length)
  }

  /* ESC key to close */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) {
          setLightboxIndex(null)
          setLightboxPhotos(null)
        } else {
          onClose()
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, lightboxIndex])

  /* Prevent background scroll */
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  /* Click outside modal to close */
  const handleOverlayClick = useCallback((e) => {
    if (e.target === overlayRef.current) onClose()
  }, [onClose])

  const isFlowerOrBalloon = service.id === 'flower-decor' || service.id === 'balloon-decor' || service.id === 'flower-show'
  const isFoodSnacks = service.id === 'food-snacks'
  const isEntertainment = service.id === 'fun-entertainment'
  const isPhotography = service.id === 'photography-videography'

  const showPhotographyPricing = service.id === 'fun-entertainment' || service.id === 'photography-videography'

  return (
    <div
      className="svc-modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${service.title} details`}
    >
      <div className="svc-modal">
        {/* Sticky close bar */}
        <div className="svc-modal-close">
          <span className="svc-modal-close-title">{service.title}</span>
          <button
            type="button"
            className="svc-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            Close ✕
          </button>
        </div>


        {/* Body */}
        <div className="svc-modal-body revealed">
          <h2 className="svc-modal-title reveal-up">{service.title}</h2>
          <p className="svc-modal-desc reveal-up delay-100">{service.detailDescription}</p>

          {/* Categories */}
          {service.categories && service.categories.length > 0 && (
            <div className="svc-modal-section">
              <div className="svc-section-label reveal-up delay-150">
                {isFlowerOrBalloon ? 'Event Categories'
                  : isFoodSnacks ? 'Available Snacks'
                  : isEntertainment ? 'Activities & Entertainment'
                  : isPhotography ? 'Packages & Pricing'
                  : 'What We Offer'}
              </div>
              <div className={`svc-category-grid${isPhotography ? ' photo-grid' : ''}`}>
                {service.categories.map((cat, i) => (
                  <button
                    key={cat.title}
                    type="button"
                    className={`svc-category-card reveal-up delay-${Math.min((i + 2) * 80, 600)}${activeCategory === cat.title ? ' active' : ''}`}
                    onClick={() => setActiveCategory(activeCategory === cat.title ? null : cat.title)}
                  >
                    <span>{cat.title}</span>
                    {(isFoodSnacks || isEntertainment || isPhotography) && cat.description && (
                      <span style={{ display: 'block', fontSize: '0.68rem', color: '#d4af37', marginTop: '0.3rem', textTransform: 'none', letterSpacing: 0 }}>
                        {cat.description.split('—')[0].trim()}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Category detail */}
              {activeCategory && (() => {
                const cat = service.categories.find(c => c.title === activeCategory)
                return cat ? (
                  <div style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.25)', borderRadius: 8, padding: '1.2rem 1.5rem', marginTop: '-1.5rem', marginBottom: '2rem' }} className="reveal-fade">
                    <p style={{ color: '#d4af37', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 0.5rem' }}>{cat.title}</p>
                    <p style={{ color: 'rgba(245,242,234,0.7)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{cat.description}</p>
                  </div>
                ) : null
              })()}
            </div>
          )}

          {/* Photo Gallery */}
          <div className="svc-modal-section">
            <div className="svc-section-label reveal-up delay-250">
              {activeCategory ? `${activeCategory} Photos` : 'Photo Gallery'}
            </div>
            <div className="svc-modal-gallery">
              {displayImages.map((src, i) => (
                <div
                  key={i}
                  className={`svc-gallery-item reveal-up delay-${Math.min((i + 3) * 80, 600)}`}
                  onClick={() => {
                    setLightboxPhotos(displayImages);
                    setLightboxIndex(i);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={src} alt={`${service.title} gallery ${i + 1}`} loading={i > 2 ? 'lazy' : 'eager'} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {lightboxIndex !== null && lightboxPhotos !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Service gallery image viewer"
          onClick={() => { setLightboxIndex(null); setLightboxPhotos(null); }}
          style={{ zIndex: 1100 }}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); setLightboxPhotos(null); }}
            aria-label="Close gallery"
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox-nav prev"
            onClick={showPreviousImage}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={lightboxPhotos[lightboxIndex]}
            alt={`${service.title} gallery enlarged`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox-nav next"
            onClick={showNextImage}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}

    </div>
  )
}

/* ═══════════════════════════════════════════
   MAIN SERVICES SECTION
   ═══════════════════════════════════════════ */
export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null)

  const openModal = useCallback((service) => setActiveService(service), [])
  const closeModal = useCallback(() => setActiveService(null), [])

  return (
    <>
      <section className="services section-spacing" id="services">
        <div className="section-heading center-heading">
          <AnimatedLabel>OUR SERVICES</AnimatedLabel>
          <AnimatedHeading>What We Do</AnimatedHeading>
        </div>

        <div className="service-grid-img">
          {servicesData.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpen={openModal}
              index={i}
            />
          ))}
        </div>
      </section>

      {activeService && (
        <ServiceDetailModal
          service={activeService}
          onClose={closeModal}
        />
      )}
    </>
  )
}
