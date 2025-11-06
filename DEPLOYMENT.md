# 🚀 Deployment Guide - GitHub Pages

This guide will help you deploy your Gokul's Integrated Farming website to GitHub Pages.

## 📋 Prerequisites

- Git installed on your computer
- GitHub account
- Repository created on GitHub

## 🔧 Setup (Already Done!)

The following configurations have been set up for you:

✅ `package.json` - Added homepage URL and deploy scripts
✅ `vite.config.js` - Added base path for GitHub Pages
✅ `gh-pages` package - Added to devDependencies

## 🚀 Step-by-Step Deployment

### Step 1: Install gh-pages package

```bash
npm install
```

This will install the `gh-pages` package for deployment.

### Step 2: Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit - Gokul's Farm website"
```

### Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `gokul-farm` (or any name you prefer)
3. Keep it **Public** (required for free GitHub Pages)
4. **Don't** initialize with README (we already have files)
5. Click "Create repository"

### Step 4: Connect Local Repository to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/gokul-farm.git
git branch -M main
git push -u origin main
```

**Important:** If your repository name is different from `gokul-farm`, update these files:
- `package.json` - Change `homepage` URL
- `vite.config.js` - Change `base` path

### Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your production site (`npm run build`)
2. Create a `gh-pages` branch
3. Push the built files to GitHub
4. Your site will be live in 1-2 minutes!

### Step 6: Enable GitHub Pages (First Time Only)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

Your site will be available at:
```
https://YOUR_USERNAME.github.io/gokul-farm/
```

## 🔄 Updating Your Website

After making changes to your website:

```bash
# 1. Save and commit your changes
git add .
git commit -m "Description of changes"
git push

# 2. Deploy the updates
npm run deploy
```

Changes will be live in 1-2 minutes!

## 🎯 Quick Reference

### Deploy Commands
```bash
npm run deploy          # Build and deploy to GitHub Pages
npm run build          # Build for production (manual)
npm run preview        # Preview production build locally
```

### Git Commands
```bash
git status             # Check what files changed
git add .              # Stage all changes
git commit -m "msg"    # Commit with message
git push               # Push to GitHub
```

## ⚙️ Configuration Files

### package.json
```json
{
  "homepage": "https://blaishram.github.io/gokul-farm",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### vite.config.js
```javascript
export default defineConfig({
  base: '/gokul-farm/',  // Must match your repo name
  // ...
})
```

## 🐛 Troubleshooting

### Issue: 404 Page Not Found
**Solution:** Make sure the `base` in `vite.config.js` matches your repository name.

```javascript
// If repo is: github.com/username/my-farm
base: '/my-farm/'

// If repo is: github.com/username/gokul-farm
base: '/gokul-farm/'
```

### Issue: Images Not Loading
**Solution:** Make sure image paths start with `/` (absolute paths from public folder)

```javascript
// ✅ Correct
<img src="/profile.jpg" />

// ❌ Wrong
<img src="profile.jpg" />
```

### Issue: Deploy Command Not Found
**Solution:** Install dependencies first

```bash
npm install
npm run deploy
```

### Issue: Permission Denied
**Solution:** You may need to authenticate with GitHub

```bash
# Using GitHub CLI (recommended)
gh auth login

# Or use SSH instead of HTTPS
git remote set-url origin git@github.com:YOUR_USERNAME/gokul-farm.git
```

## 🌐 Using Custom Domain (Optional)

If you have a custom domain (e.g., `www.gokulsfarm.com`):

1. Create a file `public/CNAME` with your domain:
```
www.gokulsfarm.com
```

2. Update `vite.config.js`:
```javascript
base: '/',  // Use root path for custom domain
```

3. Update `package.json`:
```json
"homepage": "https://www.gokulsfarm.com"
```

4. Configure DNS with your domain provider:
   - Add A records pointing to GitHub's IPs
   - See: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## 📊 Deployment Workflow

```
Make Changes → Test Locally → Commit to Git → Deploy
     ↓              ↓              ↓            ↓
   Edit files   npm run dev    git commit   npm run deploy
                                git push
```

## ✅ Verification

After deployment, verify:

1. **Site is live:** Visit your GitHub Pages URL
2. **All sections work:** Test navigation, forms, etc.
3. **Images load:** Check hero and about images
4. **Mobile responsive:** Test on phone
5. **Links work:** Test all navigation and external links

## 🎉 You're Live!

Your website is now publicly accessible. Share your link:

```
🌐 https://blaishram.github.io/gokul-farm/
```

### What happens on GitHub Pages:
- ✅ Free hosting forever
- ✅ HTTPS automatically enabled
- ✅ CDN for fast loading worldwide
- ✅ Automatic rebuilds on deploy
- ✅ Custom domain support

## 📝 Important Notes

1. **Repository must be public** for free GitHub Pages
2. **Always deploy after changes** using `npm run deploy`
3. **Test locally first** with `npm run dev`
4. **Changes take 1-2 minutes** to appear after deploy
5. **Keep `gh-pages` branch** - don't delete it (managed automatically)

## 🔗 Useful Links

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

**Need Help?** Check the troubleshooting section or create an issue on GitHub.

Happy Deploying! 🚀🌾

