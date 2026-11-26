/**
 * One-time content migration: R6 template → Counter-Strike: Global Offensive (csgo-cheat.org).
 * Run: node scripts/migrate-apex-content.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');

const TEXT_REPLACEMENTS = [
  ['https://r6hacks.org', 'https://csgo-cheat.org'],
  ['r6hacks.org', 'csgo-cheat.org'],
  ['https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Frainbow-six-siege', 'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fcs-go'],
  ['/products/caliber/', '/products/cs-go/'],
  ['/products/caliber', '/products/cs-go'],
  ['/caliber-hacks/', '/cs-go-cheats/'],
  ['/caliber-hacks', '/cs-go-cheats'],
  ['/go/caliber/', '/go/cs-go/'],
  ['/go/caliber', '/go/cs-go'],
  ['Caliber', 'Counter-Strike: Global Offensive'],
  ['Rainbow Six', 'Counter-Strike: Global Offensive'],
  ['Caliber Cheats', 'CSGO Cheats'],
  ['Caliber cheats', 'CS:GO cheats'],
  ['Caliber cheat', 'CS:GO cheat'],
  ['r6 hacks', 'CS:GO cheats'],
  ['r6 hack', 'CS:GO cheat'],
  ['Lite', 'CS:GO Lite'],
  ['Pro', 'CS:GO Pro'],
  ['Elite', 'CS:GO Elite'],
  ['anti-cheat', 'anti-cheat'],
  ['anti-cheat', 'easy-anti-cheat'],
  ['Ubisoft', 'BSG'],
  ['operator portal', 'customer portal'],
  ['Operator loadout', 'operator loadout'],
  ['operator ESP', 'player ESP'],
  ['per-operator', 'per-map'],
  ['ability ESP', 'weapon ESP'],
  ['Ability ESP', 'Item ESP'],
  ['Practice', 'training mode'],
  ['training mode', 'training mode'],
  ['Shooting Range', 'training mode'],
  ['Team Deathmatch and Deathmatch', 'PvP raid and SCAV run'],
  ['Team Deathmatch', 'PvP raid'],
  ['Deathmatch', 'SCAV run'],
  ['reboot vans', 'objective points'],
  ['reboot van', 'respawn beacon'],
  ['Vault Hunter', 'Legend'],
  ['Settlement fight', 'Counter-Strike: Global Offensive raid combat'],
  ['Courtyard battle', 'Counter-Strike: Global Offensive firefight'],
];

const SLUG_REPLACEMENTS = [
  ['buy-caliber-hacks', 'buy-cs-go-cheats'],
  ['buy-caliber-cheats', 'buy-cs-go-cheats'],
  ['caliber-lite-vs-pro', 'csgo-lite-vs-pro'],
  ['caliber-practice-lobby', 'csgo-deathmatch-practice'],
  ['caliber-training-tips', 'csgo-training-tips'],
  ['caliber-esp-setup', 'csgo-esp-setup'],
  ['caliber-map-awareness', 'csgo-radar'],
  ['caliber-aimbot-matches', 'csgo-aimbot-competitive'],
  ['caliber-aimbot-combat', 'csgo-aimbot-combat'],
  ['caliber-stream-proof', 'csgo-stream-proof'],
  ['caliber-elite', 'csgo-elite-tier'],
  ['caliber-features', 'csgo-cheat-features'],
  ['caliber-hwid-ban', 'csgo-hwid-ban'],
  ['caliber-external-hack-guide', 'csgo-external-loader'],
  ['caliber-external-loader', 'csgo-external-loader'],
  ['caliber-loadouts', 'csgo-loadouts'],
  ['caliber-hack-setup', 'csgo-cheat-setup'],
  ['caliber-practice-settings', 'csgo-practice-settings'],
  ['caliber-hack-codes', 'csgo-practice-settings'],
  ['enable-caliber-console', 'csgo-practice-settings-forum'],
  ['after-caliber-patch', 'after-csgo-patch'],
  ['caliber-positioning', 'csgo-map-control'],
  ['caliber-aim-practice', 'csgo-aim-practice'],
  ['caliber-map-awareness', 'csgo-map-awareness'],
  ['choose-tier', 'choose-csgo-tier'],
  ['caliber-cheats', 'cs-go-cheats'],
  ['caliber-hacks-features-guide', 'csgo-cheat-features'],
  ['how-to-buy-caliber-hacks-2026', 'buy-cs-go-cheats'],
  ['anti-cheat-patch', 'anti-cheat-patch-day'],
  ['anti-cheat-fix', 'anti-cheat-troubleshooting'],
  ['anti-cheat-verify', 'anti-cheat-verify'],
];

const EXTENSIONS = new Set([
  '.ts',
  '.tsx',
  '.astro',
  '.mjs',
  '.js',
  '.json',
  '.txt',
  '.xml',
  '.svg',
  '.toml',
  '.md',
]);

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules' || name === 'dist' || name === '.git') continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, files);
    else if (EXTENSIONS.has(path.extname(name))) files.push(full);
  }
  return files;
}

function applyReplacements(content) {
  let out = content;
  for (const [from, to] of SLUG_REPLACEMENTS) {
    out = out.split(from).join(to);
  }
  for (const [from, to] of TEXT_REPLACEMENTS) {
    out = out.split(from).join(to);
  }
  // Remaining path segments
  out = out.replace(/\/blog\/caliber-/g, '/blog/apex-');
  out = out.replace(/slug: "caliber-/g, 'slug: "apex-');
  out = out.replace(/slug: 'caliber-/g, "slug: 'apex-");
  out = out.replace(/cheatImageForSlug\('caliber-/g, "cheatImageForSlug('apex-");
  out = out.replace(/cheatImageForSlug\("caliber-/g, 'cheatImageForSlug("apex-');
  out = out.replace(/productRelatedBlogSlugs[\s\S]*?};/m, (block) =>
    block.replace(/'caliber-/g, "'apex-").replace(/"caliber-/g, '"apex-'),
  );
  return out;
}

const files = walk(ROOT);
let changed = 0;
for (const file of files) {
  if (file.includes('migrate-apex-content.mjs')) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = applyReplacements(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
  }
}

console.log(`Updated ${changed} files.`);
