/**
 * cheattarkov.net → cheatsrobrun.net (RobRun)
 * Run: node scripts/rebrand-robrun.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

const ROBRUN_CHECKOUT = 'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Frobrun';

const ROBRUN_IMAGE_URLS = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/rob-run/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794517330812-w1i7jp-neryz-rob-run-cheats-trying-out-the-most-insane-rob-run-cheat-is-it-worth-it-ffu.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/rob-run/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794517311651-qos8ff-neryz-rob-run-cheats-trying-out-the-most-insane-rob-run-cheat-is-it-worth-it-ffu.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/rob-run/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794517290334-1gs3l9-neryz-rob-run-cheats-trying-out-the-most-insane-rob-run-cheat-is-it-worth-it-ffu.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/rob-run/02ab714e-de37-423b-81f2-afd7f7fd8d28/1794486558855-gfdg64-1.webp',
];

const IMAGE_ALTS = [
  'RobRun gameplay view with cheat overlay on PC',
  'RobRun in-match screenshot showing ESP features on PC',
  'RobRun combat moment with on-screen cheat tools on PC',
  'RobRun product preview image on PC',
];

const TEXT_EXTS = new Set([
  '.ts',
  '.tsx',
  '.astro',
  '.mjs',
  '.js',
  '.json',
  '.md',
  '.txt',
  '.svg',
  '.html',
  '.webmanifest',
  '.css',
  '.toml',
  '.xml',
]);

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro']);

const REPLACEMENTS = [
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fcaliber-novaxware&sf=zadeyo', ROBRUN_CHECKOUT],
  ['%2Fproducts%2Fcaliber-novaxware', '%2Fproducts%2Frobrun'],
  ['https://cheattarkov.net', 'https://cheatsrobrun.net'],
  ['cheattarkov.net', 'cheatsrobrun.net'],
  ['cheatcaliber-net', 'cheatsrobrun-net'],
  ['cheatcaliber-t-2026', 'cheatsrobrun-r-2026'],
  ['cheatcaliber-2026', 'cheatsrobrun-r-2026'],
  ['cheatcaliber-forum-vote:', 'cheatsrobrun-forum-vote:'],
  ['caliberCheatsLanding', 'robrunCheatsLanding'],
  ['zadeyoCaliberProductSeo', 'zadeyoRobrunProductSeo'],
  ['ZADEYO_CALIBER_CHECKOUT_URL', 'ZADEYO_ROBRUN_CHECKOUT_URL'],
  ['CALIBER_CHECKOUT_URL', 'ROBRUN_CHECKOUT_URL'],
  ['/caliber-cheats/', '/robrun-cheats/'],
  ['/caliber-cheats', '/robrun-cheats'],
  ['caliber-cheats', 'robrun-cheats'],
  ['/products/caliber/', '/products/robrun/'],
  ['/products/caliber', '/products/robrun'],
  ['/go/caliber/', '/go/robrun/'],
  ['/go/caliber', '/go/robrun'],
  ["checkoutPath('caliber')", "checkoutPath('robrun')"],
  ['checkoutPath("caliber")', 'checkoutPath("robrun")'],
  ["product: 'caliber'", "product: 'robrun'"],
  ['  caliber:', '  robrun:'],
  ["return CHECKOUT.caliber;", 'return CHECKOUT.robrun;'],
  ["PRIMARY_CHECKOUT_PATH = checkoutPath('caliber')", "PRIMARY_CHECKOUT_PATH = checkoutPath('robrun')"],
  ["CheckoutProduct = 'caliber'", "CheckoutProduct = 'robrun'"],
  ["_product: CheckoutProduct = 'caliber'", "_product: CheckoutProduct = 'robrun'"],
  ["PRODUCT_BASE = '/products/caliber/'", "PRODUCT_BASE = '/products/robrun/'"],
  ['Caliber Cheats', 'RobRun Cheats'],
  ['Caliber cheats', 'RobRun cheats'],
  ['Caliber cheat', 'RobRun cheat'],
  ['Caliber', 'RobRun'],
  ['Tarkov Lite', 'RobRun Lite'],
  ['Tarkov Pro', 'RobRun Pro'],
  ['Tarkov Elite', 'RobRun Elite'],
  ['/blog/caliber-', '/blog/robrun-'],
  ['slug: "caliber-', 'slug: "robrun-'],
  ["slug: 'caliber-", "slug: 'robrun-"],
  ['caliber-lite-vs-pro', 'robrun-lite-vs-pro'],
  ['caliber-firing-range-practice', 'robrun-practice-tips'],
  ['caliber-training-tips', 'robrun-training-tips'],
  ['caliber-training-practice', 'robrun-practice-tips'],
  ['caliber-esp-setup', 'robrun-esp-setup'],
  ['caliber-map-awareness', 'robrun-radar'],
  ['caliber-aimbot-matches', 'robrun-aimbot-guide'],
  ['caliber-aimbot-combat', 'robrun-aimbot-combat'],
  ['caliber-stream-proof', 'robrun-stream-proof'],
  ['caliber-elite-tier', 'robrun-elite-tier'],
  ['caliber-cheat-features', 'robrun-cheat-features'],
  ['caliber-hwid-ban', 'robrun-hwid-ban'],
  ['caliber-external-loader', 'robrun-external-loader'],
  ['caliber-loadouts', 'robrun-loadouts'],
  ['caliber-cheat-setup', 'robrun-cheat-setup'],
  ['caliber-practice-settings', 'robrun-practice-settings'],
  ['caliber-practice-settings-forum', 'robrun-practice-settings-forum'],
  ['after-caliber-patch', 'after-robrun-patch'],
  ['caliber-positioning', 'robrun-positioning'],
  ['caliber-aim-practice', 'robrun-aim-practice'],
  ['caliber-map-awareness', 'robrun-map-awareness'],
  ['choose-caliber-tier', 'choose-robrun-tier'],
  ['tarkov aimbot', 'robrun aimbot'],
  ['tarkov ESP', 'robrun ESP'],
  ['tarkov ability ESP', 'robrun ability ESP'],
  ['tarkov recoil control', 'robrun recoil control'],
  ['tarkov compatibility', 'robrun compatibility'],
  ['Tarkov <span class="site-brand__pill-accent">Cheats</span>', 'RobRun <span class="site-brand__pill-accent">Cheats</span>'],
  ['Tarkov <span class="site-brand__title-accent">Cheats</span>', 'RobRun <span class="site-brand__title-accent">Cheats</span>'],
  ['Caliber PC — aimbot, ESP & equipment tools', 'RobRun PC — aimbot, ESP & config tools'],
  ['Return to cheattarkov.net homepage', 'Return to cheatsrobrun.net homepage'],
  ['Return to cheatsrobrun.net homepage', 'Return to cheatsrobrun.net homepage'],
  ['@cheattarkov', '@cheatsrobrun'],
  ['cheattarkov', 'cheatsrobrun'],
  ['Tarkov', 'RobRun'],
  ['caliber-', 'robrun-'],
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function applyText(content) {
  let next = content;
  for (const [from, to] of REPLACEMENTS) {
    if (next.includes(from)) next = next.split(from).join(to);
  }
  return next;
}

function renameIfExists(fromRel, toRel) {
  const from = path.join(root, fromRel);
  const to = path.join(root, toRel);
  if (fs.existsSync(from)) {
    fs.mkdirSync(path.dirname(to), { recursive: true });
    if (fs.existsSync(to)) fs.rmSync(to, { recursive: true, force: true });
    fs.renameSync(from, to);
    console.log('renamed', fromRel, '→', toRel);
  }
}

function patchSiteImages() {
  const file = path.join(root, 'src', 'config', 'siteImages.ts');
  const lines = [
    '/** Approved RobRun media — only these remote URLs are used site-wide. */',
    'export interface SiteCheatImage {',
    '  src: string;',
    '  alt: string;',
    '}',
    '',
    'const ROBRUN_MEDIA = [',
    ...ROBRUN_IMAGE_URLS.map((u) => `  '${u}',`),
    '] as const;',
    '',
    'export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [',
    ...ROBRUN_IMAGE_URLS.map(
      (src, i) => `  {\n    src: ROBRUN_MEDIA[${i}],\n    alt: '${IMAGE_ALTS[i]}',\n  },`,
    ),
    '];',
    '',
    '/** Product detail screenshot carousel (three slides). */',
    'export const PRODUCT_GALLERY_IMAGES: SiteCheatImage[] = [',
    '  SITE_CHEAT_IMAGES[0]!,',
    '  SITE_CHEAT_IMAGES[1]!,',
    '  SITE_CHEAT_IMAGES[2]!,',
    '];',
    '',
    'export const PRIMARY_CHEAT_IMAGE = SITE_CHEAT_IMAGES[0]!.src;',
    '',
    'export function cheatImageForSlug(slug: string): string {',
    '  let hash = 0;',
    '  for (let i = 0; i < slug.length; i++) {',
    '    hash = (hash + slug.charCodeAt(i) * (i + 1)) % SITE_CHEAT_IMAGES.length;',
    '  }',
    '  return SITE_CHEAT_IMAGES[hash]!.src;',
    '}',
    '',
    'export function cheatImageAltForSrc(src: string): string {',
    '  return SITE_CHEAT_IMAGES.find((img) => img.src === src)?.alt ?? SITE_CHEAT_IMAGES[0]!.alt;',
    '}',
    '',
  ];
  fs.writeFileSync(file, lines.join('\n'), 'utf8');
  console.log('patched src/config/siteImages.ts');
}

