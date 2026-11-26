/**
 * R6 Cheat → Caliber Cheats (Caliber) rebrand for cheatcaliber.net
 * Run from project root: node scripts/rebrand-marvel-rivals.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');

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
]);

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.seo-baseline', '_template']);

const MARVEL_CHECKOUT =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fcaliber-novaxware&sf=zadeyo';

/** Ordered longest-first replacements. Path slugs (/r6/, blog/caliber-*) are preserved. */
const REPLACEMENTS = [
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fcaliber-faceit-cheats', MARVEL_CHECKOUT],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fcaliber-faceit', MARVEL_CHECKOUT],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fcaliber-legends', MARVEL_CHECKOUT],
  ['%2Fproducts%2Fcaliber-faceit', '%2Fproducts%2Fcaliber-novaxware'],
  ['%2Fproducts%2Fcaliber-legends', '%2Fproducts%2Fcaliber-novaxware'],
  ['%2Fproducts%2Frainbow-six-siege-hacks', '%2Fproducts%2Fcaliber-novaxware'],

  ['caliber-cheat.com', 'cheatcaliber.net'],
  ['caliber-cheat-r-2026', 'rivals-cheat-m-2026'],

  ["TITLE_PREFIX = 'R6 Cheat'", "TITLE_PREFIX = 'Caliber Cheats'"],
  ["FAVICON_VERSION = 'caliber-cheat-r-2026'", "FAVICON_VERSION = 'rivals-cheat-m-2026'"],
  ["export const SITE_DOMAIN = 'caliber-cheat.com'", "export const SITE_DOMAIN = 'cheatcaliber.net'"],

  ['site: \'https://caliber-cheat.com\'', "site: 'https://cheatcaliber.net'"],

  ['Tom Clancy\'s Rainbow Six Siege', 'Caliber'],
  ['Tom Clancys Rainbow Six Siege', 'Caliber'],
  ['Rainbow Six Siege', 'Caliber'],
  ['rainbow six siege', 'Caliber'],
  ['R6 Siege', 'Caliber'],
  ['BattlEye', 'anti-cheat'],
  ['battleye', 'anti-cheat'],

  ['R6 Cheat', 'Caliber Cheats'],
  ['R6 cheat', 'Caliber cheat'],
  ['R6 cheats', 'Caliber cheats'],
  ['R6 Hacks', 'Caliber Cheats'],
  ['R6 Hack', 'Caliber Cheats'],
  ['R6 hacks', 'Caliber cheats'],
  ['R6 hack', 'Caliber cheat'],

  ['R6 aimbot', 'Caliber aimbot'],
  ['R6 ESP', 'Caliber ESP'],
  ['R6 gadget ESP', 'Caliber ability ESP'],
  ['R6 recoil control', 'Caliber recoil control'],
  ['R6 compatibility', 'Caliber compatibility'],
  ['R6 Lite', 'Lite'],
  ['R6 Pro', 'Pro'],
  ['R6 Elite', 'Elite'],

  ['operator ESP', 'operator ESP'],
  ['Operator ESP', 'Hero ESP'],
  ['gadget ESP', 'ability ESP'],
  ['Gadget ESP', 'Ability ESP'],

  ['Training Grounds', 'Practice'],
  ['Bomb defusal', 'Domination'],
  ['bombsite', 'objective'],
  ['Bombsite', 'Objective'],
  ['defuse kits', 'health packs'],
  ['Defuse kits', 'Health packs'],

  ['Return to caliber-cheat.com homepage', 'Return to cheatcaliber.net homepage'],
  ['on caliber-cheat.com', 'on cheatcaliber.net'],
  ['caliber-cheat.com before', 'cheatcaliber.net before'],

  ['Rainbow Six Siege on PC', 'Caliber on PC'],
  ['Rainbow Six Siege cheats', 'Caliber cheats'],
  ['Rainbow Six Siege cheat', 'Caliber cheat'],
  ['Rainbow Six Siege PC', 'Caliber PC'],
  ['Rainbow Six Siege multiplayer', 'Caliber multiplayer'],
  ['Rainbow Six Siege matches', 'Caliber matches'],
  ['Rainbow Six Siege catalog', 'Caliber catalog'],
  ['Rainbow Six Siege product', 'Caliber product'],

  ['aria-label="R6 Cheat"', 'aria-label="Caliber Cheats"'],
  ['>R</text>', '>C</text>'],
  ['R6 <span class="site-brand__pill-accent">Cheat</span>', 'Caliber <span class="site-brand__pill-accent">Cheats</span>'],
  ['R6 <span class="site-brand__title-accent">Cheat</span>', 'Caliber <span class="site-brand__title-accent">Cheats</span>'],

  ['Rainbow Six Siege cheats guide:', 'Caliber cheats guide:'],
  ['Rainbow Six Siege · PC', 'Caliber · PC'],
  ['Ranked', 'Competitive'],
  ['ranked', 'competitive'],

  ['name: \'R6 Cheat\'', "name: 'Caliber Cheats'"],
  ['domain: \'caliber-cheat.com\'', "domain: 'cheatcaliber.net'"],
  ['title: \'R6 Cheat\'', "title: 'Caliber Cheats'"],
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

const files = walk(root).filter((f) => TEXT_EXTS.has(path.extname(f).toLowerCase()));
let changed = 0;
for (const file of files) {
  if (file.includes(`${path.sep}rebrand-marvel-rivals.mjs`)) continue;
  if (file.includes(`${path.sep}rebrand-r6.mjs`)) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = applyText(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
    console.log('updated', path.relative(root, file));
  }
}

// Patch checkout-redirects explicitly
const checkoutFile = path.join(root, 'src', 'config', 'checkout-redirects.mjs');
let checkout = fs.readFileSync(checkoutFile, 'utf8');
checkout = checkout.replace(
  /export const CALIBER_CHECKOUT_URL\s*=\s*'[^']*'/,
  `export const CALIBER_CHECKOUT_URL =\n  '${MARVEL_CHECKOUT}'`,
);
fs.writeFileSync(checkoutFile, checkout);
console.log('patched checkout-redirects.mjs');

console.log(`Done. Updated ${changed} text files.`);