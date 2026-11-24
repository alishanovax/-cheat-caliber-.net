/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
  /** Optional on-page H1 override (SEO-only routes). */
  h1?: string;
  /** Optional second H1 line (homepage hero accent). */
  h1Accent?: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'EFT Cheats — PC aimbot, ESP & setup guides',
    description:
      'Compare Escape from Tarkov PC cheat tiers, read setup guides, and check out secure options — aimbot, PMC and scav ESP, configs and support at cheatseft.org.',
    h1: 'EFT Cheats',
  },
  '/products/tarkov/': {
    title: 'Escape from Tarkov PC cheats — Lite, Pro, Elite & utilities',
    description:
      'Shop Escape from Tarkov PC cheats: Lite ESP, Pro aimbot, Elite suite, HWID tools and UGC — compare features and checkout at cheatseft.org.',
    h1: 'Escape from Tarkov PC cheats — compare tiers and utilities',
  },
  '/products/tarkov/lite/': {
    title: 'Lite Cheats | Player ESP, Radar & Loot Timers',
    description:
      'Lite cheats for PC — PMC and scav ESP, bomb-site markers, round timers and radar without aimbot. Stream-proof overlay and competitive presets on cheatseft.org.',
  },
  '/products/tarkov/pro/': {
    title: 'Pro Cheats | Aimbot, Smooth Aim & Wall ESP',
    description:
      'Pro cheats include Lite ESP plus Aimbot, Smooth Aim, Sticky Aim and bone priority — competitive-safe defaults and portal presets for Escape from Tarkov on PC.',
  },
  '/products/tarkov/elite/': {
    title: 'Elite EFT Cheats | Aimbot, ESP & Loot Assist',
    description:
      'Elite tier includes advanced aim, full ESP, economy awareness tools, and priority update notes for Escape from Tarkov on PC.',
  },
  '/products/tarkov/hwid-spoofer/': {
    title: 'HWID Spoofer for Escape from Tarkov | Hardware Identity Tools',
    description:
      'HWID tools for Escape from Tarkov on PC — guided steps for hardware identity resets. Read compatibility and risk notes before you buy at cheatseft.org.',
  },
  '/products/tarkov/ugc/': {
    title: 'UGC Tools | Escape from Tarkov anti-cheat & platform Ban Appeals',
    description:
      'UGC (Unban & Governance Control) organizes platform and anti-cheat ban appeals, dispute workflows and case tracking for Escape from Tarkov players.',
  },
  '/products/tarkov/unlock-all/': {
    title: 'loadout tools — skins, wraps & weapon previews',
    description:
      'Loadout Pack for Escape from Tarkov on PC — local cosmetic and weapon previews with your client. Compare scope and checkout at cheatseft.org.',
  },
  '/products/tarkov/utilities/': {
    title: 'Escape from Tarkov cheat utilities — HWID, UGC & loadout tools',
    description:
      'Utilities hub: HWID tools, platform and anti-cheat appeal workflows (UGC), and player loadout helpers for Escape from Tarkov PC — compare before checkout.',
    h1: 'Compare Escape from Tarkov utilities — HWID, UGC & loadout tools',
  },
  '/blog/': {
    title: 'Escape from Tarkov guides — aimbot, ESP, tiers & patch days',
    description:
      'Guides for Escape from Tarkov PC cheats: aimbot and ESP setup, Lite vs Pro, practice mode drills, and what to check after patches and anti-cheat updates.',
    h1: 'Escape from Tarkov cheat guides — setup, tiers and patch checks',
  },
  '/forum/': {
    title: 'Escape from Tarkov forum — loader, configs & product discussion',
    description:
      'Community threads on loader setup, aim configs, product questions and patch-day checks — backed by guides on cheatseft.org.',
    h1: 'Forum — loader help, configs and Escape from Tarkov cheat discussion',
  },
  '/faq/': {
    title: 'FAQ — Escape from Tarkov tiers, bans, loader & checkout | cheatseft.org',
    description:
      'FAQ on Lite, Pro and Elite tiers, aimbot, wall ESP, radar, HWID spoofer, loadout tools, bans and loader setup at cheatseft.org.',
    h1: 'FAQ — EFT Cheats tiers, bans, anti-cheat setup, loader help and checkout',
  },
  '/terms/': {
    title: 'Terms — licenses, delivery, refunds & account risk',
    description:
      'Terms for buying digital Escape from Tarkov software on cheatseft.org: license use, delivery, refunds, and risks when using third-party tools with platform titles.',
    h1: 'Terms — licenses, delivery, refunds & account risk',
  },
  '/privacy/': {
    title: 'Privacy — analytics, cookies & checkout data',
    description:
      'How cheatseft.org uses analytics, cookies, and contact or checkout-related data for support and referrals. Read the full policy before you buy.',
    h1: 'Privacy — analytics, cookies, checkout and contact data',
  },
  '/about/': {
    title: 'About — Escape from Tarkov tier guides, loader help & updates',
    description:
      'Who we are: Escape from Tarkov PC cheat tier comparisons, setup guides, and support channels at cheatseft.org — independent of platform and publishers.',
    h1: 'About — Escape from Tarkov tier guides, loader help & updates',
  },
  '/support/': {
    title: 'Support — loader, HWID & checkout help | cheatseft.org',
    description:
      'Loader, aim and ESP configs, HWID resets, and checkout help — FAQ and product guides on cheatseft.org.',
    h1: 'Support — loader, HWID, checkout & config help',
  },
  '/escape-from-tarkov-cheats/': {
    title: 'Escape from Tarkov cheats hub — PC tiers, features & checkout',
    description:
      'Overview of Escape from Tarkov PC cheat tiers, core features, and loader-focused notes. Compare options and checkout at cheatseft.org.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}

/** Blog post `<title>` / meta description overrides (exact audit phrases). */
export const BLOG_POST_SEO: Record<string, Partial<PageSeoEntry>> = {
  'tarkov-radar': {
    title: 'Escape from Tarkov radar guide — FOV, spacing & team callouts',
    description:
      'Use radar overlays safely in Escape from Tarkov: FOV habits, spacing, and squad callouts for online matches and competitive — guide at cheatseft.org.',
  },
  'tarkov-stream-proof': {
    title: 'Stream-safe overlays — hiding ESP from OBS & capture',
    description:
      'Test OBS, Game Bar, and capture-card setups so stream viewers do not see overlays — practical checklist for Escape from Tarkov creators on cheatseft.org.',
  },
  'tarkov-aimbot-raids': {
    title: 'casual matches aimbot — bone priority, prediction & smoothness',
  },
  'anti-cheat-fix': {
    title: 'anti-cheat errors on Escape from Tarkov PC — verify, repair & recovery',
    description:
      'When anti-cheat fails to verify Escape from Tarkov on PC: file checks, repairs, reinstall paths, and when account recovery applies — guide at cheatseft.org.',
  },
};

/** Optional on-page H1 overrides (blog posts). */
export const BLOG_POST_PAGE_H1: Record<string, string> = {
  'anti-cheat-fix':
    'What the anti-cheat error means — anti-cheat unable to verify Escape from Tarkov (Escape from Tarkov cheats)',
  'tarkov-stream-proof':
    'Stream-Proof Overlay Setup — hide wall ESP and script overlays from OBS (Escape from Tarkov cheats)',
  'tarkov-offline-practice': 'Practice practice: aim drills before competitive (Escape from Tarkov cheats)',
  'tarkov-radar': 'Escape from Tarkov radar on PC — FOV habits, spacing and team callouts',
};

export function getBlogPostSeo(slug: string, fallback: PageSeoEntry): PageSeoEntry {
  const override = BLOG_POST_SEO[slug];
  if (!override) return fallback;
  return {
    title: override.title ?? fallback.title,
    description: override.description ?? fallback.description,
  };
}

export function blogPostPageH1(slug: string, postTitle: string): string {
  return BLOG_POST_PAGE_H1[slug] ?? postTitle;
}

/** Layout `<title>` for blog posts; competitive override is used verbatim when under 60 chars. */
export function blogPostLayoutTitle(slug: string, postTitle: string, brand = 'EFT Cheats'): string {
  const override = BLOG_POST_SEO[slug]?.title;
  if (override && override.length <= 60) return override;
  if (override) return `${override.slice(0, 57).trim()}…`;
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${postTitle}${suffix}`.length <= max) return `${postTitle}${suffix}`;
  const trimmed = postTitle.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}
