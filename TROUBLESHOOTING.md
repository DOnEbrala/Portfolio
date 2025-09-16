# Troubleshooting Guide

## ✅ All Errors Fixed!

The main errors have been resolved:

### Fixed Issues:
1. **Missing image references** - Replaced with icon-based placeholders
2. **Build compilation errors** - All image imports removed
3. **Component structure** - All components now working properly

## Common Issues & Solutions

### 1. Build Warnings (Sass Deprecation)
**Issue**: You see warnings about Sass @import being deprecated
**Solution**: These are just warnings, not errors. The build still works fine.

### 2. Development Server Issues
**Issue**: `npm run dev` doesn't start
**Solutions**:
- Make sure Node.js is installed (v16+)
- Delete `node_modules` and run `npm install` again
- Check if port 5173 is already in use

### 3. Missing Images
**Issue**: You want to add your own images
**Solution**: 
1. Add images to the `public` folder
2. Update component references:
   - Replace `<div class="avatar-placeholder">` in HeroSection.vue with `<img src="/your-image.jpg" />`
   - Update project placeholders in ProjectsPreview.vue and Projects.vue

### 4. Customization
**Issue**: Want to change colors, content, etc.
**Solutions**:
- **Colors**: Edit `src/styles/variables.scss`
- **Content**: Edit `src/i18n/locales/en.json` and `src/i18n/locales/ka.json`
- **Experience**: Edit `src/views/Experience.vue`
- **Skills**: Edit `src/views/Skills.vue`
- **Projects**: Edit `src/views/Projects.vue`

### 5. Language Issues
**Issue**: Georgian text not displaying properly
**Solution**: Make sure your browser supports Georgian fonts, or add Georgian font imports to `index.html`

### 6. Performance Issues
**Issue**: Website loading slowly
**Solutions**:
- Run `npm run build` for production version
- Optimize images before adding them
- Use modern image formats (WebP, AVIF)

## Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production  
npm run build

# Preview production build
npm run preview
```

## Getting Help

If you encounter other issues:
1. Check the browser console for error messages
2. Make sure all file paths are correct
3. Verify all dependencies are installed
4. Try clearing browser cache

## Current Status: ✅ WORKING

Your portfolio website is now fully functional with:
- ✅ Vue.js 3 with Composition API
- ✅ Vue Router navigation
- ✅ Vue i18n internationalization
- ✅ Responsive design
- ✅ Modern animations
- ✅ Icon-based placeholders (no missing images)
- ✅ Successful build process

The website is ready to use and can be customized with your personal content!

