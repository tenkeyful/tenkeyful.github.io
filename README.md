# Bien Pensant

my cringey blog

---

## Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Commands](#commands)
- [Writing Essays](#writing-essays)
- [Publishing](#publishing)
- [TODO](#todo)
- [Notes](#notes)

## Overview

Bien Pensant is a personal blog built with Astro.

The site uses Markdown for writing and Astro components for rendering pages. The goal is to keep writing separate from presentation, so essays can be edited without manually writing HTML.

**Stack**

- Astro
- Markdown
- HTML and CSS
- TypeScript for content configuration
- Git and GitHub
- GitHub Pages for hosting
- GitHub Actions for automatic deployment

## Project Structure

```text
blog/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automatic deployment
├── public/
│   └── favicon.svg             # Site favicon (replace Astro default)
├── src/
│   ├── assets/                 # Imported assets
│   ├── components/             # Reusable UI components
│   ├── content/
│   │   └── essays/             # Markdown essays
│   ├── layouts/
│   │   └── Layout.astro        # Potential shared page layout
│   ├── pages/
│   │   ├── index.astro         # Homepage / essay index
│   │   └── essays/
│   │       └── [slug].astro    # Reusable essay page template
│   └── content.config.ts       # Essay collection configuration
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies and npm scripts
├── package-lock.json           # Locked dependency versions
└── README.md                   # Project notes and documentation
```

## Commands

Run commands from the project root (`C:\blog`).

### Development

Start the local development server:

```bash
npm run dev
```

Open http://localhost:4321/ in your browser.

Stop the server with `Ctrl + C`.

### Production build

Build the site as it will be deployed:

```bash
npm run build
```

Generated files go into `dist/`.

Run this before pushing changes to catch build errors.

### Preview the production build

```bash
npm run preview
```

Build first with `npm run build`. The preview server lets you inspect the generated site locally.

## Writing Essays

All essays live in:

`src/content/essays/`

Each essay is a Markdown file (`.md`). For example:

`src/content/essays/my-new-essay.md`

### Frontmatter

Every essay must have a title and description:

```md
---
title: "My New Essay"
description: "A short description of the essay."
---

# My New Essay

Begin writing here.

Separate paragraphs with a blank line.
```

The frontmatter provides metadata. The Markdown below it contains the actual essay.

### How essay URLs work

The filename determines the URL slug. For example:

`src/content/essays/my-new-essay.md`

becomes:

`https://tenkeyful.github.io/essays/my-new-essay/`

The `title` in the frontmatter determines the displayed title. It does not have to match the filename.

The homepage reads the essay collection automatically, so new essays should appear in the index without manually adding their titles to `index.astro`.

The reusable `[slug].astro` template renders the essay content. Styling changes to that template affect the reading page, not the Markdown source.

## Publishing

The project is stored in the GitHub repository:

https://github.com/tenkeyful/tenkeyful.github.io

The live site is hosted on GitHub Pages.

### Normal publishing workflow

1. Create or edit a Markdown essay, or modify the site.
2. Test locally with `npm run dev`.
3. Check the production build with `npm run build`.
4. Stage and commit your changes:

   ```bash
   git add .
   git commit -m "Describe the changes"
   ```

5. Push to GitHub:

   ```bash
   git push
   ```

6. Check the repository's **Actions** tab to verify deployment.

The GitHub Actions workflow builds and deploys the site when changes are pushed to `main`.

Do not manually upload the `dist/` folder. The workflow handles the build and deployment.

### If deployment fails

- Check the failed run in GitHub Actions.
- Read the build or deployment error.
- Reproduce build errors locally with `npm run build`.
- Fix the issue, commit the changes, and push again.

## TODO

Tasks and improvements to revisit as the site develops.

### Design and presentation

- [ ] Replace the default Astro favicon with a Bien Pensant favicon.
- [ ] Refine essay typography, spacing, and code block styling.
- [ ] Make sure the homepage and essay pages look good on mobile.
- [ ] Create a shared layout for common HTML structure and metadata.
- [ ] Review heading hierarchy, link styles, and long-line overflow.

### Content and navigation

- [ ] Decide whether essays should display publication dates.
- [ ] Add an About page if needed.
- [ ] Add a back-to-archive link to essay pages.
- [ ] Review the homepage subtitle and footer text.
- [ ] Verify that the contact link points to a working email address.

### Technical cleanup

- [ ] Inspect unused Astro starter files and remove those that are no longer needed.
- [ ] Replace the default Astro favicon in `public/`.
- [ ] Review page titles, meta descriptions, and social sharing previews.
- [ ] Test the site at narrow screen widths.
- [ ] Confirm that every essay URL works after deployment.

### Optional future improvements

- [ ] Add publication dates and sorting.
- [ ] Add tags or categories if the archive becomes large.
- [ ] Consider a custom domain.

## Notes

- Keep essays in Markdown; avoid embedding HTML unless necessary.
- Keep content separate from layout and styling.
- Prefer native Astro features over adding dependencies without a clear need.
- Test the production build before pushing.
- Keep secrets, credentials, and private information out of the public repository.
- Update this README when the project structure or workflow changes.
