/**
 * Copy into Zadeyo /products/rainbow-six-siege-cheats (Next.js product route).
 * cheatcaliber.net mirrors this on /go/caliber/ after deploy; zadeyo.com must be updated separately.
 */
import { ZADEYO_CALIBER_PRODUCT_SEO, ZADEYO_CALIBER_CHECKOUT_URL } from '../src/config/zadeyoCaliberProductSeo.ts';

export const ZADEYO_RAINBOW_SIX_SIEGE_CHBSGTS_PRODUCT_SEO = {
  ...ZADEYO_CALIBER_PRODUCT_SEO,
  checkoutUrl: ZADEYO_CALIBER_CHECKOUT_URL,
  /** Zadeyo CMS: use one <h1>; demote duplicate product hero headings to <h2>. */
  headingOutline: [
    { level: 'h1', text: ZADEYO_CALIBER_PRODUCT_SEO.h1 },
    { level: 'h2', text: 'Product details' },
    { level: 'h2', text: 'Gameplay screenshots' },
    { level: 'h2', text: 'Features' },
    { level: 'h2', text: 'System requirements' },
    { level: 'h2', text: 'Frequently asked questions' },
  ],
  keywordCap: {
    phrase: 'Caliber cheats',
    maxUses: 8,
    note: 'Keep phrase in title + meta only; use Caliber / the listing elsewhere.',
  },
};

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}`) {
  console.log(JSON.stringify(ZADEYO_RAINBOW_SIX_SIEGE_CHBSGTS_PRODUCT_SEO, null, 2));
}
