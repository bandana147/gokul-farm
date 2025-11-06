import { useEffect, useState } from 'react'
import farmImg from '/farm.jpg'

const Hero = () => {
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      if (scrolled < window.innerHeight) {
        setParallaxOffset(scrolled * 0.5)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollDown = (e) => {
    e.preventDefault()
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="hero"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(45, 80, 22, 0.85) 0%, rgba(107, 142, 35, 0.85) 100%), url(${farmImg})`
      }}
    >
      <div className="hero-overlay"></div>
      <div 
        className="hero-content" 
        style={{ 
          transform: `translateY(${parallaxOffset}px)`,
          opacity: 1 - (parallaxOffset / 500)
        }}
      >
        <h1 className="hero-title fade-in">Gokul's Integrated Farming</h1>
        <p className="hero-subtitle fade-in">Cultivating Nature's Bounty Through Ancient Wisdom</p>
        <p className="hero-description fade-in">
          Experience the purity of 100% organic farming with sustainable, integrated practices
        </p>
        <a href="#about" className="cta-button fade-in" onClick={handleScrollDown}>
          Discover Our Story
        </a>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  )
}

export default Hero

