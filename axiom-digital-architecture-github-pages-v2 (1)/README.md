# AXIOM Digital Architecture — GitHub Pages

Static landing page built with plain HTML, CSS, and JavaScript.

## Deploy to GitHub Pages

The repository-level workflow at `.github/workflows/deploy-pages.yml` publishes
this website directory to GitHub Pages on pushes to `main` and on manual runs.
In repository **Settings → Pages**, select **GitHub Actions** as the build and
deployment source if it is not already selected. The workflow uploads this
directory (including its `assets/`) as the published site.

The site itself is static HTML, CSS, and JavaScript; no application build,
framework, database, or server is required.

## Before launch

- The contact address is `admin@stack.report`.
- The site includes a local SVG favicon at `assets/axiom-mark.svg`.
- If a custom domain is added later, configure it under GitHub Pages and add the appropriate DNS records.


## Positioning

AXIOM Digital Architecture helps businesses integrate AI into their existing systems.
The site describes practical AI integration and workflow automation for small
businesses, with examples including appointment-request handling, SEO foundations,
social content workflows, and custom AI pipelines. Appointment flows depend on
the scheduling software's available connections and keep staff involved when
requests need judgment. SEO work supports discoverability but does not guarantee
rankings; social content is reviewed by a person before publication.

The landing page includes page metadata, Open Graph and Twitter card text, and
Organization structured data. Add canonical and absolute social-sharing image
URLs only after the published Pages URL and public image URL are confirmed.

## Hero media

The hero uses the static `assets/axiom-background.png`. The supplied 7.3-second
MOV was copied and converted into a silent 1280×720 H.264 MP4 and poster at
`assets/axiom-hero.mp4` and `assets/axiom-hero-poster.jpg`; those assets appear
in a separate workflow section further down the page. The original source MOV
is not part of the site. The video uses native controls, inline playback, and
`preload="none"` so visitors choose whether to play it; the poster is shown
before playback, including for visitors who prefer reduced motion.

## Inquiry form

The contact form validates required fields in the browser and prepares a
pre-filled message in the visitor's default email application. It does not send
or store form data. A direct `mailto:` link remains available as a fallback.

## Search and social metadata

The page includes a title, description, Open Graph title/description, and
Organization structured data. The production URL is not configured here, so
the page intentionally has no guessed canonical URL, `sitemap.xml`,
`robots.txt` sitemap directive, or absolute `og:image`. Add these once the
published domain and final public image URL are confirmed.
