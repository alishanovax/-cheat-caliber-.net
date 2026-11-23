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
    title: 'R6 Cheat — PC aimbot, ESP & setup guides',
    description:
      'Compare Rainbow Six Siege PC cheat tiers, read setup guides, and check out secure options — aimbot, operator ESP, configs and support at r6-cheat.com.',
    h1: 'R6 Cheat',
  },
  '/products/r6/': {
    title: 'Rainbow Six Siege PC cheats — Lite, Pro, Elite & utilities',
    description:
      'Shop Rainbow Six Siege PC cheats: Lite ESP, Pro aimbot, Elite suite, HWID tools and UGC — compare features and checkout at r6-cheat.com.',
    h1: 'Rainbow Six Siege PC cheats — compare tiers and utilities',
  },
  '/products/r6/lite/': {
    title: 'R6 Lite Cheats | Player ESP, Radar & Loot Timers',
    description:
      'R6 Lite cheats for PC — operator ESP, bomb-site markers, round timers and radar without aimbot. Stream-proof overlay and competitive presets on r6-cheat.com.',
  },
  '/products/r6/pro/': {
    title: 'R6 Pro Cheats | Aimbot, Smooth Aim & Wall ESP',
    description:
      'R6 Pro cheats include Lite ESP plus Aimbot, Smooth Aim, Sticky Aim and bone priority — ranked-safe defaults and portal presets for Rainbow Six Siege on PC.',
  },
  '/products/r6/elite/': {
    title: 'Elite R6 Cheat | Aimbot, ESP & Loot Assist',
    description:
      'Elite tier includes advanced aim, full ESP, economy awareness tools, and priority update notes for Rainbow Six Siege on PC.',
  },
  '/products/r6/hwid-spoofer/': {
    title: 'HWID Spoofer for Rainbow Six Siege | Hardware Identity Tools',
    description:
      'HWID tools for Rainbow Six Siege on PC — guided steps for hardware identity resets. Read compatibility and risk notes before you buy at r6-cheat.com.',
  },
  '/products/r6/ugc/': {
    title: 'UGC Tools | Rainbow Six Siege anti-cheat & platform Ban Appeals',
    description:
      'UGC (Unban & Governance Control) organizes platform and anti-cheat ban appeals, dispute workflows and case tracking for Rainbow Six Siege players.',
  },
  '/products/r6/unlock-all/': {
    title: 'loadout tools — skins, wraps & weapon previews',
    description:
      'Loadout Pack for Rainbow Six Siege on PC — local cosmetic and weapon previews with your client. Compare scope and checkout at r6-cheat.com.',
  },
  '/products/r6/utilities/': {
    title: 'Rainbow Six Siege cheat utilities — HWID, UGC & loadout tools',
    description:
      'Utilities hub: HWID tools, platform and anti-cheat appeal workflows (UGC), and player loadout helpers for Rainbow Six Siege PC — compare before checkout.',
    h1: 'Compare Rainbow Six Siege utilities — HWID, UGC & loadout tools',
  },
  '/blog/': {
    title: 'Rainbow Six Siege guides — aimbot, ESP, tiers & patch days',
    description:
      'Guides for Rainbow Six Siege PC cheats: aimbot and ESP setup, Lite vs Pro, practice mode drills, and what to check after patches and anti-cheat updates.',
    h1: 'Rainbow Six Siege cheat guides — setup, tiers and patch checks',
  },
  '/forum/': {
    title: 'Rainbow Six Siege forum — loader, configs & product discussion',
    description:
      'Community threads on loader setup, aim configs, product questions and patch-day checks — backed by guides on r6-cheat.com.',
    h1: 'Forum — loader help, configs and Rainbow Six Siege cheat discussion',
  },
  '/faq/': {
    title: 'FAQ — Rainbow Six Siege tiers, bans, loader & checkout | r6-cheat.com',
    description:
      'FAQ on Lite, Pro and Elite tiers, aimbot, wall ESP, radar, HWID spoofer, loadout tools, bans and loader setup at r6-cheat.com.',
    h1: 'FAQ — R6 Cheat tiers, bans, anti-cheat setup, loader help and checkout',
  },
  '/terms/': {
    title: 'Terms — licenses, delivery, refunds & account risk',
    description:
      'Terms for buying digital Rainbow Six Siege software on r6-cheat.com: license use, delivery, refunds, and risks when using third-party tools with platform titles.',
    h1: 'Terms — licenses, delivery, refunds & account risk',
  },
  '/privacy/': {
    title: 'Privacy — analytics, cookies & checkout data',
    description:
      'How r6-cheat.com uses analytics, cookies, and contact or checkout-related data for support and referrals. Read the full policy before you buy.',
    h1: 'Privacy — analytics, cookies, checkout and contact data',
  },
  '/about/': {
    title: 'About — Rainbow Six Siege tier guides, loader help & updates',
    description:
      'Who we are: Rainbow Six Siege PC cheat tier comparisons, setup guides, and support channels at r6-cheat.com — independent of platform and publishers.',
    h1: 'About — Rainbow Six Siege tier guides, loader help & updates',
  },
  '/support/': {
    title: 'Support — loader, HWID & checkout help | r6-cheat.com',
    description:
      'Loader, aim and ESP configs, HWID resets, and checkout help — FAQ and product guides on r6-cheat.com.',
    h1: 'Support — loader, HWID, checkout & config help',
  },
  '/r6-cheats/': {
    title: 'Rainbow Six Siege cheats hub — PC tiers, features & checkout',
    description:
      'Overview of Rainbow Six Siege PC cheat tiers, core features, and loader-focused notes. Compare options and checkout at r6-cheat.com.',
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
    title: 'Rainbow Six Siege radar guide — FOV, spacing & team callouts',
    description:
      'Use radar overlays safely in Rainbow Six Siege: FOV habits, spacing, and squad callouts for online matches and ranked — guide at r6-cheat.com.',
  },
  'r6-stream-proof': {
    title: 'Stream-safe overlays — hiding ESP from OBS & capture',
    description:
      'Test OBS, Game Bar, and capture-card setups so stream viewers do not see overlays — practical checklist for Rainbow Six Siege creators on r6-cheat.com.',
  },
  'r6-aimbot-ranked': {
    title: 'casual matches aimbot — bone priority, prediction & smoothness',
  },
  'battleye-fix': {
    title: 'anti-cheat errors on Rainbow Six Siege PC — verify, repair & recovery',
    description:
      'When anti-cheat fails to verify Rainbow Six Siege on PC: file checks, repairs, reinstall paths, and when account recovery applies — guide at r6-cheat.com.',
  },
};

/** Optional on-page H1 overrides (blog posts). */
export const BLOG_POST_PAGE_H1: Record<string, string> = {
  'battleye-fix':
    'What the anti-cheat error means — anti-cheat unable to verify Rainbow Six Siege (Rainbow Six Siege cheats)',
  'r6-stream-proof':
    'Stream-Proof Overlay Setup — hide wall ESP and script overlays from OBS (Rainbow Six Siege cheats)',
  'r6-training-grounds-practice': 'Training Grounds practice: aim drills before ranked (Rainbow Six Siege cheats)',
  'r6-radar': 'Rainbow Six Siege radar on PC — FOV habits, spacing and team callouts',
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
export function blogPostLayoutTitle(slug: string, postTitle: string, brand = 'R6 Cheat'): string {
  const override = BLOG_POST_SEO[slug]?.title;
  if (override && override.length <= 60) return override;
  if (override) return `${override.slice(0, 57).trim()}…`;
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${postTitle}${suffix}`.length <= max) return `${postTitle}${suffix}`;
  const trimmed = postTitle.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}
