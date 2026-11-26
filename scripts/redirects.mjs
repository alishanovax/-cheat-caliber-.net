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
  ['/cheats', '/products/caliber/'],
  ['/cheats/', '/products/caliber/'],
  ['/cheats/lite', '/products/caliber/lite/'],
  ['/cheats/lite/', '/products/caliber/lite/'],
  ['/cheats/pro', '/products/caliber/pro/'],
  ['/cheats/pro/', '/products/caliber/pro/'],
  ['/cheats/elite', '/products/caliber/elite/'],
  ['/cheats/elite/', '/products/caliber/elite/'],
  ['/cheats/compare', '/blog/caliber-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/caliber-lite-vs-pro/'],
  ['/hacks', '/products/caliber/'],
  ['/hacks/', '/products/caliber/'],
  ['/hacks/lite', '/products/caliber/lite/'],
  ['/hacks/lite/', '/products/caliber/lite/'],
  ['/hacks/pro', '/products/caliber/pro/'],
  ['/hacks/pro/', '/products/caliber/pro/'],
  ['/hacks/elite', '/products/caliber/elite/'],
  ['/hacks/elite/', '/products/caliber/elite/'],
  ['/hacks/compare', '/blog/caliber-lite-vs-pro/'],
  ['/hacks/compare/', '/blog/caliber-lite-vs-pro/'],
  ['/products/caliber/utilities', '/products/caliber/utilities/'],
  ['/products/caliber-cheats', '/products/caliber/'],
  ['/products/caliber/', '/products/caliber/'],
  ['/products/caliber/lite', '/products/caliber/lite/'],
  ['/products/caliber/lite/', '/products/caliber/lite/'],
  ['/products/caliber/pro', '/products/caliber/pro/'],
  ['/products/caliber/pro/', '/products/caliber/pro/'],
  ['/products/caliber/elite', '/products/caliber/elite/'],
  ['/products/caliber/elite/', '/products/caliber/elite/'],
  ['/products/caliber/hwid-spoofer', '/products/caliber/hwid-spoofer/'],
  ['/products/caliber/hwid-spoofer/', '/products/caliber/hwid-spoofer/'],
  ['/products/caliber/ugc', '/products/caliber/ugc/'],
  ['/products/caliber/ugc/', '/products/caliber/ugc/'],
  ['/products/caliber/unlock-all', '/products/caliber/unlock-all/'],
  ['/products/caliber/unlock-all/', '/products/caliber/unlock-all/'],
  ['/products/caliber/utilities', '/products/caliber/utilities/'],
  ['/products/caliber/utilities/', '/products/caliber/utilities/'],
  ['/products/caliber-hacks', '/products/caliber/'],
  ['/products/caliber-hacks/', '/products/caliber/'],
  ['/products/caliber-hacks/pro', '/products/caliber/pro/'],
  ['/products/caliber-hacks/pro/', '/products/caliber/pro/'],
  ['/products/caliber-hacks/lite', '/products/caliber/lite/'],
  ['/products/caliber-hacks/lite/', '/products/caliber/lite/'],
  ['/products/caliber-hacks/elite', '/products/caliber/elite/'],
  ['/products/caliber-hacks/elite/', '/products/caliber/elite/'],
  ['/products/caliber/account-recovery', '/products/caliber/ugc/'],
  ['/products/caliber/account-recovery/', '/products/caliber/ugc/'],
  ['/products/dota-2-hacks', '/products/caliber/'],
  ['/products/dota-2-hacks/', '/products/caliber/'],
  ['/products/dota-2-hacks/elite', '/products/caliber/elite/'],
  ['/products/dota-2-hacks/elite/', '/products/caliber/elite/'],
  ['/products/dota-2-hacks/utilities', '/products/caliber/utilities/'],
  ['/products/dota-2-hacks/utilities/', '/products/caliber/utilities/'],
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
