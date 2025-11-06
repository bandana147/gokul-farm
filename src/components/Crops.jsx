import { useInView } from 'react-intersection-observer'

const Crops = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const crops = [
    {
      icon: '🌾',
      title: 'Rice',
      description: 'Premium organic rice varieties grown with traditional methods',
      benefits: ['Chemical-free', 'High nutritional value', 'Traditional varieties']
    },
    {
      icon: '🌽',
      title: 'Vegetables',
      description: 'Fresh seasonal vegetables bursting with natural flavors',
      benefits: ['Seasonal produce', 'Rich in nutrients', 'Farm-fresh daily']
    },
    {
      icon: '🥬',
      title: 'Leafy Greens',
      description: 'Nutrient-rich greens grown in enriched organic soil',
      benefits: ['Super fresh', 'Pesticide-free', 'Daily harvest']
    },
    {
      icon: '🫛',
      title: 'Pulses',
      description: 'Protein-rich pulses cultivated with care',
      benefits: ['Organic cultivation', 'High protein', 'Multiple varieties']
    },
    {
      icon: '🌿',
      title: 'Herbs & Spices',
      description: 'Aromatic herbs and medicinal plants',
      benefits: ['Medicinal value', 'Pure & aromatic', 'Traditional varieties']
    },
    {
      icon: '🍇',
      title: 'Fruits',
      description: 'Sweet, naturally ripened organic fruits',
      benefits: ['Tree-ripened', 'Natural sweetness', 'Seasonal varieties']
    }
  ]

  return (
    <section id="crops" className="crops section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Organic Crops</h2>
          <div className="title-underline"></div>
          <p className="section-description">Fresh, healthy, and naturally grown produce</p>
        </div>
        <div className="crops-grid" ref={ref}>
          {crops.map((crop, index) => (
            <div 
              key={index} 
              className={`crop-card ${inView ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="crop-image">
                <span className="crop-icon">{crop.icon}</span>
              </div>
              <h3>{crop.title}</h3>
              <p>{crop.description}</p>
              <ul className="crop-benefits">
                {crop.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Crops

