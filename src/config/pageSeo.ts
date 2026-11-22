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
    title: 'CSGO Cheats — PC aimbot, ESP & setup guides',
    description:
      'Compare Counter-Strike: Global Offensive PC cheat tiers, read setup guides, and check out secure options — aimbot, player ESP, configs and support at csgo-cheat.org.',
    h1: 'CSGO Cheats',
  },
  '/products/cs-go/': {
    title: 'Counter-Strike: Global Offensive PC cheats — Lite, Pro, Elite & utilities',
    description:
      'Shop Counter-Strike: Global Offensive PC cheats: Lite ESP, Pro aimbot, Elite suite, HWID tools and UGC — compare features and checkout at csgo-cheat.org.',
    h1: 'Counter-Strike: Global Offensive PC cheats — compare tiers and utilities',
  },
  '/products/cs-go/lite/': {
    title: 'CS:GO Lite Cheats | Player ESP, Radar & Loot Timers',
    description:
      'CS:GO Lite cheats for PC — player ESP, bomb-site markers, round timers and radar without aimbot. Stream-proof overlay and competitive presets on csgo-cheat.org.',
  },
  '/products/cs-go/pro/': {
    title: 'CS:GO Pro Cheats | Aimbot, Smooth Aim & Wall ESP',
    description:
      'CS:GO Pro cheats include Lite ESP plus Aimbot, Smooth Aim, Sticky Aim and bone priority — ranked-safe defaults and portal presets for Counter-Strike: Global Offensive on PC.',
  },
  '/products/cs-go/elite/': {
    title: 'Elite CSGO Cheats | Aimbot, ESP & Loot Assist',
    description:
      'Elite tier includes advanced aim, full ESP, economy awareness tools, and priority update notes for Counter-Strike: Global Offensive on PC.',
  },
  '/products/cs-go/hwid-spoofer/': {
    title: 'HWID Spoofer for Counter-Strike: Global Offensive | Hardware Identity Tools',
    description:
      'HWID tools for Counter-Strike: Global Offensive on PC — guided steps for hardware identity resets. Read compatibility and risk notes before you buy at csgo-cheat.org.',
  },
  '/products/cs-go/ugc/': {
    title: 'UGC Tools | Counter-Strike: Global Offensive anti-cheat & platform Ban Appeals',
    description:
      'UGC (Unban & Governance Control) organizes platform and anti-cheat ban appeals, dispute workflows and case tracking for Counter-Strike: Global Offensive players.',
  },
  '/products/cs-go/unlock-all/': {
    title: 'loadout tools — skins, wraps & weapon previews',
    description:
      'Loadout Pack for Counter-Strike: Global Offensive on PC — local cosmetic and weapon previews with your client. Compare scope and checkout at csgo-cheat.org.',
  },
  '/products/cs-go/utilities/': {
    title: 'CS:GO cheat utilities — HWID, UGC & loadout tools',
    description:
      'Utilities hub: HWID tools, platform and anti-cheat appeal workflows (UGC), and player loadout helpers for Counter-Strike: Global Offensive PC — compare before checkout.',
    h1: 'Compare Counter-Strike: Global Offensive utilities — HWID, UGC & loadout tools',
  },
  '/blog/': {
    title: 'Counter-Strike: Global Offensive guides — aimbot, ESP, tiers & patch days',
    description:
      'Guides for Counter-Strike: Global Offensive PC cheats: aimbot and ESP setup, Lite vs Pro, practice mode drills, and what to check after patches and anti-cheat updates.',
    h1: 'CS:GO cheat guides — setup, tiers and patch checks',
  },
  '/forum/': {
    title: 'Counter-Strike: Global Offensive forum — loader, configs & product discussion',
    description:
      'Community threads on loader setup, aim configs, product questions and patch-day checks — backed by guides on csgo-cheat.org.',
    h1: 'Forum — loader help, configs and CS:GO cheat discussion',
  },
  '/faq/': {
    title: 'FAQ — Counter-Strike: Global Offensive tiers, bans, loader & checkout | csgo-cheat.org',
    description:
      'FAQ on Lite, Pro and Elite tiers, aimbot, wall ESP, radar, HWID spoofer, loadout tools, bans and loader setup at csgo-cheat.org.',
    h1: 'FAQ — CSGO Cheats tiers, bans, anti-cheat setup, loader help and checkout',
  },
  '/terms/': {
    title: 'Terms — licenses, delivery, refunds & account risk',
    description:
      'Terms for buying digital Counter-Strike: Global Offensive software on csgo-cheat.org: license use, delivery, refunds, and risks when using third-party tools with platform titles.',
    h1: 'Terms — licenses, delivery, refunds & account risk',
  },
  '/privacy/': {
    title: 'Privacy — analytics, cookies & checkout data',
    description:
      'How csgo-cheat.org uses analytics, cookies, and contact or checkout-related data for support and referrals. Read the full policy before you buy.',
    h1: 'Privacy — analytics, cookies, checkout and contact data',
  },
  '/about/': {
    title: 'About — Counter-Strike: Global Offensive tier guides, loader help & updates',
    description:
      'Who we are: Counter-Strike: Global Offensive PC cheat tier comparisons, setup guides, and support channels at csgo-cheat.org — independent of platform and publishers.',
    h1: 'About — Counter-Strike: Global Offensive tier guides, loader help & updates',
  },
  '/support/': {
    title: 'Support — loader, HWID & checkout help | csgo-cheat.org',
    description:
      'Loader, aim and ESP configs, HWID resets, and checkout help — FAQ and product guides on csgo-cheat.org.',
    h1: 'Support — loader, HWID, checkout & config help',
  },
  '/cs-go-cheats/': {
    title: 'CS:GO cheats hub — PC tiers, features & checkout',
    description:
      'Overview of Counter-Strike: Global Offensive PC cheat tiers, core features, and loader-focused notes. Compare options and checkout at csgo-cheat.org.',
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
  'csgo-radar': {
    title: 'Counter-Strike: Global Offensive radar guide — FOV, spacing & team callouts',
    description:
      'Use radar overlays safely in Counter-Strike: Global Offensive: FOV habits, spacing, and squad callouts for online matches and ranked — guide at csgo-cheat.org.',
  },
  'csgo-stream-proof': {
    title: 'Stream-safe overlays — hiding ESP from OBS & capture',
    description:
      'Test OBS, Game Bar, and capture-card setups so stream viewers do not see overlays — practical checklist for Counter-Strike: Global Offensive creators on csgo-cheat.org.',
  },
  'csgo-aimbot-competitive': {
    title: 'casual matches aimbot — bone priority, prediction & smoothness',
  },
  'csgo-vac-troubleshooting': {
    title: 'anti-cheat errors on Counter-Strike: Global Offensive PC — verify, repair & recovery',
    description:
      'When anti-cheat fails to verify Counter-Strike: Global Offensive on PC: file checks, repairs, reinstall paths, and when account recovery applies — guide at csgo-cheat.org.',
  },
};

/** Optional on-page H1 overrides (blog posts). */
export const BLOG_POST_PAGE_H1: Record<string, string> = {
  'csgo-vac-troubleshooting':
    'What the anti-cheat error means — anti-cheat unable to verify Counter-Strike: Global Offensive (CS:GO cheats)',
  'csgo-stream-proof':
    'Stream-Proof Overlay Setup — hide wall ESP and script overlays from OBS (CS:GO cheats)',
  'csgo-deathmatch-practice': 'Deathmatch practice: aim drills before ranked (CS:GO cheats)',
  'csgo-radar': 'Counter-Strike: Global Offensive radar on PC — FOV habits, spacing and team callouts',
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

/** Layout `<title>` for blog posts; ranked override is used verbatim when under 60 chars. */
export function blogPostLayoutTitle(slug: string, postTitle: string, brand = 'CSGO Cheats'): string {
  const override = BLOG_POST_SEO[slug]?.title;
  if (override && override.length <= 60) return override;
  if (override) return `${override.slice(0, 57).trim()}…`;
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${postTitle}${suffix}`.length <= max) return `${postTitle}${suffix}`;
  const trimmed = postTitle.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}
