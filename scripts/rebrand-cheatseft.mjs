/**
 * rivalscheat.net → cheatcaliber.net (Caliber — Caliber Cheats)
 * Run: node scripts/rebrand-cheatseft.mjs
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

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro']);

const REPLACEMENTS = [
  [
    'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fcaliber-novaxware&sf=zadeyo',
    TARKOV_CHECKOUT,
  ],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fmarvel-rivals&sf=zadeyo', TARKOV_CHECKOUT],
  ['%2Fproducts%2Fmarvel-rivals', '%2Fproducts%2Fcaliber-novaxware'],
  ['https://rivalscheat.net', 'https://cheatcaliber.net'],
  ['rivalscheat.net', 'cheatcaliber.net'],
  ['rivalscheat', 'cheatseft'],
  ['r6-cheat-com', 'cheatcaliber-net'],
  ['name = "r6-cheat-com"', 'name = "cheatcaliber-net"'],
  ['"name": "r6-cheat-com"', '"name": "cheatcaliber-net"'],
  ['Return to rivalscheat.net homepage', 'Return to cheatcaliber.net homepage'],
  ['r6CheatsLanding', 'caliberCheatsLanding'],
  ['zadeyoR6ProductSeo', 'zadeyoCaliberProductSeo'],
  ['R6_CHECKOUT_URL', 'CALIBER_CHECKOUT_URL'],
  ['/r6-cheats/', '/caliber-cheats/'],
  ['/r6-cheats', '/caliber-cheats'],
  ['/products/r6/', '/products/caliber/'],
  ['/products/r6', '/products/caliber'],
  ['/go/r6/', '/go/caliber/'],
  ['/go/r6', '/go/caliber'],
  ['r6-cheats', 'caliber-cheats'],
  ["checkoutPath('r6')", "checkoutPath('caliber')"],
  ['checkoutPath("r6")', 'checkoutPath("caliber")'],
  ["product: 'r6'", "product: 'caliber'"],
  ['  r6:', '  caliber:'],
  [
    "checkoutForSlug(_slug: string): string {\n  return CHECKOUT.r6;",
    "checkoutForSlug(_slug: string): string {\n  return CHECKOUT.caliber;",
  ],
  ['return CHECKOUT.r6;', 'return CHECKOUT.caliber;'],
  ["PRIMARY_CHECKOUT_PATH = checkoutPath('r6')", "PRIMARY_CHECKOUT_PATH = checkoutPath('caliber')"],
  ["CheckoutProduct = 'r6'", "CheckoutProduct = 'caliber'"],
  ['r6: \'r6\'', "caliber: 'caliber'"],
  ["_product: CheckoutProduct = 'r6'", "_product: CheckoutProduct = 'caliber'"],
  ["TITLE_PREFIX = 'Rivals Cheat'", "TITLE_PREFIX = 'Caliber Cheats'"],
  ["PRODUCT_BASE = '/products/r6/'", "PRODUCT_BASE = '/products/caliber/'"],
  ['/blog/r6-', '/blog/caliber-'],
  ['slug: "r6-', 'slug: "caliber-'],
  ["slug: 'r6-", "slug: 'caliber-"],
  ['buy-r6-cheats', 'buy-caliber-cheats'],
  ['r6-lite-vs-pro', 'caliber-lite-vs-pro'],
  ['r6-training-grounds-practice', 'caliber-training-practice'],
  ['r6-training-tips', 'caliber-training-tips'],
  ['r6-esp-setup', 'caliber-esp-setup'],
  ['r6-radar', 'caliber-map-awareness'],
  ['r6-aimbot-competitive', 'caliber-aimbot-matches'],
  ['r6-aimbot-combat', 'caliber-aimbot-combat'],
  ['r6-stream-proof', 'caliber-stream-proof'],
  ['r6-elite-tier', 'caliber-elite-tier'],
  ['r6-cheat-features', 'caliber-cheat-features'],
  ['r6-hwid-ban', 'caliber-hwid-ban'],
  ['r6-external-loader', 'caliber-external-loader'],
  ['r6-loadouts', 'caliber-loadouts'],
  ['r6-cheat-setup', 'caliber-cheat-setup'],
  ['r6-console-commands', 'caliber-practice-settings'],
  ['r6-console-commands-forum', 'caliber-practice-settings-forum'],
  ['after-r6-patch', 'after-caliber-patch'],
  ['r6-high-ground', 'caliber-positioning'],
  ['r6-aim-practice', 'caliber-aim-practice'],
  ['r6-map-awareness', 'caliber-map-awareness'],
  ['choose-r6-tier', 'choose-caliber-tier'],
  ['eac-patch-day', 'anti-cheat-patch-day'],
  ['eac-troubleshooting', 'anti-cheat-troubleshooting'],
  ['eac-verify', 'anti-cheat-verify'],
  ['Easy anti-cheat', 'BattlEye and game integrity'],
  ['Rivals Cheat', 'Caliber Cheats'],
  ['Rivals <span class="site-brand__pill-accent">Cheat</span>', 'Caliber <span class="site-brand__pill-accent">Cheats</span>'],
  ['Rivals <span class="site-brand__title-accent">Cheat</span>', 'Caliber <span class="site-brand__title-accent">Cheats</span>'],
  ['Marvel Rivals cheats', 'Caliber cheats'],
  ['Marvel Rivals cheat', 'Caliber cheat'],
  ['Marvel Rivals', 'Caliber'],
  ['Marvel Rivals <span class="site-brand__pill-accent">Cheats</span>', 'Caliber <span class="site-brand__pill-accent">Cheats</span>'],
  ['Marvel Rivals <span class="site-brand__title-accent">Cheats</span>', 'Caliber <span class="site-brand__title-accent">Cheats</span>'],
  ['Marvel Rivals PC — Aimbot, ESP & map overlay tools', 'Caliber PC — aimbot, ESP & equipment ESP'],
  ['aria-label="Rivals Cheat"', 'aria-label="Caliber Cheats"'],
  ['Marvel Rivals on PC — aimbot, ESP & config tools', 'Caliber on PC — aimbot, ESP & raid tools'],
  ['>M</text>', '>C</text>'],
  ['r6-', 'caliber-'],
  ['R6 firefight', 'Caliber team fight'],
  ['hero ESP', 'operator ESP'],
  ['round economy and site pressure', 'maps and objective pressure'],
  ['Ubisoft account', 'game account'],
  ['training grounds', 'training mode'],
  ['objectives', 'objective points'],
  ['%2Fproducts%2Fr6-faceit', '%2Fproducts%2Fcaliber-novaxware'],
  ['%2Fproducts%2Fr6-legends', '%2Fproducts%2Fcaliber-novaxware'],
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
  'Caliber first-person warehouse raid with ESP encounter on PC',
  'Caliber in-match HUD and tactical overlay on PC',
  'Caliber raid scene with PvP gear and environment detail on PC',
  'Caliber tactical movement through a raid location on PC',
  'Caliber product-style in-match screenshot on PC',
  'Caliber combat screenshot with loot and extraction context on PC',
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
export const FAVICON_VERSION = 'cheatcaliber-c-2026';

export const SITE_DOMAIN = 'cheatcaliber.net';
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
    svg = svg.replace(/Rivals Cheat/g, 'Caliber Cheats');
    svg = svg.replace(/aria-label="[^"]*"/g, 'aria-label="Caliber Cheats"');
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
  content = content.replaceAll('/products/r6/', '/products/caliber/');
  content = content.replaceAll('/r6-cheats', '/caliber-cheats');
  content = content.replaceAll('/blog/r6-', '/blog/caliber-');
  fs.writeFileSync(file, content, 'utf8');
  console.log('patched public/_redirects');
}

function patchRobots() {
  const file = path.join(root, 'public', 'robots.txt');
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replaceAll('rivalscheat.net', 'cheatcaliber.net');
  fs.writeFileSync(file, content, 'utf8');
}

function patchWebManifest() {
  const file = path.join(root, 'public', 'site.webmanifest');
  if (!fs.existsSync(file)) return;
  const manifest = {
    name: 'Caliber Cheats',
    short_name: 'Caliber Cheats',
    description:
      'Caliber PC cheats: aimbot, ESP, equipment ESP, and raid tools on cheatcaliber.net.',
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

renameIfExists('src/data/r6CheatsLanding.ts', 'src/data/caliberCheatsLanding.ts');
renameIfExists('src/config/zadeyoR6ProductSeo.ts', 'src/config/zadeyoCaliberProductSeo.ts');
renameIfExists('src/pages/go/r6', 'src/pages/go/caliber');
renameIfExists('src/pages/r6-cheats', 'src/pages/caliber-cheats');
renameIfExists('src/pages/products/r6', 'src/pages/products/caliber');

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