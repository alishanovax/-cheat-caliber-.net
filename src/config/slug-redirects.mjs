/**
 * 301 redirects for shortened / legacy SEO slugs (trailing slash matches site config).
 * Do not map a path to itself — Astro treats redirects as higher priority than static pages.
 * @type {Record<string, string>}
 */
export const SLUG_REDIRECTS = {
  '/blog/caliber-radar/': '/blog/caliber-zone-map/',
  '/blog/caliber-radar': '/blog/caliber-zone-map/',

  '/caliber-hacks/': '/caliber-cheats/',

  '/products/caliber/account-recovery/': '/products/caliber/ugc/',

  '/products/caliber-hacks/': '/products/caliber/',
  '/products/caliber-hacks/lite/': '/products/caliber/lite/',
  '/products/caliber-hacks/pro/': '/products/caliber/pro/',
  '/products/caliber-hacks/elite/': '/products/caliber/elite/',
  '/products/caliber-hacks/hwid-spoofer/': '/products/caliber/hwid-spoofer/',
  '/products/caliber-hacks/ugc/': '/products/caliber/ugc/',
  '/products/caliber-hacks/unlock-all/': '/products/caliber/unlock-all/',
  '/products/caliber-hacks/utilities/': '/products/caliber/utilities/',
  '/products/caliber-hacks/account-recovery/': '/products/caliber/ugc/',

  '/blog/buy-caliber-hacks/': '/blog/buy-caliber-cheats/',
  '/blog/caliber-hack-setup/': '/blog/caliber-cheat-setup/',

  '/blog/caliber-hacks-features-guide/': '/blog/caliber-cheat-features/',
  '/blog/caliber-hack-codes-guide/': '/blog/caliber-training-grounds-practice/',
  '/blog/caliber-console-hacks-tips/': '/blog/caliber-training-tips/',
  '/blog/how-to-use-caliber-hack-codes/': '/blog/caliber-cheat-setup/',
  '/blog/caliber-console-commands-hacks/': '/blog/caliber-console-commands/',
  '/blog/how-to-buy-caliber-hacks-2026/': '/blog/buy-caliber-cheats/',
  '/blog/caliber-hwid-spoofer-after-ban/': '/blog/caliber-hwid-ban/',
  '/blog/caliber-zone-map-hack-guide/': '/blog/caliber-zone-map/',
  '/blog/caliber-external-hack-guide/': '/blog/caliber-external-loader/',
  '/blog/caliber-esp-wallhack-setup/': '/blog/caliber-esp-setup/',
  '/blog/caliber-stream-proof-setup/': '/blog/caliber-stream-proof/',
  '/blog/caliber-aimbot-competitive-guide/': '/blog/caliber-aimbot-competitive/',
  '/blog/caliber-aimbot-combat-guide/': '/blog/caliber-aimbot-combat/',
  '/blog/caliber-elite-tier-guide/': '/blog/caliber-elite-tier/',
  '/blog/caliber-elite/': '/blog/caliber-elite-tier/',
  '/blog/caliber-skin-changer-guide/': '/blog/caliber-loadouts/',
  '/blog/caliber-features/': '/blog/caliber-cheat-features/',
  '/blog/caliber-practice-lobby/': '/blog/caliber-training-grounds-practice/',
  '/blog/anti-cheat-patch-checklist/': '/blog/anti-cheat-patch/',
  '/blog/apex-ac-patch/': '/blog/anti-cheat-patch/',
  '/blog/apex-ac-caliber-guide/': '/blog/anti-cheat-fix/',
  '/blog/apex-ac-fix/': '/blog/anti-cheat-fix/',

  '/forum/how-to-enable-the-caliber-console/': '/forum/caliber-practice-settings-forum/',
  '/forum/what-to-check-after-a-caliber-patch/': '/forum/after-caliber-patch/',
  '/forum/caliber-lite-or-pro-tier-comparison/': '/forum/lite-vs-pro/',
  '/forum/how-to-choose-caliber-product-tier/': '/forum/choose-caliber-tier/',
};