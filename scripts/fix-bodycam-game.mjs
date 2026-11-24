/** Escape from Tarkov (Steam FPS) copy fixes — run: node scripts/fix-tarkov-game.mjs */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const SKIP = new Set(['node_modules', '.git', 'dist', '_template']);
const EXTS = new Set(['.ts', '.astro', '.mjs', '.md']);

const REPLACEMENTS = [
  ['Steam Games Launcher', 'Ubisoft Connect'],
  ['Steam Games file', 'Steam game file'],
  ['Steam Games launch', 'Steam launch'],
  ['through Steam Games', 'through Steam'],
  ['on Steam Games', 'on Steam'],
  ['Steam Games', 'Steam'],
  ['launch Escape from Tarkov on Epic', 'launch Escape from Tarkov on Steam'],
  ['Private Servers', 'offline raid'],
  ['private servers', 'shooting range'],
  ['Auto Shield Break', 'Recoil control'],
  ['Auto Finish', 'Triggerbot'],
  ['pickaxes', 'weapons'],
  ['pickaxe', 'weapon'],
  ['wraps and weapons', 'camos and attachments'],
  ['wrap & weapon customizer', 'camo & attachment preview'],
  ['through builds', 'through cover'],
  ['Storm and POI markers', 'Bomb sites and hardpoint zones'],
  ['Find chests and loot', 'Spot weapons and ammo'],
  ['Chest and floor-ammo ESP', 'Weapon and ammo pickup ESP'],
  ['high-ground angles and chest positions', 'angles and bomb-site lines'],
  ['same POI clear', 'same map route'],
  ['Private Servers island', 'offline raid session'],
  ['Private Servers islands', 'offline raid sessions'],
  ['BR, SCAV run, SCAV run, Private Servers', 'Uncompetitive, Body Bomb, TDM, Hardpoint'],
  ['Multiplayer, SCAV run, SCAV run, Private Servers', 'PMC raid, SCAV run, Uncompetitive, Hardpoint'],
  ['Multiplayer, SCAV run and SCAV run', 'PMC raid, Uncompetitive and competitive seasons'],
  ['Multiplayer and SCAV run', 'PMC raid and SCAV run'],
  ['SCAV run and Private Servers', 'SCAV run seasons and offline raid'],
  ['SCAV run or SCAV run', 'Uncompetitive or SCAV run'],
  ['SCAV run presets', 'competitive-season presets'],
  ['before SCAV run', 'before competitive matchmaking'],
  ['in SCAV run', 'in competitive playlists'],
  ['for SCAV run', 'for competitive play'],
  ['queue SCAV run', 'queue competitive'],
  ['player builds', 'weapon loadouts'],
  ['hero scripts', 'aim modules'],
  ['hero abilities', 'operator perks'],
];

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (EXTS.has(path.extname(e.name).toLowerCase())) out.push(full);
  }
  return out;
}

let n = 0;
for (const file of walk(path.join(root, 'src'))) {
  if (file.includes('fix-tarkov-game')) continue;
  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  for (const [from, to] of REPLACEMENTS) {
    if (after.includes(from)) after = after.split(from).join(to);
  }
  if (after !== before) {
    fs.writeFileSync(file, after);
    n++;
  }
}
console.log(`Updated ${n} files.`);
