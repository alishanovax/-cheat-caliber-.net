/**
 * bo7cheats.org template → rivalscheat.net (Marvel Rivals)
 * Run: node scripts/setup-cheatapex-from-bo7.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

const APEX_CHECKOUT =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fmarvel-rivals&sf=zadeyo';

const APEX_IMAGE_URLS = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003238685-a4vmq5-apex1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003225576-4eg561-apex3.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003219817-nccr83-apex4.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003210157-cwvxth-apex5.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1793916275158-vj28eh-ap1.webp',
];

const IMAGE_ALTS = [
  'Marvel Rivals squad combat screenshot with HUD on PC',
  'Marvel Rivals Competitive firefight with full overlay on PC',
  'Marvel Rivals third-person team fight on Oregon-style map on PC',
  'Marvel Rivals in-match view with loot and zone pressure on PC',
  'Marvel Rivals Legends squad fight with tactical overlays on PC',
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
const SKIP_FILES = new Set(['setup-cheatapex-from-bo7.mjs', 'rebrand-bo7.mjs', 'rebrand-cheatapex.mjs']);

/** Ordered longest-first replacements. */
const REPLACEMENTS = [
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fblack-ops-7', APEX_CHECKOUT],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fbo7', APEX_CHECKOUT],
  ['%2Fproducts%2Fblack-ops-7', '%2Fproducts%2Fmarvel-rivals'],
  ['%2Fproducts%2Fbo7', '%2Fproducts%2Fmarvel-rivals'],
  ['https://bo7cheats.org', 'https://rivalscheat.net'],
  ['bo7cheats.org', 'rivalscheat.net'],
  ['bo7cheats-org', 'r6-cheat-com'],
  ['bo7cheats-b-2026', 'rivals-cheat-m-2026'],
  ['bo7cheats-forum-vote:', 'cheatapex-forum-vote:'],
  ['bo7CheatsLanding', 'r6CheatsLanding'],
  ['zadeyoBo7ProductSeo', 'zadeyoR6ProductSeo'],
  ['ZADEYO_BO7_CHECKOUT_URL', 'ZADEYO_R6_CHECKOUT_URL'],
  ['BO7_CHECKOUT_URL', 'R6_CHECKOUT_URL'],
  ['/bo7-cheats/', '/r6-cheats/'],
  ['/bo7-cheats', '/r6-cheats'],
  ['bo7-cheats', 'r6-cheats'],
  ['/products/bo7/', '/products/r6/'],
  ['/products/bo7', '/products/r6'],
  ['/go/bo7/', '/go/r6/'],
  ['/go/bo7', '/go/r6'],
  ["checkoutPath('bo7')", "checkoutPath('r6')"],
  ['checkoutPath("bo7")', 'checkoutPath("r6")'],
  ["product: 'bo7'", "product: 'r6'"],
  ['  bo7:', '  r6:'],
  ['return CHECKOUT.bo7;', 'return CHECKOUT.r6;'],
  ["PRIMARY_CHECKOUT_PATH = checkoutPath('bo7')", "PRIMARY_CHECKOUT_PATH = checkoutPath('r6')"],
  ["CheckoutProduct = 'bo7'", "CheckoutProduct = 'apex'"],
  ["_product: CheckoutProduct = 'bo7'", "_product: CheckoutProduct = 'r6'"],
  ["PRODUCT_BASE = '/products/bo7/'", "PRODUCT_BASE = '/products/r6/'"],
  ['Black Ops 7 <span class="site-brand__pill-accent">Cheats</span>', 'Marvel Rivals <span class="site-brand__pill-accent">Cheats</span>'],
  ['Black Ops 7 <span class="site-brand__title-accent">Cheats</span>', 'Marvel Rivals <span class="site-brand__title-accent">Cheats</span>'],
  ['Black Ops 7 Cheats', 'Rivals Cheat'],
  ['Black Ops 7 cheats', 'Marvel Rivals cheats'],
  ['Black Ops 7 cheat', 'Marvel Rivals cheat'],
  ['Black Ops 7 Lite', 'Lite'],
  ['Black Ops 7 Pro', 'Pro'],
  ['Black Ops 7 Elite', 'Elite'],
  ['/blog/bo7-', '/blog/apex-'],
  ['slug: "bo7-', 'slug: "apex-'],
  ["slug: 'bo7-", "slug: 'apex-"],
  ['buy-bo7-cheats', 'buy-r6-cheats'],
  ['bo7-lite-vs-pro', 'r6-lite-vs-pro'],
  ['bo7-practice-tips', 'r6-training-grounds-practice'],
  ['bo7-training-tips', 'r6-training-tips'],
  ['bo7-esp-setup', 'r6-esp-setup'],
  ['bo7-radar', 'r6-radar'],
  ['bo7-aimbot-guide', 'r6-aimbot-competitive'],
  ['bo7-aimbot-combat', 'r6-aimbot-combat'],
  ['bo7-stream-proof', 'r6-stream-proof'],
  ['bo7-elite-tier', 'r6-elite-tier'],
  ['bo7-cheat-features', 'r6-cheat-features'],
  ['bo7-hwid-ban', 'r6-hwid-ban'],
  ['bo7-external-loader', 'r6-external-loader'],
  ['bo7-loadouts', 'r6-loadouts'],
  ['bo7-cheat-setup', 'r6-cheat-setup'],
  ['bo7-practice-settings', 'r6-console-commands'],
  ['after-bo7-patch', 'after-r6-patch'],
  ['bo7-positioning', 'r6-high-ground'],
  ['bo7-aim-practice', 'r6-aim-practice'],
  ['bo7-map-awareness', 'r6-map-awareness'],
  ['choose-bo7-tier', 'choose-r6-tier'],
  ['bo7 aimbot', 'Marvel Rivals aimbot'],
  ['bo7 ESP', 'Marvel Rivals ESP'],
  ['bo7 ability ESP', 'Marvel Rivals ability ESP'],
  ['bo7 recoil control', 'Marvel Rivals recoil control'],
  ['bo7 compatibility', 'Marvel Rivals compatibility'],
  ['the Call of Duty PC launcher', 'the EA app or Ubisoft Connect'],
  ['Call of Duty PC launcher', 'EA app or Ubisoft Connect'],
  ['Battlestate Games account', 'Ubisoft account'],
  ['Battlestate Games', 'Respawn Entertainment'],
  ['Black Ops 7 PC — aimbot, ESP & config tools', 'Marvel Rivals PC — aimbot, ESP & config tools'],
  ["TITLE_PREFIX = 'Black Ops 7 Cheats'", "TITLE_PREFIX = 'Rivals Cheat'"],
  ['Black Ops 7', 'Marvel Rivals'],
  ['Call of Duty', 'Apex'],
  ['bo7-', 'apex-'],
  ["'bo7'", "'apex'"],
  ['"bo7"', '"apex"'],
  ['bo7:', 'apex:'],
  ['/products/black-ops-7', '/products/r6-legends'],
  ['@bo7cheats', '@cheatapex'],
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
    '/** Approved Marvel Rivals media — only these remote URLs are used site-wide. */',
    'export interface SiteCheatImage {',
    '  src: string;',
    '  alt: string;',
    '}',
    '',
    'const R6_MEDIA = [',
    ...APEX_IMAGE_URLS.map((u) => `  '${u}',`),
    '] as const;',
    '',
    'export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [',
    ...APEX_IMAGE_URLS.map(
      (src, i) => `  {\n    src: R6_MEDIA[${i}],\n    alt: '${IMAGE_ALTS[i]}',\n  },`,
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
export const R6_CHECKOUT_URL =
  '${APEX_CHECKOUT}';

export const CHECKOUT_URLS = {
  r6: R6_CHECKOUT_URL,
  skinChanger: R6_CHECKOUT_URL,
  hwidSpoofer: R6_CHECKOUT_URL,
  ugc: R6_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/r6', CHECKOUT_URLS.apex],
  ['/go/r6/', CHECKOUT_URLS.apex],
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
export const FAVICON_VERSION = 'rivals-cheat-m-2026';

export const SITE_DOMAIN = 'rivalscheat.net';
export const SITE_URL = \`https://\${SITE_DOMAIN}\`;
export const PRODUCT_BASE = '/products/r6/';
export const TITLE_PREFIX = 'Rivals Cheat';
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
    svg = svg.replace(/Black Ops 7 Cheats/g, 'Rivals Cheat');
    svg = svg.replace(/Rivals Cheat/g, 'Rivals Cheat');
    svg = svg.replace(
      /(\n\s*fill="#F5F7FA"\s*\n\s*>)[A-Z](<\/text>)/,
      '$1A$2',
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
  r6: 'apex',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};`,
  );
  content = content.replace(
    /export function checkoutPath\(_product: CheckoutProduct = 'bo7'\)/,
    "export function checkoutPath(_product: CheckoutProduct = 'r6')",
  );
  content = content.replace(/return CHECKOUT\.bo7;/g, 'return CHECKOUT.r6;');
  content = content.replace(/checkoutPath\('bo7'\)/g, "checkoutPath('r6')");
  content = content.replace(
    /href\.includes\('%2Fproducts%2Fblack-ops-7'\)[\s\S]*?href\.includes\('\/products\/bo7'\)/,
    `href.includes('%2Fproducts%2Fmarvel-rivals') ||
    href.includes('/products/r6-legends') ||
    href.includes('%2Fproducts%2Fapex') ||
    href.includes('/products/r6') ||
    href.includes('%2Fproducts%2Fbo7') ||
    href.includes('/products/bo7')`,
  );
  fs.writeFileSync(file, content, 'utf8');
}

