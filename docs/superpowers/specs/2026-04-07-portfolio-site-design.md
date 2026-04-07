# Portfolio Site Design Spec

## Overview

Personal portfolio site for Nadeem Shabir — Staff Engineer at BibliU, formerly Head of Platform at Talis. The site showcases who Nadeem is as a software engineer, thought leader, startup advisor, and mentor. It serves as a living portfolio that's easy to maintain.

**URL:** kiyanwang.github.io

## Architecture

### Approach: Hub & Spoke

A single impactful landing page with hero, featured projects, and latest writing teasers. "View all" links lead to dedicated sub-pages. The landing page tells the story; the sub-pages are the evidence.

### Tech Stack

- **Framework:** React (via `react-gh-pages` pattern)
- **Deployment:** GitHub Pages (`gh-pages` branch)
- **Project data:** JSON/YAML files in `src/data/projects/` — build step reads these to generate the projects page
- **Writing feed:** Fetched from Substack RSS (`virtualchaos.substack.com/feed`) at build time
- **Workflow:** Add/edit a data file, run `npm run deploy`, site updates

## Visual Style

- **Dark & minimal** — dark background (`#0d1117`), clean typography, lots of whitespace
- **Accent colour:** Orange (`#e8853d` as placeholder — final value from Lunaris design system in Pencil)
- **Card backgrounds:** `#161b22` with `#21262d` borders
- **Text hierarchy:** White (`#f0f6fc`) for headings, grey (`#8b949e`) for body, muted grey (`#6e7681`) for metadata
- **Tech tags:** Translucent orange background with orange text
- **Buttons/links:** Solid orange with dark text, or orange text for inline links

## Pages

### 1. Landing Page (/)

**Nav bar:**
- Left: "Nadeem Shabir" (text logo)
- Right: Projects, Writing, About (About anchors to hero section)

**Hero section:**
- Subtitle: "STAFF ENGINEER · BIBLIU" (orange, uppercase, tracked)
- Headline: "I build platforms, grow teams, and advise startups on technical strategy." (large, bold, white)
- Description: "Staff Engineer at BibliU, formerly Head of Platform at Talis. I think about distributed systems, platform engineering, and the human side of shipping software. Technical advisor to early-stage startups, and a mentor to many."
- Social buttons: GitHub, LinkedIn, Substack (solid orange, dark text)
- Profile photo: Circular, orange border (sourced from LinkedIn CDN or local asset)

**Featured Projects section:**
- Section header: "FEATURED PROJECTS" (orange, uppercase) with "View all →" link
- 2-column card grid showing Glean and Agent Skills
- Each card: title, description, tech tags (translucent orange)

**Latest Writing section:**
- Section header: "LATEST WRITING" (orange, uppercase) with "View all →" link
- 3 most recent articles as rows: title (white), subtitle (grey), date
- Data pulled from Substack RSS at build time

### 2. Projects Page (/projects)

**Page header:**
- Title: "Projects"
- Subtitle: "Things I've built — tools, experiments, and open source contributions."

**Filter tags:**
- Horizontal row of clickable tags: All (active/orange), AI, Tools, Python, JavaScript, Design
- Active filter highlighted with solid orange background

**Project grid:**
- 2-column card layout
- Each card: title, description, tech tags, "View on GitHub →" link
- Featured projects get a "Featured" badge

**Initial projects:**
1. Glean — Article curation & summarisation tool for Obsidian (Featured)
2. Upscaler — AI image upscaling (Python)
3. AI Agents — Custom AI agents for Claude Code (Featured)
4. Dotfiles — Shell and tool configurations
5. Pen Studio Demo — 3D pen turning simulator with procedural wood grain shaders

**Adding projects:**
- Drop a JSON/YAML file into `src/data/projects/` with fields: name, description, tags, github_url, featured (boolean)
- Build step reads all project files and renders the grid
- Filter tags auto-generated from project tags

### 3. Writing Page (/writing)

**Page header:**
- Title: "Writing"
- Subtitle: "Thoughts on software engineering, AI, teams, and the craft of building things. Published on Substack and LinkedIn."

**Article list:**
- Vertical list with 1px dividers, rounded container
- Each row: title (orange, distinct from landing page where titles are white), subtitle (grey), date, "Read →" link
- "Read →" links open the article on Substack
- Auto-populated from `virtualchaos.substack.com/feed` RSS at build time

### About

- No dedicated page — the "About" nav link scrolls to the hero section on the landing page

## Project Data Format

```yaml
# src/data/projects/glean.yml
name: Glean
description: Article curation & summarisation tool for Obsidian
tags:
  - JavaScript
  - Obsidian
  - AI
github_url: https://github.com/kiyanwang/glean
featured: true
```

## Build Pipeline

1. `npm run build` — Compiles React app; during build:
   - Reads all YAML/JSON files from `src/data/projects/`
   - Fetches Substack RSS feed and parses latest articles
2. `npm run deploy` — Pushes built output to `gh-pages` branch

## Responsive Considerations

- Landing page hero: stack vertically on mobile (photo above or below text)
- Project grid: single column on mobile
- Writing list: full width, naturally responsive
- Nav: consider hamburger menu on mobile

## Out of Scope

- Blog hosting (articles live on Substack)
- CMS or admin UI
- Contact form
- Dark/light mode toggle (dark only)
- Analytics
