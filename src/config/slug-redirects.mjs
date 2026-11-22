/**
 * 301 redirects for shortened / legacy SEO slugs (trailing slash matches site config).
 * Do not map a path to itself — Astro treats redirects as higher priority than static pages.
 * @type {Record<string, string>}
 */
export const SLUG_REDIRECTS = {
  '/r6-hacks/': '/r6-cheats/',

  '/products/r6/account-recovery/': '/products/r6/ugc/',

  '/products/r6-hacks/': '/products/r6/',
  '/products/r6-hacks/lite/': '/products/r6/lite/',
  '/products/r6-hacks/pro/': '/products/r6/pro/',
  '/products/r6-hacks/elite/': '/products/r6/elite/',
  '/products/r6-hacks/hwid-spoofer/': '/products/r6/hwid-spoofer/',
  '/products/r6-hacks/ugc/': '/products/r6/ugc/',
  '/products/r6-hacks/unlock-all/': '/products/r6/unlock-all/',
  '/products/r6-hacks/utilities/': '/products/r6/utilities/',
  '/products/r6-hacks/account-recovery/': '/products/r6/ugc/',

  '/blog/buy-r6-hacks/': '/blog/buy-r6-cheats/',
  '/blog/r6-hack-setup/': '/blog/r6-cheat-setup/',

  '/blog/r6-hacks-features-guide/': '/blog/r6-cheat-features/',
  '/blog/r6-hack-codes-guide/': '/blog/r6-training-grounds-practice/',
  '/blog/r6-console-hacks-tips/': '/blog/r6-training-tips/',
  '/blog/how-to-use-r6-hack-codes/': '/blog/r6-cheat-setup/',
  '/blog/r6-console-commands-hacks/': '/blog/r6-console-commands/',
  '/blog/how-to-buy-r6-hacks-2026/': '/blog/buy-r6-cheats/',
  '/blog/r6-hwid-spoofer-after-ban/': '/blog/r6-hwid-ban/',
  '/blog/r6-radar-hack-guide/': '/blog/r6-radar/',
  '/blog/r6-external-hack-guide/': '/blog/r6-external-loader/',
  '/blog/r6-esp-wallhack-setup/': '/blog/r6-esp-setup/',
  '/blog/r6-stream-proof-setup/': '/blog/r6-stream-proof/',
  '/blog/r6-aimbot-ranked-guide/': '/blog/r6-aimbot-ranked/',
  '/blog/r6-aimbot-combat-guide/': '/blog/r6-aimbot-combat/',
  '/blog/r6-elite-tier-guide/': '/blog/r6-elite-tier/',
  '/blog/r6-elite/': '/blog/r6-elite-tier/',
  '/blog/r6-skin-changer-guide/': '/blog/r6-loadouts/',
  '/blog/r6-features/': '/blog/r6-cheat-features/',
  '/blog/r6-practice-lobby/': '/blog/r6-training-grounds-practice/',
  '/blog/battleye-patch-checklist/': '/blog/battleye-patch/',
  '/blog/apex-ac-patch/': '/blog/battleye-patch/',
  '/blog/apex-ac-r6-guide/': '/blog/battleye-fix/',
  '/blog/apex-ac-fix/': '/blog/battleye-fix/',

  '/forum/how-to-enable-the-r6-console/': '/forum/r6-console-commands-forum/',
  '/forum/what-to-check-after-a-r6-patch/': '/forum/after-r6-patch/',
  '/forum/r6-lite-or-pro-tier-comparison/': '/forum/lite-vs-pro/',
  '/forum/how-to-choose-r6-product-tier/': '/forum/choose-r6-tier/',
};