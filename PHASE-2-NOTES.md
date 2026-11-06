# Phase 2 update notes

## Experience
- Infosys: Associate Consultant, December 2025 – Current.
- LTIMindtree: Software Engineer (Java Developer), March 2022 – November 2025.
- ULTIMA and CAPE are grouped as projects under the single LTIMindtree employer entry.

## Selected Work
- Removed organizational projects ULTIMA and CAPE from Selected Work.
- Retained the personal project Parking Management and Slot Detection with the supplied GitHub repository link.

## Verified toolchain and dependency configuration
- Angular framework packages: 22.2.3.
- Angular CLI: 22.2.3.
- `@angular/build`: 22.2.5.
- Node.js: 24.22.1.
- npm: 12.2.0.
- Removed the unused, deprecated `@angular/animations` dependency; the source does not import or use it.
- Removed the deprecated `baseUrl` compiler option from `tsconfig.json`.

## Lockfile note
This archive includes the updated `package.json` but does not include a newly fabricated `package-lock.json`. Keep the `package-lock.json` from the working project where `npm audit` returned `found 0 vulnerabilities`. If merging into an existing checkout, retain that lockfile. After extracting into a clean checkout, run `npm install` with Node.js 24.22.1 and npm 12.2.0 to create/update the lockfile, then run `npm audit` and `npm start`.

Other non-Angular dependency declarations are unchanged from the previous project manifest. The confirmed Angular, Node.js, and npm versions are pinned exactly.
