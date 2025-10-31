# Pradipta Sinha - Portfolio Website

A modern, SEO-optimized portfolio website built with Next.js 14, React, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **SEO Optimized**: Comprehensive meta tags, structured data, sitemap, and robots.txt
- **Dark Mode**: Full dark mode support with persistent preference
- **Performance**: Optimized for speed with Next.js App Router and modern best practices
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Mobile First**: Fully responsive design for all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gabusingh-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📝 Configuration

### SEO Settings

Update SEO metadata in `app/layout.tsx`:
- Update `metadataBase` URL
- Add your Google Search Console verification code
- Customize Open Graph images (add to `/public/og-image.jpg`)

### Contact Form

The contact form currently shows an alert on submission. To integrate with a backend:

1. Update `components/Contact.tsx` to send data to your API
2. Consider using services like:
   - Formspree
   - EmailJS
   - Your own API endpoint

### Social Links

All social links are configured in:
- `components/Hero.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

Update these URLs as needed.

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your color palette
  },
}
```

### Content

Update content in respective component files:
- Hero section: `components/Hero.tsx`
- About section: `components/About.tsx`
- Services: `components/Services.tsx`
- Portfolio: `components/Portfolio.tsx`
- Testimonials: `components/Testimonials.tsx`

## 📱 PWA Support

The site includes PWA manifest. Add app icons:
- `/public/icon-192.png` (192x192)
- `/public/icon-512.png` (512x512)
- `/public/apple-touch-icon.png` (180x180)
- `/public/favicon.ico`

## 🔍 SEO Checklist

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Alt text for images (add when adding images)
- ⚠️ Google Search Console verification (update in layout.tsx)
- ⚠️ Google Analytics (add if needed)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically on push

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Custom server with Node.js

## 📄 License

This project is private and proprietary.

## 👤 Author

**Pradipta Sinha**
- Website: [gabusingh.in](https://gabusingh.in)
- Agency: [WPFreelance](https://wpfreelance.in)
- LinkedIn: [pradiptasinha](https://www.linkedin.com/in/pradiptasinha/)
- Upwork: [Profile](https://www.upwork.com/freelancers/~018601c014ac7a099f)
- Fiverr: [wpfreelance](https://www.fiverr.com/wpfreelance)
