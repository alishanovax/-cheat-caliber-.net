import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { SLUG_REDIRECTS } from './src/config/slug-redirects.mjs';

export default defineConfig({
  site: 'https://cheatcaliber.net',
  trailingSlash: 'always',
  server: {
    host: true,
    port: 4322,
  },
  redirects: {
    '/products/borderlands-cheats/': '/products/caliber/',
    '/products/borderlands-cheats/elite/': '/products/caliber/elite/',
    '/products/borderlands-cheats/utilities/': '/products/caliber/utilities/',
    '/products/borderlands-hacks/': '/products/caliber/',
    '/products/borderlands-hacks/elite/': '/products/caliber/elite/',
    '/products/borderlands-hacks/utilities/': '/products/caliber/utilities/',
    '/borderlands-cheats/': '/caliber-cheats/',
    '/borderlands-hacks/': '/caliber-cheats/',
    '/products/mw4-cheats/': '/products/caliber/',
    '/products/mw4-cheats/elite/': '/products/caliber/elite/',
    '/products/mw4-cheats/utilities/': '/products/caliber/utilities/',
    '/products/mw4-hacks/': '/products/caliber/',
    '/products/mw4-hacks/elite/': '/products/caliber/elite/',
    '/products/mw4-hacks/utilities/': '/products/caliber/utilities/',
    '/mw4-cheats/': '/caliber-cheats/',
    '/mw4-hacks/': '/caliber-cheats/',
    '/go/mw4/': '/go/caliber/',
    '/go/borderlands/': '/go/caliber/',
    '/go/bodycam/': '/go/caliber/',
    '/go/fortnite/': '/go/caliber/',
    '/go/cs-go/': '/go/caliber/',
    '/cs-go-cheats/': '/caliber-cheats/',
    '/products/cs-go/': '/products/caliber/',
    '/cheats/': '/products/caliber/',
    '/cheats/lite/': '/products/caliber/lite/',
    '/cheats/pro/': '/products/caliber/pro/',
    '/cheats/elite/': '/products/caliber/elite/',
    '/cheats/compare/': '/blog/caliber-lite-vs-pro/',
    '/hacks/': '/products/caliber/',
    '/hacks/lite/': '/products/caliber/lite/',
    '/hacks/pro/': '/products/caliber/pro/',
    '/hacks/elite/': '/products/caliber/elite/',
    '/hacks/compare/': '/blog/caliber-lite-vs-pro/',
    '/products/dota-2-cheats/': '/products/caliber/',
    '/products/dota-2-cheats/elite/': '/products/caliber/elite/',
    '/products/dota-2-cheats/utilities/': '/products/caliber/utilities/',
    '/products/dota-2-hacks/': '/products/caliber/',
    '/products/dota-2-hacks/elite/': '/products/caliber/elite/',
    '/products/dota-2-hacks/utilities/': '/products/caliber/utilities/',
    '/products/fortnite-cheats/': '/products/caliber/',
    '/products/fortnite-cheats/elite/': '/products/caliber/elite/',
    '/products/fortnite-cheats/utilities/': '/products/caliber/utilities/',
    '/products/fortnite-hacks/': '/products/caliber/',
    '/products/fortnite-hacks/elite/': '/products/caliber/elite/',
    '/products/fortnite-hacks/utilities/': '/products/caliber/utilities/',
    '/contact/': '/support/',
    ...SLUG_REDIRECTS,
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
