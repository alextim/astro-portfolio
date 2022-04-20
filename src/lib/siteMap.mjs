import fs from 'node:fs';

const STATUS_CODE_PAGE_REGEXP = /\/[0-9]{3}\/?$/;



/** Construct sitemap.xml given a set of URLs */
function generateSitemap(pages) {
	// TODO: find way to respect <link rel="canonical"> URLs here
	const urls = [...pages].filter((url) => !STATUS_CODE_PAGE_REGEXP.test(url));
	urls.sort((a, b) => a.localeCompare(b, 'en', { numeric: true })); // sort alphabetically so sitemap is same each time
	let sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
	for (const url of urls) {
		sitemap += `<url><loc>${url}</loc></url>`;
	}
	sitemap += `</urlset>\n`;
	return sitemap;
}

export default function createPlugin({
	filter,
	canonicalURL,
} = {}) {
	let config;
	return {
		name: '@astrojs/sitemap',
		hooks: {
			'astro:config:done': async ({ config: _config }) => {
				config = _config;
			},
			'astro:build:done': async ({ pages, dir }) => {
				const finalSiteUrl = canonicalURL || config.site;
				if (!finalSiteUrl) {
					console.warn(
						'The Sitemap integration requires either the `site` astro.config option or `canonicalURL` integration option. Skipping.'
					);
					return;
        }
        console.log(pages, dir);
        for (const p in pages) {
          console.log(p);

        }

				let pageUrls = pages.map((p) => new URL(p.pathname, finalSiteUrl).href);
				if (filter) {
					pageUrls = pageUrls.filter((page) => filter(page));
				}
				const sitemapContent = generateSitemap(pageUrls);
				fs.writeFileSync(new URL('sitemap.xml', dir), sitemapContent);
			},
		},
	};
}
