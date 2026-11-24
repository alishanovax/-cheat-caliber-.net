/**
 * SSR copy for /go/tarkov/ checkout bridge page.
 */
export const ZADEYO_TARKOV_CHECKOUT_URL =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fescape-from-tarkov&sf=zadeyo';

export const ZADEYO_R6_PRODUCT_SEO = {
  title: 'EFT Cheats – PC access and loader delivery',
  description:
    "Escape from Tarkov PC cheats with PMC and Scav ESP, aimbot, radar, and recoil control. Compare tiers on cheatseft.org, then checkout when the status banner shows online.",
  h1: 'EFT Cheats — ESP, aimbot, wall ESP & competitive presets',
  h2ProductDetails: 'Product details',
  h2Features: 'Features',
  h2SystemRequirements: 'System requirements',
  h2Checkout: 'Checkout and delivery',
  h2Plans: 'Access options',
  h2Loader: 'Loader, configs, and updates',
  h2Safety: 'Status checks before you queue',
  logoAlt: 'Escape from Tarkov cheats — EFT Cheats checkout',
  intro:
    'PC tools with PMC and Scav ESP, precision aimbot, and recoil control. Compare tiers on cheatseft.org, then continue to secure checkout when the status banner shows online.',
  sections: [
    {
      heading: 'Aim and combat modules',
      level: 'h3' as const,
      paragraphs: [
        'Smooth aim inside a configurable FOV circle with visibility checks, triggerbot options, and recoil control for AR and SMG profiles.',
      ],
    },
    {
      heading: 'ESP and awareness',
      level: 'h3' as const,
      paragraphs: [
        'Player ESP, skeleton and box overlays, snaplines, loot and container ESP, and save/load config profiles for competitive and online raids.',
      ],
    },
  ],
  bodySections: [
    {
      id: 'checkout',
      headingKey: 'h2Checkout' as const,
      paragraphs: [
        'Payment and license delivery complete after you choose a plan. You receive digital loader access and setup guidance—no physical shipment.',
        "Use cheatseft.org for tier tables, anti-cheat patch notes, and pre-purchase FAQ before you launch Escape from Tarkov on PC.",
      ],
    },
    {
      id: 'loader',
      headingKey: 'h2Loader' as const,
      paragraphs: [
        'The customer portal hosts the current Windows loader, default configs, and save/load profiles for competitive and online raids.',
        "After a Escape from Tarkov or anti-cheat update, reload the loader from the portal and read the homepage status banner before PMC raid.",
      ],
    },
    {
      id: 'safety',
      headingKey: 'h2Safety' as const,
      paragraphs: [
        'Third-party tools carry ban risk. Start with conservative FOV, smooth aim, and limited ESP distance until sessions feel stable.',
        'Check the cheatseft.org status banner on patch days. Do not queue competitive while modules show offline or misaligned.',
      ],
    },
  ],
  screenshotAlts: [
    "Escape from Tarkov ESP overlay screenshot 1",
    "Escape from Tarkov aimbot FOV screenshot 2",
    "Escape from Tarkov loot and container ESP screenshot 3",
  ],
} as const;