function patchCheckoutRedirects() {
  const file = path.join(root, 'src', 'config', 'checkout-redirects.mjs');
  const content = `/** Primary Zadeyo affiliate checkout (go link + product path). */
export const ROBRUN_CHECKOUT_URL =
  '${ROBRUN_CHECKOUT}';

export const CHECKOUT_URLS = {
  robrun: ROBRUN_CHECKOUT_URL,
  skinChanger: ROBRUN_CHECKOUT_URL,
  hwidSpoofer: ROBRUN_CHECKOUT_URL,
  ugc: ROBRUN_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/robrun', CHECKOUT_URLS.robrun],
  ['/go/robrun/', CHECKOUT_URLS.robrun],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(\`\${pathname}/\`) ?? null;
  }

  return null;
}
`;
  fs.writeFileSync(file, content, 'utf8');
  console.log('patched checkout-redirects.mjs');
}

function patchSiteTs() {
  const file = path.join(root, 'src', 'config', 'site.ts');
  const content = `/** Bump when favicon assets change so browsers reload tab icons. */
export const FAVICON_VERSION = 'cheatsrobrun-r-2026';

export const SITE_DOMAIN = 'cheatsrobrun.net';
export const SITE_URL = \`https://\${SITE_DOMAIN}\`;
export const PRODUCT_BASE = '/products/robrun/';
export const TITLE_PREFIX = 'RobRun Cheats';
export const SUPPORT_EMAIL = \`support@\${SITE_DOMAIN}\`;
export const DISCORD_URL = 'https://discord.gg/Vu85F8auQS';
`;
  fs.writeFileSync(file, content, 'utf8');
}

