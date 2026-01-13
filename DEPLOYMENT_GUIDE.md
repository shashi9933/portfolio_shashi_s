# 🚀 Solar Portfolio - Deployment Guide

**Production Deployment Instructions**  
**Deploy to Vercel, Netlify, GitHub Pages, and More**

---

## 📋 Table of Contents

1. [Deployment Overview](#deployment-overview)
2. [Pre-Deployment Checklist](#pre-deployment-checklist)
3. [Vercel Deployment (Recommended)](#vercel-deployment-recommended)
4. [Netlify Deployment](#netlify-deployment)
5. [GitHub Pages Deployment](#github-pages-deployment)
6. [Traditional Hosting](#traditional-hosting)
7. [Domain Setup](#domain-setup)
8. [Post-Deployment](#post-deployment)
9. [Troubleshooting](#troubleshooting)

---

## 📊 Deployment Overview

### Hosting Options Comparison

| Platform | Ease | Speed | Cost | Best For |
|----------|------|-------|------|----------|
| **Vercel** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Free | Production (Recommended) |
| **Netlify** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Free | Static sites |
| **GitHub Pages** | ⭐⭐⭐ | ⭐⭐⭐⭐ | Free | Simple portfolios |
| **AWS S3 + CloudFront** | ⭐⭐ | ⭐⭐⭐⭐⭐ | $10-50/mo | Enterprise scale |
| **DigitalOcean** | ⭐⭐⭐ | ⭐⭐⭐⭐ | $5-50/mo | VPS hosting |
| **Heroku** | ⭐⭐⭐⭐ | ⭐⭐⭐ | $5-50/mo | Full-stack apps |

---

## ✅ Pre-Deployment Checklist

### Before You Deploy (Do These First!)

```
Code Quality
────────────────────────────────────
☑ Run linter: npm run lint
☑ Fix all warnings and errors
☑ Test all interactive features
☑ Test on mobile devices
☑ Test on multiple browsers

Performance
────────────────────────────────────
☑ Run build: npm run build
☑ Check bundle size: < 50KB gzipped
☑ Lighthouse score: 85+
☑ Core Web Vitals optimized
☑ Images compressed

SEO & Meta Tags
────────────────────────────────────
☑ Update meta description
☑ Add meta keywords
☑ Set favicon
☑ Add Open Graph tags
☑ Set language attribute

Configuration
────────────────────────────────────
☑ Update package.json metadata
☑ Set correct homepage URL
☑ Configure environment variables
☑ Update social links
☑ Verify all links work

Accessibility
────────────────────────────────────
☑ WCAG 2.1 Level AA compliance
☑ Keyboard navigation working
☑ Screen reader tested
☑ Color contrast OK
☑ Focus indicators visible

Security
────────────────────────────────────
☑ No sensitive data exposed
☑ HTTPS enforced
☑ Dependencies updated
☑ No console errors
☑ CSP headers configured

Content
────────────────────────────────────
☑ Proofread all text
☑ Verify all links
☑ Check image alt text
☑ Update copyright year
☑ Verify contact email
```

---

## 🚀 Vercel Deployment (Recommended)

**Why Vercel?**
- ✅ Built for React/Next.js
- ✅ Automatic deployments from GitHub
- ✅ Global CDN (super fast)
- ✅ Free tier includes SSL
- ✅ One-click rollbacks
- ✅ Analytics included

### Step 1: Prepare Your Repository

```bash
# Ensure you're in the project directory
cd solar-portfolio

# Make sure all changes are committed
git status

# Push to GitHub (if not already done)
git add .
git commit -m "Ready for production deployment"
git push origin main
```

---

### Step 2: Connect to Vercel

**Method 1: Via Website (Easiest)**

1. Go to https://vercel.com
2. Click "Sign Up" (or log in if you have account)
3. Choose "Continue with GitHub"
4. Authorize Vercel to access GitHub
5. Click "Import Project"
6. Find and select `solar-portfolio` repository
7. Click "Import"

---

**Method 2: Via CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd solar-portfolio
vercel

# Follow prompts to set up project
# Answer questions:
# ? Set up and deploy? (Y/n) → Y
# ? Which scope? → Select your account
# ? Link to existing project? (y/N) → N
# ? What's your project's name? → solar-portfolio
# ? In which directory is your code? → ./
# ? Want to modify vercel.json? (y/N) → N
```

---

### Step 3: Configure Project Settings

1. Go to your Vercel dashboard
2. Select `solar-portfolio` project
3. Go to **Settings** tab
4. Configure:

**General Settings:**
```
Environment: Production
Framework: React
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**Environment Variables (if needed):**
```
If you have .env variables, add them:
VITE_API_URL: (your API endpoint, if any)
```

**Domains:**
```
Default domain: solar-portfolio-xxx.vercel.app
```

---

### Step 4: Deploy

**Automatic Deployment:**
- Push to `main` branch → Auto-deploys
- Create PR → Preview deployment
- Merge PR → Production deployment

**Manual Deployment:**
```bash
# From project directory
vercel --prod
```

---

### Step 5: Verify Deployment

```bash
# Check deployment status in Vercel dashboard
# Or test live URL in browser

# Run Lighthouse audit
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Click "Analyze page load"
# 4. Check scores (aim for 90+)
```

---

## 🎨 Netlify Deployment

**Advantages:**
- Simple interface
- Fast builds
- Good performance
- Form handling built-in

### Step 1: Prepare Repository

```bash
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

---

### Step 2: Connect to Netlify

1. Go to https://netlify.com
2. Click "Sign up" with GitHub
3. Authorize Netlify
4. Click "New site from Git"
5. Select GitHub
6. Choose `solar-portfolio` repo
7. Click "Deploy site"

---

### Step 3: Configure Build Settings

**Build settings should auto-populate:**
```
Build command:        npm run build
Publish directory:    dist
```

**If not, manually set:**
1. Go to **Site settings** → **Build & deploy**
2. Edit build command: `npm run build`
3. Edit publish directory: `dist`

---

### Step 4: Add Custom Domain

1. Go to **Domain settings**
2. Click "Add custom domain"
3. Enter your domain (e.g., yourname.com)
4. Follow DNS setup instructions

---

## 📄 GitHub Pages Deployment

**Good for:** Free hosting with custom domain  
**Best for:** Open source portfolio

### Step 1: Configure Repository

Edit `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/solar-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

---

### Step 2: Install gh-pages

```bash
npm install --save-dev gh-pages
```

---

### Step 3: Deploy

```bash
# Deploy to GitHub Pages
npm run deploy

# This will:
# 1. Build the project
# 2. Push built files to gh-pages branch
# 3. Enable Pages in repository settings
```

---

### Step 4: Enable GitHub Pages

1. Go to GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click "Save"
5. Your site will be available at: `https://yourusername.github.io/solar-portfolio`

---

### Step 5: Custom Domain (Optional)

1. In GitHub Pages settings
2. Enter custom domain (e.g., portfolio.yourname.com)
3. Update DNS records with your registrar:

```
CNAME: portfolio.yourname.com → yourusername.github.io
```

---

## 🏢 Traditional Hosting (cPanel/VPS)

**When to use:** If you have existing hosting

### Step 1: Build for Production

```bash
npm run build

# This creates a 'dist' folder with all files
```

---

### Step 2: Upload Files

**Via FTP:**
```bash
# Install FTP client (FileZilla, Cyberduck, etc.)
# Connect to your hosting FTP
# Navigate to public_html folder
# Upload all files from 'dist' folder
```

**Via cPanel File Manager:**
1. Log into cPanel
2. Open File Manager
3. Navigate to public_html
4. Upload dist folder contents

**Via SSH:**
```bash
# SSH into server
ssh user@yourhost.com

# Navigate to public directory
cd public_html

# Upload files (via SCP)
scp -r dist/* user@yourhost.com:~/public_html/

# Or use git clone if repo is private
git clone https://github.com/yourusername/solar-portfolio.git
cd solar-portfolio
npm install
npm run build
cp -r dist/* ../
```

---

### Step 3: Configure Server

**.htaccess (Apache servers):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**web.config (IIS servers):**
```xml
<system.webServer>
  <rewrite>
    <rules>
      <rule name="SPA" stopProcessing="true">
        <match url="^(?!.*\..*$)(?!.*\/).*$" />
        <action type="Rewrite" url="index.html" />
      </rule>
    </rules>
  </rewrite>
</system.webServer>
```

---

## 🌐 Domain Setup

### Get a Domain

**Popular Registrars:**
- GoDaddy - godaddy.com
- NameCheap - namecheap.com
- Domain.com - domain.com
- Google Domains - domains.google.com (closing)

**Cost:** $8-15/year

---

### Connect Domain to Vercel

1. Buy domain from registrar
2. Go to Vercel dashboard
3. Select your project
4. Go to **Settings** → **Domains**
5. Enter domain name: `yourname.com`
6. Click "Add"
7. Copy nameservers from Vercel
8. Update nameservers in domain registrar:

```
Nameserver 1: ns1.vercel-dns.com
Nameserver 2: ns2.vercel-dns.com
Nameserver 3: ns3.vercel-dns.com
Nameserver 4: ns4.vercel-dns.com
```

---

### Connect Domain to Netlify

1. Buy domain
2. In Netlify, go to **Domain settings**
3. Click "Add custom domain"
4. Enter domain
5. Netlify provides DNS instructions
6. Update DNS records with registrar

---

## 📋 Post-Deployment Checklist

### After You Deploy

```
Verification
────────────────────────────────────
☑ Live site loads correctly
☑ All interactive features work
☑ Navigation works
☑ Mobile responsive
☑ Dark/light mode works
☑ Contact form works (if form submission enabled)
☑ Links work (internal & external)
☑ Images load
☑ No console errors (F12)
☑ No 404 errors

Performance
────────────────────────────────────
☑ Lighthouse score 85+
☑ Load time < 2 seconds
☑ Mobile score 85+
☑ Core Web Vitals good
☑ No broken links
☑ No slow resources

SEO
────────────────────────────────────
☑ Title tag correct
☑ Meta description shows in search
☑ Open Graph tags working
☑ Structured data (schema.org)
☑ Sitemap.xml exists (optional)
☑ robots.txt configured (optional)

Security
────────────────────────────────────
☑ HTTPS enforced (lock icon)
☑ No mixed content errors
☑ Security headers present
☑ No sensitive data exposed

Monitoring
────────────────────────────────────
☑ Set up uptime monitoring
☑ Configure error tracking (Sentry)
☑ Set up Google Analytics
☑ Enable Vercel/Netlify analytics
☑ Create monitoring dashboard
```

---

### Enable HTTPS

**Vercel:** Automatic ✅  
**Netlify:** Automatic ✅  
**GitHub Pages:** Automatic ✅  
**Traditional Hosting:** Use Let's Encrypt (free)

```bash
# If using traditional hosting with Let's Encrypt
# Via cPanel AutoSSL (easiest)
# Or command line (advanced)
certbot certonly --webroot -w /path/to/web/root -d yourdomain.com
```

---

### Set Up Monitoring

**Uptime Monitoring:**
```
Services: UptimeRobot, StatusPage, Pingdom
Monitor: Check if site is up every 5 minutes
Alert: Get notified if down
```

**Error Tracking:**
```bash
npm install @sentry/react

# In App.jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: "production",
});
```

---

### Set Up Analytics

**Option 1: Google Analytics**

```html
<!-- In index.html, add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Option 2: Vercel Analytics (Built-in)**
- Automatically included with Vercel
- View in dashboard

---

## 🐛 Troubleshooting

### Issue: Deployment Fails

**Error:** Build failed  
**Solution:**
```bash
# 1. Check build locally
npm run build

# 2. Look for build errors
# 3. Fix errors locally
# 4. Commit and push
git push origin main
```

---

### Issue: Blank Page After Deployment

**Cause:** Wrong base path  
**Solution:**
```javascript
// vite.config.js
export default {
  base: '/', // For root domain
  // OR
  base: '/solar-portfolio/', // If in subdirectory
}
```

---

### Issue: Slow Load Time

**Causes:**
- [ ] Large images not optimized
- [ ] Too many JavaScript
- [ ] No compression enabled
- [ ] Poor server location

**Solutions:**
```bash
# 1. Optimize images
# - Use WebP format
# - Compress with TinyPNG
# - Use responsive images

# 2. Check bundle size
npm run build --analyze

# 3. Enable compression (Vercel/Netlify do this auto)

# 4. Use CDN (Vercel/Netlify do this auto)
```

---

### Issue: Mobile Menu Not Working

**Cause:** Responsive CSS issue  
**Solution:**
```bash
# 1. Test locally with mobile viewport
# 2. Check mobile menu CSS
# 3. Verify touch events work
# 4. Test on actual device

# Deploy fix
git push origin main
```

---

### Issue: Images Not Loading

**Causes:**
- [ ] Wrong image path
- [ ] Case-sensitive filename mismatch
- [ ] Missing image alt text
- [ ] Image too large

**Solutions:**
```javascript
// Check image paths
// ✅ Correct
<img src="/images/project.jpg" />

// ❌ Wrong
<img src="./images/project.jpg" />

// ✅ Correct (lowercase)
<img src="/images/project.jpg" />

// ❌ Wrong (case mismatch)
<img src="/images/Project.jpg" />
```

---

### Issue: Environment Variables Not Loading

```bash
# Check if .env file is committed
# (It shouldn't be - add to .gitignore)

# In Vercel/Netlify dashboard
# 1. Go to Settings
# 2. Add environment variables
# 3. Redeploy
```

---

## 📊 Deployment Comparison Quick Reference

### Vercel
```
Setup Time: 5 minutes
Cost: Free (Pro $20/mo)
Performance: Excellent
Auto-deploy: Yes
Custom Domain: Yes
Analytics: Yes
Recommendation: ⭐⭐⭐⭐⭐
```

### Netlify
```
Setup Time: 5 minutes
Cost: Free (Pro $19/mo)
Performance: Excellent
Auto-deploy: Yes
Custom Domain: Yes
Analytics: Yes
Recommendation: ⭐⭐⭐⭐
```

### GitHub Pages
```
Setup Time: 10 minutes
Cost: Free
Performance: Good
Auto-deploy: No (manual)
Custom Domain: Yes
Analytics: No
Recommendation: ⭐⭐⭐
```

---

## 🎯 Next Steps After Deployment

1. **Set up monitoring** - Know when something breaks
2. **Add analytics** - Understand visitor behavior
3. **Configure CI/CD** - Automated testing before deploy
4. **Set up backups** - Never lose your data
5. **Plan updates** - Keep content fresh
6. **Monitor performance** - Use Lighthouse regularly
7. **Get feedback** - Ask visitors for input

---

## 📞 Support Resources

- **Vercel Docs:** vercel.com/docs
- **Netlify Docs:** docs.netlify.com
- **GitHub Pages:** docs.github.com/pages
- **Let's Encrypt:** letsencrypt.org
- **Google Analytics:** analytics.google.com

---

**Deployment Status:** ✅ Ready to Deploy  
**Last Updated:** January 13, 2026  

You're ready to take your portfolio live! 🚀
