# kiyanwang.github.io

Personal portfolio site for [Nadeem Shabir](https://linkedin.com/in/nadeemshabir) — Staff Engineer at BibliU, technical advisor, and mentor.

**Live:** [kiyanwang.github.io](https://kiyanwang.github.io)

## Tech Stack

- **Framework:** Vite + React 18
- **Routing:** React Router 6 (HashRouter for GitHub Pages compatibility)
- **Styling:** CSS custom properties using the [Lunaris](https://pencil.dev) design system
- **Deployment:** GitHub Pages via `gh-pages` branch
- **Design:** Pencil (`.pen` file with Lunaris components)

## Project Structure

```
src/
  components/         Shared UI components
    NavBar.jsx          Navigation bar with active link highlighting
    Tag.jsx             Orange pill tags (tech tags, filter buttons)
    SectionHeader.jsx   Section label with "View all" link
    ProjectCard.jsx     Project card with tags and GitHub link
    ArticleRow.jsx      Writing list row with title, date, read link
  pages/              Page components
    Landing.jsx         Hero + featured projects + latest writing
    Projects.jsx        Filterable project grid
    Writing.jsx         Full article list from Substack RSS
  data/
    projects/           YAML files — one per project
    articles.json       Auto-generated from Substack RSS at build time
  utils/
    loadProjects.js     Loads YAML project files, filtering utilities
  theme.css             Lunaris design tokens (colours, fonts, radii)
  global.css            Base styles and resets
  App.jsx               Router configuration
  main.jsx              Entry point

scripts/
  fetch-articles.mjs    Fetches Substack RSS feed and writes articles.json

docs/
  superpowers/
    specs/              Design specifications
    plans/              Implementation plans

kiyanwang.pen           Pencil design file (Lunaris design system)
```

## Workflows

### Adding a New Project

1. Create a YAML file in `src/data/projects/`:

```yaml
name: My Project
description: What it does.
tags:
  - TypeScript
  - AI
github_url: https://github.com/kiyanwang/my-project
featured: false
```

2. Deploy:

```bash
npm run deploy
```

The project will appear on the Projects page. Filter tags are auto-generated from all project tags. Set `featured: true` to show it on the landing page.

### Updating the Writing Feed

The writing feed is pulled from [virtualchaos.substack.com](https://virtualchaos.substack.com) at build time. After publishing a new Substack post:

```bash
npm run deploy
```

This fetches the latest RSS feed and rebuilds the site.

### Making Design or Feature Changes

For functional changes, new pages, or design updates, use the full design-first workflow:

1. **Design in Pencil** — Open `kiyanwang.pen` in [pencil.dev](https://pencil.dev) and iterate on the design using the Lunaris design system
2. **Brainstorm and spec** — Use `superpowers:brainstorming` in Claude Code to explore the change and write a design spec
3. **Plan** — Use `superpowers:writing-plans` to create an implementation plan
4. **Implement** — Use `superpowers:subagent-driven-development` to execute the plan
5. **Deploy** — `npm run deploy`

Design specs and plans are saved to `docs/superpowers/` for reference.

### Updating Design Tokens

The colour palette, fonts, and spacing come from the Lunaris design system. Tokens are defined in `src/theme.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#111111` | Page background |
| `--foreground` | `#FFFFFF` | Headings, primary text |
| `--card` | `#1A1A1A` | Card backgrounds |
| `--border` | `#2E2E2E` | Borders, dividers |
| `--primary` | `#FF8400` | Orange accent, buttons, links |
| `--muted-foreground` | `#B8B9B6` | Secondary text |
| `--font-primary` | JetBrains Mono | Headings, labels, nav |
| `--font-secondary` | Geist | Body text, descriptions |

## Development

```bash
npm run dev       # Start dev server
npm test          # Run tests
npm run build     # Fetch RSS + build
npm run deploy    # Build and deploy to GitHub Pages
```

## Pages

| Route | Description |
|-------|-------------|
| `/#/` | Landing page — hero, featured projects, latest writing |
| `/#/projects` | All projects with tag filtering |
| `/#/writing` | Full article list from Substack RSS |
