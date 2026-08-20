# Pratheek P. Shetty — academic website

A lightweight, static academic and personal website built with Astro. All
personal content is centralized under `src/data/`, and the production output is
compatible with both a GitHub user site and a GitHub Pages project repository.

## Development

Requires Node.js 22.12 or newer (an even-numbered release). The deployment
workflow uses Node.js 24.

```bash
npm install
npm run dev
```

Astro prints the local preview URL after startup.

## Production build

```bash
npm run build
```

The static site is written to `dist/`.

## Updating content

Most content lives in `src/data/`:

- `site.ts` — name, introduction, about text, research interests, contact links,
  external blog URL, and navigation
- `research.ts` — publications and research work, including explicit status
- `projects.ts` — technical projects and their links
- `news.ts` — standalone Latest news updates and the combined news feed
- `experience.ts` — research and work experience
- `skills.ts` — categorized technical skills
- `resumes.ts` — resume descriptions, filenames, and availability
- `writing.ts` — optional manually curated external posts

Empty datasets and TODO text are intentional. They prevent unverified academic
claims from appearing on the public site. Replace them only with confirmed
information.

### Publishing a Latest news update

For a standalone update, add a dated item to `manualNews` in `src/data/news.ts`.
To surface a research or project milestone automatically, add a `latestUpdate`
object to that entry in `research.ts` or `projects.ts`. The homepage combines
and sorts all three sources newest-first, then shows the five most recent items.

## Updating resumes

The four current PDFs are stored in `public/resumes/` using these stable filenames:

- `pratheek-shetty-cv.pdf`
- `pratheek-shetty-gpu-systems.pdf`
- `pratheek-shetty-compilers.pdf`
- `pratheek-shetty-software-engineering.pdf`

To replace a resume, overwrite the matching file while keeping its filename.
The view and download links update automatically. The `available` field in
`src/data/resumes.ts` can hide a document temporarily; missing files should
never remain marked available.

## Contact and profile links

Add the verified email, GitHub, Google Scholar, LinkedIn, and separate blog URL
in `src/data/site.ts`. Empty values are omitted from navigation and profile
lists so the initial site has no dead external links.

## Adding the headshot

1. Add a square portrait at `public/images/pratheek-shetty.jpg`. An image around
   800 by 800 pixels, centered on the face, and kept below roughly 500 KB works
   well.
2. In `src/data/site.ts`, change `headshot.src` from an empty string to
   `"/images/pratheek-shetty.jpg"`.
3. The homepage automatically crops the image into the circular frame. Until a
   photo is configured, the frame displays the initials `PPS`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site on
every push to `main` and can also be run manually.

In the GitHub repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Push to `main`, or run **Deploy to GitHub Pages** from the Actions tab.

The Astro configuration reads `GITHUB_REPOSITORY` during the action. A
repository named `pratheekps.github.io` is built at `/`; any other repository is
built with `/<repository-name>/` as its base path. To test a project-repository
base locally, set `PUBLIC_BASE_PATH` before building.

Set `SITE_URL` in the workflow environment only if the final public origin is
different from `https://pratheekps.github.io`.

## Images and metadata

The site includes an SVG favicon, page-specific titles and descriptions,
canonical URLs, Open Graph and X metadata, and an automatically generated
sitemap. No generic social preview image is shipped; add a verified image later
and reference it from `src/layouts/BaseLayout.astro` if desired.
