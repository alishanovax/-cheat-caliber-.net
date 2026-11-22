/**
 * SSR copy for /go/cs-go/ — mirror for Zadeyo /products/cs-go SEO.
 * Apply the same fields in Zadeyo admin (this repo does not deploy zadeyo.com).
 */
export const ZADEYO_CSGO_CHECKOUT_URL =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fcs-go';

export const ZADEYO_APEX_PRODUCT_SEO = {
  title: 'CSGO Cheats – PC access and loader delivery',
  description:
    'Counter-Strike: Global Offensive PC cheats with player ESP, aimbot, radar, and recoil control. Compare tiers on csgo-cheat.org, then checkout on ZADEYO when status is online.',
  h1: 'CSGO Cheats — ESP, aimbot, wall ESP & ranked presets',
  h2ProductDetails: 'Product details',
  h2Features: 'Features',
  h2SystemRequirements: 'System requirements',
  h2Checkout: 'Checkout and delivery',
  h2Plans: 'Access options',
  h2Loader: 'Loader, configs, and updates',
  h2Safety: 'Status checks before you queue',
  logoAlt: 'CS:GO cheats — ZADEYO checkout logo',
  intro:
    'PC tools with player ESP, precision aimbot, and recoil control. Compare tiers on csgo-cheat.org, then continue to ZADEYO when the status banner shows online.',
  sections: [
    {
      heading: 'Aim and combat modules',
      level: 'h3' as const,
      paragraphs: [
        'Smooth aim inside a configurable FOV circle with visibility checks, triggerbot options, and recoil control for AR and SMG profiles.',
      ],
    },
    {
      heading: 'ESP and loot awareness',
      level: 'h3' as const,
      paragraphs: [
        'Player ESP, skeleton and box overlays, snaplines, weapon ESP, and save/load config profiles for online matches and casual matches.',
      ],
    },
  ],
  bodySections: [
    {
      id: 'checkout',
      headingKey: 'h2Checkout' as const,
      paragraphs: [
        'Payment and license delivery run on ZADEYO after you choose a plan. You receive digital loader access and setup guidance—no physical shipment.',
        'Use csgo-cheat.org for tier tables, anti-cheat patch notes, and pre-purchase FAQ before you launch Counter-Strike: Global Offensive on PC.',
      ],
    },
    {
      id: 'loader',
      headingKey: 'h2Loader' as const,
      paragraphs: [
        'The customer portal hosts the current Windows loader, default configs, and save/load profiles for online matches and casual matches.',
        'After an Counter-Strike: Global Offensive or anti-cheat update, reload the loader from the portal and read the homepage status banner before ranked queue.',
      ],
    },
    {
      id: 'safety',
      headingKey: 'h2Safety' as const,
      paragraphs: [
        'Third-party tools carry ban risk. Start with conservative FOV, smooth aim, and limited ESP distance until sessions feel stable.',
        'Check the csgo-cheat.org status banner on patch days. Do not queue ranked while modules show offline or misaligned.',
      ],
    },
  ],
  screenshotAlts: [
    'Counter-Strike: Global Offensive ESP overlay screenshot 1',
    'Counter-Strike: Global Offensive aimbot FOV screenshot 2',
    'Counter-Strike: Global Offensive weapon ESP screenshot 3',
  ],
} as const;
