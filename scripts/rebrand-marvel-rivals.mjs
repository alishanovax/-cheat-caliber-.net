/**
 * R6 Cheat → EFT Cheats (Escape from Tarkov) rebrand for cheatseft.org
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
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fescape-from-tarkov&sf=zadeyo';

/** Ordered longest-first replacements. Path slugs (/r6/, blog/tarkov-*) are preserved. */
const REPLACEMENTS = [
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Ftarkov-faceit-cheats', MARVEL_CHECKOUT],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Ftarkov-faceit', MARVEL_CHECKOUT],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Ftarkov-legends', MARVEL_CHECKOUT],
  ['%2Fproducts%2Ftarkov-faceit', '%2Fproducts%2Fescape-from-tarkov'],
  ['%2Fproducts%2Ftarkov-legends', '%2Fproducts%2Fescape-from-tarkov'],
  ['%2Fproducts%2Frainbow-six-siege-hacks', '%2Fproducts%2Fescape-from-tarkov'],

  ['tarkov-cheat.com', 'cheatseft.org'],
  ['tarkov-cheat-r-2026', 'rivals-cheat-m-2026'],

  ["TITLE_PREFIX = 'R6 Cheat'", "TITLE_PREFIX = 'EFT Cheats'"],
  ["FAVICON_VERSION = 'tarkov-cheat-r-2026'", "FAVICON_VERSION = 'rivals-cheat-m-2026'"],
  ["export const SITE_DOMAIN = 'tarkov-cheat.com'", "export const SITE_DOMAIN = 'cheatseft.org'"],

  ['site: \'https://tarkov-cheat.com\'', "site: 'https://cheatseft.org'"],

  ['Tom Clancy\'s Rainbow Six Siege', 'Escape from Tarkov'],
  ['Tom Clancys Rainbow Six Siege', 'Escape from Tarkov'],
  ['Rainbow Six Siege', 'Escape from Tarkov'],
  ['rainbow six siege', 'Escape from Tarkov'],
  ['R6 Siege', 'Escape from Tarkov'],
  ['BattlEye', 'anti-cheat'],
  ['battleye', 'anti-cheat'],

  ['R6 Cheat', 'EFT Cheats'],
  ['R6 cheat', 'Escape from Tarkov cheat'],
  ['R6 cheats', 'Escape from Tarkov cheats'],
  ['R6 Hacks', 'EFT Cheats'],
  ['R6 Hack', 'EFT Cheats'],
  ['R6 hacks', 'Escape from Tarkov cheats'],
  ['R6 hack', 'Escape from Tarkov cheat'],

  ['R6 aimbot', 'Escape from Tarkov aimbot'],
  ['R6 ESP', 'Escape from Tarkov ESP'],
  ['R6 gadget ESP', 'Escape from Tarkov ability ESP'],
  ['R6 recoil control', 'Escape from Tarkov recoil control'],
  ['R6 compatibility', 'Escape from Tarkov compatibility'],
  ['R6 Lite', 'Lite'],
  ['R6 Pro', 'Pro'],
  ['R6 Elite', 'Elite'],

  ['operator ESP', 'PMC and scav ESP'],
  ['Operator ESP', 'Hero ESP'],
  ['gadget ESP', 'ability ESP'],
  ['Gadget ESP', 'Ability ESP'],

  ['Training Grounds', 'Practice'],
  ['Bomb defusal', 'Domination'],
  ['bombsite', 'objective'],
  ['Bombsite', 'Objective'],
  ['defuse kits', 'health packs'],
  ['Defuse kits', 'Health packs'],

  ['Return to tarkov-cheat.com homepage', 'Return to cheatseft.org homepage'],
  ['on tarkov-cheat.com', 'on cheatseft.org'],
  ['tarkov-cheat.com before', 'cheatseft.org before'],

  ['Rainbow Six Siege on PC', 'Escape from Tarkov on PC'],
  ['Rainbow Six Siege cheats', 'Escape from Tarkov cheats'],
  ['Rainbow Six Siege cheat', 'Escape from Tarkov cheat'],
  ['Rainbow Six Siege PC', 'Escape from Tarkov PC'],
  ['Rainbow Six Siege multiplayer', 'Escape from Tarkov multiplayer'],
  ['Rainbow Six Siege matches', 'Escape from Tarkov matches'],
  ['Rainbow Six Siege catalog', 'Escape from Tarkov catalog'],
  ['Rainbow Six Siege product', 'Escape from Tarkov product'],

  ['aria-label="R6 Cheat"', 'aria-label="EFT Cheats"'],
  ['>R</text>', '>E</text>'],
  ['R6 <span class="site-brand__pill-accent">Cheat</span>', 'EFT <span class="site-brand__pill-accent">Cheats</span>'],
  ['R6 <span class="site-brand__title-accent">Cheat</span>', 'EFT <span class="site-brand__title-accent">Cheats</span>'],

  ['Rainbow Six Siege cheats guide:', 'Escape from Tarkov cheats guide:'],
  ['Rainbow Six Siege · PC', 'Escape from Tarkov · PC'],
  ['Ranked', 'Competitive'],
  ['ranked', 'competitive'],

  ['name: \'R6 Cheat\'', "name: 'EFT Cheats'"],
  ['domain: \'tarkov-cheat.com\'', "domain: 'cheatseft.org'"],
  ['title: \'R6 Cheat\'', "title: 'EFT Cheats'"],
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
  /export const TARKOV_CHECKOUT_URL\s*=\s*'[^']*'/,
  `export const TARKOV_CHECKOUT_URL =\n  '${MARVEL_CHECKOUT}'`,
);
fs.writeFileSync(checkoutFile, checkout);
console.log('patched checkout-redirects.mjs');

console.log(`Done. Updated ${changed} text files.`);