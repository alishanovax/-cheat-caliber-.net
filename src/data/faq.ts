import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

function expandFaqAnswer(answer: string, faqId: string): string {
  if (!answer.includes('{{')) return answer;
  const slots: Record<string, string> = {
    ELITE: link(`Elite tier checkout (${faqId})`, productPath('elite')),
    LITE: link(`Lite ESP tier (${faqId})`, productPath('lite')),
    PRO: link(`Pro aimbot tier (${faqId})`, productPath('pro')),
    PRODUCTS_HUB: link(`Full Escape from Tarkov catalog (${faqId})`, ROUTES.products),
    HWID: link(`HWID spoofer utility — ${faqId}`, productPath('hwid-spoofer')),
    UGC: link(`UGC appeal tools — ${faqId}`, productPath('ugc')),
    SKIN: link(`loadout tools pack — ${faqId}`, productPath('unlock-all')),
    FAQ_PAGE: link(`Full FAQ index — ${faqId}`, ROUTES.faq),
    BLOG: link(`Escape from Tarkov blog guides — ${faqId}`, ROUTES.blog),
  };
  return Object.entries(slots).reduce(
    (text, [key, html]) => text.replaceAll(`{{${key}}}`, html),
    answer,
  );
}

function withExpandedAnswers(items: SiteFaqItem[]): SiteFaqItem[] {
  return items.map((item) => ({ ...item, a: expandFaqAnswer(item.a, item.id) }));
}

const rawSiteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if Escape from Tarkov cheats are online?',
    a: a('The live status banner is on cheatseft.org. Always check after a Escape from Tarkov or anti-cheat update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Escape from Tarkov.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party Escape from Tarkov cheats?',
    a: a('Yes—any modification carries risk. anti-cheat and report systems evolve. Read current status and accept the risk before use.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Escape from Tarkov via the EA app or Ubisoft Connect on Windows 10/11 64-bit only. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes—use the HWID reset in your portal. See the FAQ for tier-specific HWID limits.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `{{PRODUCTS_HUB}} lists cheat tiers, {{HWID}}, {{UGC}}, and {{SKIN}} with feature lists and checkout via our partner.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is Escape from Tarkov wall ESP / ESP?',
    a: `wall ESP and PMC and scav ESP show enemy positions, chests, loot and POI camps through storm circle. {{LITE}} covers awareness overlays. {{PRO}} and {{ELITE}} add script modules on top.`,
    scopes: ['lite', 'pro', 'elite'],
  },
  {
    id: 'esp-vs-scripts',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between wall ESP and aimbot?',
    a: `wall ESP and ESP are information overlays—they do not cast abilities. Aimbot, Smooth Aim and Sticky Aim are aimbot on {{PRO}} and {{ELITE}}. You can run awareness-only on {{LITE}}.`,
  },
  {
    id: 'which-tier-esp',
    topic: 'plans',
    icon: 'faqWhichTierEsp',
    q: 'Which tier do I need for wall ESP only?',
    a: `{{LITE}} is awareness only: PMC and scav ESP, chest locator, loot timers and map overlay. {{PRO}} adds aimbot. {{ELITE}} adds bots, kill steal and loadout tools.`,
    scopes: ['lite'],
  },
  {
    id: 'which-tier-scripts',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'Which tier includes Aimbot?',
    a: `{{PRO}} ships Aimbot, Smooth Aim, Sticky Aim and Hotkey macros. {{ELITE}} includes everything in Pro plus Loot Assist and Triggerbot. {{LITE}} has no aimbot automation.`,
    scopes: ['pro'],
  },
  {
    id: 'rank-lite-vs-pro',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'How do you rank Lite vs Pro vs Elite?',
    a: `Map awareness only → {{LITE}}. casual matches gunfights with aimbot → {{PRO}}. Full bot suite and priority patches → {{ELITE}}. Compare on each cheat page or the {{FAQ_PAGE}}.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why is Elite limited slots?',
    a: `Elite is a private build with direct dev support and priority patch delivery. Slot caps keep patch cycles fast. Check the status banner before checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on {{LITE}}, {{PRO}} and {{ELITE}} hides overlays from OBS and screen share tools. Test a local recording before going live.`,
  },
  {
    id: 'undetected',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Are undetected Escape from Tarkov cheats guaranteed?',
    a: a('No. Undetected is current status on the product page—not a permanent guarantee. Stop if the build shows updating, testing, or detected.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is wall ESP safer than aimbot?',
    a: a('ESP is quieter in replay than obvious bot patterns, but it is still a cheat. anti-cheat does not ignore overlays because you left aimbot off.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When do I need the HWID Spoofer?',
    a: `Use {{HWID}} when fresh platform accounts fail instantly on one PC but work elsewhere—hardware enforcement. Not for account-only anti-cheat cases; see {{UGC}} instead.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'faqUgcWhat',
    q: 'What is UGC?',
    a: `{{UGC}} (Unban & Governance Control) is an appeal workspace for platform account restrictions and anti-cheat bans—custom workflows and case tracking, not a guaranteed unban service.`,
    scopes: ['ugc'],
  },
  {
    id: 'skin-changer',
    topic: 'products',
    icon: 'faqSkinChanger',
    q: 'Does loadout tools modify my in-game inventory?',
    a: `{{SKIN}} previews cosmetics locally on your client. Other players see your real inventory. Included with {{ELITE}}; available standalone for cosmetic preview only.`,
    scopes: ['unlock-all'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the game folder?',
    a: `EFT Cheats runs external with cloud config sync—no files injected into the Escape from Tarkov directory. anti-cheat risk still applies. See {{PRODUCTS_HUB}}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are blog cheat codes the same as competitive cheats?',
    a: `No. Blog guides about Steam console commands apply only in custom lobbies with cheats enabled. casual matches Escape from Tarkov cheats are separate products—see {{LITE}}, {{PRO}} and {{ELITE}}.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to tier pages and {{PRODUCTS_HUB}}. Checkout runs through our secure partner—never paste loader files from unsolicited messages.`,
  },
  {
    id: 'compare-plans',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Where do I compare plans side by side?',
    a: `Each cheat tier page includes a compare table. The {{FAQ_PAGE}} collects product, cheat and blog answers in one place.`,
  },
  {
    id: 'who-lite',
    topic: 'plans',
    icon: 'faqWhoLite',
    q: 'Who should stay on Lite?',
    a: `Players who only want map awareness—ESP, chests, loot—and will not touch aimbot automation. If you keep enabling combo aimbot, buy {{PRO}} instead.`,
    scopes: ['lite'],
  },
  {
    id: 'who-pro',
    topic: 'plans',
    icon: 'faqWhoPro',
    q: 'Who should buy Pro?',
    a: `casual matches players who want Aimbot, Smooth Aim and Hotkey macros with wall ESP included. Pro is the most popular tier at cheatseft.org.`,
    scopes: ['pro'],
  },
  {
    id: 'who-elite',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy Elite?',
    a: `Operators who want Loot Assist, Triggerbot, loadout tools and priority patch delivery when slots are open.`,
    scopes: ['elite'],
  },
  {
    id: 'eac-update',
    topic: 'safety',
    icon: 'faqEacUpdate',
    q: 'What should I do after a anti-cheat update?',
    a: a('Check cheatseft.org status. Do not launch until the banner shows online. Load conservative presets after any patch.'),
  },
  {
    id: 'install-help',
    topic: 'setup',
    icon: 'faqDiscordHelp',
    q: 'How do I get install help?',
    a: a('After purchase, follow the portal setup guide with your order email, Windows version and Escape from Tarkov client build. The FAQ covers common loader errors.'),
  },
  {
    id: 'zero-build-competitive',
    topic: 'plans',
    icon: 'faqZoomRaids',
    q: 'Do tiers work in Player and casual matches?',
    a: `Yes—{{LITE}}, {{PRO}} and {{ELITE}} include Player and casual raid presets in the portal. Tune distance caps and script delay before your first raid.`,
  },
  {
    id: 'zoom-cheat',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Which tier includes map overlay?',
    a: `Map overlay ships on {{LITE}} and carries through {{PRO}} and {{ELITE}}. Mini-map helps zone awareness without guessing rotates.`,
    scopes: ['lite'],
  },
  {
    id: 'auto-farm',
    topic: 'scripts',
    icon: 'faqAutoFarm',
    q: 'Which tier includes Loot Assist?',
    a: `Loot Assist, Rotation Assist AI and Auto loadout manager are {{ELITE}} only. {{PRO}} covers combat aimbot without bot farming.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private Escape from Tarkov cheats?',
    a: a('Private means per-user keys and maintained builds—not public zip packs. EFT Cheats ships portal delivery for ESP, aimbot and wall ESP tiers.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the {{FAQ_PAGE}} for all product, cheat and blog answers—or read {{BLOG}} for deep guides.`,
  },
];

export const siteFaqs: SiteFaqItem[] = withExpandedAnswers(rawSiteFaqs);

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Escape from Tarkov cheats FAQ',
  subtitle: 'Filter by cheat plans, wall ESP, aimbot, products, setup and guides.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'Cheat FAQ',
  title: 'Escape from Tarkov cheats questions',
  subtitle: 'Straight answers on aimbot, ESP, bans and setup — see the full FAQ for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) =>
      !f.scopes &&
      ['setup', 'safety', 'plans', 'esp', 'scripts'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const tierCompare = siteFaqs.filter((f) =>
    ['rank-lite-vs-pro', 'compare-plans', 'undetected', 'eac-update'].includes(f.id),
  );

  const combined =
    kind === 'tier'
      ? [...scoped, ...tierCompare, ...general.slice(0, 8)]
      : [...scoped, ...general.slice(0, 6)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Should I use console cheat codes in competitive?',
      a: a('No. practice mode lobby cheat codes only work in custom games with cheats enabled. casual matches requires separate Escape from Tarkov cheats from cheatseft.org tiers.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which tier matches this guide?',
      a: `Awareness guides → {{LITE}}. Script and combo guides → {{PRO}}. Bot and kill-steal topics → {{ELITE}}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the guide date and the live status banner. Patch-day guides note when modules change.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your customer portal after checkout—not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test in a lobby first?',
      a: a('Yes. Load conservative presets in a lobby or casual matches before competitive. Tune script delay and ESP distance caps over several sessions.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-eac',
      topic: 'blog',
      icon: 'faqBlogSecEac',
      q: 'Does this guide guarantee undetected status?',
      a: a('No guide replaces the live status banner. Undetected is a point-in-time label—stop if status shows updating or detected.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Guides explain workflows and link to {{LITE}}, {{PRO}}, {{ELITE}} and {{PRODUCTS_HUB}}. Feature lists on product pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Cross-check the guide with the FAQ and portal guides. Note your Windows version and any loader error text before you change configs.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this guide work next patch?',
    a: a('Re-check status after every Escape from Tarkov update. Portal presets update with patch notes—reload configs instead of copying old sliders.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('map-cheat') || slug.includes('esp') || slug.includes('ward')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which tier covers wall ESP from this guide?',
      a: `{{LITE}} includes PMC and scav ESP, chest locator and loot timers. {{PRO}} adds combat aimbot on the same overlay stack.`,
    });
  }
  if (slug.includes('script') || slug.includes('combo') || slug.includes('auto-combo')) {
    slugHints.push({
      id: 'blog-slug-scripts',
      topic: 'scripts',
      icon: 'faqBlogSlugScripts',
      q: 'Which tier includes the aimbot in this guide?',
      a: `{{PRO}} and {{ELITE}} ship Aimbot and related modules. {{LITE}} is wall ESP only.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('eac')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this guide replace HWID or UGC products?',
      a: `Recovery guides complement {{HWID}} and {{UGC}}—read product pages for workflow scope and realistic outcomes.`,
    });
  }

  return withExpandedAnswers([...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8));
}

export const compareRows = [
  { feature: 'Player ESP & player boxes', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Chest & loot locator', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Loot spawn timers', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'Map overlay', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Streamproof overlay', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Mini wall ESP overlay', icon: 'compareMapHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Aimbot', icon: 'compareAutoCombo' as const, lite: false, pro: true, elite: true },
  { feature: 'Smooth Aim & Sticky Aim', icon: 'compareSmoothAim' as const, lite: false, pro: true, elite: true },
  { feature: 'Bone Priority', icon: 'compareTargetSelector' as const, lite: false, pro: true, elite: true },
  { feature: 'Hotkey macros (heals/shields)', icon: 'compareHotkeyMacros' as const, lite: false, pro: true, elite: true },
  { feature: 'FOV radius drawing', icon: 'compareAbilityRadius' as const, lite: false, pro: true, elite: true },
  { feature: 'Smoke alert integration', icon: 'compareSmokeAlert' as const, lite: false, pro: true, elite: true },
  { feature: 'Loot Assist', icon: 'compareAutoFarm' as const, lite: false, pro: false, elite: true },
  { feature: 'Triggerbot', icon: 'compareAutoKillSteal' as const, lite: false, pro: false, elite: true },
  { feature: 'Recoil control', icon: 'compareAutoShieldBreak' as const, lite: false, pro: false, elite: true },
  { feature: 'Full wall ESP suite', icon: 'compareFullMapHack' as const, lite: false, pro: false, elite: true },
  { feature: 'loadout tools (Loadout Pack)', icon: 'compareSkinChanger' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority patch queue', icon: 'comparePriorityPatch' as const, lite: false, pro: false, elite: true },
  { feature: 'Priority setup guides', icon: 'compareDevSupport' as const, lite: false, pro: false, elite: true },
  { feature: 'Cloud config backup', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
