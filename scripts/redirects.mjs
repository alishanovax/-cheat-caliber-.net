import { SLUG_REDIRECTS } from '../src/config/slug-redirects.mjs';

/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/tarkov/'],
  ['/cheats/', '/products/tarkov/'],
  ['/cheats/lite', '/products/tarkov/lite/'],
  ['/cheats/lite/', '/products/tarkov/lite/'],
  ['/cheats/pro', '/products/tarkov/pro/'],
  ['/cheats/pro/', '/products/tarkov/pro/'],
  ['/cheats/elite', '/products/tarkov/elite/'],
  ['/cheats/elite/', '/products/tarkov/elite/'],
  ['/cheats/compare', '/blog/tarkov-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/tarkov-lite-vs-pro/'],
  ['/hacks', '/products/tarkov/'],
  ['/hacks/', '/products/tarkov/'],
  ['/hacks/lite', '/products/tarkov/lite/'],
  ['/hacks/lite/', '/products/tarkov/lite/'],
  ['/hacks/pro', '/products/tarkov/pro/'],
  ['/hacks/pro/', '/products/tarkov/pro/'],
  ['/hacks/elite', '/products/tarkov/elite/'],
  ['/hacks/elite/', '/products/tarkov/elite/'],
  ['/hacks/compare', '/blog/tarkov-lite-vs-pro/'],
  ['/hacks/compare/', '/blog/tarkov-lite-vs-pro/'],
  ['/products/tarkov/utilities', '/products/tarkov/utilities/'],
  ['/products/escape-from-tarkov-cheats', '/products/tarkov/'],
  ['/products/tarkov/', '/products/tarkov/'],
  ['/products/tarkov/lite', '/products/tarkov/lite/'],
  ['/products/tarkov/lite/', '/products/tarkov/lite/'],
  ['/products/tarkov/pro', '/products/tarkov/pro/'],
  ['/products/tarkov/pro/', '/products/tarkov/pro/'],
  ['/products/tarkov/elite', '/products/tarkov/elite/'],
  ['/products/tarkov/elite/', '/products/tarkov/elite/'],
  ['/products/tarkov/hwid-spoofer', '/products/tarkov/hwid-spoofer/'],
  ['/products/tarkov/hwid-spoofer/', '/products/tarkov/hwid-spoofer/'],
  ['/products/tarkov/ugc', '/products/tarkov/ugc/'],
  ['/products/tarkov/ugc/', '/products/tarkov/ugc/'],
  ['/products/tarkov/unlock-all', '/products/tarkov/unlock-all/'],
  ['/products/tarkov/unlock-all/', '/products/tarkov/unlock-all/'],
  ['/products/tarkov/utilities', '/products/tarkov/utilities/'],
  ['/products/tarkov/utilities/', '/products/tarkov/utilities/'],
  ['/products/tarkov-hacks', '/products/tarkov/'],
  ['/products/tarkov-hacks/', '/products/tarkov/'],
  ['/products/tarkov-hacks/pro', '/products/tarkov/pro/'],
  ['/products/tarkov-hacks/pro/', '/products/tarkov/pro/'],
  ['/products/tarkov-hacks/lite', '/products/tarkov/lite/'],
  ['/products/tarkov-hacks/lite/', '/products/tarkov/lite/'],
  ['/products/tarkov-hacks/elite', '/products/tarkov/elite/'],
  ['/products/tarkov-hacks/elite/', '/products/tarkov/elite/'],
  ['/products/tarkov/account-recovery', '/products/tarkov/ugc/'],
  ['/products/tarkov/account-recovery/', '/products/tarkov/ugc/'],
  ['/products/dota-2-hacks', '/products/tarkov/'],
  ['/products/dota-2-hacks/', '/products/tarkov/'],
  ['/products/dota-2-hacks/elite', '/products/tarkov/elite/'],
  ['/products/dota-2-hacks/elite/', '/products/tarkov/elite/'],
  ['/products/dota-2-hacks/utilities', '/products/tarkov/utilities/'],
  ['/products/dota-2-hacks/utilities/', '/products/tarkov/utilities/'],
  ...Object.entries(SLUG_REDIRECTS),
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
