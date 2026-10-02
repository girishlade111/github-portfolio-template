# 🚀 Girish Balaso Lade — Portfolio

> A modern, enterprise-grade portfolio website with real-time GitHub integration, smooth animations, and SaaS-style landing page design. Built with Next.js 15, React 19, and TypeScript.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Portfolio-6366f1?style=for-the-badge)](https://girishlade111.github.io)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## ✨ Features

### 🎯 **Core Functionality**

- **Dynamic Hero Section**
  - Animated role showcase with `AnimatePresence` transitions
  - 4 roles cycling: UX/UI Designer, AI Agent Builder, Open Source Developer, Startup Founder
  - Gradient text effects with color variations per role
  - 50+ animated floating particles
  - Interactive mouse-tracking gradient orb
  - Glass morphism stats cards
  - 3 CTA buttons (View Projects, GitHub, Contact)
  - 4 highlight cards (Clean Code, Beautiful UI, Innovation, Performance)

- **Real-time GitHub Integration**
  - Live data fetching from GitHub REST API
  - Total commits (last year)
  - Public repositories count
  - Stars earned
  - Pull requests & issues
  - Contribution calendar heatmap
  - Graceful fallback when API limits reached

- **Interactive Projects Showcase**
  - Displays 6 pinned GitHub repositories
  - Tag-based filtering system
  - Live demo and GitHub links
  - Real-time stars and forks count
  - Smart fallback data for API errors
  - Retry functionality
  - Error banners with dismiss option

- **GitHub Contributions Calendar**
  - Visual contribution heatmap
  - Custom dark theme matching portfolio
  - Responsive display

- **Social Media Integration**
  - 6 platforms with gradient hover effects
  - Instagram, LinkedIn, GitHub, CodePen, Email, Website
  - Brand-colored icon buttons
  - Animated entrance effects

- **Professional Footer**
  - 3-column grid layout
  - Brand section with description
  - Quick navigation links
  - Social media icons
  - "Say Hello" CTA button
  - Scroll-to-top button

### 🎨 **Design & User Experience**

- **Modern Dark Theme**
  - Primary: Indigo (#6366f1)
  - Accent: Violet (#8b5cf6)
  - Background: Zinc (#0a0a0f)
  - Glass morphism cards

- **Animations (Framer Motion)**
  - Scroll-triggered animations
  - Hover scale and lift effects
  - Staggered entrance animations
  - Smooth page transitions
  - Floating particles
  - Rotating gradient rings
  - Bounce animations

- **Responsive Design**
  - Mobile-first approach
  - Tablet optimization
  - Desktop enhancement
  - Breakpoints: sm, md, lg, xl

- **UI Components (shadcn/ui)**
  - Button (with variants)
  - Badge
  - Card
  - Avatar
  - 50+ Radix UI components

### 🔒 **SEO & Performance**

- **Search Engine Optimization**
  - Comprehensive meta tags
  - OpenGraph for social sharing
  - Twitter Card support
  - Canonical URLs
  - Sitemap.xml generation
  - robots.txt with full access

- **Performance Optimizations**
  - Server Components architecture
  - Font optimization (Inter + JetBrains Mono)
  - CSS variables for theming
  - Tailwind CSS v4 with PostCSS
  - Tree-shaking enabled

---

## 🛠️ Tech Stack

### Frontend Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.3.5 | React framework with App Router |
| **React** | 19 | UI library |
| **TypeScript** | 5 | Type safety |

### Styling & Animation
| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | v4 | Utility-first CSS |
| **tw-animate-css** | Latest | Tailwind animation utilities |
| **Framer Motion** | 12.23.24 | Animation library |

### UI Components
| Technology | Version | Purpose |
|------------|---------|---------|
| **shadcn/ui** | New York | Beautiful UI components |
| **Radix UI** | Latest | Accessible primitives |
| **Lucide React** | 0.552.0 | Icon library |
| **React Icons** | Latest | Additional icons (SiCodepen) |

### Development Tools
| Technology | Purpose |
|------------|---------|
| **ESLint 9** | Code linting |
| **PostCSS** | CSS processing |
| **@fontsource** | Self-hosted fonts |

### External Integrations
| Library | Purpose |
|---------|---------|
| **react-github-calendar** | GitHub contribution heatmap |
| **class-variance-authority** | Component variant system |
| **clsx + tailwind-merge** | Class name utilities |
| **zod** | Schema validation |

---

## 📊 GitHub Statistics

| Metric | Value | Status |
|--------|-------|--------|
| 📦 **Repositories** | 600+ | Public repos |
| 💻 **Commits** | 3.8K+ | Last year |
| ⭐ **Stars** | 588+ | Earned across repos |
| 🍴 **Forks** | 200+ | Community forks |
| 📥 **Downloads** | 2.5K+ | Package downloads |
| 🔀 **PRs Merged** | 16+ | Contributions |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v20 or higher
- **npm** or **bun** package manager
- **Git** for version control
- GitHub account (for API integration)

### Installation

```bash
# Clone the repository
git clone https://github.com/girishlade111/github-portfolio-template.git
cd github-portfolio-template

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

---

## ⚙️ Configuration

### 1. GitHub Username

Update in multiple files:

**`src/components/contributions-section.tsx`**
```typescript
<GitHubCalendar username="your-github-username" />
```

**`src/components/projects-section.tsx`**
```typescript
const projectRepos = [
  "YourRepo1",
  "YourRepo2",
  // Add your repository names
];
```

### 2. Project Data

**`src/components/projects-section.tsx`** — Update `fallbackProjects`:
```typescript
{
  name: "YourProject",
  description: "Project description",
  tags: ["Tech", "Stack"],
  stars: 0,
  forks: 0,
  url: "https://github.com/...",
  liveUrl: "https://your-demo.vercel.app"
}
```

### 3. Social Media Links

**`src/components/social-section.tsx`**
```typescript
{
  name: "Platform",
  icon: PlatformIcon,
  url: "https://your-profile-url",
  gradient: "from-color1 to-color2",
  bgGradient: "hover:bg-gradient-to-br hover:from-color1/20 hover:to-color2/20"
}
```

### 4. Theme Colors

**`src/app/globals.css`**
```css
:root {
  --primary: #YOUR_COLOR;
  --accent: #YOUR_ACCENT;
  --background: #YOUR_BG;
}
```

### 5. SEO & Metadata

**`src/app/layout.tsx`**
```typescript
export const metadata: Metadata = {
  title: "Your Name — Your Title",
  description: "Your portfolio description",
  keywords: ["your", "keywords", "here"],
  // ... more metadata
};
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── github/
│   │       ├── repos/route.ts      # Repository API
│   │       └── stats/route.ts      # Stats API
│   ├── layout.tsx                  # Root layout + metadata
│   ├── page.tsx                    # Homepage
│   ├── globals.css                 # Global styles
│   ├── sitemap.ts                  # SEO sitemap
│   └── robots.ts                   # robots.txt
│
├── components/
│   ├── ui/                         # shadcn/ui components (50+)
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   ├── avatar.tsx
│   │   └── ... (more components)
│   │
│   ├── hero-section.tsx            # Hero with animations
│   ├── about-section.tsx           # Stats display
│   ├── projects-section.tsx         # Projects showcase
│   ├── contributions-section.tsx    # GitHub calendar
│   ├── social-section.tsx          # Social links
│   └── footer.tsx                   # Footer
│
└── lib/
    ├── utils.ts                    # Utility functions
    └── hooks/
        └── use-mobile.tsx         # Mobile detection hook
```

---

## 🔌 API Routes

### GET `/api/github/repos`

Fetch repository data for pinned projects.

**Query Parameters:**
```
?repos=Repo1,Repo2,Repo3
```

**Response:**
```json
{
  "repos": [
    {
      "name": "AetherCanvas",
      "description": "AI-driven design tool",
      "stars": 42,
      "forks": 8,
      "language": "TypeScript",
      "topics": ["nextjs", "ai"],
      "html_url": "https://github.com/..."
    }
  ],
  "error": null
}
```

### GET `/api/github/stats`

Fetch comprehensive GitHub statistics.

**Response:**
```json
{
  "totalCommits": 3842,
  "publicRepos": 614,
  "followers": 156,
  "following": 89
}
```

---

## 🎨 Customization Examples

### Add New Role to Hero

Edit `hero-section.tsx`:
```typescript
const roles = [
  "UX/UI Designer",
  "AI Agent Builder",
  "Open Source Developer",
  "Startup Founder",
  "Your New Role"
];

const roleColors = [
  "from-pink-500 to-rose-500",
  "from-violet-500 to-purple-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-cyan-500 to-blue-500"  // Add your color
];
```

### Add New Highlight Card

```typescript
const highlights = [
  // ... existing highlights
  { 
    icon: YourIcon, 
    title: "New Feature", 
    desc: "Description here" 
  }
];
```

### Add New Social Platform

```typescript
{
  name: "Platform",
  icon: PlatformIcon,
  url: "https://your-url",
  gradient: "from-color1 to-color2",
  bgGradient: "hover:bg-gradient-to-br hover:from-color1/20 hover:to-color2/20"
}
```

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# 1. Push to GitHub
git push origin main

# 2. Import at vercel.com
# 3. Deploy automatically
```

### GitHub Pages

1. Update `next.config.ts`:
```typescript
output: 'export',
basePath: '/github-portfolio-template'
```

2. Add GitHub Actions workflow

### Environment Variables (Optional)

For higher API rate limits:
```
GITHUB_TOKEN=your_personal_access_token
```

---

## 🔐 Error Handling

The portfolio includes comprehensive error handling:

| Error Type | Handling |
|------------|----------|
| **API Rate Limit** | Displays fallback data + retry button |
| **Repository Not Found** | Shows cached project data |
| **Server Error** | Graceful degradation to fallback |
| **Network Error** | Retry mechanism with loading state |

---

## 📱 Social Profiles

- **Instagram**: [@girish_lade_](https://www.instagram.com/girish_lade_/)
- **LinkedIn**: [girish-lade](https://www.linkedin.com/in/girish-lade-075bba201/)
- **GitHub**: [@girishlade111](https://github.com/girishlade111)
- **CodePen**: [Girish-Lade-the-looper](https://codepen.io/Girish-Lade-the-looper)
- **Email**: [admin@ladestack.in](mailto:admin@ladestack.in)
- **Website**: [ladestack.in](https://ladestack.in)

---

## 🤝 Contributing

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/your-username/repo.git`
3. **Create** your branch: `git checkout -b feature/amazing-feature`
4. **Commit** your changes: `git commit -m "Add amazing feature"`
5. **Push** to the branch: `git push origin feature/amazing-feature`
6. Open a **Pull Request**

---

## 📄 License

MIT License — feel free to use this template for your own portfolio!

---

## 🙏 Acknowledgments

- **[Next.js](https://nextjs.org)** — The React framework for production
- **[shadcn/ui](https://ui.shadcn.com)** — Beautifully designed components
- **[Framer Motion](https://framer-motion.com)** — Animation library
- **[Tailwind CSS](https://tailwindcss.com)** — Utility-first CSS
- **[GitHub](https://github.com)** — For providing the API
- **[Vercel](https://vercel.com)** — Hosting and deployment

---

## ⭐ Show Your Support

If you found this portfolio template helpful, please give it a **star** on GitHub!

---

<p align="center">
  <strong>Built with ❤️ by <a href="https://github.com/girishlade111">Girish Balaso Lade</a></strong><br />
  Built by Girish Lade — <a href="https://ladestack.in">ladestack.in</a>
</p>