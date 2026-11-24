/**
 * MW4 Hack → R6 Cheat rebrand for tarkov-cheat.com
 * Run from project root: node scripts/rebrand-r6.mjs
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

const R6_CHECKOUT =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Ftarkov-faceit-cheats';
const R6_CHECKOUT_ENCODED = '%2Fproducts%2Frainbow-six-siege-hacks';

/** Ordered longest-first replacements. */
const REPLACEMENTS = [
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fmw4', R6_CHECKOUT],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fborderlands-3', R6_CHECKOUT],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fbodycam', R6_CHECKOUT],
  ['%2Fproducts%2Fmw4', R6_CHECKOUT_ENCODED],
  ['%2Fproducts%2Fborderlands-3', R6_CHECKOUT_ENCODED],
  ['%2Fproducts%2Fbodycam', R6_CHECKOUT_ENCODED],

  ['mw4hack.org', 'tarkov-cheat.com'],
  ['mw4hack-org', 'r6hacks-org'],
  ['Mw4Hack', 'R6Hacks'],
  ['Mw4hack', 'R6hacks'],
  ['mw4hack', 'r6hacks'],

  ['/products/mw4-hacks', '/products/tarkov-hacks'],
  ['products/mw4-hacks', 'products/escape-from-tarkov-cheats'],
  ['/mw4-hacks/', '/escape-from-tarkov-cheats/'],
  ['/mw4-hacks', '/escape-from-tarkov-cheats'],
  ['mw4-hacks/', 'tarkov-hacks/'],
  ['mw4-hacks', 'tarkov-hacks'],

  ['/go/mw4/', '/go/tarkov/'],
  ['/go/mw4', '/go/tarkov'],
  ['/go/borderlands/', '/go/tarkov/'],
  ['/go/borderlands', '/go/tarkov'],
  ['/go/bodycam/', '/go/tarkov/'],
  ['/go/bodycam', '/go/tarkov'],
  ['/go/fortnite/', '/go/tarkov/'],
  ['/go/fortnite', '/go/tarkov'],

  ["checkoutPath('mw4')", "checkoutPath('tarkov')"],
  ['checkoutPath("mw4")', 'checkoutPath("tarkov")'],
  ["product: 'mw4'", "product: 'tarkov'"],
  ['  mw4:', '  tarkov:'],
  ['MW4_CHECKOUT_URL', 'TARKOV_CHECKOUT_URL'],
  ['mw4CheatsLanding', 'tarkovCheatsLanding'],
  ['zadeyoMw4ProductSeo', 'zadeyoTarkovProductSeo'],
  ['zadeyo-mw4-hacks-product-seo', 'zadeyo-tarkov-hacks-product-seo'],

  ['Modern Warfare 4', 'Tom Clancy's Rainbow Six Siege'],
  ['modern warfare 4', 'rainbow six siege'],
  ['Modern Warfare', 'Tom Clancy's Rainbow Six Siege'],
  ['modern warfare', 'rainbow six siege'],

  ['MW4 Hacks', 'R6 Cheat'],
  ['MW4 Hack', 'R6 Cheat'],
  ['MW4 hacks', 'Rainbow Six Siege cheats'],
  ['MW4 hack', 'Rainbow Six Siege cheat'],
  ['MW4 hacks', 'Rainbow Six Siege cheats'],
  ['MW4 hack', 'Rainbow Six Siege cheat'],
  ['MW4 Lite', 'R6 Lite'],
  ['MW4 Pro', 'R6 Pro'],
  ['MW4 Elite', 'R6 Elite'],
  ['MW4 ', 'R6 '],
  [' mw4 ', ' r6 '],
  ['mw4 ', 'r6 '],
  ["'mw4", "'r6"],
  ['"mw4', '"r6'],
  ['blog/mw4-', 'blog/tarkov-'],
  ['mw4-', 'tarkov-'],

  ["TITLE_PREFIX = 'R6 Cheat'", "TITLE_PREFIX = 'R6 Cheat'"],
  ['PRODUCT_BASE = \'/products/mw4-hacks/\'', "PRODUCT_BASE = '/products/tarkov/'"],
  ['FAVICON_VERSION = \'m2026\'', "FAVICON_VERSION = 'tarkov-2026'"],
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
    fs.renameSync(from, to);
    console.log('renamed', fromRel, '→', toRel);
  }
}

function renameLandingFile() {
  const from = path.join(root, 'src', 'data', 'mw4CheatsLanding.ts');
  const to = path.join(root, 'src', 'data', 'tarkovCheatsLanding.ts');
  if (fs.existsSync(from)) {
    const content = applyText(fs.readFileSync(from, 'utf8'));
    fs.writeFileSync(to, content);
    fs.unlinkSync(from);
    console.log('renamed mw4CheatsLanding.ts → tarkovCheatsLanding.ts');
  }
}

renameLandingFile();
renameIfExists('src/pages/go/mw4', 'src/pages/go/tarkov');
renameIfExists('src/pages/mw4-hacks', 'src/pages/escape-from-tarkov-cheats');
renameIfExists('src/pages/products/mw4-hacks', 'src/pages/products/tarkov-hacks');
renameIfExists('src/config/zadeyoMw4ProductSeo.ts', 'src/config/zadeyoTarkovProductSeo.ts');
renameIfExists('scripts/zadeyo-mw4-hacks-product-seo.mjs', 'scripts/zadeyo-tarkov-hacks-product-seo.mjs');
renameIfExists('scripts/install-mw4-hack-images.mjs', 'scripts/install-tarkov-hack-images.mjs');

const files = walk(root).filter((f) => TEXT_EXTS.has(path.extname(f).toLowerCase()));
let changed = 0;
for (const file of files) {
  if (file.includes(`${path.sep}rebrand-r6.mjs`)) continue;
  if (file.includes(`${path.sep}rebrand-mw4.mjs`)) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = applyText(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
    console.log('updated', path.relative(root, file));
  }
}

console.log(`Done. Updated ${changed} text files.`);
