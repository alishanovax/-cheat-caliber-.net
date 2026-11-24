/**
 * Apply canonical short slugs in content (run once after editing slug-redirects.mjs).
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const REPLACEMENTS = [
  ['/products/tarkov-hacks/', '/products/tarkov/'],
  ['products/escape-from-tarkov-cheats/', 'products/r6/'],

  ['tarkov-cheat-features', 'tarkov-cheat-features'],
  ['tarkov-practice-settings-guide', 'tarkov-offline-practice'],
  ['tarkov-console-hacks-tips', 'tarkov-training-tips'],
  ['how-to-use-tarkov-practice-settings', 'tarkov-cheat-setup'],
  ['tarkov-practice-settings-hacks', 'tarkov-practice-settings'],
  ['how-to-buy-escape-from-tarkov-cheats-2026', 'buy-escape-from-tarkov-cheats'],
  ['tarkov-hwid-spoofer-after-ban', 'tarkov-hwid-ban'],
  ['tarkov-zone-map-hack-guide', 'tarkov-zone-map'],
  ['tarkov-external-loader', 'tarkov-external-loader'],
  ['tarkov-esp-wallhack-setup', 'tarkov-esp-setup'],
  ['tarkov-stream-proof-setup', 'tarkov-stream-proof'],
  ['tarkov-aimbot-raids-guide', 'tarkov-aimbot-raids'],
  ['tarkov-aimbot-combat-guide', 'tarkov-aimbot-combat'],
  ['tarkov-elite-tier-tier-guide', 'tarkov-elite-tier'],
  ['tarkov-skin-changer-guide', 'tarkov-loadouts'],
  ['anti-cheat-patch-day-day-checklist', 'anti-cheat-patch-day'],
  ['anti-cheat-tarkov-guide', 'anti-cheat-troubleshooting'],

  ['can-custom-lobby-hack-codes-be-used-in-competitive', 'lobby-codes-competitive'],
  ['how-to-enable-the-tarkov-console', 'tarkov-practice-settings-forum'],
  ['practice-tarkov-positioning-safely', 'tarkov-positioning'],
  ['what-to-check-after-a-tarkov-patch', 'after-tarkov-patch'],
  ['tarkov-lite-or-pro-tier-comparison', 'lite-vs-pro'],
  ['how-to-learn-weapon-aim-in-creative', 'tarkov-aim-practice'],
  ['what-does-tarkov-map-awareness-include', 'tarkov-map-awareness'],
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
  ['how-to-choose-tarkov-product-tier', 'choose-tarkov-tier'],
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

const fromDir = path.join(root, 'src', 'pages', 'products', 'tarkov-hacks');
const toDir = path.join(root, 'src', 'pages', 'products', 'r6');
if (fs.existsSync(fromDir) && !fs.existsSync(toDir)) {
  fs.renameSync(fromDir, toDir);
  console.log('renamed pages/products/tarkov-hacks → r6');
}

console.log(`Updated ${n} files.`);
