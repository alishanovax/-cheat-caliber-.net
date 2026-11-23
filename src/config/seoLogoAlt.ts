import { normalizeSeoPath } from './pageSeo';

/** Footer logo alt text matched to each route’s audit keyword (exact phrases). */
const LOGO_ALT_BY_PATH: Record<string, string> = {
  '/products/r6/': 'Marvel Rivals – Rivals Cheat shop logo',
  '/about/': 'Aimbot Esp – logo',
  '/blog/': 'Marvel Rivals guides – logo',
  '/faq/': 'Faq – logo',
  '/forum/': 'Forum – logo',
  '/privacy/': 'Privacy – logo',
  '/support/': 'Support – logo',
  '/terms/': 'Terms – logo',
  '/products/r6/utilities/': 'Utilities – Rivals Cheat logo',
  '/r6-cheats/': 'Rivals Cheat logo',
};

export function footerLogoAltForPath(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  return LOGO_ALT_BY_PATH[path] ?? 'Rivals Cheat logo';
}
