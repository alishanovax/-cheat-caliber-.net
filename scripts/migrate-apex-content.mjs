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
  ['/products/r6/', '/products/cs-go/'],
  ['/products/r6', '/products/cs-go'],
  ['/r6-hacks/', '/cs-go-cheats/'],
  ['/r6-hacks', '/cs-go-cheats'],
  ['/go/r6/', '/go/cs-go/'],
  ['/go/r6', '/go/cs-go'],
  ['Marvel Rivals', 'Counter-Strike: Global Offensive'],
  ['Rainbow Six', 'Counter-Strike: Global Offensive'],
  ['Rivals Cheat', 'CSGO Cheats'],
  ['Marvel Rivals cheats', 'CS:GO cheats'],
  ['Marvel Rivals cheat', 'CS:GO cheat'],
  ['r6 hacks', 'CS:GO cheats'],
  ['r6 hack', 'CS:GO cheat'],
  ['Lite', 'CS:GO Lite'],
  ['Pro', 'CS:GO Pro'],
  ['Elite', 'CS:GO Elite'],
  ['anti-cheat', 'anti-cheat'],
  ['anti-cheat', 'easy-anti-cheat'],
  ['Ubisoft', 'BSG'],
  ['operator portal', 'customer portal'],
  ['Operator loadout', 'PMC loadout'],
  ['hero ESP', 'player ESP'],
  ['per-operator', 'per-map'],
  ['ability ESP', 'weapon ESP'],
  ['Ability ESP', 'Item ESP'],
  ['Practice', 'offline raid'],
  ['training grounds', 'offline raid'],
  ['Shooting Range', 'offline raid'],
  ['Team Deathmatch and Deathmatch', 'PMC raid and SCAV run'],
  ['Team Deathmatch', 'PMC raid'],
  ['Deathmatch', 'SCAV run'],
  ['reboot vans', 'extract points'],
  ['reboot van', 'respawn beacon'],
  ['Vault Hunter', 'Legend'],
  ['Settlement fight', 'Counter-Strike: Global Offensive raid combat'],
  ['Courtyard battle', 'Counter-Strike: Global Offensive firefight'],
];

const SLUG_REPLACEMENTS = [
  ['buy-r6-hacks', 'buy-cs-go-cheats'],
  ['buy-r6-cheats', 'buy-cs-go-cheats'],
  ['r6-lite-vs-pro', 'csgo-lite-vs-pro'],
  ['r6-practice-lobby', 'csgo-deathmatch-practice'],
  ['r6-training-tips', 'csgo-training-tips'],
  ['r6-esp-setup', 'csgo-esp-setup'],
  ['r6-radar', 'csgo-radar'],
  ['r6-aimbot-competitive', 'csgo-aimbot-competitive'],
  ['r6-aimbot-combat', 'csgo-aimbot-combat'],
  ['r6-stream-proof', 'csgo-stream-proof'],
  ['r6-elite', 'csgo-elite-tier'],
  ['r6-features', 'csgo-cheat-features'],
  ['r6-hwid-ban', 'csgo-hwid-ban'],
  ['r6-external-hack-guide', 'csgo-external-loader'],
  ['r6-external-loader', 'csgo-external-loader'],
  ['r6-loadouts', 'csgo-loadouts'],
  ['r6-hack-setup', 'csgo-cheat-setup'],
  ['r6-console-commands', 'csgo-practice-settings'],
  ['r6-hack-codes', 'csgo-practice-settings'],
  ['enable-r6-console', 'csgo-practice-settings-forum'],
  ['after-r6-patch', 'after-csgo-patch'],
  ['r6-high-ground', 'csgo-map-control'],
  ['r6-aim-practice', 'csgo-aim-practice'],
  ['r6-map-awareness', 'csgo-map-awareness'],
  ['choose-tier', 'choose-csgo-tier'],
  ['r6-cheats', 'cs-go-cheats'],
  ['r6-hacks-features-guide', 'csgo-cheat-features'],
  ['how-to-buy-r6-hacks-2026', 'buy-cs-go-cheats'],
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
  out = out.replace(/\/blog\/r6-/g, '/blog/apex-');
  out = out.replace(/slug: "r6-/g, 'slug: "apex-');
  out = out.replace(/slug: 'r6-/g, "slug: 'apex-");
  out = out.replace(/cheatImageForSlug\('r6-/g, "cheatImageForSlug('apex-");
  out = out.replace(/cheatImageForSlug\("r6-/g, 'cheatImageForSlug("apex-');
  out = out.replace(/productRelatedBlogSlugs[\s\S]*?};/m, (block) =>
    block.replace(/'r6-/g, "'apex-").replace(/"r6-/g, '"apex-'),
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
