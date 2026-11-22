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
  ['/cheats', '/products/cs-go/'],
  ['/cheats/', '/products/cs-go/'],
  ['/cheats/lite', '/products/cs-go/lite/'],
  ['/cheats/lite/', '/products/cs-go/lite/'],
  ['/cheats/pro', '/products/cs-go/pro/'],
  ['/cheats/pro/', '/products/cs-go/pro/'],
  ['/cheats/elite', '/products/cs-go/elite/'],
  ['/cheats/elite/', '/products/cs-go/elite/'],
  ['/cheats/compare', '/blog/csgo-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/csgo-lite-vs-pro/'],
  ['/hacks', '/products/cs-go/'],
  ['/hacks/', '/products/cs-go/'],
  ['/hacks/lite', '/products/cs-go/lite/'],
  ['/hacks/lite/', '/products/cs-go/lite/'],
  ['/hacks/pro', '/products/cs-go/pro/'],
  ['/hacks/pro/', '/products/cs-go/pro/'],
  ['/hacks/elite', '/products/cs-go/elite/'],
  ['/hacks/elite/', '/products/cs-go/elite/'],
  ['/hacks/compare', '/blog/csgo-lite-vs-pro/'],
  ['/hacks/compare/', '/blog/csgo-lite-vs-pro/'],
  ['/products/cs-go/utilities', '/products/cs-go/utilities/'],
  ['/products/cs-go-cheats', '/products/cs-go/'],
  ['/products/cs-go-cheats/', '/products/cs-go/'],
  ['/products/cs-go-cheats/lite', '/products/cs-go/lite/'],
  ['/products/cs-go-cheats/lite/', '/products/cs-go/lite/'],
  ['/products/cs-go-cheats/pro', '/products/cs-go/pro/'],
  ['/products/cs-go-cheats/pro/', '/products/cs-go/pro/'],
  ['/products/cs-go-cheats/elite', '/products/cs-go/elite/'],
  ['/products/cs-go-cheats/elite/', '/products/cs-go/elite/'],
  ['/products/cs-go-cheats/hwid-spoofer', '/products/cs-go/hwid-spoofer/'],
  ['/products/cs-go-cheats/hwid-spoofer/', '/products/cs-go/hwid-spoofer/'],
  ['/products/cs-go-cheats/ugc', '/products/cs-go/ugc/'],
  ['/products/cs-go-cheats/ugc/', '/products/cs-go/ugc/'],
  ['/products/cs-go-cheats/unlock-all', '/products/cs-go/unlock-all/'],
  ['/products/cs-go-cheats/unlock-all/', '/products/cs-go/unlock-all/'],
  ['/products/cs-go-cheats/utilities', '/products/cs-go/utilities/'],
  ['/products/cs-go-cheats/utilities/', '/products/cs-go/utilities/'],
  ['/products/cs-go-hacks', '/products/cs-go/'],
  ['/products/cs-go-hacks/', '/products/cs-go/'],
  ['/products/cs-go-hacks/pro', '/products/cs-go/pro/'],
  ['/products/cs-go-hacks/pro/', '/products/cs-go/pro/'],
  ['/products/cs-go-hacks/lite', '/products/cs-go/lite/'],
  ['/products/cs-go-hacks/lite/', '/products/cs-go/lite/'],
  ['/products/cs-go-hacks/elite', '/products/cs-go/elite/'],
  ['/products/cs-go-hacks/elite/', '/products/cs-go/elite/'],
  ['/products/cs-go/account-recovery', '/products/cs-go/ugc/'],
  ['/products/cs-go/account-recovery/', '/products/cs-go/ugc/'],
  ['/products/dota-2-hacks', '/products/cs-go/'],
  ['/products/dota-2-hacks/', '/products/cs-go/'],
  ['/products/dota-2-hacks/elite', '/products/cs-go/elite/'],
  ['/products/dota-2-hacks/elite/', '/products/cs-go/elite/'],
  ['/products/dota-2-hacks/utilities', '/products/cs-go/utilities/'],
  ['/products/dota-2-hacks/utilities/', '/products/cs-go/utilities/'],
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
