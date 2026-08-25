# Anamica — Portfolio: where to update things

All content lives in **`src/data/portfolio.ts`** — edit that one file to update text,
links, skills, experience, projects, certificates, gallery items, and milestones.

## Replacing placeholders with real assets

| What | Where | How |
| --- | --- | --- |
| Profile photo (hero) | `src/components/portfolio/Hero.tsx` | Drop the image in `src/assets/`, import it, and replace the "Profile photo placeholder" block with an `<img>`. |
| CV download | `src/data/portfolio.ts` → `profile.cvUrl` | Put the PDF in `/public` (e.g. `/anamica-cv.pdf`) and set `cvUrl: "/anamica-cv.pdf"`. The hero button activates automatically. |
| Project screenshots | `src/components/portfolio/Projects.tsx` | Replace the placeholder preview block with `<img>` imports from `src/assets/`. |
| Project links | `src/data/portfolio.ts` → `projects[].liveUrl` / `githubUrl` | Set real URLs; the "coming soon" buttons become live links automatically. |
| Organization logos | `src/components/portfolio/Experience.tsx` | Replace the `logoInitial` badge with an `<img>` logo. |
| Certificate previews | `src/components/portfolio/Certificates.tsx` (`CertModal`) | Put PDFs/images in `/public/certificates/`, add a `file` field to each certificate in the data file, and render it in the modal. |
| Gallery photos | `src/data/portfolio.ts` → `galleryItems[].src` | Add uploaded photos (import from `src/assets/` or reference `/public/images/…`) and set `src`. The lightbox and masonry layout work automatically. |

## Privacy rules (keep these!)

- **Never** put full credential/certificate IDs in the data file, HTML, or JS.
  Use masked form only, e.g. `XXXX-XXXX-4115` (`maskedId` field).
- Do not add LinkedIn analytics (profile views, impressions, followers).
- Only public contact details: email, LinkedIn, GitHub (already configured).

## Accuracy rules

- Verify certificate titles/dates against the certificate PDF before publishing;
  unclear details are intentionally labelled "Details available in certificate".
- Do not duplicate certificates that share a title + credential ID.
- Keep wording honest: "learning", "exploring", "building" — no invented achievements.

## Structure

- `src/routes/index.tsx` — page assembly + SEO metadata
- `src/components/portfolio/` — Navbar, Hero, About, Skills, Experience, Journey,
  Projects, Certificates (+modal), Gallery (+lightbox), Contact, Footer, shared UI
  helpers (Reveal, Tilt, CursorGlow, Monogram)
- `src/styles.css` — design tokens (colors, glows, glass, grid, animations)

Animations respect `prefers-reduced-motion` and the cursor glow is desktop-only.
