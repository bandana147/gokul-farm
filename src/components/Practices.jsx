import { useInView } from 'react-intersection-observer'

const Practices = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const manureTypes = [
    {
      icon: '🌿',
      title: 'Neem-Based Compost',
      benefits: [
        'Natural pest repellent properties',
        'Rich in nitrogen and organic matter',
        'Improves soil structure',
        'Prevents fungal diseases'
      ],
      process: 'We collect neem leaves, seeds, and cake from our neem trees. These are composted with other organic matter over 60-90 days, creating a nutrient-rich, pest-resistant fertilizer.'
    },
    {
      icon: '💧',
      title: 'Cow Urine (Gomutra)',
      benefits: [
        'Natural growth promoter',
        'Rich in nitrogen, phosphorus, and potassium',
        'Enhances soil microbial activity',
        'Acts as natural pesticide'
      ],
      process: 'Fresh cow urine from our indigenous cattle is collected daily and fermented with neem leaves and jaggery for 15-20 days. This creates a powerful organic spray for crops.'
    },
    {
      icon: '🐄',
      title: 'Cow Dung (Gobar)',
      benefits: [
        'Complete organic fertilizer',
        'Improves soil water retention',
        'Adds beneficial microorganisms',
        'Balances soil pH naturally'
      ],
      process: 'Cow dung is composted with crop residues, creating vermicompost and farmyard manure. We also prepare special formulations like Jeevamrut and Panchagavya for enhanced crop nutrition.'
    }
  ]

  const cycleSteps = [
    { number: 1, title: 'Cattle Care', description: 'Our indigenous cows are raised naturally with organic fodder' },
    { number: 2, title: 'Manure Collection', description: 'Daily collection of cow dung and urine' },
    { number: 3, title: 'Composting', description: 'Natural fermentation with neem and other organic materials' },
    { number: 4, title: 'Soil Enrichment', description: 'Application to fields for healthy crop growth' },
    { number: 5, title: 'Healthy Crops', description: 'Nutritious produce and crop residues back to cattle' }
  ]

  return (
    <section id="practices" className="practices section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Organic Practices</h2>
          <div className="title-underline"></div>
          <p className="section-description">Traditional wisdom meets sustainable farming</p>
        </div>
        <div className="practices-content">
          <div className="practice-intro">
            <h3>Natural Manure Creation</h3>
            <p>
              At Gokul's Farm, we create our own organic fertilizers using natural ingredients that have 
              been trusted for centuries. Our integrated approach ensures that every part of the farm 
              ecosystem contributes to soil health and crop nutrition.
            </p>
          </div>
          
          <div className="manure-types" ref={ref}>
            {manureTypes.map((manure, index) => (
              <div 
                key={index} 
                className={`manure-card ${inView ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="manure-icon">{manure.icon}</div>
                <h3>{manure.title}</h3>
                <div className="manure-details">
                  <h4>Benefits:</h4>
                  <ul>
                    {manure.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                  <h4>Process:</h4>
                  <p>{manure.process}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="integrated-cycle">
            <h3>The Integrated Farming Cycle</h3>
            <div className="cycle-steps">
              {cycleSteps.map((step, index) => (
                <>
                  <div key={step.number} className="cycle-step">
                    <span className="step-number">{step.number}</span>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                  {index < cycleSteps.length - 1 && (
                    <div key={`arrow-${index}`} className="cycle-arrow">→</div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Practices

