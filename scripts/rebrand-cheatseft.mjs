/**
 * rivalscheat.net → cheatseft.org (Escape from Tarkov — EFT Cheats)
 * Run: node scripts/rebrand-cheatseft.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

const TARKOV_CHECKOUT =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fescape-from-tarkov&sf=zadeyo';

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
  [
    'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fescape-from-tarkov',
    TARKOV_CHECKOUT,
  ],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fmarvel-rivals&sf=zadeyo', TARKOV_CHECKOUT],
  ['%2Fproducts%2Fmarvel-rivals', '%2Fproducts%2Fescape-from-tarkov'],
  ['https://rivalscheat.net', 'https://cheatseft.org'],
  ['rivalscheat.net', 'cheatseft.org'],
  ['rivalscheat', 'cheatseft'],
  ['r6-cheat-com', 'cheatseft-org'],
  ['name = "r6-cheat-com"', 'name = "cheatseft-org"'],
  ['"name": "r6-cheat-com"', '"name": "cheatseft-org"'],
  ['Return to rivalscheat.net homepage', 'Return to cheatseft.org homepage'],
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
  ["product: 'r6'", "product: 'tarkov'"],
  ['  r6:', '  tarkov:'],
  [
    "checkoutForSlug(_slug: string): string {\n  return CHECKOUT.r6;",
    "checkoutForSlug(_slug: string): string {\n  return CHECKOUT.tarkov;",
  ],
  ['return CHECKOUT.r6;', 'return CHECKOUT.tarkov;'],
  ["PRIMARY_CHECKOUT_PATH = checkoutPath('r6')", "PRIMARY_CHECKOUT_PATH = checkoutPath('tarkov')"],
  ["CheckoutProduct = 'r6'", "CheckoutProduct = 'tarkov'"],
  ['r6: \'r6\'', "tarkov: 'tarkov'"],
  ["_product: CheckoutProduct = 'r6'", "_product: CheckoutProduct = 'tarkov'"],
  ["TITLE_PREFIX = 'Rivals Cheat'", "TITLE_PREFIX = 'EFT Cheats'"],
  ["PRODUCT_BASE = '/products/r6/'", "PRODUCT_BASE = '/products/tarkov/'"],
  ['/blog/r6-', '/blog/tarkov-'],
  ['slug: "r6-', 'slug: "tarkov-'],
  ["slug: 'r6-", "slug: 'tarkov-"],
  ['buy-r6-cheats', 'buy-escape-from-tarkov-cheats'],
  ['r6-lite-vs-pro', 'tarkov-lite-vs-pro'],
  ['r6-training-grounds-practice', 'tarkov-offline-practice'],
  ['r6-training-tips', 'tarkov-training-tips'],
  ['r6-esp-setup', 'tarkov-esp-setup'],
  ['r6-radar', 'tarkov-zone-map'],
  ['r6-aimbot-competitive', 'tarkov-aimbot-raids'],
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
  ['eac-patch-day', 'anti-cheat-patch-day'],
  ['eac-troubleshooting', 'anti-cheat-troubleshooting'],
  ['eac-verify', 'anti-cheat-verify'],
  ['Easy anti-cheat', 'BattlEye and game integrity'],
  ['Rivals Cheat', 'EFT Cheats'],
  ['Rivals <span class="site-brand__pill-accent">Cheat</span>', 'EFT <span class="site-brand__pill-accent">Cheats</span>'],
  ['Rivals <span class="site-brand__title-accent">Cheat</span>', 'EFT <span class="site-brand__title-accent">Cheats</span>'],
  ['Marvel Rivals cheats', 'Escape from Tarkov cheats'],
  ['Marvel Rivals cheat', 'Escape from Tarkov cheat'],
  ['Marvel Rivals', 'Escape from Tarkov'],
  ['Marvel Rivals <span class="site-brand__pill-accent">Cheats</span>', 'EFT <span class="site-brand__pill-accent">Cheats</span>'],
  ['Marvel Rivals <span class="site-brand__title-accent">Cheats</span>', 'EFT <span class="site-brand__title-accent">Cheats</span>'],
  ['Marvel Rivals PC — Aimbot, ESP & map overlay tools', 'Escape from Tarkov PC — aimbot, ESP & loot ESP'],
  ['aria-label="Rivals Cheat"', 'aria-label="EFT Cheats"'],
  ['Marvel Rivals on PC — aimbot, ESP & config tools', 'Escape from Tarkov on PC — aimbot, ESP & raid tools'],
  ['>M</text>', '>E</text>'],
  ['r6-', 'tarkov-'],
  ['R6 firefight', 'Tarkov raid combat'],
  ['hero ESP', 'PMC and scav ESP'],
  ['round economy and site pressure', 'raid maps and extraction pressure'],
  ['Ubisoft account', 'BSG account'],
  ['training grounds', 'offline raid mode'],
  ['objectives', 'extract points'],
  ['%2Fproducts%2Fr6-faceit', '%2Fproducts%2Fescape-from-tarkov'],
  ['%2Fproducts%2Fr6-legends', '%2Fproducts%2Fescape-from-tarkov'],
];

const TARKOV_IMAGE_URLS = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/a9f4c0ff-33ca-4a16-975b-30648c04cb8c/1794650282570-d0xc5g-first-person-warehouse-esp-encounter.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/a9f4c0ff-33ca-4a16-975b-30648c04cb8c/1794650292268-rx58dc-images.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793194009013-kv4lg6-ancient-eft-s1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793194011207-1r44jj-ancient-eft-s2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/1242b160-0414-44df-95cc-e45319c48f50/1793307615366-ow9g1a-screenshot-3.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/1242b160-0414-44df-95cc-e45319c48f50/1793307655446-h9o00o-screenshot-7.webp',
];

const IMAGE_ALTS = [
  'Escape from Tarkov first-person warehouse raid with ESP encounter on PC',
  'Escape from Tarkov in-raid HUD and tactical overlay on PC',
  'Escape from Tarkov raid scene with PMC gear and environment detail on PC',
  'Escape from Tarkov tactical movement through a raid location on PC',
  'Escape from Tarkov product-style in-match screenshot on PC',
  'Escape from Tarkov combat screenshot with loot and extraction context on PC',
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
export const FAVICON_VERSION = 'cheatseft-e-2026';

export const SITE_DOMAIN = 'cheatseft.org';
export const SITE_URL = \`https://\${SITE_DOMAIN}\`;
export const PRODUCT_BASE = '/products/tarkov/';
export const TITLE_PREFIX = 'EFT Cheats';
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
    svg = svg.replace(/Rivals Cheat/g, 'EFT Cheats');
    svg = svg.replace(/aria-label="[^"]*"/g, 'aria-label="EFT Cheats"');
    svg = svg.replace(/(fill="#F5F7FA"\s*\n\s*>)[A-Z](<\/text>)/, '$1E$2');
    fs.writeFileSync(file, svg, 'utf8');
  }
}

function patchRedirects() {
  const file = path.join(root, 'public', '_redirects');
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /https:\/\/zadeyo\.com\/go\/ALISHA\?to=%2Fproducts%2F[^ \n]+/g,
    TARKOV_CHECKOUT,
  );
  content = content.replaceAll('/products/r6/', '/products/tarkov/');
  content = content.replaceAll('/r6-cheats', '/escape-from-tarkov-cheats');
  content = content.replaceAll('/blog/r6-', '/blog/tarkov-');
  fs.writeFileSync(file, content, 'utf8');
  console.log('patched public/_redirects');
}

function patchRobots() {
  const file = path.join(root, 'public', 'robots.txt');
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replaceAll('rivalscheat.net', 'cheatseft.org');
  fs.writeFileSync(file, content, 'utf8');
}

function patchWebManifest() {
  const file = path.join(root, 'public', 'site.webmanifest');
  if (!fs.existsSync(file)) return;
  const manifest = {
    name: 'EFT Cheats',
    short_name: 'EFT Cheats',
    description:
      'Escape from Tarkov PC cheats: aimbot, ESP, loot ESP, and raid tools on cheatseft.org.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#111215',
    theme_color: '#2d6ee2',
    lang: 'en-US',
    icons: [
      { src: '/favicon.ico', sizes: '48x48 32x32', type: 'image/x-icon' },
      { src: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { src: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      {
        src: '/favicon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  };
  fs.writeFileSync(file, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
}

renameIfExists('src/data/r6CheatsLanding.ts', 'src/data/tarkovCheatsLanding.ts');
renameIfExists('src/config/zadeyoR6ProductSeo.ts', 'src/config/zadeyoTarkovProductSeo.ts');
renameIfExists('src/pages/go/r6', 'src/pages/go/tarkov');
renameIfExists('src/pages/r6-cheats', 'src/pages/escape-from-tarkov-cheats');
renameIfExists('src/pages/products/r6', 'src/pages/products/tarkov');

patchSiteImages();
patchCheckoutRedirects();
patchSiteTs();
patchFavicons();
patchRedirects();
patchRobots();
patchWebManifest();

const files = walk(root).filter((f) => TEXT_EXTS.has(path.extname(f).toLowerCase()));
let changed = 0;
for (const file of files) {
  if (file.includes('rebrand-cheatseft.mjs')) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = applyText(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
  }
}

console.log(`Done. Updated ${changed} text files.`);