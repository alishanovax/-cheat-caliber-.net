/**
 * Copy user hack screenshots (long Windows paths) into public/images,
 * then write SEO-named PNGs for gameplay + blog.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir =
  'C:\\Users\\3Tee System\\.cursor\\projects\\c-Users-3Tee-System-Downloads-r6hacks-org-main\\assets';
const importDir = path.resolve('_import');
const gameplayDir = path.resolve('public/images/gameplay');
const blogDir = path.resolve('public/images/blog');

/** Skip Valorant screenshot only. */
const SKIP_SUBSTRINGS = ['065800-cb09d0b5'];

const GAMEPLAY = [
  { file: 'tarkov-esp-wallhack.png', alt: 'Escape from Tarkov ESP wallhack hack gameplay with player boxes distance tags and aimbot FOV' },
  { file: 'tarkov-aimbot-combat.png', alt: 'Escape from Tarkov aimbot hack gameplay with FOV circle and green skeleton ESP on enemy' },
  { file: 'tarkov-player-esp.png', alt: 'Escape from Tarkov PMC and scav ESP wallhack showing skeletons boxes and distance meters' },
  { file: 'tarkov-radar-hack.png', alt: 'Escape from Tarkov radar and ESP overlay with enemy name tags health and range markers' },
  { file: 'tarkov-auto-aim.png', alt: 'Escape from Tarkov sniper aimbot hack with green ESP box weapon label and FOV circle' },
  { file: 'tarkov-loot-radar.png', alt: 'Escape from Tarkov loot and ability ESP gameplay with enemy boxes and distance trackers' },
  { file: 'tarkov-skin-changer.png', alt: 'Escape from Tarkov hack gameplay with chams skeleton ESP and aim lock on pier' },
  { file: 'tarkov-thermal-esp.png', alt: 'Escape from Tarkov thermal vision ESP showing skeleton wallhack HP and distance' },
  { file: 'tarkov-build-fight-esp.png', alt: 'Escape from Tarkov build fight ESP wallhack with names HP bars and FOV circle' },
  { file: 'tarkov-arena-wallhack.png', alt: 'Escape from Tarkov arena wallhack ESP with wireframe players and weapon tags' },
  { file: 'tarkov-spawn-island-esp.png', alt: 'Escape from Tarkov spawn island ESP with skeleton boxes and aimbot reticle' },
  { file: 'tarkov-long-range-esp.png', alt: 'Escape from Tarkov long range ESP wallhack with enemy names health and weapons' },
  { file: 'tarkov-aimbot-lock.png', alt: 'Escape from Tarkov aimbot lock with green skeleton ESP FOV circle and head priority' },
  { file: 'tarkov-chams-esp.png', alt: 'Escape from Tarkov chams and skeleton ESP hack on wooden pier' },
  { file: 'tarkov-squad-esp.png', alt: 'Escape from Tarkov multi-PMC and scav ESP wallhack with boxes skeletons and distances' },
  { file: 'tarkov-combat-esp.png', alt: 'Escape from Tarkov combat ESP and aimbot overlay in open field fight' },
];

const BLOG = [
  'tarkov-offline-practice.png',
  'tarkov-training-tips.png',
  'tarkov-cheat-setup.png',
  'tarkov-cheat-features.png',
  'tarkov-practice-settings.png',
  'tarkov-lite-vs-pro.png',
  'tarkov-elite-tier.png',
  'tarkov-aimbot-raids.png',
  'tarkov-esp-setup.png',
  'tarkov-radar-hack-guide.png',
  'tarkov-loadouts.png',
  'anti-cheat-patch-day-checklist.png',
  'tarkov-hwid-ban.png',
  'buy-escape-from-tarkov-cheats.png',
  'tarkov-aimbot-combat.png',
  'eac-bypass-tarkov-guide.png',
  'tarkov-external-loader.png',
  'tarkov-stream-proof.png',
];

function longPath(p) {
  const resolved = path.resolve(p);
  if (resolved.startsWith('\\\\?\\')) return resolved;
  return `\\\\?\\${resolved}`;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function listAssetPngs() {
  const entries = fs.readdirSync(longPath(assetsDir));
  return entries
    .filter((f) => f.toLowerCase().endsWith('.png'))
    .filter((f) => !SKIP_SUBSTRINGS.some((s) => f.includes(s)))
    .sort();
}

async function writeResizedPng(src, dest) {
  const buf = await sharp(src)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .png({ compressionLevel: 8 })
    .toBuffer();
  fs.writeFileSync(dest, buf);
  console.log('wrote', path.relative(process.cwd(), dest), buf.length);
}

ensureDir(importDir);
ensureDir(gameplayDir);
ensureDir(blogDir);

const sources = listAssetPngs();
console.log(`Found ${sources.length} source screenshots`);

const shortFiles = [];
for (let i = 0; i < sources.length; i++) {
  const name = sources[i];
  const short = `shot-${String(i + 1).padStart(2, '0')}.png`;
  const from = longPath(path.join(assetsDir, name));
  const to = path.join(importDir, short);
  fs.copyFileSync(from, to);
  shortFiles.push(to);
  console.log('copied', short, '←', name.slice(-40));
}

if (!shortFiles.length) {
  console.error('No screenshots copied.');
  process.exit(1);
}

const alts = [];
for (let i = 0; i < GAMEPLAY.length; i++) {
  const src = shortFiles[i % shortFiles.length];
  const dest = path.join(gameplayDir, GAMEPLAY[i].file);
  await writeResizedPng(src, dest);
  alts.push({ file: GAMEPLAY[i].file, alt: GAMEPLAY[i].alt, srcIndex: i % shortFiles.length });
}

for (let i = 0; i < BLOG.length; i++) {
  // Offset so blog covers prefer different frames than gameplay slots when possible
  const src = shortFiles[(i + 3) % shortFiles.length];
  await writeResizedPng(src, path.join(blogDir, BLOG[i]));
}

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'gameplay-image-alts.json'),
  JSON.stringify({ gameplay: alts, sourceCount: shortFiles.length }, null, 2),
);

console.log('Done. Next: npm run optimize:images');
