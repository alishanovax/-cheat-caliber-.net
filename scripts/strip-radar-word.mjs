/**
 * Remove the word "radar" from live site copy + rename blog slug tarkov-radar → tarkov-zone-map.
 * Run: node scripts/strip-radar-word.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const SLUG_FROM = 'tarkov-radar';
const SLUG_TO = 'tarkov-zone-map';

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro']);
const TEXT_EXTS = new Set(['.ts', '.astro', '.mjs', '.json', '.md', '.webmanifest', '.txt', '.html', '.css']);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const relFromRoot = path.relative(root, full);
      if (relFromRoot.startsWith(`scripts${path.sep}`) && relFromRoot !== 'scripts') continue;
      walk(full, out);
    } else if (TEXT_EXTS.has(path.extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

const PHRASE_REPLACEMENTS = [
  [SLUG_FROM, SLUG_TO],
  ['/blog/tarkov-radar/', `/blog/${SLUG_TO}/`],
  ['/blog/tarkov-radar', `/blog/${SLUG_TO}`],
  ['tarkov-radar-hack-guide', `${SLUG_TO}-guide`],
  ['tarkov-radar-cheat-guide', `${SLUG_TO}-guide`],
  ['onRadarPost', 'onZoneMapPost'],
  ['radarGuideProductLinks', 'zoneMapGuideProductLinks'],
  ['Radar cheat guides (blog hub)', 'Zone map guides (blog hub)'],
  ['Buy Lite radar cheat tier', 'Buy Lite map overlay tier'],
  ['Radar & ESP guides', 'Map overlay & ESP guides'],
  ['Checkout Lite radar tier', 'Checkout Lite map overlay tier'],
  ['Escape from Tarkov cheats shop (radar sidebar)', 'Escape from Tarkov cheats shop (zone map sidebar)'],
  ['Elite tier (radar + aimbot)', 'Elite tier (map overlay + aimbot)'],
  ['Loadout tools (radar guide)', 'Loadout tools (zone map guide)'],
  ['HWID spoofer (radar setup)', 'HWID spoofer (zone map setup)'],
  ['UGC appeals (radar)', 'UGC appeals (zone map)'],
  ['Radar cheat guide — loader support', 'Zone map guide — loader support'],
  ['Radar guide hub — more setup guides', 'Zone map hub — more setup guides'],
  ['Elite tier from radar guide sidebar', 'Elite tier from zone map guide sidebar'],
  ['Escape from Tarkov cheats shop linked from radar guide', 'Escape from Tarkov cheats shop linked from zone map guide'],
  ['loot radar', 'loot ESP'],
  ['Mini-radar overlay', 'Mini-map overlay'],
  ['mini-radar overlay', 'mini-map overlay'],
  ['Mini-radar,', 'Mini-map overlay,'],
  ['mini-radar,', 'mini-map overlay,'],
  ['mini-radar on', 'mini-map on'],
  ['Mini-radar helps', 'Mini-map helps'],
  ['radar cheats', 'map overlays'],
  ['radar cheat guide', 'zone map guide'],
  ['radar cheat guides', 'zone map guides'],
  ['Radar cheat guide', 'Zone map guide'],
  ['radar cheat', 'map overlay'],
  ['Radar cheat', 'Map overlay'],
  ['Radar Cheat', 'Map overlay'],
  ['RADAR CHEAT', 'MAP OVERLAY'],
  ['radar dots', 'enemy dots'],
  ['radar tab', 'map tab'],
  ['radar timing', 'overlay timing'],
  ['radar users', 'map overlay users'],
  ['radar pairing', 'map overlay pairing'],
  ['radar camera', 'map overlay camera'],
  ['radar guide', 'zone map guide'],
  ['Radar guide', 'Zone map guide'],
  ['radar overlays', 'map overlays'],
  ['Radar overlays', 'Map overlays'],
  ['ESP, radar', 'ESP, map overlay'],
  ['ESP and radar', 'ESP and map overlay'],
  ['ESP + radar', 'ESP + map overlay'],
  ['ESP and radar,', 'ESP and map overlay,'],
  ['ESP, radar,', 'ESP, map overlay,'],
  ['and radar —', 'and map overlay —'],
  ['and radar.', 'and map overlay.'],
  ['and radar,', 'and map overlay,'],
  ['timers and radar', 'timers and map overlay'],
  [', radar and', ', map overlay and'],
  ['radar and raid', 'map overlay and raid'],
  ['ESP and radar', 'ESP and map overlay'],
  ['Radar and rotations', 'Map overlay and rotations'],
  ['Pair with radar cheat', 'Pair with map overlay'],
  ['Pair with radar', 'Pair with zone map overlay'],
  ['Get Lite radar cheat', 'Get Lite map overlay'],
  ['Get radar cheat with Lite', 'Get map overlay with Lite'],
  ['Radar Cheat for supports', 'Map overlay for supports'],
  ['Radar cheat overview', 'Map overlay overview'],
  ['Radar cheat on', 'Map overlay on'],
  ['Radar cheat is', 'Map overlay is'],
  ['Radar cheat complements', 'Map overlay complements'],
  ['Radar cheat camera', 'Map overlay camera'],
  ['Enable radar cheat', 'Enable map overlay'],
  ['Which tier includes radar cheat?', 'Which tier includes map overlay?'],
  ['Radar ships on', 'Map overlay ships on'],
  ['Radar dots often', 'Enemy dots often'],
  ['Supports use radar to', 'Supports use map overlay to'],
  ['with radar dots', 'with enemy dots'],
  ['adapt to radar', 'adapt to overlay'],
  ['for radar users', 'for map overlay users'],
  ['Lite vs Pro radar', 'Lite vs Pro map'],
  ['Lite: ESP and radar', 'Lite: ESP and map overlay'],
  ["label: 'Radar'", "label: 'Map overlay'"],
  ['label: "Radar"', 'label: "Map overlay"'],
  ["feature: 'Radar'", "feature: 'Map overlay'"],
  ['Radar & Loot', 'Map & Loot'],
  ['Radar Cheat', 'Map Overlay'],
  ['Radar Online', 'Map Online'],
  ['UAV Radar', 'UAV overlay'],
  ['Radar &', 'Map overlay &'],
  [' radar ', ' map overlay '],
  [' radar,', ' map overlay,'],
  [' radar.', ' map overlay.'],
  [' radar—', ' map overlay—'],
  [' radar:', ' map overlay:'],
  ['(radar ', '(map overlay '],
  ['| Radar ', '| Map overlay '],
  ['Radar & Loot Timers', 'Map overlay & Loot Timers'],
  ['Player ESP, Radar &', 'Player ESP, map overlay &'],
  ['Escape from Tarkov radar cheats guide', 'Escape from Tarkov map overlay guide'],
  ['Escape from Tarkov Radar cheat Guide', 'Escape from Tarkov map overlay guide'],
  ['Escape from Tarkov radar cheat guide', 'Escape from Tarkov map overlay guide'],
  ['Escape from Tarkov radar guide', 'Escape from Tarkov zone map guide'],
  ['Escape from Tarkov radar on PC', 'Escape from Tarkov zone map on PC'],
  ['EFT Cheats: PC aimbot, ESP & radar', 'EFT Cheats: PC aimbot, ESP & map overlay'],
  ['wall ESP, radar and', 'wall ESP, map overlay and'],
  ['wall ESP, radar,', 'wall ESP, map overlay,'],
  ['aimbot ESP, wall ESP, radar and', 'aimbot ESP, wall ESP, map overlay and'],
  ['wall ESP, radar, and', 'wall ESP, map overlay, and'],
  ['FAQ on Lite, Pro and Elite tiers, aimbot, wall ESP, radar,', 'FAQ on Lite, Pro and Elite tiers, aimbot, wall ESP, map overlay,'],
  ['round timers and radar without', 'round timers and map overlay without'],
  ['bomb-site markers, round timers and radar', 'loot markers, raid timers and map overlay'],
  ['num: \'03\', label: \'Radar\'', "num: '03', label: 'Map'"],
];

function cleanRadarResidual(text) {
  return text
    .replace(/\b[Rr]adar\b/g, 'map overlay')
    .replace(/\bRADAR\b/g, 'MAP OVERLAY')
    .replace(/map overlay overlay/gi, 'map overlay')
    .replace(/Map overlay overlay/g, 'Map overlay')
    .replace(/zone map overlay guide guide/g, 'zone map guide');
}

const files = [...new Set(walk(root))];

let changed = 0;
for (const file of files) {
  if (file.includes('strip-radar-word.mjs')) continue;
  if (!fs.existsSync(file)) continue;
  const before = fs.readFileSync(file, 'utf8');
  let next = before;
  for (const entry of PHRASE_REPLACEMENTS) {
    if (typeof entry !== 'object' || Array.isArray(entry)) {
      const [from, to] = entry;
      if (next.includes(from)) next = next.split(from).join(to);
    }
  }
  if (path.relative(root, file).startsWith(`src${path.sep}`) || file.includes('public')) {
    next = cleanRadarResidual(next);
  }
  if (next !== before) {
    fs.writeFileSync(file, next, 'utf8');
    changed++;
    console.log(path.relative(root, file));
  }
}

// Ensure legacy blog URLs redirect
const redirectsFile = path.join(root, 'public', '_redirects');
let redirects = fs.readFileSync(redirectsFile, 'utf8');
const legacyLines = [
  `/blog/${SLUG_FROM}  /blog/${SLUG_TO}/  301`,
  `/blog/${SLUG_FROM}/  /blog/${SLUG_TO}/  301`,
];
for (const line of legacyLines) {
  if (!redirects.includes(line.split('  ')[0])) {
    redirects = `${line}\n${redirects}`;
  }
}
fs.writeFileSync(redirectsFile, redirects, 'utf8');

const slugRedirects = path.join(root, 'src', 'config', 'slug-redirects.mjs');
if (fs.existsSync(slugRedirects)) {
  let s = fs.readFileSync(slugRedirects, 'utf8');
  const add = `  '/blog/${SLUG_FROM}/': '/blog/${SLUG_TO}/',\n  '/blog/${SLUG_FROM}': '/blog/${SLUG_TO}/',\n`;
  if (!s.includes(`'/blog/${SLUG_FROM}/'`)) {
    s = s.replace(/export const SLUG_REDIRECTS = \{/, `export const SLUG_REDIRECTS = {\n${add}`);
    fs.writeFileSync(slugRedirects, s, 'utf8');
    console.log('patched slug-redirects.mjs');
  }
}

console.log(`Done. Updated ${changed} files.`);