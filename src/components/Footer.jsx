const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Crops', href: '#crops' },
    { label: 'Organic Practices', href: '#practices' },
    { label: 'Products', href: '#products' }
  ]

  const socialLinks = [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'WhatsApp', href: '#' }
  ]

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🌱 Gokul's Integrated Farming</h3>
            <p>
              Cultivating nature's bounty through sustainable organic farming practices. 
              Join us in our journey towards a healthier, chemical-free future.
            </p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Gokul's Integrated Farming. All rights reserved. Made with ❤️ and organic care.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

