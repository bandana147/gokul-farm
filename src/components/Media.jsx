import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import bookImage from '/book.jpg';

const Media = () => {
  const [activeTab, setActiveTab] = useState('videos')
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Featured Book Information
  const featuredBook = {
    title: 'The Success Story of Cow Based Natural Farming in Manipur',
    author: 'Laishram Gokulchandra Singh',
    publisher: 'Self Published',
    year: '2025',
    description: 'An inspiring account of transforming traditional agriculture through cow-based natural farming techniques in Manipur. This book chronicles the practical implementation of integrated organic farming, combining ancient wisdom with modern sustainability practices to create a thriving, chemical-free agricultural ecosystem.',
    coverImage: bookImage,
    link: '#' // Add purchase/info link if available
  }

  const videos = [
    {
      title: 'Organic Farming Success Story',
      description: 'How Gokul\'s Farm transformed traditional farming',
      link: 'https://youtube.com'
    },
    {
      title: 'Natural Manure Creation Process',
      description: 'Behind the scenes of our organic fertilizer production',
      link: 'https://youtube.com'
    },
    {
      title: 'Integrated Farming Techniques',
      description: 'Learn about our sustainable farming practices',
      link: 'https://youtube.com'
    }
  ]

  const articles = [
    {
      day: '15',
      month: 'Oct 2024',
      title: 'Gokul\'s Farm: A Model for Sustainable Agriculture',
      source: 'The Hindu - Business Line',
      excerpt: 'Local farmer revolutionizes organic practices with integrated farming approach, showing impressive yields without chemicals...',
      link: '#'
    },
    {
      day: '08',
      month: 'Sep 2024',
      title: 'Traditional Farming Methods Make a Comeback',
      source: 'Times of India',
      excerpt: 'Gokul\'s Integrated Farming demonstrates how ancient wisdom combined with modern understanding creates sustainable success...',
      link: '#'
    },
    {
      day: '22',
      month: 'Aug 2024',
      title: 'From Cow to Crop: The Complete Cycle',
      source: 'Down To Earth Magazine',
      excerpt: 'How one farm is proving that integrated farming isn\'t just sustainable—it\'s profitable and scalable...',
      link: '#'
    },
    {
      day: '10',
      month: 'Jul 2024',
      title: 'Organic Farming Excellence Award Winner',
      source: 'Agricultural Today',
      excerpt: 'Gokul\'s Farm receives state recognition for outstanding contribution to organic farming and community education...',
      link: '#'
    }
  ]

  const handleVideoClick = (link) => {
    window.open(link, '_blank')
  }

  return (
    <section id="media" className="media section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Media & News</h2>
          <div className="title-underline"></div>
          <p className="section-description">Gokul's Farm in the spotlight</p>
        </div>

        {/* Featured Book Section */}
        <div className="featured-book" ref={ref}>
          <div className={`book-banner ${inView ? 'animate-in' : ''}`}>
            <div className="book-cover">
              <img 
                src={featuredBook.coverImage} 
                alt={featuredBook.title}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="book-placeholder" style={{ display: 'none' }}>
                <span className="book-icon">📚</span>
              </div>
            </div>
            <div className="book-details">
              <div className="book-badge">📖 Featured Publication</div>
              <h3 className="book-title">{featuredBook.title}</h3>
              <div className="book-meta">
                <span className="book-author">By {featuredBook.author}</span>
                <span className="book-separator">•</span>
                <span className="book-publisher">{featuredBook.publisher}</span>
                <span className="book-separator">•</span>
                <span className="book-year">{featuredBook.year}</span>
              </div>
              <p className="book-description">{featuredBook.description}</p>
              {featuredBook.link !== '#' && (
                <a 
                  href={featuredBook.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="book-link-button"
                >
                  Learn More →
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="media-content">
          <div className="media-tabs">
            <button 
              className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
              onClick={() => setActiveTab('videos')}
            >
              Video Features
            </button>
            <button 
              className={`tab-button ${activeTab === 'articles' ? 'active' : ''}`}
              onClick={() => setActiveTab('articles')}
            >
              News Articles
            </button>
          </div>

          {activeTab === 'videos' && (
            <div className="tab-content active" ref={ref}>
              <div className="videos-grid">
                {videos.map((video, index) => (
                  <div 
                    key={index} 
                    className={`video-card ${inView ? 'animate-in' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div 
                      className="video-placeholder"
                      onClick={() => handleVideoClick(video.link)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="play-button">▶</div>
                      <span className="video-icon">📹</span>
                    </div>
                    <div className="video-info">
                      <h4>{video.title}</h4>
                      <p>{video.description}</p>
                      <a 
                        href={video.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="video-link"
                      >
                        Watch on YouTube →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'articles' && (
            <div className="tab-content active" ref={ref}>
              <div className="articles-list">
                {articles.map((article, index) => (
                  <div 
                    key={index} 
                    className={`article-card ${inView ? 'animate-in' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="article-date">
                      <span className="date-day">{article.day}</span>
                      <span className="date-month">{article.month}</span>
                    </div>
                    <div className="article-content">
                      <h4>{article.title}</h4>
                      <p className="article-source">{article.source}</p>
                      <p className="article-excerpt">{article.excerpt}</p>
                      <a 
                        href={article.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="article-link"
                      >
                        Read Full Article →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Media

