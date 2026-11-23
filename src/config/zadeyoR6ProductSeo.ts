/**
 * SSR copy for /go/r6/ checkout bridge page.
 */
export const ZADEYO_R6_CHECKOUT_URL =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fmarvel-rivals&sf=zadeyo';

export const ZADEYO_R6_PRODUCT_SEO = {
  title: 'Rivals Cheat – PC access and loader delivery',
  description:
    "Marvel Rivals PC cheats with hero ESP, aimbot, radar, and recoil control. Compare tiers on rivalscheat.net, then checkout when the status banner shows online.",
  h1: 'Rivals Cheat — ESP, aimbot, wall ESP & competitive presets',
  h2ProductDetails: 'Product details',
  h2Features: 'Features',
  h2SystemRequirements: 'System requirements',
  h2Checkout: 'Checkout and delivery',
  h2Plans: 'Access options',
  h2Loader: 'Loader, configs, and updates',
  h2Safety: 'Status checks before you queue',
  logoAlt: 'Marvel Rivals cheats — Rivals Cheat checkout',
  intro:
    'PC tools with hero ESP, precision aimbot, and recoil control. Compare tiers on rivalscheat.net, then continue to secure checkout when the status banner shows online.',
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
        'Hero ESP, skeleton and box overlays, snaplines, ability ESP, and save/load config profiles for competitive and casual matches.',
      ],
    },
  ],
  bodySections: [
    {
      id: 'checkout',
      headingKey: 'h2Checkout' as const,
      paragraphs: [
        'Payment and license delivery complete after you choose a plan. You receive digital loader access and setup guidance—no physical shipment.',
        "Use rivalscheat.net for tier tables, anti-cheat patch notes, and pre-purchase FAQ before you launch Marvel Rivals on PC.",
      ],
    },
    {
      id: 'loader',
      headingKey: 'h2Loader' as const,
      paragraphs: [
        'The customer portal hosts the current Windows loader, default configs, and save/load profiles for competitive and casual matches.',
        "After a Marvel Rivals or anti-cheat update, reload the loader from the portal and read the homepage status banner before competitive queue.",
      ],
    },
    {
      id: 'safety',
      headingKey: 'h2Safety' as const,
      paragraphs: [
        'Third-party tools carry ban risk. Start with conservative FOV, smooth aim, and limited ESP distance until sessions feel stable.',
        'Check the rivalscheat.net status banner on patch days. Do not queue competitive while modules show offline or misaligned.',
      ],
    },
  ],
  screenshotAlts: [
    "Marvel Rivals ESP overlay screenshot 1",
    "Marvel Rivals aimbot FOV screenshot 2",
    "Marvel Rivals ability ESP screenshot 3",
  ],
} as const;