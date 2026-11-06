# Ben Mim Ahmed — Personal Website

Personal portfolio and blog of Ben Mim Ahmed, ICT engineering student at SUP'COM, focused on offensive cybersecurity and penetration testing.

Built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and TypeScript.

## 🌐 Live Site

https://veryfastlearner.github.io/Personal-Website/

## 📋 Features

- ✅ Bilingual (English / French) with i18n
- ✅ Blog with Markdown support
- ✅ Projects showcase
- ✅ Work experience timeline
- ✅ Responsive design
- ✅ Light/Dark theme
- ✅ SEO-friendly (sitemap, RSS feed, Open Graph)
- ✅ Fast performance (100/100 Lighthouse)
- ✅ Type-safe content collections

## 🛠️ Tech Stack

- [Astro](https://astro.build/) — Static site generator
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) — Content management

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── pages/         # Page-level components (Home, BlogIndex, etc.)
│   └── ...
├── content/           # Content collections (blog, projects, work)
│   ├── blog/          # Blog posts (en, fr)
│   ├── projects/      # Project entries (en, fr)
│   └── work/          # Work experience (en, fr)
├── layouts/           # Page layouts
├── lib/               # Utility functions
├── pages/             # Astro pages (routes)
├── styles/            # Global styles
├── consts.ts          # Site configuration
├── i18n.ts            # Internationalization strings
└── types.ts           # TypeScript types
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/veryfastlearner/Personal-Website.git
cd Personal-Website

# Install dependencies
pnpm install
```

### Development

```bash
# Start the dev server at localhost:4321
pnpm run dev

# Start the dev server on the local network
pnpm run dev:network
```

### Building

```bash
# Build for production
pnpm run build

# Preview the production build locally
pnpm run preview
```

### Other Commands

| Command | Action |
|---------|--------|
| `pnpm run sync` | Generate TypeScript types for Astro modules |
| `pnpm run astro ...` | Run Astro CLI commands |
| `pnpm run lint` | Run ESLint |
| `pnpm run lint:fix` | Auto-fix ESLint issues |

## 📝 Content

Content is managed through Astro Content Collections:

- **Blog** — `src/content/blog/` (English and French)
- **Projects** — `src/content/projects/` (English and French)
- **Work** — `src/content/work/` (English and French)

Each entry uses frontmatter for metadata (title, date, language, draft status, featured flag, etc.) and Markdown/MDX for the body.

## 🌍 Internationalization

The site supports two locales:
- `en` — English (default)
- `fr` — French

Translations are defined in `src/i18n.ts`. Routes are prefixed with the locale (e.g., `/fr/blog`).

## 📞 Contact

- **Email**: ahmed.b.mim@gmail.com
- **GitHub**: [@veryfastlearner](https://github.com/veryfastlearner)
- **LinkedIn**: [Ben Mim Ahmed](https://www.linkedin.com/in/ben-mim-ahmed-5b392739b)

## 📄 License

MIT