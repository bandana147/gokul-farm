import { useInView } from 'react-intersection-observer'
import profileImg from '/profile.jpg'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const features = [
    {
      icon: '🌾',
      title: '100% Organic',
      description: 'Zero chemicals, pure nature'
    },
    {
      icon: '🐄',
      title: 'Integrated Approach',
      description: 'Sustainable ecosystem farming'
    },
    {
      icon: '🌍',
      title: 'Eco-Friendly',
      description: 'Protecting our planet'
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Our Farm</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content" ref={ref}>
          <div className={`about-text ${inView ? 'animate-in' : ''}`}>
            <h3>Nurturing Earth, Nourishing Lives</h3>
            <p>
              Welcome to Gokul's Integrated Farming, where tradition meets innovation. Our farm is 
              dedicated to practicing true organic and integrated farming, honoring the ancient wisdom 
              of sustainable agriculture while feeding communities with pure, chemical-free produce.
            </p>
            <p>
              We believe in the interconnected cycle of farming - where every element supports the other. 
              Our cows provide natural fertilizers, our neem trees offer pest protection, and our soil is 
              enriched through time-tested organic methods.
            </p>
            <div className="about-features">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="feature-icon">{feature.icon}</span>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`about-image ${inView ? 'animate-in' : ''}`}>
            <img 
              src={profileImg} 
              alt="Gokul's Farm" 
              className="farm-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