function patchFavicons() {
  for (const name of ['favicon.svg', 'logo.svg']) {
    const file = path.join(root, 'public', name);
    if (!fs.existsSync(file)) continue;
    let svg = fs.readFileSync(file, 'utf8');
    svg = svg.replace(/Caliber Cheats/g, 'RobRun Cheats');
    svg = svg.replace(/RobRun Cheats/g, 'RobRun Cheats');
    svg = svg.replace(/(\n\s*fill="#F5F7FA"\s*\n\s*>)[T](<\/text>)/, '$1R$2');
    fs.writeFileSync(file, svg, 'utf8');
  }
}

function patchCheckoutTs() {
  const file = path.join(root, 'src', 'config', 'checkout.ts');
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /export const CHECKOUT_SLUGS[\s\S]*?};/,
    `export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  robrun: 'robrun',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};`,
  );
  fs.writeFileSync(file, content, 'utf8');
}

renameIfExists('src/data/caliberCheatsLanding.ts', 'src/data/robrunCheatsLanding.ts');
renameIfExists('src/config/zadeyoCaliberProductSeo.ts', 'src/config/zadeyoRobrunProductSeo.ts');
renameIfExists('src/pages/go/caliber', 'src/pages/go/robrun');
renameIfExists('src/pages/caliber-cheats', 'src/pages/robrun-cheats');
renameIfExists('src/pages/products/caliber', 'src/pages/products/robrun');

patchSiteImages();
patchCheckoutRedirects();
patchSiteTs();
patchFavicons();
patchCheckoutTs();

const files = walk(root).filter((f) => {
  if (f.includes('rebrand-cheattarkov.mjs') || f.includes('rebrand-robrun.mjs')) return false;
  return TEXT_EXTS.has(path.extname(f).toLowerCase());
});
let changed = 0;
for (const file of files) {
  const before = fs.readFileSync(file, 'utf8');
  const after = applyText(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
  }
}

console.log(`Done. Updated ${changed} text files.`);
