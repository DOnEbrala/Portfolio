# Nikoloz Ebralidze - Portfolio Website

A modern, responsive portfolio website built with Vue.js 3, showcasing front-end development skills and experience.

## ✨ Features

- **Modern Vue.js 3** with Composition API
- **Vue Router** for smooth navigation
- **Vue i18n** for internationalization (English/Georgian)
- **Responsive Design** that works on all devices
- **Modern UI/UX** with smooth animations and transitions
- **Dark/Light Theme** support
- **Performance Optimized** with lazy loading and code splitting
- **SEO Friendly** with proper meta tags and structure

## 🛠️ Tech Stack

- **Frontend**: Vue.js 3, Vue Router, Vue i18n
- **Styling**: Sass/SCSS with custom design system
- **Build Tool**: Vite
- **State Management**: Pinia
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CV_Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Page sections (Hero, About, etc.)
│   └── ui/            # UI components (Buttons, Forms, etc.)
├── views/              # Page components
├── router/             # Vue Router configuration
├── i18n/              # Internationalization files
├── styles/            # Global styles and variables
└── main.js           # Application entry point
```

## 🌍 Internationalization

The website supports multiple languages:
- **English** (default)
- **Georgian** (ქართული)

Language files are located in `src/i18n/locales/`.

## 🎨 Customization

### Colors
Update the color scheme in `src/styles/variables.scss`:

```scss
$primary: #6366f1;      // Primary brand color
$secondary: #f59e0b;    // Secondary accent color
$dark: #1f2937;         // Dark text color
$light: #f9fafb;        // Light background
```

### Content
Update personal information in:
- `src/i18n/locales/en.json` (English content)
- `src/i18n/locales/ka.json` (Georgian content)
- Individual Vue components for specific data

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

## ⚡ Performance

- **Lazy Loading**: Components and images are loaded on demand
- **Code Splitting**: Automatic route-based code splitting
- **Optimized Assets**: Images and fonts are optimized for web
- **Modern Build**: Uses Vite for fast development and optimized builds

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Nikoloz Ebralidze**
- Portfolio: [Your Website]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]
- Email: nikoloz@example.com

---

Built with ❤️ using Vue.js

