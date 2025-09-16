# Setup Instructions

## Quick Setup

1. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/
   - Choose LTS version (v18 or higher recommended)

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Your portfolio website should be running!

## Customization Steps

### 1. Personal Information
Update your personal details in the language files:
- `src/i18n/locales/en.json` - English content
- `src/i18n/locales/ka.json` - Georgian content

### 2. Experience Data
Edit your work experience in:
- `src/views/Experience.vue` - Update the `experiences` array

### 3. Skills Data  
Modify your skills in:
- `src/views/Skills.vue` - Update the `skillCategories` array
- `src/components/sections/SkillsPreview.vue` - Update preview skills

### 4. Projects Data
Add your projects in:
- `src/views/Projects.vue` - Update the `projects` array
- `src/components/sections/ProjectsPreview.vue` - Update featured projects

### 5. Images
Add your images to the `public` folder:
- `avatar.jpg` - Your profile photo
- `about-image.jpg` - About page image
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots

### 6. Contact Information
Update contact details in:
- `src/views/Contact.vue` - Update email, phone, location
- `src/components/layout/AppFooter.vue` - Update social links

### 7. Colors & Styling
Customize the design in:
- `src/styles/variables.scss` - Update colors, fonts, spacing

## Production Build

When ready to deploy:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

## Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Traditional hosting**: Upload `dist` folder contents

## Need Help?

If you encounter any issues:
1. Make sure Node.js is properly installed
2. Delete `node_modules` and run `npm install` again
3. Check the browser console for any errors
4. Ensure all image paths are correct

