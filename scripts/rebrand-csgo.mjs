/**
 * Apex template → csgo-cheat.org (Counter-Strike: Global Offensive)
 * Run: node scripts/rebrand-csgo.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');

const CSGO_CHECKOUT = 'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fcs-go';

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

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro', '.seo-baseline', '_template']);

const CSGO_IMAGE_URLS = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/cs-go/2087019d-3b86-4a40-8510-2340ba0cef61/1794290478904-ih45r8-midnight-csgo-s1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/cs-go/2087019d-3b86-4a40-8510-2340ba0cef61/1794290480069-4f0gvw-midnight-csgo-s2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/cs-go/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1795370230164-gk0v3x-cs2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/cs-go/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1795370250052-9okmnm-cs3.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/cs-go/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1795370314892-mdsa2m-cs5.webp',
];

const IMAGE_ALTS = [
  'Counter-Strike: Global Offensive competitive match on Dust II with HUD on PC',
  'CS:GO midnight map gameplay screenshot with tactical overlays on PC',
  'Counter-Strike: Global Offensive in-match firefight screenshot on PC',
  'CS:GO bomb-site engagement with full game UI on PC',
  'Counter-Strike: Global Offensive product-style gameplay view on PC',
];

/** Longest-first replacements */
const REPLACEMENTS = [
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fapex-legends', CSGO_CHECKOUT],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fapex-legends-cheats', CSGO_CHECKOUT],
  ['%2Fproducts%2Fapex-legends', '%2Fproducts%2Fcs-go'],
  ['https://cheatapex.com', 'https://csgo-cheat.org'],
  ['cheatapex.com', 'csgo-cheat.org'],
  ['cheatapex-com', 'csgo-cheat-org'],
  ['"name": "cheatapex-com"', '"name": "csgo-cheat-org"'],
  ['name = "cheatapex-com"', 'name = "csgo-cheat-org"'],
  ['cheatapex-a-2026', 'csgo-cheat-c-2026'],
  ['Return to cheatapex.com homepage', 'Return to csgo-cheat.org homepage'],
  ['apexLegendsCheatsLanding', 'csgoCheatsLanding'],
  ['zadeyoApexProductSeo', 'zadeyoCsgoProductSeo'],
  ['APEX_CHECKOUT_URL', 'CSGO_CHECKOUT_URL'],
  ['/apex-legends-cheats/', '/cs-go-cheats/'],
  ['/apex-legends-cheats', '/cs-go-cheats'],
  ['apex-legends-cheats', 'cs-go-cheats'],
  ['/products/apex/', '/products/cs-go/'],
  ['/products/apex', '/products/cs-go'],
  ['products/apex/', 'products/cs-go/'],
  ['products/apex', 'products/cs-go'],
  ['/go/apex/', '/go/cs-go/'],
  ['/go/apex', '/go/cs-go'],
  ["checkoutPath('apex')", "checkoutPath('csgo')"],
  ['checkoutPath("apex")', 'checkoutPath("csgo")'],
  ["product: 'apex'", "product: 'csgo'"],
  ['  apex:', '  csgo:'],
  ["return CHECKOUT.apex;", 'return CHECKOUT.csgo;'],
  ['PRIMARY_CHECKOUT_PATH = checkoutPath(\'apex\')', "PRIMARY_CHECKOUT_PATH = checkoutPath('csgo')"],
  ["_product: CheckoutProduct = 'apex'", "_product: CheckoutProduct = 'csgo'"],
  ['apex: \'apex\'', "csgo: 'cs-go'"],
  ["TITLE_PREFIX = 'Apex Cheats'", "TITLE_PREFIX = 'CSGO Cheats'"],
  ["PRODUCT_BASE = '/products/apex/'", "PRODUCT_BASE = '/products/cs-go/'"],
  ['buy-apex-legends-cheats', 'buy-cs-go-cheats'],
  ['apex-lite-vs-pro', 'csgo-lite-vs-pro'],
  ['apex-firing-range-practice', 'csgo-deathmatch-practice'],
  ['apex-training-tips', 'csgo-training-tips'],
  ['apex-esp-setup', 'csgo-esp-setup'],
  ['apex-radar', 'csgo-radar'],
  ['apex-aimbot-competitive', 'csgo-aimbot-competitive'],
  ['apex-aimbot-combat', 'csgo-aimbot-combat'],
  ['apex-stream-proof', 'csgo-stream-proof'],
  ['apex-elite-tier', 'csgo-elite-tier'],
  ['apex-cheat-features', 'csgo-cheat-features'],
  ['apex-hwid-ban', 'csgo-hwid-ban'],
  ['apex-external-loader', 'csgo-external-loader'],
  ['apex-loadouts', 'csgo-loadouts'],
  ['apex-cheat-setup', 'csgo-cheat-setup'],
  ['apex-practice-settings', 'csgo-practice-settings'],
  ['apex-practice-settings-forum', 'csgo-practice-settings-forum'],
  ['after-apex-patch', 'after-csgo-patch'],
  ['apex-high-ground', 'csgo-map-control'],
  ['apex-aim-practice', 'csgo-aim-practice'],
  ['apex-map-awareness', 'csgo-map-awareness'],
  ['choose-apex-tier', 'choose-csgo-tier'],
  ['apex-ac-patch-day', 'csgo-vac-patch-day'],
  ['apex-ac-troubleshooting', 'csgo-vac-troubleshooting'],
  ['apex-ac-verify', 'csgo-vac-verify'],
  ['Easy Anti-Cheat', 'VAC'],
  ['easy anti-cheat', 'VAC'],
  ['Apex Legends Cheats', 'CSGO Cheats'],
  ['Apex Legends cheats', 'CS:GO cheats'],
  ['Apex Legends cheat', 'CS:GO cheat'],
  ['Apex Legends', 'Counter-Strike: Global Offensive'],
  ['Apex Cheats', 'CSGO Cheats'],
  ['Apex Lite', 'CS:GO Lite'],
  ['Apex Pro', 'CS:GO Pro'],
  ['Apex Elite', 'CS:GO Elite'],
  ['apex aimbot', 'CS:GO aimbot'],
  ['apex ESP', 'CS:GO ESP'],
  ['apex item ESP', 'CS:GO weapon ESP'],
  ['apex recoil control', 'CS:GO recoil control'],
  ['apex compatibility', 'CS:GO compatibility'],
  ['Apex combat', 'CS:GO gunfight'],
  ['Apex firefight', 'CS:GO firefight'],
  ['Legend ESP', 'player ESP'],
  ['Legend and squad ESP', 'terrorist and counter-terrorist ESP'],
  ['Legend loadout', 'loadout'],
  ['per-Legend', 'per-map'],
  ['Legends and zone pressure', 'raid maps and extraction pressure'],
  ['Legend-specific', 'map-specific'],
  ['EA or Steam account', 'Steam account'],
  ['Firing Range', 'Deathmatch'],
  ['firing range', 'deathmatch'],
  ['Battle Royale', 'Competitive'],
  ['Arenas', 'Wingman'],
  ['respawn beacons', 'bomb sites'],
  ['Kings Canyon', 'Dust II'],
  ['the ring', 'the round'],
  ['rotating through the ring', 'rotating between bomb sites'],
  ['Apex <span class="site-brand__pill-accent">Cheats</span>', 'CS:GO <span class="site-brand__pill-accent">Cheats</span>'],
  ['Apex <span class="site-brand__title-accent">Cheats</span>', 'CS:GO <span class="site-brand__title-accent">Cheats</span>'],
  ['Apex Legends PC — aimbot, ESP & config tools', 'CS:GO on PC — aimbot, ESP & config tools'],
  ['aria-label="Apex Legends Cheats"', 'aria-label="CSGO Cheats"'],
  ['aria-label="Apex Cheats"', 'aria-label="CSGO Cheats"'],
  ['>A</text>', '>C</text>'],
  ['loot and item ESP', 'weapon and grenade ESP'],
  ['loot ESP', 'weapon ESP'],
  ['item ESP', 'weapon ESP'],
  ['supply bins', 'dropped weapons'],
  ['armor plates', 'kevlar and helmet'],
  ['Meds, stims', 'Health kits, health packs'],
  ['Approved Apex Legends media', 'Approved CS:GO media'],
  ['Apex Media', 'CSGO Media'],
  ['APEX_MEDIA', 'CSGO_MEDIA'],
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
    '/** Approved CS:GO media — only these remote URLs are used site-wide. */',
    'export interface SiteCheatImage {',
    '  src: string;',
    '  alt: string;',
    '}',
    '',
    'const CSGO_MEDIA = [',
    ...CSGO_IMAGE_URLS.map((u) => `  '${u}',`),
    '] as const;',
    '',
    'export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [',
    ...CSGO_IMAGE_URLS.map(
      (src, i) => `  {\n    src: CSGO_MEDIA[${i}],\n    alt: '${IMAGE_ALTS[i]}',\n  },`,
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
export const CSGO_CHECKOUT_URL =
  '${CSGO_CHECKOUT}';

export const CHECKOUT_URLS = {
  csgo: CSGO_CHECKOUT_URL,
  skinChanger: CSGO_CHECKOUT_URL,
  hwidSpoofer: CSGO_CHECKOUT_URL,
  ugc: CSGO_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/cs-go', CHECKOUT_URLS.csgo],
  ['/go/cs-go/', CHECKOUT_URLS.csgo],
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
export const FAVICON_VERSION = 'csgo-cheat-c-2026';

export const SITE_DOMAIN = 'csgo-cheat.org';
export const SITE_URL = \`https://\${SITE_DOMAIN}\`;
export const PRODUCT_BASE = '/products/cs-go/';
export const TITLE_PREFIX = 'CSGO Cheats';
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
    svg = svg.replace(/Apex Cheats/g, 'CSGO Cheats');
    svg = svg.replace(/(\n\s*fill="#F5F7FA"\s*\n\s*>)[A](<\/text>)/, '$1C$2');
    fs.writeFileSync(file, svg, 'utf8');
  }
}

function patchCsgoLanding() {
  const file = path.join(root, 'src', 'data', 'csgoCheatsLanding.ts');
  const content = `/** Server-rendered copy for /cs-go-cheats/ (CS:GO cheats keyword landing). */
export const csgoCheatsLanding = {
  h1: 'CS:GO cheats — checkout when the status banner shows online',
  keywordH2: 'CSGO Cheats: PC aimbot, ESP & radar',
  intro:
    'Counter-Strike: Global Offensive cheats on this site match the ZADEYO CS:GO listing for PC — aimbot, player ESP, weapon and grenade ESP, skeleton and box overlays, and save/load config profiles. Compare modules on csgo-cheat.org, then checkout when the status banner shows online.',
  sections: [
    {
      heading: 'Verified cheat modules',
      paragraphs: [
        'The CS:GO product includes aimbot with FOV and smoothness controls, player ESP with skeleton and box styles, weapon and utility ESP, and config save/load.',
        'Utilities on the product hub are optional add-ons that share the same secure checkout flow. Every product page lists modules before you pay.',
      ],
    },
    {
      heading: 'Setup and delivery',
      paragraphs: [
        'Checkout unlocks the customer portal, Windows loader and setup guide. Reload the loader after major CS:GO updates, then confirm the homepage status banner before each session.',
        'Use the FAQ and portal guides for config tuning and checkout questions. Keep your order email, Steam account details, and Windows version handy during setup.',
      ],
    },
    {
      heading: 'Before you buy',
      paragraphs: [
        'Third-party software can conflict with game policies and online play rules. You accept account risk and patch-day downtime. Start with conservative presets, test in deathmatch, and read the FAQ and Terms on this site.',
        'Supported modules receive loader updates through the customer portal when the status banner is green. When you are ready, use Start checkout below or browse [product tiers](/products/cs-go/) for comparisons and setup guides.',
      ],
    },
    {
      heading: 'After game updates',
      paragraphs: [
        'Counter-Strike: Global Offensive and VAC receive periodic updates. Confirm module availability on the live status panel at csgo-cheat.org before you purchase or launch.',
      ],
    },
  ],
} as const;
`;
  fs.writeFileSync(file, content, 'utf8');
  console.log('patched csgoCheatsLanding.ts');
}

function patchSiteBrandMark() {
  const file = path.join(root, 'src', 'components', 'SiteBrandMark.astro');
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /const brandTagline = '[^']*';/,
    "const brandTagline = 'CS:GO on PC — aimbot, ESP & config tools';",
  );
  content = content.replace(
    /'Return to [^']+ homepage'/,
    "'Return to csgo-cheat.org homepage'",
  );
  content = content.replace(
    'Apex <span class="site-brand__pill-accent">Cheats</span>',
    'CS:GO <span class="site-brand__pill-accent">Cheats</span>',
  );
  content = content.replace(
    'Apex <span class="site-brand__title-accent">Cheats</span>',
    'CS:GO <span class="site-brand__title-accent">Cheats</span>',
  );
  content = content.replace('letter A mark', 'letter C mark');
  fs.writeFileSync(file, content, 'utf8');
}

renameIfExists('src/data/apexLegendsCheatsLanding.ts', 'src/data/csgoCheatsLanding.ts');
renameIfExists('src/config/zadeyoApexProductSeo.ts', 'src/config/zadeyoCsgoProductSeo.ts');
renameIfExists('src/pages/go/apex', 'src/pages/go/cs-go');
renameIfExists('src/pages/apex-legends-cheats', 'src/pages/cs-go-cheats');
renameIfExists('src/pages/products/apex', 'src/pages/products/cs-go');

patchSiteImages();
patchCheckoutRedirects();
patchSiteTs();
patchFavicons();
patchCsgoLanding();
patchSiteBrandMark();

const files = walk(root).filter((f) => TEXT_EXTS.has(path.extname(f).toLowerCase()));
let changed = 0;
for (const file of files) {
  if (file.includes('rebrand-csgo.mjs')) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = applyText(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
  }
}

console.log(`Updated ${changed} text files.`);

const iconGen = path.join(root, 'scripts', 'generate-brand-icons.mjs');
if (fs.existsSync(iconGen)) {
  const r = spawnSync(process.execPath, [iconGen], { cwd: root, stdio: 'inherit' });
  if (r.status !== 0) console.warn('generate-brand-icons.mjs exited', r.status);
}