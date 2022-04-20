# Climbing in Turkey

## Images

### Logo

Two logo files are needed.

- _public/logo.svg_
- _src/assets/logo.png_

:bulb: Use 512x512 resolution for logo.png.

### Images

Place images to _src/assets/images_ folder.
## Production

### Site Url

**File: _src/config/siteUrl.mjs_**

change

```js
const siteUrl = 'https://climbing-in-turkey-astro.netlify.app';
```

to

```js
const siteUrl = 'https://YOURS-SITE-DOMAIN';
```

:bulb: No trailing slash!

**File: _public/robots.txt_**

change

```text
Sitemap: https://climbing-in-turkey-astro.netlify.app/sitemap.xml
```

to

```text
Sitemap: https://YOURS-SITE-DOMAIN/sitemap.xml
```

### Enable Indexing

**File: _netlify.toml_**

```toml
    X-Robots-Tag = "noindex, nofollow"
```

```toml
    X-Robots-Tag = "index, follow"
```

**File: _src/config/seoConfig.ts_**

change

```js
disableIndexing: true,
```

to

```js
disableIndexing: false,
```
  
**File: _public/robots.txt_**

change

```text
Disallow: /
```

to

```text
Disallow:
```
