### Overview

_bien pensant_ is my cringey blog built with Astro. It uses Markdown for writing and Astro components for rendering pages. Its stack is sorta simple:

- Astro
- Markdown`
- HTML and CSS
- TypeScript for content configuration
- Git and GitHub
- GitHub Pages for hosting
- GitHub Actions for automatic deployment

### Commands

Run commands from the project root using Terminal or VSCode.

- Start the local development server: `npm run dev`
  > Open http://localhost:4321/ in your browser or VSCode. Stop the server using `Ctrl + C`.
- Build the site as it will be deployed: `npm run build`
- Preview the production build: `npm run preview`

### Writing

- All articles live in `src/content/articles/` and each of them is a `.md`.
- Every article must have a title and description:

```md
---
title: "My New Article"
description: "A short description of it."
---

start writing here
```

- The filename determines the URL slug.
- The `title` in the frontmatter determines the displayed title. It does not have to match the filename.
- The homepage reads the article collection automatically, so new articles should appear in the index without manually adding their titles to `index.astro`.
- The reusable `[slug].astro` template renders the article content. Styling changes to that template affect the reading page, not the Markdown source.

### Publishing workflow

1. Write a new article or whatever.
2. Test locally: `npm run dev`.
3. Check the production build: `npm run build`.
4. Stage and commit my changes:
   ```bash
   git add .
   git commit -m "Describe the changes"
   ```
5. Push to GitHub:

   ```bash
   git push
   ```

   > If error ! [rejected] main -> main (fetch first), run git pull --rebase origin main and git push origin main.

6. [Verify deployment.](https://github.com/tenkeyful/tenkeyful.github.io/actions)

### git commit message

| Type       | When to use                                                | Example                                |
| ---------- | ---------------------------------------------------------- | -------------------------------------- |
| `feat`     | Add a new feature or capability.                           | `feat: add user registration`          |
| `fix`      | Fix a bug or incorrect behavior.                           | `fix: handle expired access tokens`    |
| `docs`     | Add or update documentation.                               | `docs: update installation guide`      |
| `style`    | Change formatting without affecting code behavior.         | `style: format code with prettier`     |
| `refactor` | Improve code structure without changing external behavior. | `refactor: extract validation logic`   |
| `perf`     | Improve performance or efficiency.                         | `perf: optimize database queries`      |
| `test`     | Add, update, or fix tests.                                 | `test: add login service tests`        |
| `build`    | Change build tools, dependencies, or packaging.            | `build: upgrade vite to v7`            |
| `ci`       | Change CI/CD pipelines or automation.                      | `ci: add lint check to github actions` |
| `chore`    | Perform routine maintenance.                               | `chore: add editorconfig file`         |

### TODO

- Design and presentation
  - [x] Replace the default Astro favicon with my custom one.
  - [ ] Refine article typography and spacing.
  - [ ] Fix all Markdown styling issues when Astro renders them.
- Content and navigation
  - [ ] Decide whether articles should display publication dates.
  - [ ] Add categories, publication dates, and sorting to homepage.
- Technicalities
  - [ ] Check for unnecessary npm dependencies.
  - [ ] Review page titles, meta descriptions, and social sharing previews.
  - [ ] Test the site at narrow screen widths.
  - [ ] Email sending.
  - [x] Buy a domain.
