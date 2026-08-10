import { useEffect, useMemo, useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'
import aboutImg from './assets/about.jpeg'
import flowerDecorImg from './assets/flower_decor.jpeg'
import eventDecorImg from './assets/event_decor.jpeg'
import balloonDecorImg from './assets/balloon_decor.jpeg'
import foodSnacksImg from './assets/food_snacks.png'
import funActivitiesImg from './assets/fun_activities.png'
import entertainmentImg from './assets/entertainment.png'
import gallery2Img from './assets/gallery_2.jpeg'

const services = [
  {
    title: 'Flower Decor',
    description: 'Elegant floral arrangements designed around your celebration.',
    image: flowerDecorImg,
  },
  {
    title: 'Balloon Decor',
    description: 'Creative balloon installations that transform your venue.',
    image: balloonDecorImg,
  },
  {
    title: 'Fun Activities',
    description: 'Interactive entertainment and activities for unforgettable moments.',
    image: funActivitiesImg,
  },
  {
    title: 'Food & Snacks',
    description: 'Beautifully presented food and snack experiences.',
    image: foodSnacksImg,
  },
  {
    title: 'Event Decor',
    description: 'Complete venue transformation with premium styling.',
    image: eventDecorImg,
  },
  {
    title: 'Entertainment',
    description: 'Music, games and entertainment designed for your guests.',
    image: entertainmentImg,
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

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [portfolioOffset, setPortfolioOffset] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

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
        <section className="hero-section" id="home">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <p className="eyebrow">UPTOWN EVENTS</p>
            <h1>
              WE PLAN.
              <span>YOU CELEBRATE.</span>
            </h1>
            <p className="hero-copy">
              Creating unforgettable celebrations with extraordinary decor, entertainment and experiences.
            </p>
            <div className="hero-actions">
              <a href="#services" className="primary-button">
                EXPLORE OUR SERVICES
              </a>
              <a href="#contact" className="secondary-button">
                PLAN YOUR EVENT
              </a>
            </div>
          </div>
        </section>

        <section className="intro section-spacing" id="about">
          <div className="intro-grid">
            <div className="intro-copy">
              <div className="section-label">EST. 2020</div>
              <h2>
                YOUR CELEBRATION,
                <span>OUR PASSION.</span>
              </h2>
              <p>
                From intimate celebrations to grand occasions, Uptown Events creates beautifully designed
                experiences that turn special moments into unforgettable memories.
              </p>

              <div className="stats-grid">
                <div className="stat-item">
                  <strong>6+</strong>
                  <span>Years of Experience</span>
                </div>
                <div className="stat-item">
                  <strong>500+</strong>
                  <span>Events Created</span>
                </div>
                <div className="stat-item">
                  <strong>100%</strong>
                  <span>Passion</span>
                </div>
              </div>
            </div>

            <div className="intro-image-wrap">
              <img
                src={aboutImg}
                alt="Elegant event decoration setup"
              />
            </div>
          </div>
        </section>

        <section className="services section-spacing" id="services">
          <div className="section-heading">
            <div className="section-label">SERVICES</div>
            <h2>OUR SERVICES</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card-text">
                <div className="service-content">
                  <span className="service-tag">{service.title}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>



        <section className="gallery section-spacing" id="gallery">
          <div className="section-heading">
            <div className="section-label">OUR GALLERY</div>
            <h2>Moments that feel as special as the celebration itself.</h2>
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

        <section className="portfolio section-spacing" id="portfolio">
          <div className="section-heading center-heading">
            <div className="section-label">OUR PORTFOLIO</div>
            <h2>OUR PORTFOLIO</h2>
            <p className="section-subtitle">"Moments we've created. Memories that stay."</p>
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

        <section className="testimonials section-spacing" id="testimonials">
          <div className="section-heading center-heading">
            <div className="section-label">TESTIMONIALS</div>
            <h2>WORDS FROM OUR CLIENTS</h2>
          </div>
          <div className="testimonial-card" key={testimonialIndex}>
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



        <section className="contact section-spacing" id="contact">
          <div className="contact-grid">
            <div className="contact-copy">
              <div className="section-label">CONTACT</div>
              <h2>LET'S CREATE SOMETHING BEAUTIFUL</h2>
              <div className="contact-details">
                <div>
                  <span className="detail-icon">☎</span>
                  <a href="tel:+918088854400">+91 8088854400</a>
                </div>
                <div>
                  <span className="detail-icon">✉</span>
                  <a href="mailto:uptownevent2020@gmail.com">uptownevent2020@gmail.com</a>
                </div>
                <div>
                  <span className="detail-icon">✆</span>
                  <a href="https://wa.me/918088854400" target="_blank" rel="noreferrer">WhatsApp</a>
                </div>
                <div>
                  <span className="detail-icon">◎</span>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                </div>
              </div>

              {/* Rectangular Google Map on Left Side */}
              <div className="map-inline-container">
                <iframe
                  title="Uptown Events Location Map"
                  src="https://maps.google.com/maps?q=Uptown+Event,+15,+Kempegowda+Layout,+Kamala+Nagar,+Bengaluru,+Karnataka+560058&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <form className="contact-form">
              <div className="field-row">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Your name" />
                </label>
                <label>
                  Phone Number
                  <input type="tel" name="phone" placeholder="Your phone" />
                </label>
              </div>

              <div className="field-row">
                <label>
                  Email
                  <input type="email" name="email" placeholder="Your email" />
                </label>
                <label>
                  Event Type
                  <input type="text" name="eventType" placeholder="Wedding, birthday..." />
                </label>
              </div>

              <label>
                Event Date
                <input type="date" name="eventDate" />
              </label>

              <label>
                Message
                <textarea name="message" rows="5" placeholder="Tell us about your dream celebration..."></textarea>
              </label>

              <button type="submit" className="primary-button form-button">
                SEND ENQUIRY
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="brand footer-brand-name" aria-label="Uptown Events home">
              <img src={logoImg} alt="Uptown Events" className="brand-logo" />
            </a>
            <p>“We Plan. You Celebrate.”</p>
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
