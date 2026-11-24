import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';
import { SLUG_REDIRECTS } from './src/config/slug-redirects.mjs';

export default defineConfig({
  site: 'https://cheatseft.org',
  trailingSlash: 'always',
  server: {
    host: true,
    port: 4322,
  },
  redirects: {
    '/products/borderlands-cheats/': '/products/tarkov/',
    '/products/borderlands-cheats/elite/': '/products/tarkov/elite/',
    '/products/borderlands-cheats/utilities/': '/products/tarkov/utilities/',
    '/products/borderlands-hacks/': '/products/tarkov/',
    '/products/borderlands-hacks/elite/': '/products/tarkov/elite/',
    '/products/borderlands-hacks/utilities/': '/products/tarkov/utilities/',
    '/borderlands-cheats/': '/escape-from-tarkov-cheats/',
    '/borderlands-hacks/': '/escape-from-tarkov-cheats/',
    '/products/mw4-cheats/': '/products/tarkov/',
    '/products/mw4-cheats/elite/': '/products/tarkov/elite/',
    '/products/mw4-cheats/utilities/': '/products/tarkov/utilities/',
    '/products/mw4-hacks/': '/products/tarkov/',
    '/products/mw4-hacks/elite/': '/products/tarkov/elite/',
    '/products/mw4-hacks/utilities/': '/products/tarkov/utilities/',
    '/mw4-cheats/': '/escape-from-tarkov-cheats/',
    '/mw4-hacks/': '/escape-from-tarkov-cheats/',
    '/go/mw4/': '/go/tarkov/',
    '/go/borderlands/': '/go/tarkov/',
    '/go/bodycam/': '/go/tarkov/',
    '/go/fortnite/': '/go/tarkov/',
    '/go/cs-go/': '/go/tarkov/',
    '/cs-go-cheats/': '/escape-from-tarkov-cheats/',
    '/products/cs-go/': '/products/tarkov/',
    '/cheats/': '/products/tarkov/',
    '/cheats/lite/': '/products/tarkov/lite/',
    '/cheats/pro/': '/products/tarkov/pro/',
    '/cheats/elite/': '/products/tarkov/elite/',
    '/cheats/compare/': '/blog/tarkov-lite-vs-pro/',
    '/hacks/': '/products/tarkov/',
    '/hacks/lite/': '/products/tarkov/lite/',
    '/hacks/pro/': '/products/tarkov/pro/',
    '/hacks/elite/': '/products/tarkov/elite/',
    '/hacks/compare/': '/blog/tarkov-lite-vs-pro/',
    '/products/dota-2-cheats/': '/products/tarkov/',
    '/products/dota-2-cheats/elite/': '/products/tarkov/elite/',
    '/products/dota-2-cheats/utilities/': '/products/tarkov/utilities/',
    '/products/dota-2-hacks/': '/products/tarkov/',
    '/products/dota-2-hacks/elite/': '/products/tarkov/elite/',
    '/products/dota-2-hacks/utilities/': '/products/tarkov/utilities/',
    '/products/fortnite-cheats/': '/products/tarkov/',
    '/products/fortnite-cheats/elite/': '/products/tarkov/elite/',
    '/products/fortnite-cheats/utilities/': '/products/tarkov/utilities/',
    '/products/fortnite-hacks/': '/products/tarkov/',
    '/products/fortnite-hacks/elite/': '/products/tarkov/elite/',
    '/products/fortnite-hacks/utilities/': '/products/tarkov/utilities/',
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
