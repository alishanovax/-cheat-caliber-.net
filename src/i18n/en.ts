import type { Translations } from './types';
import { PRODUCT_BASE } from '../config/site';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { cheatImageForSlug } from '../config/siteImages';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'Caliber Cheats',
    domain: 'cheatcaliber.net',
    title: 'Caliber Cheats',
    description:
      'Shop Caliber cheats for ESP, aimbot, and advanced gameplay features. Explore available tools and features for Caliber players.',
    discord: '',
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Caliber · PC',
    eyebrow: 'Caliber cheats for PC',
    h1: 'Caliber Cheats',
    h1Accent: '',
    subtitle:
      'Shop Caliber cheats for ESP, aimbot, and advanced gameplay features. Explore available tools and features for Caliber players.',
    ctaPrimary: 'Buy cheats',
    ctaDiscord: '',
    modesLabel: 'Game modes',
    modes: ['PvP', 'PvE', 'Operators', 'Tactical'],
    metrics: [
      { label: 'Platform', strong: 'PC' },
      { label: 'Checkout', strong: 'Secure' },
      { label: 'Guides', strong: 'Blog' },
      { label: 'Help', strong: 'FAQ' },
    ],
  },
  features: {
    eyebrow: 'Cheat features',
    title: 'Caliber cheat modules',
    subtitle:
      'Shop Lite, Pro, and Elite modules on cheatcaliber.net — aimbot, operator ESP, equipment tools, and configs built for live PvP and PvE matches.',
    items: [
      {
        title: 'Aimbot',
        subtitle: 'FOV, smoothness, hitboxes',
        desc: 'Configurable aimbot with FOV circle, smoothness, hitbox selection, and optional target line for Caliber gunfights.',
        bullets: [
          'Enable aimbot with customizable FOV',
          'Draw FOV and target line on screen',
          'Smoothness and hitbox selection',
          'Head, chest, stomach, or pelvis priority',
        ],
        tags: ['Caliber aimbot', 'aim assist', 'FOV'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Skeleton, boxes, snaplines',
        desc: 'Player and operator ESP with skeleton styles, box types, snaplines, player name, head circle, and view line options.',
        bullets: [
          'Skeleton normal, outline, glow, or RGB',
          'Box normal, cornered, or 3D styles',
          'Snaplines with position and thickness',
          'Player name, head circle, feet circle',
        ],
        tags: ['Caliber ESP', 'operator ESP', 'wall ESP'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Weapon ESP',
        subtitle: 'Guns, utility and economy awareness',
        desc: 'Highlights weapons, attachments, heals, and dropped gear so you can resupply faster while rotating through the match.',
        bullets: [
          'Weapon and attachment markers',
          'Medkits, stim injectors, and armor plates',
          'Ammo and attachment highlights',
          'Useful when under objective pressure',
        ],
        tags: ['Caliber equipment ESP', 'equipment ESP', 'dropped weapons'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Configs',
        subtitle: 'Save and load profiles',
        desc: 'Save and load config profiles so PvP matches, casual queues, and map-specific setups stay consistent between sessions.',
        bullets: ['Save config to disk', 'Load config on launch', 'Separate profiles per map', 'Share presets across PCs via portal'],
        tags: ['Caliber cheat config', 'profiles', 'setup'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Recoil control',
        subtitle: 'Separate recoil layers',
        desc: 'The listing includes separate recoil control layers alongside aim modules for rifle and SMG profiles.',
        bullets: ['Recoil tuning per weapon class', 'Works with aimbot FOV settings', 'Tune before PvP matches', 'Pair with conservative ESP colors'],
        tags: ['Caliber recoil control', 'recoil control', 'combat'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Compatibility',
        subtitle: 'Windows PC requirements',
        desc: 'Built for Caliber on Windows 10 and 11. Cloud DMA is required for full functionality with HVCI, Core Isolation, TPM, and Secure Boot enabled.',
        bullets: [
          'Windows 10 or 11 (64-bit)',
          'Intel or AMD CPU',
          'Cloud DMA noted on product page',
          'Check status after anti-cheat updates',
        ],
        tags: ['Caliber compatibility', 'Cloud DMA', 'PC'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Match types',
        subtitle: 'Live PvP and PvE matches',
        desc: 'Designed for Caliber online matches — PvP firefights, PvE objectives, and squad queues with tier presets from cheatcaliber.net.',
        bullets: [
          'PvP and casual matchmaking',
          'Private lobby / group queue support',
          'Preset profiles per tier (Lite, Pro, Elite)',
          'Checkout and loader status on cheatcaliber.net',
        ],
        tags: ['Caliber matches', 'multiplayer', 'competitive'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Game modes',
        subtitle: 'Where players run Caliber cheats',
        desc: 'Most buyers use PvP or PvE queues. Use conservative defaults in ranked or high-pressure matches.',
        bullets: ['PvP', 'PvE', 'Operators', 'Tactical'],
        tags: ['Caliber cheats', 'PvP', 'operators'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why our cheats',
    title: 'Caliber cheats that stay online',
    subtitle:
      'Most cheat shops go down after anti-cheat patches and leave you without support. We ship loader updates fast and keep aimbot defaults conservative for PvP raid play.',
    usLabel: 'Caliber Cheats',
    otherLabel: 'Typical shop',
    rows: [
      {
        title: 'Loader updates after patches',
        desc: 'New builds usually go out within hours of a Caliber or anti-cheat update. Check the homepage status banner before you queue.',
      },
      {
        title: 'Smooth aimbot defaults',
        desc: 'Default smoothness, FOV and bone priority are set for PvP raid play. You can tighten them later if you want.',
      },
      {
        title: 'Support desk',
        desc: 'FAQ and setup guides cover loader setup, weapon configs and HWID resets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'External loader with OBS-safe mode so overlays stay off your stream.',
      },
      {
        title: 'Cloud configs',
        desc: 'Save online raids, online raids, and per-map settings and load them on another PC.',
      },
      {
        title: 'HWID resets',
        desc: 'Hardware resets and license moves go through the customer portal. Most shops lock you to one PC.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Usual time to ship a loader after a big Caliber or anti-cheat update.',
      },
      {
        value: '24/7',
        title: 'Support',
        desc: 'FAQ and guides help with setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Users',
        desc: 'PC players using aimbot, ESP and tools on cheatcaliber.net.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Buy cheats. Play in',
    titleHighlight: 'three steps',
    intro:
      'Buy your Caliber cheat, download the loader, load a preset, then open Caliber. Use Support or the FAQ if you get stuck.',
    ctaPrimary: 'Buy cheats',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: PRIMARY_CHECKOUT_PATH,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Buy and download the loader',
        desc: 'Finish checkout, open the portal, and download the latest Windows loader.',
      },
      {
        step: 'Step 2',
        title: 'Load presets',
        desc: 'Run the loader, load a Caliber preset, and tune soft aim and ESP ranges.',
      },
      {
        step: 'Step 3',
        title: 'Check status and play',
        desc: 'Confirm the status banner is online, launch Caliber through BSG Launcher, and use your saved config.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Windows PC',
    subtitle: 'Check the status banner after Caliber updates before you launch.',
    items: ['Windows 10 & 11', 'BSG Launcher', 'Caliber client', 'Auto updater', 'Config cloud sync', 'Setup guides', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Elite cheat',
    title: 'Elite cheats',
    subtitle: 'Full Caliber cheat suite — aimbot, wall ESP, economy assist, loadout tools, and faster patch priority.',
    viewAll: 'View Elite details',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'Starter',
        name: 'Lite',
        title: 'Lite Cheats — operator ESP, map overlay and raid awareness',
        desc: 'Buy Lite cheats for operator ESP, loot and extract markers, raid stamina and bleed timers and map overlay — no aimbot, stream-proof overlay for competitive awareness.',
        features: ['Player ESP & boxes', 'Loot & extract markers', 'Mini-map overlay', 'Raid timer & stamina HUD'],
        more: 10,
        href: `${productBase}lite/`,
        variant: 'essential',
      },
      {
        badge: 'Popular',
        tier: 'online raids',
        name: 'Pro',
        title: 'Pro Cheats — aimbot, smooth aim and wall ESP',
        desc: 'Buy Pro cheats with everything in Lite plus Aimbot, Smooth Aim, Sticky Aim, bone priority and raid-safe presets.',
        features: ['All Lite ESP modules', 'Aimbot & Smooth Aim', 'Sticky Aim & Prediction', 'Bone Priority'],
        more: 11,
        href: `${productBase}pro/`,
        variant: 'popular',
      },
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'Elite Caliber Cheats — aimbot, economy assist and ESP',
        desc: 'Buy Elite cheats with economy assist, Triggerbot, Recoil control, full wall ESP, loadout tools and setup guidance in the portal.',
        features: ['Loot Assist', 'Triggerbot', 'Recoil control', 'Full wall ESP', 'loadout tools', 'Priority patch queue'],
        more: 42,
        href: `${productBase}elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Shop',
    title: 'Buy Caliber — PC cheats shop',
    subtitle:
      'Buy Caliber cheats for Elite aimbot and ESP, HWID spoofer, UGC recovery and loadout tools — pick what you need and checkout in minutes.',
    viewAll: 'View all cheats',
    get: 'Buy',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'Caliber HWID Spoofer — hardware ban bypass',
        subtitle: 'Clean slate for your PC',
        desc: 'Buy a Caliber HWID spoofer for disk serials, MAC addresses and GPU IDs—run the portal guide before launching cheats again.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'UGC tools — Caliber platform ban appeals',
        subtitle: 'Unban & governance control',
        desc: 'Buy Caliber UGC tools for platform account restrictions, anti-cheat bans and security holds—custom appeal workflows and dispute automation.',
        features: ['Custom appeal workflows', 'Dispute automation', 'Case documentation', 'Status tracking dashboard'],
        more: 6,
        href: `${productBase}ugc/`,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'loadout tools / Loadout Pack — Caliber cosmetics',
        subtitle: 'Unlock every cosmetic locally',
        desc: 'Buy Caliber loadout tools / Loadout Pack for outfits, camos and attachments—local preview without in-game inventory purchases.',
        features: ['Outfit skin swap', 'Wrap & weapon customizer', 'Exclusive set preview', 'Loadout favorites export'],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Buy guides',
    title: 'Shop Caliber cheats — tier picks & checkout help',
    subtitle:
      'Compare Lite, Pro, and Elite, find the right checkout path, and buy Caliber tools with setup steps built for Caliber players.',
    latestTitle: 'Caliber cheat guides — buy tiers, checkout & upgrades',
    latestSubtitle:
      'Transactional guides to compare products, open secure checkout, and choose aimbot, ESP, and utility tiers on cheatcaliber.net.',
    filterAll: 'All guides',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No guides match this filter.',
    viewAll: 'View all guides',
    read: 'Read',
    items: [
      {
        tag: 'Guides',
        title: 'Buy Caliber cheats: tier advantages before checkout',
        slug: 'caliber-training-grounds-practice',
        image: cheatImageForSlug('caliber-training-practice'),
        desc: 'What Lite, Pro, and Elite add on PvP matches—ESP, aimbot, equipment tools—and how to pick a tier on cheatcaliber.net.',
        date: 'Oct 24, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Aimbot & ESP cheat advantages for Caliber raids',
        slug: 'caliber-training-tips',
        image: cheatImageForSlug('caliber-training-tips'),
        desc: 'Why players buy Pro and Elite tiers—aimbot smoothness, wall ESP, and loot visibility advantages on cheatcaliber.net.',
        date: 'Oct 10, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'How to buy and set up Caliber cheats on PC',
        slug: 'caliber-cheat-setup',
        image: cheatImageForSlug('caliber-cheat-setup'),
        desc: 'Checkout, loader download, and first-session presets for Lite, Pro, and Elite on cheatcaliber.net.',
        date: 'Sep 25, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Features',
        title: 'Caliber cheats features: aimbot, bots, wall ESP and more',
        slug: 'caliber-cheat-features',
        image: cheatImageForSlug('caliber-cheat-features'),
        desc: 'Complete guide to our Caliber cheats—Aimbot, Loot Assist, loadout tools, map overlays, wall ESP and Recoil control.',
        date: 'Sep 8, 2026',
        readTime: '12 min read',
      },
      {
        tag: 'Guides',
        title: 'Caliber cheat modules: what you get per tier',
        slug: 'caliber-console-commands',
        image: cheatImageForSlug('caliber-practice-settings'),
        desc: 'Transactional comparison of Lite, Pro, and Elite modules—ESP, aimbot, equipment tools—and where to checkout.',
        date: 'Aug 22, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Lite vs Pro: which tier fits you',
        slug: 'caliber-lite-vs-pro',
        image: cheatImageForSlug('caliber-lite-vs-pro'),
        desc: 'Map awareness vs aimbot automation—compare Lite and Pro Caliber cheats for online raids and online raids.',
        date: 'Aug 5, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Elite tier guide: when to upgrade your Caliber cheats',
        slug: 'caliber-elite-tier',
        image: cheatImageForSlug('caliber-elite-tier'),
        desc: 'Loot Assist, Triggerbot, loadout tools and full wall ESP—who Elite is for and how to tune safely.',
        date: 'Jul 19, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Buy Caliber Aimbot Cheats for PvP raid play',
        slug: 'caliber-aimbot-competitive',
        image: cheatImageForSlug('caliber-aimbot-matches'),
        desc: 'Aimbot, Prediction and Hotkey macros configs for climbing competitive with Pro tier Caliber cheats.',
        date: 'Jun 30, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'Caliber wall ESP cheats setup for PvP raid play',
        slug: 'caliber-esp-setup',
        image: cheatImageForSlug('caliber-esp-setup'),
        desc: 'Enemy position tracking, equipment ESP, smoke alerts and vision detector tuning for Lite and Elite tiers.',
        date: 'Jun 12, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Caliber map overlays guide',
        slug: 'caliber-zone-map',
        image: cheatImageForSlug('caliber-map-awareness'),
        desc: 'Mini-map overlay, FOV awareness and safe distance caps for online raids and online raids.',
        date: 'May 24, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Caliber loadout tools cheats / Loadout Pack guide',
        slug: 'caliber-loadouts',
        image: cheatImageForSlug('caliber-loadouts'),
        desc: 'Preview skins, wraps and exclusive sets locally with our Loadout Pack loadout tools module.',
        date: 'May 6, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Updates',
        title: 'anti-cheat patch day checklist for Caliber cheats',
        slug: 'anti-cheat-patch',
        image: cheatImageForSlug('anti-cheat-patch'),
        desc: 'Status banner, loader reload and conservative profiles after every Caliber or anti-cheat update.',
        date: 'Apr 18, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'Caliber HWID Spoofer vs New Account After anti-cheat ban',
        slug: 'caliber-hwid-ban',
        image: cheatImageForSlug('caliber-hwid-ban'),
        desc: 'When to spoof hardware, when to start fresh, and how cheatcaliber.net/products/caliber fits each path.',
        date: 'Mar 29, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'How to buy Caliber cheats in 2026',
        slug: 'buy-caliber-cheats',
        image: cheatImageForSlug('buy-caliber-cheats'),
        desc: 'Step-by-step purchase walkthrough for Lite, Pro and Elite via our secure checkout.',
        date: 'Mar 8, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Setup',
        title: 'Caliber aimbot cheats guide: AR, SMG and Shotgun',
        slug: 'caliber-aimbot-combat',
        image: cheatImageForSlug('caliber-aimbot-combat'),
        desc: 'Per-weapon aimbot profiles for Pro tier—AR spray, SMG tracking and shotgun push settings for PvP raid play.',
        date: 'Feb 17, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Troubleshooting',
        title: 'anti-cheat connection issues on Caliber — cheats and appeal fixes',
        slug: 'anti-cheat-fix',
        image: cheatImageForSlug('anti-cheat-fix'),
        desc: 'Fix verification errors, file integrity checks and when to use UGC appeal workflows after anti-cheat issues.',
        date: 'Jan 26, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'Caliber external cheat guide',
        slug: 'caliber-external-loader',
        image: cheatImageForSlug('caliber-external-loader'),
        desc: 'Why external Caliber cheats matter, how the external loader works on PC and what makes private software safer than free tools.',
        date: 'Dec 14, 2025',
        readTime: '7 min read',
      },
      {
        tag: 'Setup',
        title: 'Stream-proof Caliber cheats overlay setup',
        slug: 'caliber-stream-proof',
        image: cheatImageForSlug('caliber-stream-proof'),
        desc: 'Hide wall ESP and script overlays from OBS, Game Bar and capture cards—test workflow for content creators.',
        date: 'Nov 19, 2025',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Cheat menu',
    title: 'Caliber cheat menu, organized',
    subtitle: 'Every cheat module is grouped so you can tune aimbot and ESP mid-match without digging through chaos.',
    items: [
      { num: '01', label: 'Aimbot', title: 'Tracking that adapts per weapon', desc: 'Smoothness, FOV, Sticky Aim and Bone Priority in one aimbot tab.' },
      { num: '02', label: 'ESP', title: 'Wall ESP that stays readable', desc: 'Boxes, skeletons, distance, health and team color filters.' },
      { num: '03', label: 'Map overlay', title: 'Sites and rotates on lock', desc: 'Enemy dots, bomb timers and mini-map on a compact overlay.' },
      { num: '04', label: 'Weapons', title: 'Per-weapon aimbot profiles', desc: 'Save AR, SMG, shotgun and sniper presets and swap with hotkeys.' },
      { num: '05', label: 'Economy', title: 'Weapon ESP & economy assist', desc: 'Dropped gun highlights, utility cues and Elite economy-assist cues.' },
      { num: '06', label: 'Profiles', title: 'Configs for every mode', desc: 'PvP, casual, training mode and wingman presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 steps',
    titleBefore: 'From buy to',
    titleHighlight: 'in-game cheats.',
    subtitle: 'Buy Caliber cheats, download the loader, turn on modules, save your config for next match.',
    ctaLabel: 'Buy cheats',
    ctaHref: PRIMARY_CHECKOUT_PATH,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check status',
        desc: 'Read the live banner on cheatcaliber.net before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Pick a tier',
        desc: 'Choose Lite, Pro or Elite based on which modules you need.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch and set up',
        desc: 'Download from the portal, turn on modules, and test in training mode or a bot lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your config',
        desc: 'When the settings feel right, save online raids and online raids presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notes',
    title: 'Quick tips',
    items: [
      { num: '01', title: 'After patches', desc: 'Check the homepage status banner and portal status before you queue competitive after a Caliber update.' },
      { num: '02', title: 'Start slow', desc: 'Use the default aimbot smoothness and ESP range first, then raise them if you need to.' },
      { num: '03', title: 'Support', desc: 'Stuck on the loader or configs? Use the Support page and FAQ with your order details handy.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Support for loader, HWID help, checkout and configs',
    subtitle: 'Loader, HWID, checkout and account help.',
    channels: [
      {
        icon: 'users',
        title: 'Before you buy',
        desc: 'Ask about tiers and what each product includes.',
        linkLabel: 'View products',
        href: productBase,
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Compatibility, bans and setup answers.',
        linkLabel: 'View FAQ',
        href: '/faq/',
      },
      {
        icon: 'messageCircle',
        title: 'Forum',
        desc: 'Community threads on tiers, loader tips and patch-day checks.',
        linkLabel: 'View forum',
        href: '/forum/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The email you used at checkout on cheatcaliber.net.' },
      { title: 'Platform', desc: 'Windows 10 or 11, BSG Launcher, and your Caliber version.' },
      { title: 'Error detail', desc: 'Screenshot or exact text from the loader or BSG Launcher.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Caliber cheats FAQ',
    subtitle: 'Compatibility, bans, cheat tiers and setup — straight answers before you buy.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Caliber cheats are online?',
        a: 'The live status banner is on cheatcaliber.net. Always check after a Caliber or anti-cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching Caliber.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party Caliber cheats?',
        a: 'Yes—any modification carries risk. anti-cheat and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Caliber via BSG Launcher on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal. See the FAQ for HWID limits that depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Cheats tiers, HWID Spoofer, UGC and loadout tools live at cheatcaliber.net/products/caliber with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'Caliber cheats for PC: aimbot, ESP, wall ESP and tools.',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/caliber/elite/', label: 'Elite Caliber cheats', ariaLabel: 'Elite cheats' },
      { href: '/products/caliber/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About aimbot ESP — we publish tier comparisons, setup guides and support',
      description:
        'Guides for aimbot ESP on PC, tier comparisons and loader support — who we are and how cheatcaliber.net ships updates.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'Caliber Cheats is a PC shop focused on aimbot ESP, wall ESP, map overlay and utility tools for Caliber on PC. We publish tier comparisons, setup guides and live status notes when anti-cheat or Caliber patches land.',
            'Modules ship with competitive-safe defaults first—you can tighten FOV and smoothness later in the customer portal. Game and product names are for identification only.',
            'We are independent of platform. Checkout, loader delivery and support run through cheatcaliber.net and our customer portal.',
          ],
        },
        {
          heading: 'What we sell',
          paragraphs: [
            'Lite, Pro and Elite Caliber cheats, plus HWID Spoofer, loadout tools and UGC recovery. Coverage spans online raids, online raids and competitive modes when the status banner shows online.',
            'The blog covers configs, patch checks and anti-cheat updates. Pages are updated when Caliber or the loader changes—check the homepage status banner before you play.',
          ],
        },
        {
          heading: 'Loader and checkout support',
          paragraphs: [
            'Use the FAQ and setup guides for loader errors, preset tuning and checkout questions. Keep your order email, platform account and Windows version handy when you follow the portal steps.',
            'We do not guarantee rank outcomes or ban immunity. Third-party tools carry risk—read the FAQ and Terms before you buy.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy | Caliber Cheats Shop — handles analytics, cookies, checkout',
      description:
        'How the Caliber cheats shop at cheatcaliber.net handles analytics, cookies, checkout referrals and contact data.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect basic analytics such as page views, device type, browser and approximate region through Google Analytics when it is enabled. Checkout runs on external pages—we do not store payment card data on cheatcaliber.net.',
            'When you use checkout or the customer portal, we handle account data as described in this policy. We do not publish a public contact inbox on cheatcaliber.net.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics show which guides and product pages people use so we can fix broken links and improve the Caliber cheats shop experience. Support tickets help us answer loader, aimbot ESP and checkout questions.',
            'We do not sell personal data. Aggregated analytics may inform which blog topics or product pages need updates after a patch.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use basic analytics cookies on cheatcaliber.net. You can block cookies in your browser—the site still works without them, though repeat-visit stats will be less accurate for our shop team.',
          ],
        },
        {
          heading: 'Third-party checkout',
          paragraphs: [
            'Purchases from the Caliber cheats shop complete on external checkout pages. Those providers publish their own data policies for payment and license delivery—we link out only after you choose a product tier.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions about the Caliber cheats shop, use the Support page. Purchase and refund rules are in Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms for Caliber Cheats | License, delivery, refunds & account',
      description:
        'Terms for buying Caliber cheats on cheatcaliber.net — license use, delivery, refunds and account risk.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using cheatcaliber.net or buying a product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell Caliber cheat tiers (Lite, Pro, Elite) and tools (HWID Spoofer, UGC, loadout tools / Loadout Pack) through a portal and Windows loader for Steam.',
            'Product pages list what is included when you buy. Features can change when Caliber or anti-cheat updates.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. cheatcaliber.net does not process or store payment card numbers.',
            'After purchase, use the customer portal linked from your order flow to download the current loader and setup guide before launching Caliber.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, anti-cheat penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Caliber on PC on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, Caliber build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Caliber can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue competitive while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Caliber Cheats Support | Loader, HWID & Checkout',
      description:
        'Caliber cheats support for loader setup, HWID spoofing and checkout help at cheatcaliber.net.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'Caliber Cheats home',
    checkoutAria: 'Start checkout',
    discordAria: '',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
