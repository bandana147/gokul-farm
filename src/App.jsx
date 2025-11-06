import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Crops from './components/Crops'
import Practices from './components/Practices'
import Products from './components/Products'
import Media from './components/Media'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <Navbar />
      <Hero />
      <About />
      <Products />
      {/* <Crops /> */}
      <Media />
      <Practices />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App

