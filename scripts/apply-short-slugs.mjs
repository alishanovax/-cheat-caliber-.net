/**
 * Apply canonical short slugs in content (run once after editing slug-redirects.mjs).
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const REPLACEMENTS = [
  ['/products/caliber-hacks/', '/products/caliber/'],
  ['products/caliber-cheats/', 'products/r6/'],

  ['caliber-cheat-features', 'caliber-cheat-features'],
  ['caliber-practice-settings-guide', 'caliber-training-practice'],
  ['caliber-console-hacks-tips', 'caliber-training-tips'],
  ['how-to-use-caliber-practice-settings', 'caliber-cheat-setup'],
  ['caliber-practice-settings-hacks', 'caliber-practice-settings'],
  ['how-to-buy-caliber-cheats-2026', 'buy-caliber-cheats'],
  ['caliber-hwid-spoofer-after-ban', 'caliber-hwid-ban'],
  ['caliber-map-awareness-hack-guide', 'caliber-map-awareness'],
  ['caliber-external-loader', 'caliber-external-loader'],
  ['caliber-esp-wallhack-setup', 'caliber-esp-setup'],
  ['caliber-stream-proof-setup', 'caliber-stream-proof'],
  ['caliber-aimbot-matches-guide', 'caliber-aimbot-matches'],
  ['caliber-aimbot-combat-guide', 'caliber-aimbot-combat'],
  ['caliber-elite-tier-tier-guide', 'caliber-elite-tier'],
  ['caliber-skin-changer-guide', 'caliber-loadouts'],
  ['anti-cheat-patch-day-day-checklist', 'anti-cheat-patch-day'],
  ['anti-cheat-caliber-guide', 'anti-cheat-troubleshooting'],

  ['can-custom-lobby-hack-codes-be-used-in-competitive', 'lobby-codes-competitive'],
  ['how-to-enable-the-caliber-console', 'caliber-practice-settings-forum'],
  ['practice-caliber-positioning-safely', 'caliber-positioning'],
  ['what-to-check-after-a-caliber-patch', 'after-caliber-patch'],
  ['caliber-lite-or-pro-tier-comparison', 'lite-vs-pro'],
  ['how-to-learn-weapon-aim-in-creative', 'caliber-aim-practice'],
  ['what-does-caliber-map-awareness-include', 'caliber-map-awareness'],
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
  ['how-to-choose-caliber-product-tier', 'choose-caliber-tier'],
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

const fromDir = path.join(root, 'src', 'pages', 'products', 'caliber-hacks');
const toDir = path.join(root, 'src', 'pages', 'products', 'r6');
if (fs.existsSync(fromDir) && !fs.existsSync(toDir)) {
  fs.renameSync(fromDir, toDir);
  console.log('renamed pages/products/caliber-hacks → r6');
}

console.log(`Updated ${n} files.`);
