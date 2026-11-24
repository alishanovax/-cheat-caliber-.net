/**
 * Homepage / product card copy: Marvel–R6 leftovers → EFT raid terminology
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const targets = [
  path.join(root, 'src', 'i18n', 'en.ts'),
  path.join(root, 'src', 'data', 'tarkovCheatsLanding.ts'),
  path.join(root, 'src', 'data', 'products.ts'),
  path.join(root, 'src', 'pages', 'go', 'tarkov', 'index.astro'),
  path.join(root, 'src', 'config', 'zadeyoTarkovProductSeo.ts'),
];

const REPLACEMENTS = [
  ['ability ESP', 'loot and container ESP'],
  ['Ability ESP', 'Loot and container ESP'],
  ['Hero ESP', 'Player ESP'],
  ['PMC and scav ESP, loot and container ESP', 'PMC and Scav ESP, loot ESP'],
  ['PMC and scav ESP', 'PMC and Scav ESP'],
  ['Competitive', 'PMC'],
  ['Casual', 'Scav'],
  ['Quick Match', 'Offline'],
  ['Practice', 'Co-op'],
  ['Domination', 'Labs'],
  ['Bomb-site & weapon locator', 'Loot & extract markers'],
  ['Round economy timers', 'Raid timer & stamina HUD'],
  ['bomb-site markers', 'loot and extract markers'],
  ['round timers', 'raid stamina and bleed timers'],
  ['round awareness', 'raid awareness'],
  ['competitive queues', 'PMC raids'],
  ['competitive queue', 'PMC raid'],
  ['competitive matchmaking', 'online raid matchmaking'],
  ['casual lobbies', 'Scav runs'],
  ['casual matches', 'online raids'],
  ['custom rooms', 'private raids'],
  ['practice modes', 'offline raid mode'],
  ['practice mode', 'offline raid mode'],
  ['practice sessions', 'offline raid sessions'],
  ['online matches', 'online raids'],
  ['through the round', 'through the raid'],
  ['rotating through the round', 'moving between loot points in-raid'],
  ['rotating under time pressure', 'under extraction pressure'],
  ['Health kits, health packs, and kevlar and helmet', 'Medkits, stim injectors, and armor plates'],
  ['the EA app or Ubisoft Connect', 'BSG Launcher'],
  ['EA app or Ubisoft Connect', 'BSG Launcher'],
  ['health packs', 'ifaks'],
  ['Competitive and casual matchmaking', 'PMC and Scav matchmaking'],
  ['Custom lobby support', 'Private raid / group queue support'],
  ['Practice mode for config testing', 'Offline raid for config testing'],
  ['high-stakes lobbies', 'high-value raids'],
  ['competitive or casual queues', 'PMC or Scav raids'],
  ['for competitive, casual, custom, and practice sessions', 'for PMC, Scav, offline, and co-op raids'],
  ['competitive play', 'PMC raid play'],
  ['competitive-safe presets', 'raid-safe presets'],
  ['before competitive matchmaking', 'before live PMC raids'],
  ['competitive and casual matches', 'PMC and Scav raids'],
  ['Quick Match perspective', 'Customs raid perspective'],
  ['First-person combat with kill feed and minimap.', 'First-person raid with HUD and loot ESP.'],
  ['Practice practice:', 'Offline practice:'],
  ['round timers and map overlay', 'raid timers and map overlay'],
];

for (const file of targets) {
  if (!fs.existsSync(file)) continue;
  let text = fs.readFileSync(file, 'utf8');
  let next = text;
  for (const [from, to] of REPLACEMENTS) {
    if (next.includes(from)) next = next.split(from).join(to);
  }
  if (next !== text) {
    fs.writeFileSync(file, next, 'utf8');
    console.log('patched', path.relative(root, file));
  }
}
console.log('Done.');