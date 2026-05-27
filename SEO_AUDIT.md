# SEO Audit

## Project Routing

- Router detected: Next.js App Router.
- Evidence: the project uses `app/layout.tsx` and `app/page.tsx`; no `pages` directory is present.

## Current Issues Found

- `https://dakshsharmaa.in/sitemap.xml` would return 404 before this update because no App Router metadata route existed at `app/sitemap.ts`.
- `robots.txt` was not generated because no `app/robots.ts` metadata route existed.
- Root metadata was present but incomplete for production SEO: no `metadataBase`, title template, canonical URL, keywords, Open Graph metadata, Twitter Card metadata, or manifest reference.
- No JSON-LD structured data existed for the portfolio owner or website.
- The profile image used a raw `<img>` tag instead of `next/image`, reducing image optimization and LCP control.
- `next.config.mjs` disabled Next.js image optimization with `images.unoptimized: true`.
- No web app manifest existed in `public/site.webmanifest`.
- Social profile URLs existed in the contact section but were not connected to structured data.
- The site is a single-page portfolio with section anchors. These are useful for users, but they are not separate crawlable static routes and should not be listed as sitemap URLs.

## Changes Made

- Added `app/sitemap.ts` using `MetadataRoute.Sitemap`.
- Implemented automatic static route discovery for App Router `page.tsx` files while excluding dynamic segments, route groups, parallel routes, private folders, and API routes.
- Set `https://dakshsharmaa.in` as the canonical sitemap domain.
- Added homepage sitemap metadata with priority `1` and monthly change frequency.
- Added `app/robots.ts` to allow all crawlers and reference `https://dakshsharmaa.in/sitemap.xml`.
- Updated `app/layout.tsx` with:
  - `metadataBase`
  - title default and template
  - production description
  - cybersecurity, security engineering, penetration testing, red teaming, Java, software engineering, AI security, and portfolio keywords
  - canonical URL
  - Open Graph metadata
  - Twitter Card metadata
  - favicon and manifest references
  - crawl/index directives
- Added JSON-LD structured data:
  - `Person` schema for Daksh Sharma
  - `WebSite` schema
  - `ProfilePage` schema
  - social profile `sameAs` links found in the project
- Added `public/site.webmanifest`.
- Replaced the profile `<img>` with `next/image`, including descriptive alt text, priority loading, responsive sizes, and object-fit styling.
- Re-enabled Next.js image optimization by removing `images.unoptimized: true` from `next.config.mjs`.

## Files Created

- `app/sitemap.ts`
- `app/robots.ts`
- `lib/seo.ts`
- `public/site.webmanifest`
- `SEO_AUDIT.md`

## Files Modified

- `app/layout.tsx`
- `components/sections/hero.tsx`
- `next.config.mjs`

## Metadata Coverage

- Homepage title: `Daksh Sharma | Cybersecurity Engineer & Software Developer`
- Homepage canonical: `https://dakshsharmaa.in`
- Homepage meta description: production-focused portfolio description.
- Open Graph image fallback: `/IMG_2043-modified.png`
- Twitter image fallback: `/IMG_2043-modified.png`

Because this project currently has only one crawlable static page, global metadata in `app/layout.tsx` covers the full site. If new App Router pages are added later, they should export page-specific metadata while inheriting the shared defaults.

## Technical SEO Recommendations

- Add a dedicated Open Graph image at `1200x630` for richer link previews. The current fallback is the profile image and works, but a landscape social image would be stronger.
- Consider adding visible internal navigation links to important sections such as `#projects`, `#certifications`, and `#contact` near the top of the page.
- Keep project links descriptive and consider adding `aria-label` text where the visible title alone does not explain the destination.
- Add separate crawlable pages for major portfolio assets if they deserve search visibility, such as `/projects/deceptinet` or `/certifications`.
- Run Lighthouse after deployment and monitor Core Web Vitals in Vercel Analytics or Google Search Console.
- Consider adding `robots` verification in Google Search Console after deployment.

## Missing Alt Text Detection

- One raw image was found before the update: `components/sections/hero.tsx`.
- It had a generic `alt="Profile"`.
- It now uses `next/image` with `alt="Daksh Sharma profile photo"`.
- No other content images were found in `app` or `components`.

## Sitemap And Robots Fix

- Previous likely result: `/sitemap.xml` returned 404 because Next.js had no `app/sitemap.ts` route.
- Fixed by adding the official App Router metadata route.
- Previous likely result: `/robots.txt` returned 404 because Next.js had no `app/robots.ts` route.
- Fixed by adding the official App Router metadata route.

## Estimated SEO Impact

- High impact: sitemap and robots generation, canonical metadata, Open Graph/Twitter metadata, and structured data improve crawlability, indexing clarity, and link previews.
- Medium impact: image optimization improves performance signals and user experience.
- Medium impact: richer keyword targeting and description improve relevance for cybersecurity and software engineering searches.
- Future impact depends on adding more crawlable portfolio pages and submitting the domain to Google Search Console.

