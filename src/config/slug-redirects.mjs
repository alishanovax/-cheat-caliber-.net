/**
 * 301 redirects for shortened / legacy SEO slugs (trailing slash matches site config).
 * Do not map a path to itself — Astro treats redirects as higher priority than static pages.
 * @type {Record<string, string>}
 */
export const SLUG_REDIRECTS = {
  '/blog/tarkov-radar/': '/blog/tarkov-zone-map/',
  '/blog/tarkov-radar': '/blog/tarkov-zone-map/',

  '/tarkov-hacks/': '/escape-from-tarkov-cheats/',

  '/products/tarkov/account-recovery/': '/products/tarkov/ugc/',

  '/products/tarkov-hacks/': '/products/tarkov/',
  '/products/tarkov-hacks/lite/': '/products/tarkov/lite/',
  '/products/tarkov-hacks/pro/': '/products/tarkov/pro/',
  '/products/tarkov-hacks/elite/': '/products/tarkov/elite/',
  '/products/tarkov-hacks/hwid-spoofer/': '/products/tarkov/hwid-spoofer/',
  '/products/tarkov-hacks/ugc/': '/products/tarkov/ugc/',
  '/products/tarkov-hacks/unlock-all/': '/products/tarkov/unlock-all/',
  '/products/tarkov-hacks/utilities/': '/products/tarkov/utilities/',
  '/products/tarkov-hacks/account-recovery/': '/products/tarkov/ugc/',

  '/blog/buy-tarkov-hacks/': '/blog/buy-escape-from-tarkov-cheats/',
  '/blog/tarkov-hack-setup/': '/blog/tarkov-cheat-setup/',

  '/blog/tarkov-hacks-features-guide/': '/blog/tarkov-cheat-features/',
  '/blog/tarkov-hack-codes-guide/': '/blog/tarkov-training-grounds-practice/',
  '/blog/tarkov-console-hacks-tips/': '/blog/tarkov-training-tips/',
  '/blog/how-to-use-tarkov-hack-codes/': '/blog/tarkov-cheat-setup/',
  '/blog/tarkov-console-commands-hacks/': '/blog/tarkov-console-commands/',
  '/blog/how-to-buy-tarkov-hacks-2026/': '/blog/buy-escape-from-tarkov-cheats/',
  '/blog/tarkov-hwid-spoofer-after-ban/': '/blog/tarkov-hwid-ban/',
  '/blog/tarkov-zone-map-hack-guide/': '/blog/tarkov-zone-map/',
  '/blog/tarkov-external-hack-guide/': '/blog/tarkov-external-loader/',
  '/blog/tarkov-esp-wallhack-setup/': '/blog/tarkov-esp-setup/',
  '/blog/tarkov-stream-proof-setup/': '/blog/tarkov-stream-proof/',
  '/blog/tarkov-aimbot-competitive-guide/': '/blog/tarkov-aimbot-competitive/',
  '/blog/tarkov-aimbot-combat-guide/': '/blog/tarkov-aimbot-combat/',
  '/blog/tarkov-elite-tier-guide/': '/blog/tarkov-elite-tier/',
  '/blog/tarkov-elite/': '/blog/tarkov-elite-tier/',
  '/blog/tarkov-skin-changer-guide/': '/blog/tarkov-loadouts/',
  '/blog/tarkov-features/': '/blog/tarkov-cheat-features/',
  '/blog/tarkov-practice-lobby/': '/blog/tarkov-training-grounds-practice/',
  '/blog/anti-cheat-patch-checklist/': '/blog/anti-cheat-patch/',
  '/blog/apex-ac-patch/': '/blog/anti-cheat-patch/',
  '/blog/apex-ac-tarkov-guide/': '/blog/anti-cheat-fix/',
  '/blog/apex-ac-fix/': '/blog/anti-cheat-fix/',

  '/forum/how-to-enable-the-tarkov-console/': '/forum/tarkov-practice-settings-forum/',
  '/forum/what-to-check-after-a-tarkov-patch/': '/forum/after-tarkov-patch/',
  '/forum/tarkov-lite-or-pro-tier-comparison/': '/forum/lite-vs-pro/',
  '/forum/how-to-choose-tarkov-product-tier/': '/forum/choose-tarkov-tier/',
};