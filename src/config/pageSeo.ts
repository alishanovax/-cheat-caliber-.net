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
    title: 'Caliber Cheats — PC aimbot, ESP & setup guides',
    description:
      'Shop Caliber cheats for ESP, aimbot, and advanced gameplay features. Explore available tools and features for Caliber players.',
    h1: 'Caliber Cheats',
  },
  '/products/caliber/': {
    title: 'Caliber PC cheats — Lite, Pro, Elite & utilities',
    description:
      'Shop Caliber PC cheats: Lite ESP, Pro aimbot, Elite suite, HWID tools and UGC — compare features and checkout at cheatcaliber.net.',
    h1: 'Caliber PC cheats — compare tiers and utilities',
  },
  '/products/caliber/lite/': {
    title: 'Lite Cheats | Player ESP, Map & Loot Timers',
    description:
      'Lite cheats for PC — operator ESP, bomb-site markers, round timers and map overlay without aimbot. Stream-proof overlay and competitive presets on cheatcaliber.net.',
  },
  '/products/caliber/pro/': {
    title: 'Pro Cheats | Aimbot, Smooth Aim & Wall ESP',
    description:
      'Pro cheats include Lite ESP plus Aimbot, Smooth Aim, Sticky Aim and bone priority — competitive-safe defaults and portal presets for Caliber on PC.',
  },
  '/products/caliber/elite/': {
    title: 'Elite Caliber Cheats | Aimbot, ESP & Loot Assist',
    description:
      'Elite tier includes advanced aim, full ESP, economy awareness tools, and priority update notes for Caliber on PC.',
  },
  '/products/caliber/hwid-spoofer/': {
    title: 'HWID Spoofer for Caliber | Hardware Identity Tools',
    description:
      'HWID tools for Caliber on PC — guided steps for hardware identity resets. Read compatibility and risk notes before you buy at cheatcaliber.net.',
  },
  '/products/caliber/ugc/': {
    title: 'UGC Tools | Caliber anti-cheat & platform Ban Appeals',
    description:
      'UGC (Unban & Governance Control) organizes platform and anti-cheat ban appeals, dispute workflows and case tracking for Caliber players.',
  },
  '/products/caliber/unlock-all/': {
    title: 'loadout tools — skins, wraps & weapon previews',
    description:
      'Loadout Pack for Caliber on PC — local cosmetic and weapon previews with your client. Compare scope and checkout at cheatcaliber.net.',
  },
  '/products/caliber/utilities/': {
    title: 'Caliber cheat utilities — HWID, UGC & loadout tools',
    description:
      'Utilities hub: HWID tools, platform and anti-cheat appeal workflows (UGC), and player loadout helpers for Caliber PC — compare before checkout.',
    h1: 'Compare Caliber utilities — HWID, UGC & loadout tools',
  },
  '/blog/': {
    title: 'Buy Caliber cheats — compare tiers & checkout | cheatcaliber.net',
    description:
      'Commercial guides to shop Caliber cheats: compare Lite, Pro, and Elite, open secure checkout, and pick aimbot, ESP, and utility tools for Caliber.',
    h1: 'Shop Caliber cheats — tier guides & checkout',
  },
  '/forum/': {
    title: 'Caliber forum — loader, configs & product discussion',
    description:
      'Community threads on loader setup, aim configs, product questions and patch-day checks — backed by guides on cheatcaliber.net.',
    h1: 'Forum — loader help, configs and Caliber cheat discussion',
  },
  '/faq/': {
    title: 'FAQ — Caliber tiers, bans, loader & checkout | cheatcaliber.net',
    description:
      'FAQ on Lite, Pro and Elite tiers, aimbot, wall ESP, map overlay, HWID spoofer, loadout tools, bans and loader setup at cheatcaliber.net.',
    h1: 'FAQ — Caliber Cheats tiers, bans, anti-cheat setup, loader help and checkout',
  },
  '/terms/': {
    title: 'Terms — licenses, delivery, refunds & account risk',
    description:
      'Terms for buying digital Caliber software on cheatcaliber.net: license use, delivery, refunds, and risks when using third-party tools with platform titles.',
    h1: 'Terms — licenses, delivery, refunds & account risk',
  },
  '/privacy/': {
    title: 'Privacy — analytics, cookies & checkout data',
    description:
      'How cheatcaliber.net uses analytics, cookies, and contact or checkout-related data for support and referrals. Read the full policy before you buy.',
    h1: 'Privacy — analytics, cookies, checkout and contact data',
  },
  '/about/': {
    title: 'About — Caliber tier guides, loader help & updates',
    description:
      'Who we are: Caliber PC cheat tier comparisons, setup guides, and support channels at cheatcaliber.net — independent of platform and publishers.',
    h1: 'About — Caliber tier guides, loader help & updates',
  },
  '/support/': {
    title: 'Support — loader, HWID & checkout help | cheatcaliber.net',
    description:
      'Loader, aim and ESP configs, HWID resets, and checkout help — FAQ and product guides on cheatcaliber.net.',
    h1: 'Support — loader, HWID, checkout & config help',
  },
  '/caliber-cheats/': {
    title: 'Caliber cheats hub — PC tiers, features & checkout',
    description:
      'Overview of Caliber PC cheat tiers, core features, and loader-focused notes. Compare options and checkout at cheatcaliber.net.',
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
  'caliber-training-practice': {
    title: 'Buy Caliber cheats — tier advantages | cheatcaliber.net',
    description:
      'Compare Lite, Pro, and Elite cheat advantages—ESP, aimbot, equipment tools—and open secure checkout for Caliber on cheatcaliber.net.',
  },
  'caliber-map-awareness': {
    title: 'Caliber zone map guide — FOV, spacing & team callouts',
    description:
      'Use map overlays safely in Caliber: FOV habits, spacing, and squad callouts for online matches and competitive — guide at cheatcaliber.net.',
  },
  'caliber-stream-proof': {
    title: 'Stream-safe overlays — hiding ESP from OBS & capture',
    description:
      'Test OBS, Game Bar, and capture-card setups so stream viewers do not see overlays — practical checklist for Caliber creators on cheatcaliber.net.',
  },
  'caliber-aimbot-matches': {
    title: 'casual matches aimbot — bone priority, prediction & smoothness',
  },
  'anti-cheat-fix': {
    title: 'anti-cheat errors on Caliber PC — verify, repair & recovery',
    description:
      'When anti-cheat fails to verify Caliber on PC: file checks, repairs, reinstall paths, and when account recovery applies — guide at cheatcaliber.net.',
  },
};

/** Optional on-page H1 overrides (blog posts). */
export const BLOG_POST_PAGE_H1: Record<string, string> = {
  'anti-cheat-fix':
    'What the anti-cheat error means — anti-cheat unable to verify Caliber (Caliber cheats)',
  'caliber-stream-proof':
    'Stream-Proof Overlay Setup — hide wall ESP and script overlays from OBS (Caliber cheats)',
  'caliber-training-practice':
    'Buy Caliber cheats — tier advantages before checkout | cheatcaliber.net',
  'caliber-map-awareness': 'Caliber map overlay on PC — FOV habits, spacing and team callouts',
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
export function blogPostLayoutTitle(slug: string, postTitle: string, brand = 'Caliber Cheats'): string {
  const override = BLOG_POST_SEO[slug]?.title;
  if (override && override.length <= 60) return override;
  if (override) return `${override.slice(0, 57).trim()}…`;
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${postTitle}${suffix}`.length <= max) return `${postTitle}${suffix}`;
  const trimmed = postTitle.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}
