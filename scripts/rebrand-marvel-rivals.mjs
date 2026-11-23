/**
 * R6 Cheat → Rivals Cheat (Marvel Rivals) rebrand for rivalscheat.net
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
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fmarvel-rivals&sf=zadeyo';

/** Ordered longest-first replacements. Path slugs (/r6/, blog/r6-*) are preserved. */
const REPLACEMENTS = [
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fr6-faceit-cheats', MARVEL_CHECKOUT],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fr6-faceit', MARVEL_CHECKOUT],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fr6-legends', MARVEL_CHECKOUT],
  ['%2Fproducts%2Fr6-faceit', '%2Fproducts%2Fmarvel-rivals'],
  ['%2Fproducts%2Fr6-legends', '%2Fproducts%2Fmarvel-rivals'],
  ['%2Fproducts%2Frainbow-six-siege-hacks', '%2Fproducts%2Fmarvel-rivals'],

  ['r6-cheat.com', 'rivalscheat.net'],
  ['r6-cheat-r-2026', 'rivals-cheat-m-2026'],

  ["TITLE_PREFIX = 'R6 Cheat'", "TITLE_PREFIX = 'Rivals Cheat'"],
  ["FAVICON_VERSION = 'r6-cheat-r-2026'", "FAVICON_VERSION = 'rivals-cheat-m-2026'"],
  ["export const SITE_DOMAIN = 'r6-cheat.com'", "export const SITE_DOMAIN = 'rivalscheat.net'"],

  ['site: \'https://r6-cheat.com\'', "site: 'https://rivalscheat.net'"],

  ['Tom Clancy\'s Rainbow Six Siege', 'Marvel Rivals'],
  ['Tom Clancys Rainbow Six Siege', 'Marvel Rivals'],
  ['Rainbow Six Siege', 'Marvel Rivals'],
  ['rainbow six siege', 'Marvel Rivals'],
  ['R6 Siege', 'Marvel Rivals'],
  ['BattlEye', 'anti-cheat'],
  ['battleye', 'anti-cheat'],

  ['R6 Cheat', 'Rivals Cheat'],
  ['R6 cheat', 'Marvel Rivals cheat'],
  ['R6 cheats', 'Marvel Rivals cheats'],
  ['R6 Hacks', 'Rivals Cheat'],
  ['R6 Hack', 'Rivals Cheat'],
  ['R6 hacks', 'Marvel Rivals cheats'],
  ['R6 hack', 'Marvel Rivals cheat'],

  ['R6 aimbot', 'Marvel Rivals aimbot'],
  ['R6 ESP', 'Marvel Rivals ESP'],
  ['R6 gadget ESP', 'Marvel Rivals ability ESP'],
  ['R6 recoil control', 'Marvel Rivals recoil control'],
  ['R6 compatibility', 'Marvel Rivals compatibility'],
  ['R6 Lite', 'Lite'],
  ['R6 Pro', 'Pro'],
  ['R6 Elite', 'Elite'],

  ['operator ESP', 'hero ESP'],
  ['Operator ESP', 'Hero ESP'],
  ['gadget ESP', 'ability ESP'],
  ['Gadget ESP', 'Ability ESP'],

  ['Training Grounds', 'Practice'],
  ['Bomb defusal', 'Domination'],
  ['bombsite', 'objective'],
  ['Bombsite', 'Objective'],
  ['defuse kits', 'health packs'],
  ['Defuse kits', 'Health packs'],

  ['Return to r6-cheat.com homepage', 'Return to rivalscheat.net homepage'],
  ['on r6-cheat.com', 'on rivalscheat.net'],
  ['r6-cheat.com before', 'rivalscheat.net before'],

  ['Rainbow Six Siege on PC', 'Marvel Rivals on PC'],
  ['Rainbow Six Siege cheats', 'Marvel Rivals cheats'],
  ['Rainbow Six Siege cheat', 'Marvel Rivals cheat'],
  ['Rainbow Six Siege PC', 'Marvel Rivals PC'],
  ['Rainbow Six Siege multiplayer', 'Marvel Rivals multiplayer'],
  ['Rainbow Six Siege matches', 'Marvel Rivals matches'],
  ['Rainbow Six Siege catalog', 'Marvel Rivals catalog'],
  ['Rainbow Six Siege product', 'Marvel Rivals product'],

  ['aria-label="R6 Cheat"', 'aria-label="Rivals Cheat"'],
  ['>R</text>', '>M</text>'],
  ['R6 <span class="site-brand__pill-accent">Cheat</span>', 'Rivals <span class="site-brand__pill-accent">Cheat</span>'],
  ['R6 <span class="site-brand__title-accent">Cheat</span>', 'Rivals <span class="site-brand__title-accent">Cheat</span>'],

  ['Rainbow Six Siege cheats guide:', 'Marvel Rivals cheats guide:'],
  ['Rainbow Six Siege · PC', 'Marvel Rivals · PC'],
  ['Ranked', 'Competitive'],
  ['ranked', 'competitive'],

  ['name: \'R6 Cheat\'', "name: 'Rivals Cheat'"],
  ['domain: \'r6-cheat.com\'', "domain: 'rivalscheat.net'"],
  ['title: \'R6 Cheat\'', "title: 'Rivals Cheat'"],
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
  /export const R6_CHECKOUT_URL\s*=\s*'[^']*'/,
  `export const R6_CHECKOUT_URL =\n  '${MARVEL_CHECKOUT}'`,
);
fs.writeFileSync(checkoutFile, checkout);
console.log('patched checkout-redirects.mjs');

console.log(`Done. Updated ${changed} text files.`);