import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import { PRODUCT_GALLERY_IMAGES, SITE_CHEAT_IMAGES } from '../config/siteImages';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['caliber-esp-setup', 'caliber-lite-vs-pro', 'caliber-map-awareness', 'anti-cheat-patch'],
  pro: [
    'caliber-aimbot-matches',
    'caliber-aimbot-combat',
    'caliber-lite-vs-pro',
    'caliber-stream-proof',
  ],
  elite: [
    'caliber-elite-tier',
    'caliber-cheat-features',
    'caliber-esp-setup',
    'anti-cheat-patch',
    'buy-caliber-cheats',
  ],
  'hwid-spoofer': [
    'caliber-hwid-ban',
    'anti-cheat-fix',
    'anti-cheat-patch',
    'caliber-external-loader',
  ],
  ugc: [
    'anti-cheat-fix',
    'caliber-hwid-ban',
    'buy-caliber-cheats',
  ],
  'unlock-all': [
    'caliber-loadouts',
    'caliber-cheat-features',
    'caliber-stream-proof',
  ],
};

const productBase = '/products/caliber/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on cheatcaliber.net before purchase—especially after a Caliber or anti-cheat update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite Caliber cheats or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Confirm availability on the status banner, PC platform, and payment details with your order email ready at checkout.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the customer portal, patch loader, and setup guide. Test in a lobby, load presets, then queue competitive or online raids.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Caliber and anti-cheat receive frequent updates. Confirm module availability on the live status panel at cheatcaliber.net before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in Caliber can violate the game terms of service and lead to anti-cheat action. You use this software at your own risk. Compatibility and availability can change after game, anti-cheat, or Windows updates without notice.';

