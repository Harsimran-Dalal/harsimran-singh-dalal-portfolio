# Harsimran Singh Dalal - Portfolio

A modern, responsive portfolio website showcasing my work in AI/ML, Explainable AI, embedded systems, and smart agriculture. Built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and structured data
- **Performance**: Fast loading with Vite's optimized build
- **Accessibility**: Semantic HTML and ARIA-friendly components
- **Dark Mode**: Built-in dark theme support

## 🛠️ Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.19
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router DOM

## 📦 Installation

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm, yarn, or bun

### Setup

```bash
# Clone the repository
git clone https://github.com/Harsimran-Dalal/harsimran-singh-dalal-portfolio.git

# Navigate to project directory
cd harsimran-singh-dalal-portfolio

# Install dependencies
npm install
# or
yarn install
# or
bun install

# Start development server
npm run dev
# or
yarn dev
# or
bun dev
```

The development server will start at `http://localhost:8080`

## 🏗️ Build

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

The project includes `vercel.json` for optimal Vercel deployment configuration.

### Other Platforms

This is a static site and can be deployed to:
- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Use GitHub Actions or manual build
- **Cloudflare Pages**: Connect repository
- Any static hosting service

## 📁 Project Structure

```
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and media
│   ├── components/  # React components
│   │   └── ui/      # shadcn/ui components
│   ├── hooks/       # Custom React hooks
│   ├── integrations/# Third-party integrations
│   ├── lib/         # Utility functions
│   ├── pages/       # Page components
│   └── main.tsx     # Entry point
├── index.html       # HTML template
└── vite.config.ts   # Vite configuration
```

## 🎯 Sections

- **Hero**: Introduction and key highlights
- **About**: Background, education, and interests
- **Experience**: Professional experience and internships
- **Projects**: Featured projects with descriptions
- **Skills**: Technical skills and technologies
- **Achievements**: Awards, certifications, and recognitions
- **Contact**: Get in touch form and social links

## 🔧 Environment Variables

Currently, no environment variables are required. If you plan to use Supabase in the future, create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Harsimran Singh Dalal**

- GitHub: [@Harsimran-Dalal](https://github.com/Harsimran-Dalal)
- LinkedIn: [Harsimran Singh Dalal](https://www.linkedin.com/in/harsimran-singh-dalal-614a39286/)
- Email: harsimransinghdalal@gmail.com

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Vite](https://vitejs.dev/) for the blazing-fast build tool
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
