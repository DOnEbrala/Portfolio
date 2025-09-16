# 🚀 GitHub Pages Deployment Guide

## Step 1: Create GitHub Account & Repository

### 1.1 Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Choose username (e.g., "DOnEbrala" - you already have this!)
4. Verify email

### 1.2 Create Repository
1. Click "+" in top right → "New repository"
2. Repository name: `Portfolio` (must match this exactly)
3. Description: "Personal Portfolio Website - Front-end Developer"
4. Make it **Public** (required for free GitHub Pages)
5. ✅ Check "Add a README file"
6. Click "Create repository"

## Step 2: Upload Your Code

### Option A: Using GitHub Web Interface (Easier)
1. In your new repository, click "uploading an existing file"
2. Drag ALL files from `C:\Users\E3RA\Desktop\CV_Website\` EXCEPT:
   - `node_modules` folder (don't upload this!)
   - `dist` folder (will be generated automatically)
3. Commit message: "Initial portfolio upload"
4. Click "Commit changes"

### Option B: Using Git Commands (Advanced)
```bash
# In your project folder
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/DOnEbrala/Portfolio.git
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in left sidebar
4. Under "Source":
   - Select "GitHub Actions" (not "Deploy from branch")
5. Your website will be available at: `https://DOnEbrala.github.io/Portfolio/`

## Step 4: Automatic Deployment

✅ **Already configured!** I've set up:
- GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Proper Vite configuration for GitHub Pages
- Automatic builds on every push to main branch

## 🎯 What Happens Next:

1. **Upload code** → GitHub automatically builds your website
2. **Any changes** → Push to GitHub → Website updates automatically
3. **Live URL**: `https://DOnEbrala.github.io/Portfolio/`

## 🔧 Important Files I Created:

- `.github/workflows/deploy.yml` - Automatic deployment
- `vite.config.js` - Updated for GitHub Pages
- `.gitignore` - Excludes unnecessary files
- `README.md` - Professional repository description

## 📞 Your Live Website Will Show:

- ✅ Your professional photo
- ✅ BetSolutions + ORIGIN work experience
- ✅ Education and certificates
- ✅ Contact information
- ✅ Dark/light mode toggle
- ✅ English/Georgian language switch
- ✅ Mobile-responsive design

## 🎉 Result:

**Professional URL to share:**
`https://DOnEbrala.github.io/Portfolio/`

Perfect for:
- Job applications
- LinkedIn profile
- Business cards
- Email signatures

## 🚨 Troubleshooting:

If deployment fails:
1. Check "Actions" tab in your repository
2. Look for error messages
3. Make sure repository name is exactly `Portfolio`
4. Ensure repository is Public

## 💡 Pro Tips:

1. **Custom Domain**: You can add your own domain later
2. **Updates**: Just push new code → website updates automatically
3. **Analytics**: Add Google Analytics if needed
4. **SEO**: Already optimized for search engines

Ready to go live! 🚀
