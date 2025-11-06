import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Our Farm',
      content: 'Gokul\'s Integrated Farming\n[Your Village Name]\n[District, State - PIN]'
    },
    {
      icon: '📞',
      title: 'Call Us',
      content: '+91 XXXXX XXXXX\nMon - Sat: 7:00 AM - 6:00 PM'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      content: 'info@gokulsfarm.com\nWe\'ll respond within 24 hours'
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      alert('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setErrors({})
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-description">Visit us or reach out to learn more</p>
        </div>
        <div className="contact-content" ref={ref}>
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className={`contact-card ${inView ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="contact-icon">{info.icon}</div>
                <h4>{info.title}</h4>
                <p style={{ whiteSpace: 'pre-line' }}>{info.content}</p>
              </div>
            ))}
          </div>
          <div className={`contact-form ${inView ? 'animate-in' : ''}`}>
            <h3>Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ borderColor: errors.name ? '#e74c3c' : '' }}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ borderColor: errors.email ? '#e74c3c' : '' }}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ borderColor: errors.message ? '#e74c3c' : '' }}
                />
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

