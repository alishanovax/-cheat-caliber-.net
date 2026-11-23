import { normalizeSeoPath } from './pageSeo';

/** Footer logo alt text matched to each route’s audit keyword (exact phrases). */
const LOGO_ALT_BY_PATH: Record<string, string> = {
  '/products/r6/': 'Rainbow Six Siege – R6 Cheat shop logo',
  '/about/': 'Aimbot Esp – logo',
  '/blog/': 'Rainbow Six Siege guides – logo',
  '/faq/': 'Faq – logo',
  '/forum/': 'Forum – logo',
  '/privacy/': 'Privacy – logo',
  '/support/': 'Support – logo',
  '/terms/': 'Terms – logo',
  '/products/r6/utilities/': 'Utilities – R6 Cheat logo',
  '/r6-cheats/': 'R6 Cheat logo',
};

export function footerLogoAltForPath(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  return LOGO_ALT_BY_PATH[path] ?? 'R6 Cheat logo';
}
