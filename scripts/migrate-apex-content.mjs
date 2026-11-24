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
  ['/products/tarkov/', '/products/cs-go/'],
  ['/products/tarkov', '/products/cs-go'],
  ['/tarkov-hacks/', '/cs-go-cheats/'],
  ['/tarkov-hacks', '/cs-go-cheats'],
  ['/go/tarkov/', '/go/cs-go/'],
  ['/go/tarkov', '/go/cs-go'],
  ['Escape from Tarkov', 'Counter-Strike: Global Offensive'],
  ['Rainbow Six', 'Counter-Strike: Global Offensive'],
  ['EFT Cheats', 'CSGO Cheats'],
  ['Escape from Tarkov cheats', 'CS:GO cheats'],
  ['Escape from Tarkov cheat', 'CS:GO cheat'],
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
  ['PMC and scav ESP', 'player ESP'],
  ['per-operator', 'per-map'],
  ['ability ESP', 'weapon ESP'],
  ['Ability ESP', 'Item ESP'],
  ['Practice', 'offline raid'],
  ['offline raid mode', 'offline raid'],
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
  ['buy-tarkov-hacks', 'buy-cs-go-cheats'],
  ['buy-escape-from-tarkov-cheats', 'buy-cs-go-cheats'],
  ['tarkov-lite-vs-pro', 'csgo-lite-vs-pro'],
  ['tarkov-practice-lobby', 'csgo-deathmatch-practice'],
  ['tarkov-training-tips', 'csgo-training-tips'],
  ['tarkov-esp-setup', 'csgo-esp-setup'],
  ['tarkov-radar', 'csgo-radar'],
  ['tarkov-aimbot-raids', 'csgo-aimbot-competitive'],
  ['tarkov-aimbot-combat', 'csgo-aimbot-combat'],
  ['tarkov-stream-proof', 'csgo-stream-proof'],
  ['tarkov-elite', 'csgo-elite-tier'],
  ['tarkov-features', 'csgo-cheat-features'],
  ['tarkov-hwid-ban', 'csgo-hwid-ban'],
  ['tarkov-external-hack-guide', 'csgo-external-loader'],
  ['tarkov-external-loader', 'csgo-external-loader'],
  ['tarkov-loadouts', 'csgo-loadouts'],
  ['tarkov-hack-setup', 'csgo-cheat-setup'],
  ['tarkov-practice-settings', 'csgo-practice-settings'],
  ['tarkov-hack-codes', 'csgo-practice-settings'],
  ['enable-tarkov-console', 'csgo-practice-settings-forum'],
  ['after-tarkov-patch', 'after-csgo-patch'],
  ['tarkov-positioning', 'csgo-map-control'],
  ['tarkov-aim-practice', 'csgo-aim-practice'],
  ['tarkov-map-awareness', 'csgo-map-awareness'],
  ['choose-tier', 'choose-csgo-tier'],
  ['escape-from-tarkov-cheats', 'cs-go-cheats'],
  ['tarkov-hacks-features-guide', 'csgo-cheat-features'],
  ['how-to-buy-tarkov-hacks-2026', 'buy-cs-go-cheats'],
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
  out = out.replace(/\/blog\/tarkov-/g, '/blog/apex-');
  out = out.replace(/slug: "tarkov-/g, 'slug: "apex-');
  out = out.replace(/slug: 'tarkov-/g, "slug: 'apex-");
  out = out.replace(/cheatImageForSlug\('tarkov-/g, "cheatImageForSlug('apex-");
  out = out.replace(/cheatImageForSlug\("tarkov-/g, 'cheatImageForSlug("apex-');
  out = out.replace(/productRelatedBlogSlugs[\s\S]*?};/m, (block) =>
    block.replace(/'tarkov-/g, "'apex-").replace(/"tarkov-/g, '"apex-'),
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
