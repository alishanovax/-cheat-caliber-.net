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
    title: 'Rivals Cheat — PC aimbot, ESP & setup guides',
    description:
      'Compare Marvel Rivals PC cheat tiers, read setup guides, and check out secure options — aimbot, hero ESP, configs and support at rivalscheat.net.',
    h1: 'Rivals Cheat',
  },
  '/products/r6/': {
    title: 'Marvel Rivals PC cheats — Lite, Pro, Elite & utilities',
    description:
      'Shop Marvel Rivals PC cheats: Lite ESP, Pro aimbot, Elite suite, HWID tools and UGC — compare features and checkout at rivalscheat.net.',
    h1: 'Marvel Rivals PC cheats — compare tiers and utilities',
  },
  '/products/r6/lite/': {
    title: 'Lite Cheats | Player ESP, Radar & Loot Timers',
    description:
      'Lite cheats for PC — hero ESP, bomb-site markers, round timers and radar without aimbot. Stream-proof overlay and competitive presets on rivalscheat.net.',
  },
  '/products/r6/pro/': {
    title: 'Pro Cheats | Aimbot, Smooth Aim & Wall ESP',
    description:
      'Pro cheats include Lite ESP plus Aimbot, Smooth Aim, Sticky Aim and bone priority — competitive-safe defaults and portal presets for Marvel Rivals on PC.',
  },
  '/products/r6/elite/': {
    title: 'Elite Rivals Cheat | Aimbot, ESP & Loot Assist',
    description:
      'Elite tier includes advanced aim, full ESP, economy awareness tools, and priority update notes for Marvel Rivals on PC.',
  },
  '/products/r6/hwid-spoofer/': {
    title: 'HWID Spoofer for Marvel Rivals | Hardware Identity Tools',
    description:
      'HWID tools for Marvel Rivals on PC — guided steps for hardware identity resets. Read compatibility and risk notes before you buy at rivalscheat.net.',
  },
  '/products/r6/ugc/': {
    title: 'UGC Tools | Marvel Rivals anti-cheat & platform Ban Appeals',
    description:
      'UGC (Unban & Governance Control) organizes platform and anti-cheat ban appeals, dispute workflows and case tracking for Marvel Rivals players.',
  },
  '/products/r6/unlock-all/': {
    title: 'loadout tools — skins, wraps & weapon previews',
    description:
      'Loadout Pack for Marvel Rivals on PC — local cosmetic and weapon previews with your client. Compare scope and checkout at rivalscheat.net.',
  },
  '/products/r6/utilities/': {
    title: 'Marvel Rivals cheat utilities — HWID, UGC & loadout tools',
    description:
      'Utilities hub: HWID tools, platform and anti-cheat appeal workflows (UGC), and player loadout helpers for Marvel Rivals PC — compare before checkout.',
    h1: 'Compare Marvel Rivals utilities — HWID, UGC & loadout tools',
  },
  '/blog/': {
    title: 'Marvel Rivals guides — aimbot, ESP, tiers & patch days',
    description:
      'Guides for Marvel Rivals PC cheats: aimbot and ESP setup, Lite vs Pro, practice mode drills, and what to check after patches and anti-cheat updates.',
    h1: 'Marvel Rivals cheat guides — setup, tiers and patch checks',
  },
  '/forum/': {
    title: 'Marvel Rivals forum — loader, configs & product discussion',
    description:
      'Community threads on loader setup, aim configs, product questions and patch-day checks — backed by guides on rivalscheat.net.',
    h1: 'Forum — loader help, configs and Marvel Rivals cheat discussion',
  },
  '/faq/': {
    title: 'FAQ — Marvel Rivals tiers, bans, loader & checkout | rivalscheat.net',
    description:
      'FAQ on Lite, Pro and Elite tiers, aimbot, wall ESP, radar, HWID spoofer, loadout tools, bans and loader setup at rivalscheat.net.',
    h1: 'FAQ — Rivals Cheat tiers, bans, anti-cheat setup, loader help and checkout',
  },
  '/terms/': {
    title: 'Terms — licenses, delivery, refunds & account risk',
    description:
      'Terms for buying digital Marvel Rivals software on rivalscheat.net: license use, delivery, refunds, and risks when using third-party tools with platform titles.',
    h1: 'Terms — licenses, delivery, refunds & account risk',
  },
  '/privacy/': {
    title: 'Privacy — analytics, cookies & checkout data',
    description:
      'How rivalscheat.net uses analytics, cookies, and contact or checkout-related data for support and referrals. Read the full policy before you buy.',
    h1: 'Privacy — analytics, cookies, checkout and contact data',
  },
  '/about/': {
    title: 'About — Marvel Rivals tier guides, loader help & updates',
    description:
      'Who we are: Marvel Rivals PC cheat tier comparisons, setup guides, and support channels at rivalscheat.net — independent of platform and publishers.',
    h1: 'About — Marvel Rivals tier guides, loader help & updates',
  },
  '/support/': {
    title: 'Support — loader, HWID & checkout help | rivalscheat.net',
    description:
      'Loader, aim and ESP configs, HWID resets, and checkout help — FAQ and product guides on rivalscheat.net.',
    h1: 'Support — loader, HWID, checkout & config help',
  },
  '/r6-cheats/': {
    title: 'Marvel Rivals cheats hub — PC tiers, features & checkout',
    description:
      'Overview of Marvel Rivals PC cheat tiers, core features, and loader-focused notes. Compare options and checkout at rivalscheat.net.',
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
  'r6-radar': {
    title: 'Marvel Rivals radar guide — FOV, spacing & team callouts',
    description:
      'Use radar overlays safely in Marvel Rivals: FOV habits, spacing, and squad callouts for online matches and competitive — guide at rivalscheat.net.',
  },
  'r6-stream-proof': {
    title: 'Stream-safe overlays — hiding ESP from OBS & capture',
    description:
      'Test OBS, Game Bar, and capture-card setups so stream viewers do not see overlays — practical checklist for Marvel Rivals creators on rivalscheat.net.',
  },
  'r6-aimbot-competitive': {
    title: 'casual matches aimbot — bone priority, prediction & smoothness',
  },
  'anti-cheat-fix': {
    title: 'anti-cheat errors on Marvel Rivals PC — verify, repair & recovery',
    description:
      'When anti-cheat fails to verify Marvel Rivals on PC: file checks, repairs, reinstall paths, and when account recovery applies — guide at rivalscheat.net.',
  },
};

/** Optional on-page H1 overrides (blog posts). */
export const BLOG_POST_PAGE_H1: Record<string, string> = {
  'anti-cheat-fix':
    'What the anti-cheat error means — anti-cheat unable to verify Marvel Rivals (Marvel Rivals cheats)',
  'r6-stream-proof':
    'Stream-Proof Overlay Setup — hide wall ESP and script overlays from OBS (Marvel Rivals cheats)',
  'r6-training-grounds-practice': 'Practice practice: aim drills before competitive (Marvel Rivals cheats)',
  'r6-radar': 'Marvel Rivals radar on PC — FOV habits, spacing and team callouts',
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
export function blogPostLayoutTitle(slug: string, postTitle: string, brand = 'Rivals Cheat'): string {
  const override = BLOG_POST_SEO[slug]?.title;
  if (override && override.length <= 60) return override;
  if (override) return `${override.slice(0, 57).trim()}…`;
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${postTitle}${suffix}`.length <= max) return `${postTitle}${suffix}`;
  const trimmed = postTitle.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}