function patchRedirects() {
  const file = path.join(root, 'public', '_redirects');
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /https:\/\/zadeyo\.com\/go\/ALISHA\?to=%2Fproducts%2F[^ \n]+/g,
    APEX_CHECKOUT,
  );
  fs.writeFileSync(file, content, 'utf8');
  console.log('patched public/_redirects');
}

function patchPathTs() {
  const file = path.join(root, 'src', 'utils', 'path.ts');
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\/bo7-cheats/g, '/r6-cheats');
  content = content.replace(/\/products\/bo7/g, '/products/r6');
  content = content.replace(/bo7-lite-vs-pro/g, 'r6-lite-vs-pro');
  content = content.replace(/products\/bo7-/g, 'products/r6-');
  fs.writeFileSync(file, content, 'utf8');
}

function patchSeoMeta() {
  const file = path.join(root, 'src', 'config', 'seo.ts');
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    'Keep meta descriptions blunt about Black Ops 7 cheats for SERP snippets.',
    'Keep meta descriptions clear about Marvel Rivals cheats for SERP snippets.',
  );
  content = content.replace(
    /return `Black Ops 7 cheats guide: \$\{trimmed\}`;/,
    'return `Marvel Rivals cheats guide: ${trimmed}`;',
  );
  fs.writeFileSync(file, content, 'utf8');
}

renameIfExists('src/data/bo7CheatsLanding.ts', 'src/data/r6CheatsLanding.ts');
renameIfExists('src/config/zadeyoBo7ProductSeo.ts', 'src/config/zadeyoR6ProductSeo.ts');
renameIfExists('src/pages/go/bo7', 'src/pages/go/r6');
renameIfExists('src/pages/bo7-cheats', 'src/pages/r6-cheats');
renameIfExists('src/pages/products/bo7', 'src/pages/products/r6');

patchSiteImages();
patchCheckoutRedirects();
patchSiteTs();
patchFavicons();
patchCheckoutTs();
patchRedirects();
patchPathTs();
patchSeoMeta();

const files = walk(root).filter((f) => {
  const base = path.basename(f);
  if (SKIP_FILES.has(base)) return false;
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