# Olaopa Olajide Michael: portfolio

General portfolio: social media, websites and web apps, AI automation, project management, trainings and video.
Static site (three.js, anime.js, Lenis). No build step.

- Edit content in `js/data.js` (folders, experience, tools).
- Hero, summary and contact text are in `index.html`.
- Live: https://olaopaolajide.vercel.app/ (Vercel), also mirrored on GitHub Pages. SEO files: robots.txt, sitemap.xml, site.webmanifest, vercel.json.
- Phones (760px and narrower) get a plain single page: Menu button, no three.js, all sections stacked. Desktop keeps the 3D hero and tab window.
- CSS/JS are cached for a day (vercel.json), so after changing `css/` or `js/` files bump the `?v=` date on their links in `index.html`.
