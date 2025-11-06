# 🌱 Gokul's Integrated Farming Website

A beautiful, modern website for an organic integrated farm showcasing sustainable farming practices, crops, and media coverage.

## ✨ Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, nature-inspired design with smooth animations
- **Interactive Elements**: Hover effects, scroll animations, and dynamic content
- **Media Showcase**: Dedicated sections for YouTube videos and news articles
- **Organic Practices**: Detailed information about natural manure creation from neem, cow urine, and cow dung
- **Contact Form**: Easy way for visitors to get in touch

## 📁 Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - Interactive features and animations

## 🚀 Getting Started

1. Simply open `index.html` in your web browser
2. No installation or build process required!
3. Works with all modern browsers (Chrome, Firefox, Safari, Edge)

## 🎨 Customization Guide

### Updating Content

#### 1. Farm Information
Edit the text in `index.html`:
- Farm name: Look for "Gokul's Integrated Farming"
- About section: Find the `#about` section
- Contact details: Update the `#contact` section with your address, phone, and email

#### 2. Crops
In the `#crops` section, you can:
- Add new crops by copying a `.crop-card` div
- Change crop icons (use emojis)
- Update descriptions and benefits

#### 3. Media & News
- **YouTube Videos**: In the `#videos` tab, update the `href` attributes with your actual YouTube links
- **News Articles**: In the `#articles` tab, update:
  - Dates
  - Article titles
  - Source names
  - Excerpts
  - Links to actual articles

#### 4. Adding Real Images
Replace the placeholder divs with actual images:

```html
<!-- Replace this: -->
<div class="image-placeholder">
    <span class="placeholder-icon">🚜</span>
    <p>Farm Image</p>
</div>

<!-- With this: -->
<img src="path/to/your/image.jpg" alt="Description">
```

### Color Scheme
To change colors, edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2d5016;      /* Dark green */
    --secondary-color: #6b8e23;    /* Olive green */
    --accent-color: #f4a460;       /* Sandy brown */
    --light-green: #90c74e;        /* Light green */
}
```

### Adding Your Logo
Replace the 🌱 emoji in the navbar with your logo image:

```html
<div class="nav-brand">
    <img src="path/to/logo.png" alt="Logo" style="height: 40px;">
    <span class="brand-name">Gokul's Integrated Farming</span>
</div>
```

## 📱 Sections Overview

1. **Hero Section**: Eye-catching landing with farm name and tagline
2. **About**: Farm story and core values
3. **Our Crops**: Showcase of organic produce
4. **Organic Practices**: Detailed explanation of manure creation and integrated farming cycle
5. **Products**: Available products from the farm
6. **Media & News**: YouTube videos and news article features
7. **Contact**: Contact information and message form
8. **Footer**: Quick links and social media

## 🌟 Special Features

- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Scroll-to-Top Button**: Appears when scrolling down
- **Mobile Menu**: Hamburger menu for mobile devices
- **Tab Navigation**: Switch between videos and articles in media section
- **Hover Effects**: Interactive cards with beautiful hover animations
- **Parallax Effects**: Hero section with subtle parallax scrolling
- **Form Validation**: Contact form with input validation

## 🔧 Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript (no frameworks needed)
- **Google Fonts**: Uses Playfair Display and Poppins fonts
- **Modern CSS**: Flexbox and Grid layouts
- **ES6 JavaScript**: Modern JavaScript features
- **Performance Optimized**: Lazy loading support and efficient animations

## 📝 TODO: Customize Before Launch

- [ ] Replace placeholder text with your actual farm information
- [ ] Add real YouTube video links
- [ ] Add real news article links
- [ ] Update contact information (address, phone, email)
- [ ] Add your farm photos
- [ ] Update social media links in footer
- [ ] Add your actual logo
- [ ] Set up form backend (currently shows an alert)
- [ ] Add Google Maps location (optional)
- [ ] Set up analytics (optional)

## 🌐 Hosting Options

You can host this website on:
- **GitHub Pages** (free)
- **Netlify** (free)
- **Vercel** (free)
- Any web hosting service

### Quick Deploy to GitHub Pages
1. Create a GitHub repository
2. Upload these files
3. Go to Settings > Pages
4. Select main branch
5. Your site will be live!

## 📞 Need Help?

The website is fully functional and ready to use. Just customize the content with your farm's information!

## 📜 License

This website template is provided for Gokul's Integrated Farming. Feel free to customize it for your needs.

---

**Made with ❤️ and organic care** 🌾

