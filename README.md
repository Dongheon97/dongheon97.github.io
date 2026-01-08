# Developer Portfolio

A modern, responsive single-page portfolio built with Astro, React, and Tailwind CSS.

## Features

- **Single-page scrolling design** - All sections on one page with smooth scrolling
- **Project modal system** - Click project cards to see detailed information with video embeds
- **Responsive design** - Mobile-first approach that works on all devices
- **Modern UI** - Clean, accessible interface with micro-interactions
- **SEO optimized** - Meta tags, Open Graph, and Twitter card support
- **Fast performance** - Static site generation for optimal load times

## Tech Stack

- **Astro 5** - Static-first framework for content sites
- **React 19** - Used for interactive components (project modal)
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── sections/      # Section components (Hero, Expertise, Projects, etc.)
│   │   ├── ui/            # Reusable UI components (Card, Button, etc.)
│   │   └── react/         # React-only components (ProjectModal)
│   ├── content/
│   │   └── site.json      # Single source of truth for all content
│   ├── layouts/
│   │   └── BaseLayout.astro # Main layout with meta tags
│   ├── pages/
│   │   └── index.astro    # Home page (single page)
│   └── styles/
│       └── global.css      # Global styles and Tailwind imports
├── public/
│   ├── projects/           # Project thumbnails
│   ├── papers/             # Publication PDFs
│   ├── og/                # Open Graph images
│   └── favicon/            # Site favicons
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Actions deployment
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Building

```bash
# Build for production
npm run build
```

Output will be in the `dist/` directory.

### Preview

```bash
# Preview production build locally
npm run preview
```

## Updating Content

All site content is managed through `src/content/site.json`. This is your single source of truth for:

- Hero information (name, role, links)
- Expertise categories
- Projects with all details
- Publications
- Experience history
- Education background
- Awards

### Adding a New Project

1. Add a new entry to the `projects` array in `src/content/site.json`
2. Add a thumbnail image to `public/projects/[slug].png`
3. The project will automatically appear on the site

### Adding a New Publication

1. Add to the `publications` array in `src/content/site.json`
2. Add PDF to `public/papers/[filename].pdf`

### Adding a New Award

1. Add to the `awards` array in `src/content/site.json`

## Customization

### Changing Colors

Edit `src/styles/global.css` to customize colors:

```css
body {
  @apply text-gray-900 bg-white;  /* Change these colors */
}
```

### Typography

Typography is styled with Tailwind's default font stack. To change fonts, update `font-family` classes in components.

### Project Modal

The project modal uses vanilla JavaScript (no React) for simplicity:
- Opens on project card click
- Closes on ESC key, backdrop click, or close button
- Locks background scroll when open
- Displays project details and embedded YouTube/Vimeo videos

## Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment at `/portfolio` path:

1. Push to `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://[username].github.io/portfolio`

### GitHub Actions

The `.github/workflows/deploy.yml` file handles:
- Building the Astro site
- Deploying to GitHub Pages
- Running on every push to `main` branch

### Custom Domain

To use a custom domain:

1. Update `astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://yourdomain.com',
     base: '/',  // Remove /portfolio for custom domain
   });
   ```

2. Add a `CNAME` file to `public/` with your domain

3. Configure DNS at your domain provider

## SEO Checklist

- [x] Page title and meta description
- [x] Open Graph tags
- [x] Twitter card tags
- [x] Semantic HTML structure
- [x] Accessible heading hierarchy
- [x] External links with `rel="noopener noreferrer"`
- [ ] Custom domain (optional)
- [ ] Submit sitemap to search engines (optional)

## Performance

The site is optimized for:
- **Fast load times** - Static generation, minimal JavaScript
- **Small bundle size** - Tree-shaking and code splitting
- **Efficient CSS** - Tailwind CSS purges unused styles
- **Lazy loading** - Images load only when needed

## Accessibility

- Keyboard navigation supported
- Screen reader friendly
- Sufficient color contrast (WCAG AA)
- Focus indicators on interactive elements
- ARIA labels on buttons and links

## License

MIT - Feel free to use this portfolio as a template for your own site.
