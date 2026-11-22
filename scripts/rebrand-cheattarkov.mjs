/**
 * cheatapex.net → cheattarkov.net (Escape from Tarkov)
 * Run: node scripts/rebrand-cheattarkov.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

const TARKOV_CHECKOUT =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fescape-from-tarkov';

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
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fr6-faceit', TARKOV_CHECKOUT],
  ['%2Fproducts%2Fr6-faceit', '%2Fproducts%2Fescape-from-tarkov'],
  ['https://cheatapex.net', 'https://cheattarkov.net'],
  ['cheatapex.net', 'cheattarkov.net'],
  ['cheatapex-net', 'cheattarkov-net'],
  ['cheatapex-2026', 'cheattarkov-2026'],
  ['name = "cheatapex-net"', 'name = "cheattarkov-net"'],
  ['"name": "cheatapex-net"', '"name": "cheattarkov-net"'],
  ['Return to cheatapex.net homepage', 'Return to cheattarkov.net homepage'],
  ['r6CheatsLanding', 'tarkovCheatsLanding'],
  ['zadeyoR6ProductSeo', 'zadeyoTarkovProductSeo'],
  ['R6_CHECKOUT_URL', 'TARKOV_CHECKOUT_URL'],
  ['/r6-cheats/', '/escape-from-tarkov-cheats/'],
  ['/r6-cheats', '/escape-from-tarkov-cheats'],
  ['/products/r6/', '/products/tarkov/'],
  ['/products/r6', '/products/tarkov'],
  ['/go/r6/', '/go/tarkov/'],
  ['/go/r6', '/go/tarkov'],
  ['r6-cheats', 'escape-from-tarkov-cheats'],
  ["checkoutPath('r6')", "checkoutPath('tarkov')"],
  ['checkoutPath("r6")', 'checkoutPath("tarkov")'],
  ['checkoutPath(`apex`)', 'checkoutPath(`tarkov`)'],
  ["product: 'r6'", "product: 'tarkov'"],
  ['  r6:', '  tarkov:'],
  ["checkoutForSlug(_slug: string): string {\n  return CHECKOUT.r6;", "checkoutForSlug(_slug: string): string {\n  return CHECKOUT.tarkov;"],
  ["return CHECKOUT.r6;", 'return CHECKOUT.tarkov;'],
  ['PRIMARY_CHECKOUT_PATH = checkoutPath(\'apex\')', "PRIMARY_CHECKOUT_PATH = checkoutPath('tarkov')"],
  ["CheckoutProduct = 'apex'", "CheckoutProduct = 'tarkov'"],
  ['apex: \'apex\'', "tarkov: 'tarkov'"],
  ['_product: CheckoutProduct = \'apex\'', "_product: CheckoutProduct = 'tarkov'"],
  ["TITLE_PREFIX = 'R6 Cheat'", "TITLE_PREFIX = 'Escape from Tarkov Cheats'"],
  ["PRODUCT_BASE = '/products/r6/'", "PRODUCT_BASE = '/products/tarkov/'"],
  ['/blog/apex-', '/blog/tarkov-'],
  ['slug: "apex-', 'slug: "tarkov-'],
  ["slug: 'apex-", "slug: 'tarkov-"],
  ['buy-r6-cheats', 'buy-escape-from-tarkov-cheats'],
  ['r6-lite-vs-pro', 'tarkov-lite-vs-pro'],
  ['r6-training-grounds-practice', 'tarkov-offline-practice'],
  ['r6-training-tips', 'tarkov-training-tips'],
  ['r6-esp-setup', 'tarkov-esp-setup'],
  ['r6-radar', 'tarkov-radar'],
  ['r6-aimbot-ranked', 'tarkov-aimbot-raids'],
  ['r6-aimbot-combat', 'tarkov-aimbot-combat'],
  ['r6-stream-proof', 'tarkov-stream-proof'],
  ['r6-elite-tier', 'tarkov-elite-tier'],
  ['r6-cheat-features', 'tarkov-cheat-features'],
  ['r6-hwid-ban', 'tarkov-hwid-ban'],
  ['r6-external-loader', 'tarkov-external-loader'],
  ['r6-loadouts', 'tarkov-loadouts'],
  ['r6-cheat-setup', 'tarkov-cheat-setup'],
  ['r6-console-commands', 'tarkov-practice-settings'],
  ['r6-console-commands-forum', 'tarkov-practice-settings-forum'],
  ['after-r6-patch', 'after-tarkov-patch'],
  ['r6-high-ground', 'tarkov-positioning'],
  ['r6-aim-practice', 'tarkov-aim-practice'],
  ['r6-map-awareness', 'tarkov-map-awareness'],
  ['choose-r6-tier', 'choose-tarkov-tier'],
  ['eac-patch-day', 'battleye-patch-day'],
  ['eac-troubleshooting', 'battleye-troubleshooting'],
  ['eac-verify', 'battleye-verify'],
  ['BattlEye', 'BattlEye'],
  ['BattlEye', 'BattlEye'],
  ['Easy anti-cheat', 'BattlEye'],
  ['EAC', 'BattlEye'],
  ['R6 Cheat', 'Escape from Tarkov Cheats'],
  ['Rainbow Six Siege cheats', 'Escape from Tarkov cheats'],
  ['Rainbow Six Siege cheat', 'Escape from Tarkov cheat'],
  ['Tom Clancy's Rainbow Six Siege', 'Escape from Tarkov'],
  ['R6 Lite', 'Tarkov Lite'],
  ['R6 Pro', 'Tarkov Pro'],
  ['R6 Elite', 'Tarkov Elite'],
  ['R6 aimbot', 'tarkov aimbot'],
  ['R6 ESP', 'tarkov ESP'],
  ['R6 gadget ESP', 'tarkov gadget ESP'],
  ['R6 recoil control', 'tarkov recoil control'],
  ['R6 compatibility', 'tarkov compatibility'],
  ['R6 firefight', 'Tarkov raid combat'],
  ['R6 firefight', 'Tarkov firefight'],
  ['operator ESP', 'operator ESP'],
  ['operator ESP', 'PMC and operator ESP'],
  ['loadout', 'PMC loadout'],
  ['per-map', 'per-map'],
  ['round economy and site pressure', 'raid maps and extraction pressure'],
  ['Legends', 'PMC loadouts'],
  ['map-specific', 'map-specific'],
  ['Ubisoft account', 'Ubisoft account'],
  ['EA', 'BSG'],
  ['Training Grounds', 'offline raid'],
  ['training grounds', 'offline raid'],
  ['Ranked', 'PMC raid'],
  ['Ranked', 'SCAV run'],
  ['Unranked', 'customs'],
  ['bombsites', 'extract points'],
  ['R6 Siege <span class="site-brand__pill-accent">Cheats</span>', 'Tarkov <span class="site-brand__pill-accent">Cheats</span>'],
  ['R6 Siege <span class="site-brand__title-accent">Cheats</span>', 'Tarkov <span class="site-brand__title-accent">Cheats</span>'],
  ['Tom Clancy's Rainbow Six Siege PC — Aimbot, ESP & radar tools', 'Escape from Tarkov PC — aimbot, ESP & loot tools'],
  ['aria-label="R6 Cheat"', 'aria-label="Escape from Tarkov Cheats"'],
  ['>R</text>', '>T</text>'],
  ['apex-', 'tarkov-'],
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
  'Escape from Tarkov tactical warehouse interior with sight lines on PC',
  'Escape from Tarkov raid screenshot with full HUD on PC',
  'Escape from Tarkov in-raid combat screenshot on PC',
  'Escape from Tarkov raid scene with equipment and environment detail on PC',
  'Escape from Tarkov tactical movement in a raid on PC',
  'Escape from Tarkov product-style in-match view on PC',
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
    '/** Approved Escape from Tarkov media — only these remote URLs are used site-wide. */',
    'export interface SiteCheatImage {',
    '  src: string;',
    '  alt: string;',
    '}',
    '',
    'const TARKOV_MEDIA = [',
    ...TARKOV_IMAGE_URLS.map((u) => `  '${u}',`),
    '] as const;',
    '',
    'export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [',
    ...TARKOV_IMAGE_URLS.map(
      (src, i) => `  {\n    src: TARKOV_MEDIA[${i}],\n    alt: '${IMAGE_ALTS[i]}',\n  },`,
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
export const TARKOV_CHECKOUT_URL =
  '${TARKOV_CHECKOUT}';

export const CHECKOUT_URLS = {
  tarkov: TARKOV_CHECKOUT_URL,
  skinChanger: TARKOV_CHECKOUT_URL,
  hwidSpoofer: TARKOV_CHECKOUT_URL,
  ugc: TARKOV_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/tarkov', CHECKOUT_URLS.tarkov],
  ['/go/tarkov/', CHECKOUT_URLS.tarkov],
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
export const FAVICON_VERSION = 'cheattarkov-2026';

export const SITE_DOMAIN = 'cheattarkov.net';
export const SITE_URL = \`https://\${SITE_DOMAIN}\`;
export const PRODUCT_BASE = '/products/tarkov/';
export const TITLE_PREFIX = 'Escape from Tarkov Cheats';
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
    svg = svg.replace(/R6 Cheat/g, 'Escape from Tarkov Cheats');
    svg = svg.replace(/(\n\s*fill="#F5F7FA"\s*\n\s*>)[A](<\/text>)/, '$1T$2');
    fs.writeFileSync(file, svg, 'utf8');
  }
}

// File / directory renames
renameIfExists('src/data/r6CheatsLanding.ts', 'src/data/tarkovCheatsLanding.ts');
renameIfExists('src/config/zadeyoR6ProductSeo.ts', 'src/config/zadeyoTarkovProductSeo.ts');
renameIfExists('src/pages/go/r6', 'src/pages/go/tarkov');
renameIfExists('src/pages/r6-cheats', 'src/pages/escape-from-tarkov-cheats');
renameIfExists('src/pages/products/r6', 'src/pages/products/tarkov');

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
