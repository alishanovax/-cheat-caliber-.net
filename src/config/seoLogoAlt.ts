import { normalizeSeoPath } from './pageSeo';

/** Footer logo alt text matched to each route’s audit keyword (exact phrases). */
const LOGO_ALT_BY_PATH: Record<string, string> = {
  '/products/tarkov/': 'Escape from Tarkov – EFT Cheats shop logo',
  '/about/': 'Aimbot Esp – logo',
  '/blog/': 'Escape from Tarkov guides – logo',
  '/faq/': 'Faq – logo',
  '/forum/': 'Forum – logo',
  '/privacy/': 'Privacy – logo',
  '/support/': 'Support – logo',
  '/terms/': 'Terms – logo',
  '/products/tarkov/utilities/': 'Utilities – EFT Cheats logo',
  '/escape-from-tarkov-cheats/': 'EFT Cheats logo',
};

export function footerLogoAltForPath(pathname: string): string {
  const path = normalizeSeoPath(pathname);
  return LOGO_ALT_BY_PATH[path] ?? 'EFT Cheats logo';
}
