# 🌱 Gokul's Integrated Farming - React Website

A modern, scalable React-based website for an organic integrated farm showcasing sustainable farming practices, crops, and media coverage. Built with React 18, Vite, and modern web technologies.

## ✨ Features

### 🚀 Modern Tech Stack
- **React 18** - Latest React with hooks and functional components
- **Vite** - Lightning-fast build tool and dev server
- **Component-based Architecture** - Reusable, maintainable components
- **React Hooks** - useState, useEffect, custom hooks
- **Intersection Observer API** - Smooth scroll animations
- **ESLint** - Code quality and consistency

### 💎 Key Features
- **Fully Responsive** - Mobile-first design, works on all devices
- **Smooth Animations** - Intersection observer for scroll animations
- **Interactive UI** - Tab navigation, form validation, smooth scrolling
- **Modular Data** - Separate data files for easy content management
- **Performance Optimized** - Lazy loading, efficient re-renders
- **SEO Ready** - Semantic HTML and proper meta tags

## 📁 Project Structure

```
gokul-farm/
├── public/                   # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation with scroll detection
│   │   ├── Hero.jsx         # Hero section with parallax
│   │   ├── About.jsx        # About section
│   │   ├── Crops.jsx        # Crops showcase
│   │   ├── Practices.jsx    # Organic practices details
│   │   ├── Products.jsx     # Products section
│   │   ├── Media.jsx        # Media & News with tabs
│   │   ├── Contact.jsx      # Contact form with validation
│   │   ├── Footer.jsx       # Footer component
│   │   └── ScrollToTop.jsx  # Scroll to top button
│   ├── data/               # Data files
│   │   ├── cropsData.js    # Crops information
│   │   ├── mediaData.js    # Videos and articles
│   │   └── practicesData.js # Manure types and cycle
│   ├── hooks/              # Custom React hooks (future)
│   ├── styles/
│   │   └── index.css       # Global styles
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── index-react.html        # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── .eslintrc.cjs           # ESLint configuration
└── .gitignore              # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```
The site will open at `http://localhost:3000`

3. **Build for production:**
```bash
npm run build
```
Production files will be in the `dist/` folder

4. **Preview production build:**
```bash
npm run preview
```

## 🎨 Customization Guide

### 1. Update Content

#### Crops
Edit `src/data/cropsData.js`:
```javascript
export const cropsData = [
  {
    icon: '🌾',
    title: 'Your Crop',
    description: 'Description...',
    benefits: ['Benefit 1', 'Benefit 2']
  }
]
```

#### Media & News
Edit `src/data/mediaData.js`:
```javascript
export const videosData = [
  {
    title: 'Video Title',
    description: 'Description',
    link: 'https://youtube.com/your-video'
  }
]
```

#### Organic Practices
Edit `src/data/practicesData.js` to update manure types and farming cycle steps.

### 2. Modify Components

Each section is a separate component in `src/components/`. For example, to modify the About section:

1. Open `src/components/About.jsx`
2. Update the JSX and content
3. Changes auto-reload in dev mode

### 3. Styling

Global styles are in `src/styles/index.css`. To change colors:

```css
:root {
    --primary-color: #2d5016;
    --secondary-color: #6b8e23;
    --accent-color: #f4a460;
    /* Update these to match your brand */
}
```

### 4. Add New Components

```bash
# Create new component
touch src/components/YourComponent.jsx
```

```javascript
// YourComponent.jsx
const YourComponent = () => {
  return (
    <section id="your-section" className="section">
      {/* Your content */}
    </section>
  )
}

export default YourComponent
```

Then import in `App.jsx`:
```javascript
import YourComponent from './components/YourComponent'

function App() {
  return (
    <div className="app">
      {/* ... other components */}
      <YourComponent />
    </div>
  )
}
```

## 🔧 Advanced Customization

### Adding React Router

For multi-page functionality:

```bash
npm install react-router-dom
```

Then set up routes in `App.jsx`.

### Adding State Management

For complex state (Redux, Zustand, etc.):

```bash
npm install zustand  # or redux toolkit
```

### Adding a Backend

Connect to your backend API:
1. Create `src/api/` folder
2. Add API service files
3. Use `fetch` or `axios` in components

Example:
```javascript
// src/api/contactService.js
export const submitContactForm = async (formData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  return response.json()
}
```

### Creating Custom Hooks

Example custom hook in `src/hooks/useScrollPosition.js`:

```javascript
import { useState, useEffect } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Deploy dist folder
```

## 🎯 Key React Concepts Used

- **Functional Components** - Modern React with hooks
- **useState** - Managing component state
- **useEffect** - Side effects and lifecycle
- **useInView** - Intersection Observer hook for animations
- **Props** - Passing data between components
- **Event Handling** - Form submission, clicks, scrolling
- **Conditional Rendering** - Tab switching, error states
- **List Rendering** - Mapping over data arrays

## 🔍 Features Explained

### Intersection Observer Animations
Components fade in when scrolled into view using `react-intersection-observer`:

```javascript
const { ref, inView } = useInView({
  threshold: 0.1,
  triggerOnce: true
})
```

### Smooth Scrolling
Navigation links smoothly scroll to sections:

```javascript
const handleNavClick = (targetId) => {
  document.getElementById(targetId)?.scrollIntoView({ 
    behavior: 'smooth' 
  })
}
```

### Form Validation
Contact form with real-time validation:

```javascript
const validateForm = () => {
  const errors = {}
  if (!formData.email.includes('@')) {
    errors.email = 'Invalid email'
  }
  return errors
}
```

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Change port in vite.config.js or kill process
kill -9 $(lsof -ti:3000)
```

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**ESLint warnings:**
```bash
npm run lint -- --fix
```

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Hooks](https://react.dev/reference/react)
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)

## 🚀 Future Enhancements

- [ ] Add React Router for multi-page navigation
- [ ] Implement blog section with CMS integration
- [ ] Add e-commerce functionality for products
- [ ] Integrate payment gateway
- [ ] Add user authentication
- [ ] Create admin dashboard
- [ ] Add image gallery with lightbox
- [ ] Implement search functionality
- [ ] Add multilingual support (i18n)
- [ ] Integrate Google Maps for location
- [ ] Add testimonials section
- [ ] Create newsletter subscription
- [ ] Add social media feed integration
- [ ] Implement analytics (Google Analytics)

## 🤝 Contributing

This is a private project for Gokul's Integrated Farming. For modifications, please contact the development team.

## 📄 License

Private project. All rights reserved © Gokul's Integrated Farming

---

**Built with ❤️ and React** 🌾

For questions or support, contact the development team.

