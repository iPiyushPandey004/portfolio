# Angular Portfolio — Phase 1

A responsive, dark, premium/futuristic developer portfolio scaffold built with Angular standalone components and TypeScript.

## Included
- Single-page portfolio with six sections: Home, About, Resume, Skills, Projects, Contact
- Sticky responsive navigation with mobile menu and smooth section scrolling
- Dark visual system with teal/violet accents, glass surfaces, restrained gradients and balanced motion
- Reusable standalone Angular components
- Placeholder content only — personal details intentionally left for a later phase
- Accessibility-minded focus states, semantic landmarks, reduced-motion support
- Contact form UI with client-side required/email validation and a demo success state

## Pinned toolchain
- Node.js: **24.22.1** (`.nvmrc`)
- npm: **12.2.0** (`packageManager` and `engines`)
- Angular CLI and Angular framework packages: **22.2.3**
- Windows environment used for development: **win32 x64**

The project enforces the Node.js/npm versions through `engines` and `.npmrc` (`engine-strict=true`). Use these exact versions when installing, running, testing, and building. Non-Angular transitive/tooling dependencies still need a generated `package-lock.json` to become fully reproducible; generate and commit it with the pinned Node/npm toolchain using `npm install`, then use `npm ci` for subsequent clean installs.

## Run locally
```bash
npm install
npm start
```
Open the local URL printed by Angular CLI (usually `http://localhost:4200`).

## Production build
```bash
npm run build
```
The generated output is under `dist/`.

## Project structure
```text
src/
  app/
    components/
      navbar/
      hero/
      about/
      resume/
      skills/
      projects/
      contact/
      footer/
    app.component.ts
    app.component.html
    app.component.css
    app.config.ts
    app.routes.ts
  index.html
  main.ts
  styles.css
```

## Decisions / not included yet
- No backend, database, analytics, external fonts, or third-party animation library is included.
- The contact form is front-end only. Before publishing, connect it to a trusted backend/form provider and validate input server-side.
- Do not put API keys, credentials, or secrets in Angular source code.
- Replace placeholder profile/project details in a later phase.

## Security and hosting notes
- Angular's template binding and sanitization are used; avoid bypassing sanitization for user-controlled values.
- Use HTTPS on hosting, configure a single-page-app fallback to `index.html`, and keep dependencies updated.
- Add a Content Security Policy at the hosting/server layer when deploying.
- If a real contact endpoint is added, use server-side validation, rate limiting, spam protection, and safe error handling.


## Phase 5 visual refinement
The current visual theme uses a midnight canvas and cyberpunk orange portrait ring. Previous theme styles are preserved in `theme_old/`; use that folder as the CSS-only rollback reference if the `theme_old` theme is requested.