const r6SystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or Windows 11 (64-bit) with HVCI, Core Isolation, TPM and Secure Boot enabled.' },
  { icon: 'reqEpic', text: 'Current PC build of Caliber with the latest patches applied.' },
  { icon: 'reqSettings', text: 'Cloud DMA access for full functionality on supported builds.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and loader updates.' },
  { icon: 'reqCpu', text: 'Intel or AMD system that meets Caliber hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const galleryRaw = {
  gpAimbotEsp: {
    src: SITE_CHEAT_IMAGES[0].src,
    alt: SITE_CHEAT_IMAGES[0].alt,
    caption: 'Soft aim & ESP',
    captionDesc: 'Caliber trainer overlays tuned for PC gunfights.',
  },
  gpEspWallhack: {
    src: SITE_CHEAT_IMAGES[1].src,
    alt: SITE_CHEAT_IMAGES[1].alt,
    caption: 'Enemy ESP',
    captionDesc: 'Player ESP with health, health and distance in Caliber multiplayer.',
  },
  gpGameplay: {
    src: SITE_CHEAT_IMAGES[2].src,
    alt: SITE_CHEAT_IMAGES[2].alt,
    caption: 'Caliber co-op',
    captionDesc: 'Tactical shooter action on PC with trainer-friendly overlays.',
  },
  gpEspIndoor: {
    src: SITE_CHEAT_IMAGES[3].src,
    alt: SITE_CHEAT_IMAGES[3].alt,
    caption: 'Caliber raid combat',
    captionDesc: 'Cel-shaded Caliber combat in a twilight outpost.',
  },
  gpCourtyard: {
    src: SITE_CHEAT_IMAGES[0]!.src,
    alt: SITE_CHEAT_IMAGES[0]!.alt,
    caption: 'Caliber firefight',
    captionDesc: 'Caliber combat screenshot from approved media library.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

const productDetailGalleryCaptions = [
  { caption: 'Updates & anti-cheat', captionDesc: 'Stay aligned with Caliber patch and security news.' },
  { caption: 'Multiplayer gameplay', captionDesc: 'In-match view on a compact map with full HUD.' },
  { caption: 'Offline perspective', captionDesc: 'First-person raid with HUD and equipment ESP.' },
] as const;

function productDetailGallery(): ProductSlide[] {
  return PRODUCT_GALLERY_IMAGES.map((img, i) => {
    const meta = productDetailGalleryCaptions[i] ?? productDetailGalleryCaptions[0]!;
    return {
      src: img.src,
      alt: img.alt,
      caption: meta.caption,
      captionDesc: meta.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'r6';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'Lite is built for players who want map awareness first. In competitive, knowing enemy positions, chest locations and loot timings wins more fights than raw mechanics—Lite gives you that edge without aimbot automation.',
    },
    { type: 'h2', text: 'online raids-safe by design' },
    {
      type: 'p',
      text: 'Lite skips Aimbot and bot modules entirely. Your gameplay looks natural while ESP, map overlay and loot timers keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'Pro is the sweet spot for competitive grinders. Aimbot, Smooth Aim and Sticky Aim help you win squad fights without obvious bot patterns—when you tune Smoothness sliders using our portal presets.',
    },
    { type: 'h2', text: 'Aimbot + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds Aimbot, Bone Priority, Hotkey macros and FOV and smoothness drawing. You see the fight before it starts and win it with aimbot that stay human at default settings.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'Elite is the private build for players who want everything—Loot Assist, Triggerbot, Recoil control, loadout tools, full wall ESP and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in lobbies, start with portal conservative presets, and scale up over days—not minutes. Use the portal guides before your first PvP raid.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and name tags, chest and reboot-van locator, loot spawn timers, map overlay, and stream-safe overlay hiding. Config presets for online raids and online raids ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Aimbot and automation' },
    {
      type: 'p',
      text: 'Aimbot, Smooth Aim, Sticky Aim with Prediction, Bone Priority and hotkey macros for heals and mobility. Smoothness sliders tunes cast timing so aimbot stay natural in competitive. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at cheatcaliber.net—enough firepower for high-rank lobbies without Elite slot limits. Pair with our aimbot guide in the blog before your first competitive session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full bot and finish suite' },
    {
      type: 'p',
      text: 'Loot Assist, Rotation Assist AI, Triggerbot, Recoil control, loadout tools and full wall ESP with smoke alerts. Use lobby testing before competitive—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Check the FAQ if checkout is gated before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh platform accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only anti-cheat cases; see [UGC](/products/caliber/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before competitive. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for platform account restrictions, anti-cheat bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some anti-cheat bans cannot be reversed. UGC organizes evidence and follow-ups for platform review. Pair with [HWID Spoofer](/products/caliber/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players in your lobby see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'loadout tools ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: productDetailGallery(),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: r6SystemRequirements,
    fullFeatures: [
      'Player ESP & player boxes',
      'Chest & loot locator',
      'POI awareness',
      'Health & shield tracking',
      'Mini-map overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team color filter',
      'Loot spawn timers',
      'Map overlay',
      'online raids preset config',
      'online raids preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Lite: ESP and map overlay',
      paragraphs: [
        'Lite is for operator ESP, chest markers, loot timers and map overlay. No aimbot. Set distance, colors and stream-proof in the portal before you queue.',
        'Best if you want awareness in online raids and online raids without combat automation. Overlays are updated after Caliber patches.',
      ],
    },
  },
  pro: {
    images: productDetailGallery(),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: r6SystemRequirements,
    fullFeatures: [
      'All Lite ESP & wall ESP modules',
      'Aimbot',
      'Smooth Aim',
      'Sticky Aim & Prediction',
      'Bone Priority',
      'Hotkey macros (heals/shields)',
      'Auto Heal',
      'FOV & smoothness tuning',
      'Per-weapon aimbot profiles',
      'Third-party alert integration',
      'online raids-safe default presets',
      'Lobby test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Operator setup guidance',
    ],
    overview: {
      title: 'Pro: aimbot plus ESP',
      paragraphs: [
        'Pro includes everything in Lite, plus Aimbot, Smooth Aim, Sticky Aim and hotkey macros. Aim settings live in one tab. Start with a portal preset, not max sliders.',
        'Most people pick Pro for online raids and online raids. Bone priority and macros help in fights while defaults stay smooth.',
      ],
    },
  },
  elite: {
    images: productDetailGallery(),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: r6SystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Loot Assist',
      'Rotation Assist AI',
      'Chest respawn timer',
      'Auto loadout manager',
      'Triggerbot',
      'Recoil control',
      'Full wall ESP suite',
      'Third-party alert system',
      'Visibility detector',
      'loadout tools (Loadout Pack)',
      'Priority patch queue',
      'Priority setup guides',
      'Elite conservative presets',
      'Cloud config backup',
      'Patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'Elite: full cheat + extras',
      paragraphs: [
        'Elite includes Lite and Pro modules, plus loot assist, Triggerbot, Recoil control, loadout tools, full wall ESP and faster patch priority.',
        'Elite slots are limited. Portal guides help you set safer profiles before online raid matchmaking. Check the status banner on cheatcaliber.net before you buy Elite access.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpEspIndoor', 'gpEspWallhack', 'gpGameplay'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Caliber.',
    limitations:
      'Spoofing does not help account-only anti-cheat cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching Caliber after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Recovery case support',
    ],
    overview: {
      title: 'HWID Spoofer for Caliber PC bans',
      paragraphs: [
        'Use the HWID Spoofer when anti-cheat flags your PC hardware but the platform account is still fine. Includes disk and MAC tools, a restore-point checklist, a compatibility scan and post-spoof checks.',
        'Use it when new accounts die on one PC but work on another. It does not fix account-only anti-cheat bans. After spoofing, use a safer cheat profile before online raid matchmaking.',
      ],
    },
  },
  ugc: {
    images: slide('gpEspWallhack', 'gpAimbotEsp', 'gpEspIndoor').map((img, index) =>
      index === 0 ? { ...img, alt: `Ugc – ${img.alt}` } : img,
    ),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent anti-cheat bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on cheatcaliber.net or at checkout on cheatcaliber.net.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for portal updates and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'UGC account appeal tools',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you organize appeals for platform account restrictions and anti-cheat bans. UGC does not guarantee an unban.',
        'Use UGC when you have documentation, order email and platform notices ready. Pair with HWID tools only when hardware flags—not account-only bans—are involved.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpGameplay', 'gpEspWallhack', 'gpAimbotEsp'),
    goodToKnow:
      'Loadout Pack previews cosmetics locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify in-game inventory or store state. Other players cannot see previewed skins or sets.',
    systemRequirements: r6SystemRequirements,
    fullFeatures: [
      'Outfit skin swap',
      'Skin & wrap preview',
      'Pickaxe & wrap customizer',
      'Loading screen editor',
      'Cursor & HUD theme',
      'Chest & loot replacer',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'loadout tools / Loadout Pack',
      paragraphs: [
        'loadout tools / Loadout Pack lets you preview outfits, camos and attachments on your Caliber client. loadout tools does not change your in-game inventory or store purchases.',
        'Only you see the preview skins. Other players see your real inventory. Included with Elite, or buy loadout tools alone without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'Lite' : cheat.name === 'Pro' ? 'Pro' : 'Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

const cheatsHubSlides = slide('gpAimbotEsp', 'gpEspWallhack', 'gpGameplay');

export const heroSlides = slide('gpAimbotEsp', 'gpEspWallhack', 'gpGameplay', 'gpEspIndoor', 'gpCourtyard');

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'Elite cheats with aimbot and ESP, plus HWID spoofer, UGC recovery and loadout tools for PC.',
  buyUrl: checkoutPath('caliber'),
};
