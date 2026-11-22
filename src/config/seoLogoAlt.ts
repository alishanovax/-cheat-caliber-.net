import { normalizeSeoPath } from './pageSeo';

/** Footer logo alt text matched to each route’s audit keyword (exact phrases). */
const LOGO_ALT_BY_PATH: Record<string, string> = {
  '/products/cs-go/': 'Counter-Strike: Global Offensive – CSGO Cheats shop logo',
  '/about/': 'Aimbot Esp – logo',
  '/blog/': 'Counter-Strike: Global Offensive guides – logo',
  '/faq/': 'Faq – logo',
  '/forum/': 'Forum – logo',
  '/privacy/': 'Privacy – logo',
  '/support/': 'Support – logo',
  '/terms/': 'Terms – logo',
  '/products/cs-go/utilities/': 'Utilities – CSGO Cheats logo',
  '/cs-go-cheats/': 'CSGO Cheats logo',
};

export function footerLogoAltForPath(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  return LOGO_ALT_BY_PATH[path] ?? 'CSGO Cheats logo';
}
