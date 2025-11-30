TRACKS - Eleventy site (Netlify-ready)
=====================================

How to use:
1. Install dependencies locally:
   npm install
2. Run locally:
   npm run start
3. Build:
   npm run build
4. Deploy to Netlify:
   - Push this repo to GitHub/GitLab/Bitbucket.
   - In Netlify, create a new site from repo, set build command: `npm run build`, publish directory: `_site`.
   - Enable Netlify Identity + Git Gateway and invite your Netlify account to edit via /admin.
   - Visit /admin to log in and edit content via Netlify CMS.

Notes:
- Content files live in src/pages as Markdown. The CMS is configured to create/edit files there.
- Images are in assets/images and are passthrough-copied.

## Added features
- Safari Packages, Lodges, Gallery, Reviews, Staff, Blog collections for Netlify CMS.
- Responsive image shortcode using @11ty/eleventy-img.
- SEO/OpenGraph meta tags and basic schema-ready layout.
- Sample content for each collection.
- Templates for listing and item pages.

Note: Add GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET to Vercel env variables and set site URL in src/_data/site.yml
