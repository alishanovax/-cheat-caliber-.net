/**
 * cheatapex.net → cheattarkov.net (Caliber)
 * Run: node scripts/rebrand-cheattarkov.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

const TARKOV_CHECKOUT =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fcaliber-novaxware&sf=zadeyo';

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

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro', 'rebrand-cheattarkov.mjs']);

const REPLACEMENTS = [
  [TARKOV_CHECKOUT.replace('escape-from-tarkov', 'apex-legends'), TARKOV_CHECKOUT],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fcaliber-novaxware&sf=zadeyo', TARKOV_CHECKOUT],
  ['%2Fproducts%2Fcaliber-novaxware', '%2Fproducts%2Fcaliber-novaxware'],
  ['https://cheatapex.net', 'https://cheattarkov.net'],
  ['cheatapex.net', 'cheattarkov.net'],
  ['cheatapex-net', 'cheatcaliber-net'],
  ['cheatapex-2026', 'cheatcaliber-2026'],
  ['name = "cheatapex-net"', 'name = "cheatcaliber-net"'],
  ['"name": "cheatapex-net"', '"name": "cheatcaliber-net"'],
  ['Return to cheatapex.net homepage', 'Return to cheattarkov.net homepage'],
  ['caliberCheatsLanding', 'caliberCheatsLanding'],
  ['zadeyoCaliberProductSeo', 'zadeyoCaliberProductSeo'],
  ['CALIBER_CHECKOUT_URL', 'CALIBER_CHECKOUT_URL'],
  ['/caliber-cheats/', '/caliber-cheats/'],
  ['/caliber-cheats', '/caliber-cheats'],
  ['/products/caliber/', '/products/caliber/'],
  ['/products/caliber', '/products/caliber'],
  ['/go/caliber/', '/go/caliber/'],
  ['/go/caliber', '/go/caliber'],
  ['caliber-cheats', 'caliber-cheats'],
  ["checkoutPath('caliber')", "checkoutPath('caliber')"],
  ['checkoutPath("caliber")', 'checkoutPath("caliber")'],
  ['checkoutPath(`apex`)', 'checkoutPath(`tarkov`)'],
  ["product: 'caliber'", "product: 'caliber'"],
  ['  caliber:', '  caliber:'],
  ["checkoutForSlug(_slug: string): string {\n  return CHECKOUT.caliber;", "checkoutForSlug(_slug: string): string {\n  return CHECKOUT.caliber;"],
  ["return CHECKOUT.caliber;", 'return CHECKOUT.caliber;'],
  ['PRIMARY_CHECKOUT_PATH = checkoutPath(\'apex\')', "PRIMARY_CHECKOUT_PATH = checkoutPath('caliber')"],
  ["CheckoutProduct = 'apex'", "CheckoutProduct = 'caliber'"],
  ['apex: \'apex\'', "caliber: 'caliber'"],
  ['_product: CheckoutProduct = \'apex\'', "_product: CheckoutProduct = 'caliber'"],
  ["TITLE_PREFIX = 'Caliber Cheats'", "TITLE_PREFIX = 'Caliber Cheats'"],
  ["PRODUCT_BASE = '/products/caliber/'", "PRODUCT_BASE = '/products/caliber/'"],
  ['/blog/apex-', '/blog/caliber-'],
  ['slug: "apex-', 'slug: "caliber-'],
  ["slug: 'apex-", "slug: 'caliber-"],
  ['buy-caliber-cheats', 'buy-caliber-cheats'],
  ['caliber-lite-vs-pro', 'caliber-lite-vs-pro'],
  ['caliber-training-practice', 'caliber-training-practice'],
  ['caliber-training-tips', 'caliber-training-tips'],
  ['caliber-esp-setup', 'caliber-esp-setup'],
  ['caliber-map-awareness', 'caliber-map-awareness'],
  ['caliber-aimbot-matches', 'caliber-aimbot-matches'],
  ['caliber-aimbot-combat', 'caliber-aimbot-combat'],
  ['caliber-stream-proof', 'caliber-stream-proof'],
  ['caliber-elite-tier', 'caliber-elite-tier'],
  ['caliber-cheat-features', 'caliber-cheat-features'],
  ['caliber-hwid-ban', 'caliber-hwid-ban'],
  ['caliber-external-loader', 'caliber-external-loader'],
  ['caliber-loadouts', 'caliber-loadouts'],
  ['caliber-cheat-setup', 'caliber-cheat-setup'],
  ['caliber-practice-settings', 'caliber-practice-settings'],
  ['caliber-practice-settings-forum', 'caliber-practice-settings-forum'],
  ['after-caliber-patch', 'after-caliber-patch'],
  ['caliber-positioning', 'caliber-positioning'],
  ['caliber-aim-practice', 'caliber-aim-practice'],
  ['caliber-map-awareness', 'caliber-map-awareness'],
  ['choose-caliber-tier', 'choose-caliber-tier'],
  ['anti-cheat-patch-day', 'anti-cheat-patch-day'],
  ['anti-cheat-troubleshooting', 'anti-cheat-troubleshooting'],
  ['anti-cheat-verify', 'anti-cheat-verify'],
  ['anti-cheat', 'anti-cheat'],
  ['anti-cheat', 'anti-cheat'],
  ['BattlEye and game integrity', 'anti-cheat'],
  ['EAC', 'anti-cheat'],
  ['Caliber Cheats', 'Caliber Cheats'],
  ['Caliber cheats', 'Caliber cheats'],
  ['Caliber cheat', 'Caliber cheat'],
  ['Caliber', 'Caliber'],
  ['Lite', 'Tarkov Lite'],
  ['Pro', 'Tarkov Pro'],
  ['Elite', 'Tarkov Elite'],
  ['Caliber aimbot', 'tarkov aimbot'],
  ['Caliber ESP', 'tarkov ESP'],
  ['Caliber ability ESP', 'tarkov ability ESP'],
  ['Caliber recoil control', 'tarkov recoil control'],
  ['Caliber compatibility', 'tarkov compatibility'],
  ['Caliber team fight', 'Caliber team fight'],
  ['Caliber team fight', 'Caliber firefight'],
  ['operator ESP', 'operator ESP'],
  ['operator ESP', 'operator ESP'],
  ['loadout', 'operator loadout'],
  ['per-map', 'per-map'],
  ['maps and objective pressure', 'maps and objective pressure'],
  ['Legends', 'operator loadouts'],
  ['map-specific', 'map-specific'],
  ['game account', 'game account'],
  ['EA', 'BSG'],
  ['Practice', 'training mode'],
  ['training mode', 'training mode'],
  ['Competitive', 'PvP raid'],
  ['Competitive', 'SCAV run'],
  ['Uncompetitive', 'customs'],
  ['objective points', 'objective points'],
  ['Caliber <span class="site-brand__pill-accent">Cheats</span>', 'Tarkov <span class="site-brand__pill-accent">Cheats</span>'],
  ['Caliber <span class="site-brand__title-accent">Cheats</span>', 'Tarkov <span class="site-brand__title-accent">Cheats</span>'],
  ['Caliber PC — Aimbot, ESP & map overlay tools', 'Caliber PC — aimbot, ESP & equipment tools'],
  ['aria-label="Caliber Cheats"', 'aria-label="Caliber Cheats"'],
  ['>C</text>', '>T</text>'],
  ['apex-', 'caliber-'],
];

const TARKOV_IMAGE_URLS = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/17b9a1bf-b085-4c30-aa99-c77f87181cc5/1794424763252-8qceyr-tactical-warehouse-sightline.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/1242b160-0414-44df-95cc-e45319c48f50/1793307628422-9j1iot-screenshot-4.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/1242b160-0414-44df-95cc-e45319c48f50/1793307591652-6qaoq7-screenshot-2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793194009013-kv4lg6-ancient-eft-s1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793194011207-1r44jj-ancient-eft-s2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/1242b160-0414-44df-95cc-e45319c48f50/1793307633984-x6203s-screenshot-5.webp',
];

const IMAGE_ALTS = [
  'Caliber tactical warehouse interior with sight lines on PC',
  'Caliber raid screenshot with full HUD on PC',
  'Caliber in-match combat screenshot on PC',
  'Caliber raid scene with equipment and environment detail on PC',
  'Caliber tactical movement in a raid on PC',
  'Caliber product-style in-match view on PC',
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
    '/** Approved Caliber media — only these remote URLs are used site-wide. */',
    'export interface SiteCheatImage {',
    '  src: string;',
    '  alt: string;',
    '}',
    '',
    'const CALIBER_MEDIA = [',
    ...TARKOV_IMAGE_URLS.map((u) => `  '${u}',`),
    '] as const;',
    '',
    'export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [',
    ...TARKOV_IMAGE_URLS.map(
      (src, i) => `  {\n    src: CALIBER_MEDIA[${i}],\n    alt: '${IMAGE_ALTS[i]}',\n  },`,
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
export const CALIBER_CHECKOUT_URL =
  '${TARKOV_CHECKOUT}';

export const CHECKOUT_URLS = {
  caliber: CALIBER_CHECKOUT_URL,
  skinChanger: CALIBER_CHECKOUT_URL,
  hwidSpoofer: CALIBER_CHECKOUT_URL,
  ugc: CALIBER_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/caliber', CHECKOUT_URLS.tarkov],
  ['/go/caliber/', CHECKOUT_URLS.tarkov],
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
export const FAVICON_VERSION = 'cheatcaliber-2026';

export const SITE_DOMAIN = 'cheattarkov.net';
export const SITE_URL = \`https://\${SITE_DOMAIN}\`;
export const PRODUCT_BASE = '/products/caliber/';
export const TITLE_PREFIX = 'Caliber Cheats';
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
    svg = svg.replace(/Caliber Cheats/g, 'Caliber Cheats');
    svg = svg.replace(/(\n\s*fill="#F5F7FA"\s*\n\s*>)[A](<\/text>)/, '$1T$2');
    fs.writeFileSync(file, svg, 'utf8');
  }
}

// File / directory renames
renameIfExists('src/data/caliberCheatsLanding.ts', 'src/data/caliberCheatsLanding.ts');
renameIfExists('src/config/zadeyoCaliberProductSeo.ts', 'src/config/zadeyoCaliberProductSeo.ts');
renameIfExists('src/pages/go/caliber', 'src/pages/go/caliber');
renameIfExists('src/pages/caliber-cheats', 'src/pages/caliber-cheats');
renameIfExists('src/pages/products/caliber', 'src/pages/products/caliber');

patchSiteImages();
patchCheckoutRedirects();
patchSiteTs();
patchFavicons();

const files = walk(root).filter((f) => TEXT_EXTS.has(path.extname(f).toLowerCase()));
let changed = 0;
for (const file of files) {
  if (file.includes('rebrand-cheattarkov.mjs')) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = applyText(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
  }
}

console.log(`Done. Updated ${changed} text files.`);
