/**
 * cheatseft.org (EFT) → cheatcaliber.net (Caliber Cheats)
 * Run: node scripts/rebrand-caliber.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

const CALIBER_CHECKOUT =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fcaliber-novaxware&sf=zadeyo';

const CALIBER_IMAGE_URLS = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/caliber/02ab714e-de37-423b-81f2-afd7f7fd8d28/1794298177763-bj2j0u-images.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/caliber/02ab714e-de37-423b-81f2-afd7f7fd8d28/1794298146252-b173nd-images.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/caliber/02ab714e-de37-423b-81f2-afd7f7fd8d28/1794298089921-aj61qe-caliber-blog-undetected-eac.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/caliber/02ab714e-de37-423b-81f2-afd7f7fd8d28/1794298075962-b6h2q1-caliber-blog-cheats-know-before.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/caliber/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793194043626-ybprbf-cals1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/caliber/02ab714e-de37-423b-81f2-afd7f7fd8d28/1794298155792-k63tgc-screenshot-2022-04-08-213716-min.webp',
];

const IMAGE_ALTS = [
  'Caliber tactical firefight with operators and weapons on PC',
  'Caliber in-match HUD and squad combat screenshot on PC',
  'Caliber gameplay with tactical operators and map detail on PC',
  'Caliber team fight with environmental cover and objective pressure on PC',
  'Caliber operator loadout and combat scene on PC',
  'Caliber third-person squad engagement screenshot on PC',
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

/** Ordered longest-first replacements. */
const REPLACEMENTS = [
  [
    'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fescape-from-tarkov&sf=zadeyo',
    CALIBER_CHECKOUT,
  ],
  [
    'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fescape-from-tarkov',
    CALIBER_CHECKOUT,
  ],
  ['%2Fproducts%2Fescape-from-tarkov', '%2Fproducts%2Fcaliber-novaxware'],
  ['https://cheatseft.org', 'https://cheatcaliber.net'],
  ['cheatseft.org', 'cheatcaliber.net'],
  ['cheatseft-org', 'cheatcaliber-net'],
  ['cheatseft-e-2026', 'cheatcaliber-c-2026'],
  ['cheatseft-forum-vote:', 'cheatcaliber-forum-vote:'],
  ['name = "cheatseft-org"', 'name = "cheatcaliber-net"'],
  ['"name": "cheatseft-org"', '"name": "cheatcaliber-net"'],
  ['Return to cheatseft.org homepage', 'Return to cheatcaliber.net homepage'],
  ['tarkovCheatsLanding', 'caliberCheatsLanding'],
  ['zadeyoTarkovProductSeo', 'zadeyoCaliberProductSeo'],
  ['ZADEYO_TARKOV_CHECKOUT_URL', 'ZADEYO_CALIBER_CHECKOUT_URL'],
  ['TARKOV_CHECKOUT_URL', 'CALIBER_CHECKOUT_URL'],
  ['/escape-from-tarkov-cheats/', '/caliber-cheats/'],
  ['/escape-from-tarkov-cheats', '/caliber-cheats'],
  ['escape-from-tarkov-cheats', 'caliber-cheats'],
  ['/products/tarkov/', '/products/caliber/'],
  ['/products/tarkov', '/products/caliber'],
  ['/go/tarkov/', '/go/caliber/'],
  ['/go/tarkov', '/go/caliber'],
  ["checkoutPath('tarkov')", "checkoutPath('caliber')"],
  ['checkoutPath("tarkov")', 'checkoutPath("caliber")'],
  ["product: 'tarkov'", "product: 'caliber'"],
  ['  tarkov:', '  caliber:'],
  [
    "checkoutForSlug(_slug: string): string {\n  return CHECKOUT.tarkov;",
    "checkoutForSlug(_slug: string): string {\n  return CHECKOUT.caliber;",
  ],
  ['return CHECKOUT.tarkov;', 'return CHECKOUT.caliber;'],
  [
    "PRIMARY_CHECKOUT_PATH = checkoutPath('tarkov')",
    "PRIMARY_CHECKOUT_PATH = checkoutPath('caliber')",
  ],
  ["CheckoutProduct = 'tarkov'", "CheckoutProduct = 'caliber'"],
  ['tarkov: \'tarkov\'', "caliber: 'caliber'"],
  ["_product: CheckoutProduct = 'tarkov'", "_product: CheckoutProduct = 'caliber'"],
  ["PRODUCT_BASE = '/products/tarkov/'", "PRODUCT_BASE = '/products/caliber/'"],
  ['/blog/tarkov-', '/blog/caliber-'],
  ['slug: "tarkov-', 'slug: "caliber-'],
  ["slug: 'tarkov-", "slug: 'caliber-"],
  ['buy-escape-from-tarkov-cheats', 'buy-caliber-cheats'],
  ['tarkov-lite-vs-pro', 'caliber-lite-vs-pro'],
  ['tarkov-offline-practice', 'caliber-training-practice'],
  ['tarkov-training-tips', 'caliber-training-tips'],
  ['tarkov-training-grounds-practice', 'caliber-training-practice'],
  ['tarkov-esp-setup', 'caliber-esp-setup'],
  ['tarkov-zone-map', 'caliber-map-awareness'],
  ['tarkov-aimbot-raids', 'caliber-aimbot-matches'],
  ['tarkov-aimbot-combat', 'caliber-aimbot-combat'],
  ['tarkov-stream-proof', 'caliber-stream-proof'],
  ['tarkov-elite-tier', 'caliber-elite-tier'],
  ['tarkov-cheat-features', 'caliber-cheat-features'],
  ['tarkov-hwid-ban', 'caliber-hwid-ban'],
  ['tarkov-external-loader', 'caliber-external-loader'],
  ['tarkov-loadouts', 'caliber-loadouts'],
  ['tarkov-cheat-setup', 'caliber-cheat-setup'],
  ['tarkov-practice-settings', 'caliber-practice-settings'],
  ['tarkov-practice-settings-forum', 'caliber-practice-settings-forum'],
  ['after-tarkov-patch', 'after-caliber-patch'],
  ['tarkov-positioning', 'caliber-positioning'],
  ['tarkov-aim-practice', 'caliber-aim-practice'],
  ['tarkov-map-awareness', 'caliber-map-awareness'],
  ['choose-tarkov-tier', 'choose-caliber-tier'],
  ['Escape from Tarkov <span class="site-brand__pill-accent">Cheats</span>', 'Caliber <span class="site-brand__pill-accent">Cheats</span>'],
  ['Escape from Tarkov <span class="site-brand__title-accent">Cheats</span>', 'Caliber <span class="site-brand__title-accent">Cheats</span>'],
  ['EFT <span class="site-brand__pill-accent">Cheats</span>', 'Caliber <span class="site-brand__pill-accent">Cheats</span>'],
  ['EFT <span class="site-brand__title-accent">Cheats</span>', 'Caliber <span class="site-brand__title-accent">Cheats</span>'],
  ['Escape from Tarkov cheats', 'Caliber cheats'],
  ['Escape from Tarkov cheat', 'Caliber cheat'],
  ['Escape from Tarkov', 'Caliber'],
  ['EFT Cheats', 'Caliber Cheats'],
  ['aria-label="EFT Cheats"', 'aria-label="Caliber Cheats"'],
  ['Escape from Tarkov on PC — aimbot, ESP & raid tools', 'Caliber on PC — aimbot, ESP & tactical tools'],
  ['Escape from Tarkov PC — aimbot, ESP & loot ESP', 'Caliber PC — aimbot, ESP & operator tools'],
  ['Escape from Tarkov aimbot', 'Caliber aimbot'],
  ['Escape from Tarkov ESP', 'Caliber ESP'],
  ['Escape from Tarkov ability ESP', 'Caliber operator ESP'],
  ['Escape from Tarkov recoil control', 'Caliber recoil control'],
  ['Escape from Tarkov compatibility', 'Caliber compatibility'],
  ['Escape from Tarkov loot and container ESP', 'Caliber equipment ESP'],
  ['Escape from Tarkov cheat config', 'Caliber cheat config'],
  ['Tarkov raid combat', 'Caliber team fight'],
  ['Tarkov firefight', 'Caliber firefight'],
  ['PMC and PMC and scav ESP', 'operator ESP'],
  ['PMC and Scav ESP', 'operator ESP'],
  ['PMC and scav ESP', 'operator ESP'],
  ['PMC loadout', 'operator loadout'],
  ['PMC raids', 'PvP matches'],
  ['PMC and Scav raids', 'PvP and PvE matches'],
  ['PMC and Scav', 'operators'],
  ['PMC', 'PvP'],
  ['Scav', 'PvE'],
  ['BSG account', 'game account'],
  ['Battlestate Games', 'Crytek'],
  ['offline raid mode', 'training mode'],
  ['offline raid', 'training mode'],
  ['offline raids', 'training matches'],
  ['raid maps and extraction pressure', 'maps and objective pressure'],
  ['extract points', 'objective points'],
  ['extraction pressure', 'objective pressure'],
  ['in-raid', 'in-match'],
  ['in raid', 'in match'],
  ['loot ESP', 'equipment ESP'],
  ['loot tools', 'equipment tools'],
  ['loot and container ESP', 'equipment ESP'],
  ['TARKOV_MEDIA', 'CALIBER_MEDIA'],
  ['ZADEYO_R6_PRODUCT_SEO', 'ZADEYO_CALIBER_PRODUCT_SEO'],
  ['href.includes(\'/products/tarkov-legends\')', "href.includes('/products/caliber')"],
  ['href.includes(\'/products/tarkov\')', "href.includes('/products/caliber')"],
  ['%2Fescape-from-tarkov-cheats', '%2Fcaliber-cheats'],
  ['install-tarkov-hack-images.mjs', 'install-caliber-images.mjs'],
  ['>E</text>', '>C</text>'],
  ['tarkov-', 'caliber-'],
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
    ...CALIBER_IMAGE_URLS.map((u) => `  '${u}',`),
    '] as const;',
    '',
    'export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [',
    ...CALIBER_IMAGE_URLS.map(
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
  '${CALIBER_CHECKOUT}';

export const CHECKOUT_URLS = {
  caliber: CALIBER_CHECKOUT_URL,
  skinChanger: CALIBER_CHECKOUT_URL,
  hwidSpoofer: CALIBER_CHECKOUT_URL,
  ugc: CALIBER_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/caliber', CHECKOUT_URLS.caliber],
  ['/go/caliber/', CHECKOUT_URLS.caliber],
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
    svg = svg.replace(/EFT Cheats/g, 'Caliber Cheats');
    svg = svg.replace(/aria-label="[^"]*"/g, 'aria-label="Caliber Cheats"');
    svg = svg.replace(/(fill="#F5F7FA"\s*\n\s*>)[A-Z](<\/text>)/, '$1C$2');
    fs.writeFileSync(file, svg, 'utf8');
  }
}

function patchRedirects() {
  const file = path.join(root, 'public', '_redirects');
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /https:\/\/zadeyo\.com\/go\/ALISHA\?to=%2Fproducts%2F[^ \n]+/g,
    CALIBER_CHECKOUT,
  );
  content = content.replaceAll('/products/tarkov/', '/products/caliber/');
  content = content.replaceAll('/escape-from-tarkov-cheats', '/caliber-cheats');
  content = content.replaceAll('/blog/tarkov-', '/blog/caliber-');
  content = content.replaceAll('/go/tarkov', '/go/caliber');
  fs.writeFileSync(file, content, 'utf8');
  console.log('patched public/_redirects');
}

