/**
 * Apply canonical short slugs in content (run once after editing slug-redirects.mjs).
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const REPLACEMENTS = [
  ['/products/r6-hacks/', '/products/r6/'],
  ['products/r6-cheats/', 'products/r6/'],

  ['r6-cheat-features', 'r6-cheat-features'],
  ['r6-console-commands-guide', 'r6-training-grounds-practice'],
  ['r6-console-hacks-tips', 'r6-training-tips'],
  ['how-to-use-r6-console-commands', 'r6-cheat-setup'],
  ['r6-console-commands-hacks', 'r6-console-commands'],
  ['how-to-buy-r6-cheats-2026', 'buy-r6-cheats'],
  ['r6-hwid-spoofer-after-ban', 'r6-hwid-ban'],
  ['r6-radar-hack-guide', 'r6-radar'],
  ['r6-external-loader', 'r6-external-loader'],
  ['r6-esp-wallhack-setup', 'r6-esp-setup'],
  ['r6-stream-proof-setup', 'r6-stream-proof'],
  ['r6-aimbot-competitive-guide', 'r6-aimbot-competitive'],
  ['r6-aimbot-combat-guide', 'r6-aimbot-combat'],
  ['r6-elite-tier-tier-guide', 'r6-elite-tier'],
  ['r6-skin-changer-guide', 'r6-loadouts'],
  ['anti-cheat-patch-day-day-checklist', 'anti-cheat-patch-day'],
  ['anti-cheat-r6-guide', 'anti-cheat-troubleshooting'],

  ['can-custom-lobby-hack-codes-be-used-in-competitive', 'lobby-codes-competitive'],
  ['how-to-enable-the-r6-console', 'r6-console-commands-forum'],
  ['practice-r6-high-ground-safely', 'r6-high-ground'],
  ['what-to-check-after-a-r6-patch', 'after-r6-patch'],
  ['r6-lite-or-pro-tier-comparison', 'lite-vs-pro'],
  ['how-to-learn-weapon-aim-in-creative', 'r6-aim-practice'],
  ['what-does-r6-map-awareness-include', 'r6-map-awareness'],
  ['how-to-set-up-map-overlay', 'map-overlay-setup'],
  ['what-zoom-settings-are-comfortable', 'camera-zoom'],
  ['how-to-tune-script-delay-settings', 'aimbot-delay'],
  ['how-to-practice-auto-combos', 'aimbot-practice'],
  ['what-is-in-the-elite-tier', 'elite-tier-tools'],
  ['how-do-lite-and-pro-differ', 'lite-pro-diff'],
  ['what-to-know-about-skin-changer', 'loadout-tools'],
  ['what-to-do-if-eac-cannot-verify', 'anti-cheat-verify'],
  ['how-does-an-external-loader-work', 'external-loader'],
  ['how-to-check-stream-proof-capture', 'stream-proof-obs'],
  ['what-to-do-after-hwid-change', 'after-hwid-change'],
  ['what-to-check-before-installing-tools', 'before-install'],
  ['how-to-choose-r6-product-tier', 'choose-r6-tier'],
];

const SKIP = new Set(['node_modules', '.git', 'dist']);
const EXTS = new Set(['.ts', '.astro', '.mjs', '.json', '.md', '.txt', '.webmanifest']);

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f, out);
    else if (EXTS.has(path.extname(e.name))) out.push(f);
  }
  return out;
}

let n = 0;
for (const file of walk(root)) {
  if (file.includes('apply-short-slugs.mjs')) continue;
  if (file.includes('slug-redirects.mjs')) continue;
  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  for (const [a, b] of REPLACEMENTS) {
    if (after.includes(a)) after = after.split(a).join(b);
  }
  if (after !== before) {
    fs.writeFileSync(file, after);
    n++;
    console.log(path.relative(root, file));
  }
}

const fromDir = path.join(root, 'src', 'pages', 'products', 'r6-hacks');
const toDir = path.join(root, 'src', 'pages', 'products', 'r6');
if (fs.existsSync(fromDir) && !fs.existsSync(toDir)) {
  fs.renameSync(fromDir, toDir);
  console.log('renamed pages/products/r6-hacks → r6');
}

console.log(`Updated ${n} files.`);
