import { useInView } from 'react-intersection-observer'

const Products = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const products = [
    {
      badge: 'Fresh',
      icon: '🥬',
      title: 'Fresh Vegetables',
      description: 'Daily harvest of seasonal organic vegetables',
      tag: 'Farm Fresh'
    },
    {
      badge: 'Popular',
      icon: '🌾',
      title: 'Organic Rice',
      description: 'Traditional varieties, naturally cultivated',
      tag: 'Chemical Free'
    },
    {
      badge: 'Premium',
      icon: '🍃',
      title: 'Organic Manure',
      description: 'Natural fertilizers for your garden',
      tag: 'For Gardens'
    },
    {
      badge: 'New',
      icon: '🥛',
      title: 'Dairy Products',
      description: 'Pure A2 milk and dairy from indigenous cows',
      tag: 'A2 Quality'
    }
  ]

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <div className="title-underline"></div>
          <p className="section-description">From our farm to your family</p>
        </div>
        <div className="products-grid" ref={ref}>
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`product-card ${inView ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-badge">{product.badge}</div>
              <div className="product-image">
                <span className="product-icon">{product.icon}</span>
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="product-tag">{product.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