function patchRobots() {
  const file = path.join(root, 'public', 'robots.txt');
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replaceAll('cheatseft.org', 'cheatcaliber.net');
  fs.writeFileSync(file, content, 'utf8');
}

function patchWebManifest() {
  const file = path.join(root, 'public', 'site.webmanifest');
  const manifest = {
    name: 'Caliber Cheats',
    short_name: 'Caliber Cheats',
    description:
      'Caliber PC cheats: aimbot, ESP, operator tools, and tactical modules on cheatcaliber.net.',
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

function patchSeoMeta() {
  const file = path.join(root, 'src', 'config', 'seo.ts');
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    'Escape from Tarkov cheats guide:',
    'Caliber cheats guide:',
  );
  fs.writeFileSync(file, content, 'utf8');
}

renameIfExists('src/data/tarkovCheatsLanding.ts', 'src/data/caliberCheatsLanding.ts');
renameIfExists('src/config/zadeyoTarkovProductSeo.ts', 'src/config/zadeyoCaliberProductSeo.ts');
renameIfExists('src/pages/go/tarkov', 'src/pages/go/caliber');
renameIfExists('src/pages/escape-from-tarkov-cheats', 'src/pages/caliber-cheats');
renameIfExists('src/pages/products/tarkov', 'src/pages/products/caliber');

patchSiteImages();
patchCheckoutRedirects();
patchSiteTs();
patchFavicons();
patchRedirects();
patchRobots();
patchWebManifest();
patchSeoMeta();

const files = walk(root).filter((f) => TEXT_EXTS.has(path.extname(f).toLowerCase()));
let changed = 0;
for (const file of files) {
  if (file.includes('rebrand-caliber.mjs')) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = applyText(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
  }
}

console.log(`Done. Updated ${changed} text files.`);