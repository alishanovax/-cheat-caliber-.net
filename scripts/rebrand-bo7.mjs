/**
 * cheatsrobrun.net → bo7cheats.org (Call of Duty: Black Ops 7)
 * Run: node scripts/rebrand-bo7.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

const BO7_CHECKOUT = 'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fblack-ops-7';

const BO7_IMAGE_URLS = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/black-ops/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1794600998636-0rkrwk-73.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/black-ops/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1794600929135-81p7zm-7-2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/black-ops/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1794600878441-0lvx49-7-1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/black-ops/2087019d-3b86-4a40-8510-2340ba0cef61/1794290485218-6uupyz-zadeyo-blackops6-3-misc.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/black-ops/2087019d-3b86-4a40-8510-2340ba0cef61/1794290481999-o8hgzs-zadeyo-blackops6-1-visuals.webp',
];

const IMAGE_ALTS = [
  'Call of Duty Black Ops 7 multiplayer screenshot with on-screen tools on PC',
  'Black Ops 7 in-match view showing ESP-style overlays on PC',
  'Black Ops 7 combat moment with cheat feature preview on PC',
  'Black Ops 7 product visuals — aim and awareness tools on PC',
  'Black Ops 7 gameplay preview with overlay features on PC',
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
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Frobrun', BO7_CHECKOUT],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fescape-from-tarkov&sf=zadeyo', BO7_CHECKOUT],
  ['%2Fproducts%2Frobrun', '%2Fproducts%2Fblack-ops-7'],
  ['%2Fproducts%2Fescape-from-tarkov', '%2Fproducts%2Fblack-ops-7'],
  ['https://cheatsrobrun.net', 'https://bo7cheats.org'],
  ['cheatsrobrun.net', 'bo7cheats.org'],
  ['cheatsrobrun-net', 'bo7cheats-org'],
  ['cheatsrobrun-r-2026', 'bo7cheats-b-2026'],
  ['cheatsrobrun-forum-vote:', 'bo7cheats-forum-vote:'],
  ['robrunCheatsLanding', 'bo7CheatsLanding'],
  ['zadeyoRobrunProductSeo', 'zadeyoBo7ProductSeo'],
  ['ZADEYO_ROBRUN_CHECKOUT_URL', 'ZADEYO_BO7_CHECKOUT_URL'],
  ['ROBRUN_CHECKOUT_URL', 'BO7_CHECKOUT_URL'],
  ['/robrun-cheats/', '/bo7-cheats/'],
  ['/robrun-cheats', '/bo7-cheats'],
  ['robrun-cheats', 'bo7-cheats'],
  ['/products/robrun/', '/products/bo7/'],
  ['/products/robrun', '/products/bo7'],
  ['/go/robrun/', '/go/bo7/'],
  ['/go/robrun', '/go/bo7'],
  ["checkoutPath('robrun')", "checkoutPath('bo7')"],
  ['checkoutPath("robrun")', 'checkoutPath("bo7")'],
  ["product: 'robrun'", "product: 'bo7'"],
  ['  robrun:', '  bo7:'],
  ["return CHECKOUT.robrun;", 'return CHECKOUT.bo7;'],
  ["PRIMARY_CHECKOUT_PATH = checkoutPath('robrun')", "PRIMARY_CHECKOUT_PATH = checkoutPath('bo7')"],
  ["CheckoutProduct = 'robrun'", "CheckoutProduct = 'bo7'"],
  ["_product: CheckoutProduct = 'robrun'", "_product: CheckoutProduct = 'bo7'"],
  ["PRODUCT_BASE = '/products/robrun/'", "PRODUCT_BASE = '/products/bo7/'"],
  ['RobRun <span class="site-brand__pill-accent">Cheats</span>', 'Black Ops 7 <span class="site-brand__pill-accent">Cheats</span>'],
  ['RobRun <span class="site-brand__title-accent">Cheats</span>', 'Black Ops 7 <span class="site-brand__title-accent">Cheats</span>'],
  ['RobRun Cheats', 'Black Ops 7 Cheats'],
  ['RobRun cheats', 'Black Ops 7 cheats'],
  ['RobRun cheat', 'Black Ops 7 cheat'],
  ['RobRun Lite', 'Black Ops 7 Lite'],
  ['RobRun Pro', 'Black Ops 7 Pro'],
  ['RobRun Elite', 'Black Ops 7 Elite'],
  ['/blog/robrun-', '/blog/bo7-'],
  ['slug: "robrun-', 'slug: "bo7-'],
  ["slug: 'robrun-", "slug: 'bo7-"],
  ['robrun-lite-vs-pro', 'bo7-lite-vs-pro'],
  ['robrun-firing-range-practice', 'bo7-practice-tips'],
  ['robrun-practice-tips', 'bo7-practice-tips'],
  ['robrun-training-tips', 'bo7-training-tips'],
  ['robrun-esp-setup', 'bo7-esp-setup'],
  ['robrun-radar', 'bo7-radar'],
  ['robrun-aimbot-guide', 'bo7-aimbot-guide'],
  ['robrun-aimbot-combat', 'bo7-aimbot-combat'],
  ['robrun-stream-proof', 'bo7-stream-proof'],
  ['robrun-elite-tier', 'bo7-elite-tier'],
  ['robrun-cheat-features', 'bo7-cheat-features'],
  ['robrun-hwid-ban', 'bo7-hwid-ban'],
  ['robrun-external-loader', 'bo7-external-loader'],
  ['robrun-loadouts', 'bo7-loadouts'],
  ['robrun-cheat-setup', 'bo7-cheat-setup'],
  ['robrun-practice-settings', 'bo7-practice-settings'],
  ['after-robrun-patch', 'after-bo7-patch'],
  ['robrun aimbot', 'bo7 aimbot'],
  ['robrun ESP', 'bo7 ESP'],
  ['robrun ability ESP', 'bo7 ability ESP'],
  ['robrun recoil control', 'bo7 recoil control'],
  ['robrun compatibility', 'bo7 compatibility'],
  ['the Battlestate Games launcher', 'the Call of Duty PC launcher'],
  ['Battlestate Games launcher', 'Call of Duty PC launcher'],
  ['Return to bo7cheats.org homepage', 'Return to bo7cheats.org homepage'],
  ['RobRun PC — Aimbot, ESP & radar tools', 'Black Ops 7 PC — aimbot, ESP & config tools'],
  ['TITLE_PREFIX = \'RobRun Cheats\'', "TITLE_PREFIX = 'Black Ops 7 Cheats'"],
  ['RobRun', 'Black Ops 7'],
  ['robrun-', 'bo7-'],
  ["'robrun'", "'bo7'"],
  ['"robrun"', '"bo7"'],
  ['robrun:', 'bo7:'],
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
    '/** Approved Black Ops 7 media — only these remote URLs are used site-wide. */',
    'export interface SiteCheatImage {',
    '  src: string;',
    '  alt: string;',
    '}',
    '',
    'const BO7_MEDIA = [',
    ...BO7_IMAGE_URLS.map((u) => `  '${u}',`),
    '] as const;',
    '',
    'export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [',
    ...BO7_IMAGE_URLS.map(
      (src, i) => `  {\n    src: BO7_MEDIA[${i}],\n    alt: '${IMAGE_ALTS[i]}',\n  },`,
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
export const BO7_CHECKOUT_URL =
  '${BO7_CHECKOUT}';

export const CHECKOUT_URLS = {
  bo7: BO7_CHECKOUT_URL,
  skinChanger: BO7_CHECKOUT_URL,
  hwidSpoofer: BO7_CHECKOUT_URL,
  ugc: BO7_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/bo7', CHECKOUT_URLS.bo7],
  ['/go/bo7/', CHECKOUT_URLS.bo7],
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
export const FAVICON_VERSION = 'bo7cheats-b-2026';

export const SITE_DOMAIN = 'bo7cheats.org';
export const SITE_URL = \`https://\${SITE_DOMAIN}\`;
export const PRODUCT_BASE = '/products/bo7/';
export const TITLE_PREFIX = 'Black Ops 7 Cheats';
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
    svg = svg.replace(/RobRun Cheats/g, 'Black Ops 7 Cheats');
    svg = svg.replace(/Black Ops 7 Cheats/g, 'Black Ops 7 Cheats');
    svg = svg.replace(
      /(\n\s*fill="#F5F7FA"\s*\n\s*>)[A-Z](<\/text>)/,
      '$1B$2',
    );
    fs.writeFileSync(file, svg, 'utf8');
  }
}

function patchCheckoutTs() {
  const file = path.join(root, 'src', 'config', 'checkout.ts');
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /export const CHECKOUT_SLUGS[\s\S]*?};/,
    `export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  bo7: 'bo7',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};`,
  );
  content = content.replace(
    /export function checkoutPath\(_product: CheckoutProduct = 'robrun'\)/,
    "export function checkoutPath(_product: CheckoutProduct = 'bo7')",
  );
  content = content.replace(/return CHECKOUT\.robrun;/g, 'return CHECKOUT.bo7;');
  content = content.replace(/checkoutPath\('robrun'\)/g, "checkoutPath('bo7')");
  content = content.replace(
    /href\.includes\('%2Fproducts%2Frobrun'\)[\s\S]*?href\.includes\('\/products\/mw4'\)/,
    `href.includes('%2Fproducts%2Fblack-ops-7') ||
    href.includes('/products/black-ops-7') ||
    href.includes('%2Fproducts%2Fbo7') ||
    href.includes('/products/bo7') ||
    href.includes('%2Fproducts%2Frobrun') ||
    href.includes('/products/robrun')`,
  );
  fs.writeFileSync(file, content, 'utf8');
}

function patchRedirects() {
  const file = path.join(root, 'public', '_redirects');
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/https:\/\/zadeyo\.com\/go\/ALISHA\?to=%2Fproducts%2F[^ \n]+/g, BO7_CHECKOUT);
  fs.writeFileSync(file, content, 'utf8');
  console.log('patched public/_redirects');
}

renameIfExists('src/data/robrunCheatsLanding.ts', 'src/data/bo7CheatsLanding.ts');
renameIfExists('src/config/zadeyoRobrunProductSeo.ts', 'src/config/zadeyoBo7ProductSeo.ts');
renameIfExists('src/pages/go/robrun', 'src/pages/go/bo7');
renameIfExists('src/pages/robrun-cheats', 'src/pages/bo7-cheats');
renameIfExists('src/pages/products/robrun', 'src/pages/products/bo7');

patchSiteImages();
patchCheckoutRedirects();
patchSiteTs();
patchFavicons();
patchCheckoutTs();
patchRedirects();

const files = walk(root).filter((f) => {
  if (f.includes('rebrand-robrun.mjs') || f.includes('rebrand-bo7.mjs')) return false;
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
