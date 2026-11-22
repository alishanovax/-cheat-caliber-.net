import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { SLUG_REDIRECTS } from './src/config/slug-redirects.mjs';

export default defineConfig({
  site: 'https://csgo-cheat.org',
  trailingSlash: 'always',
  server: {
    host: true,
    port: 4322,
  },
  redirects: {
    '/products/borderlands-cheats/': '/products/cs-go/',
    '/products/borderlands-cheats/elite/': '/products/cs-go/elite/',
    '/products/borderlands-cheats/utilities/': '/products/cs-go/utilities/',
    '/products/borderlands-hacks/': '/products/cs-go/',
    '/products/borderlands-hacks/elite/': '/products/cs-go/elite/',
    '/products/borderlands-hacks/utilities/': '/products/cs-go/utilities/',
    '/borderlands-cheats/': '/cs-go-cheats/',
    '/borderlands-hacks/': '/cs-go-cheats/',
    '/products/mw4-cheats/': '/products/cs-go/',
    '/products/mw4-cheats/elite/': '/products/cs-go/elite/',
    '/products/mw4-cheats/utilities/': '/products/cs-go/utilities/',
    '/products/mw4-hacks/': '/products/cs-go/',
    '/products/mw4-hacks/elite/': '/products/cs-go/elite/',
    '/products/mw4-hacks/utilities/': '/products/cs-go/utilities/',
    '/mw4-cheats/': '/cs-go-cheats/',
    '/mw4-hacks/': '/cs-go-cheats/',
    '/go/mw4/': '/go/cs-go/',
    '/go/borderlands/': '/go/cs-go/',
    '/go/bodycam/': '/go/cs-go/',
    '/go/fortnite/': '/go/cs-go/',
    '/cheats/': '/products/cs-go/',
    '/cheats/lite/': '/products/cs-go/lite/',
    '/cheats/pro/': '/products/cs-go/pro/',
    '/cheats/elite/': '/products/cs-go/elite/',
    '/cheats/compare/': '/blog/csgo-lite-vs-pro/',
    '/hacks/': '/products/cs-go/',
    '/hacks/lite/': '/products/cs-go/lite/',
    '/hacks/pro/': '/products/cs-go/pro/',
    '/hacks/elite/': '/products/cs-go/elite/',
    '/hacks/compare/': '/blog/csgo-lite-vs-pro/',
    '/products/dota-2-cheats/': '/products/cs-go/',
    '/products/dota-2-cheats/elite/': '/products/cs-go/elite/',
    '/products/dota-2-cheats/utilities/': '/products/cs-go/utilities/',
    '/products/dota-2-hacks/': '/products/cs-go/',
    '/products/dota-2-hacks/elite/': '/products/cs-go/elite/',
    '/products/dota-2-hacks/utilities/': '/products/cs-go/utilities/',
    '/products/fortnite-cheats/': '/products/cs-go/',
    '/products/fortnite-cheats/elite/': '/products/cs-go/elite/',
    '/products/fortnite-cheats/utilities/': '/products/cs-go/utilities/',
    '/products/fortnite-hacks/': '/products/cs-go/',
    '/products/fortnite-hacks/elite/': '/products/cs-go/elite/',
    '/products/fortnite-hacks/utilities/': '/products/cs-go/utilities/',
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
