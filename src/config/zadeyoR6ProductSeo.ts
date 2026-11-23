/**
 * SSR copy for /go/r6/ checkout bridge page.
 */
export const ZADEYO_R6_CHECKOUT_URL =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fr6-faceit';

export const ZADEYO_R6_PRODUCT_SEO = {
  title: 'R6 Cheat – PC access and loader delivery',
  description:
    "Rainbow Six Siege PC cheats with operator ESP, aimbot, radar, and recoil control. Compare tiers on r6-cheat.com, then checkout when the status banner shows online.",
  h1: 'R6 Cheat — ESP, aimbot, wall ESP & ranked presets',
  h2ProductDetails: 'Product details',
  h2Features: 'Features',
  h2SystemRequirements: 'System requirements',
  h2Checkout: 'Checkout and delivery',
  h2Plans: 'Access options',
  h2Loader: 'Loader, configs, and updates',
  h2Safety: 'Status checks before you queue',
  logoAlt: 'Rainbow Six Siege cheats — R6 Cheat checkout',
  intro:
    'PC tools with operator ESP, precision aimbot, and recoil control. Compare tiers on r6-cheat.com, then continue to secure checkout when the status banner shows online.',
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
        'Operator ESP, skeleton and box overlays, snaplines, gadget ESP, and save/load config profiles for ranked and casual matches.',
      ],
    },
  ],
  bodySections: [
    {
      id: 'checkout',
      headingKey: 'h2Checkout' as const,
      paragraphs: [
        'Payment and license delivery complete after you choose a plan. You receive digital loader access and setup guidance—no physical shipment.',
        "Use r6-cheat.com for tier tables, BattlEye patch notes, and pre-purchase FAQ before you launch Rainbow Six Siege on PC.",
      ],
    },
    {
      id: 'loader',
      headingKey: 'h2Loader' as const,
      paragraphs: [
        'The customer portal hosts the current Windows loader, default configs, and save/load profiles for ranked and casual matches.',
        "After a Rainbow Six Siege or BattlEye update, reload the loader from the portal and read the homepage status banner before ranked queue.",
      ],
    },
    {
      id: 'safety',
      headingKey: 'h2Safety' as const,
      paragraphs: [
        'Third-party tools carry ban risk. Start with conservative FOV, smooth aim, and limited ESP distance until sessions feel stable.',
        'Check the r6-cheat.com status banner on patch days. Do not queue ranked while modules show offline or misaligned.',
      ],
    },
  ],
  screenshotAlts: [
    "Rainbow Six Siege ESP overlay screenshot 1",
    "Rainbow Six Siege aimbot FOV screenshot 2",
    "Rainbow Six Siege gadget ESP screenshot 3",
  ],
} as const;