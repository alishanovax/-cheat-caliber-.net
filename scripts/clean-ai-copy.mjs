import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [
  'src/utils/schema.ts',
  'src/utils/rss.ts',
  'src/data/faq.ts',
  'src/data/blog/posts.ts',
  'src/i18n/en.ts',
  'src/config/site.ts',
];

const reps = [
  ['R6Hacks Editorial', 'R6 Cheat'],
  ['R6Hacks Community Forum', 'R6 Cheat Forum'],
  ['R6Hacks Blog', 'R6 Cheat Blog'],
  ['R6Hacks Support', 'R6 Cheat Support'],
  ['Join R6Hacks on Discord', 'Join R6 Cheat on Discord'],
  ['R6Hacks home', 'R6 Cheat home'],
  ['R6Hacks', 'R6 Cheat'],
  ["TITLE_PREFIX = 'R6 Cheat & Tools'", "TITLE_PREFIX = 'R6 Cheat'"],
  ['humanized Aimbot', 'smooth aimbot'],
  ['humanized order', 'smooth order'],
  ['humanized input', 'smooth input'],
  ['humanized', 'smooth'],
  [
    'Climbing ranked play with R6 aimbot means smooth aimbot—not instant bot bursts that draw reports.',
    'SCAV run Tom Clancy's Rainbow Six Siege aimbot works better with smooth tracking than instant snaps that get you reported.',
  ],
  [
    'maintains private Rainbow Six Siege cheats for Windows PC Multiplayer and SCAV run—not console lobby codes. Every module ships through the customer portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Rainbow Six Siege cheats for Windows PC Multiplayer and SCAV run. Check status before you queue after a patch.',
  ],
  [
    'maintains private Rainbow Six Siege cheats for Windows PC Multiplayer and SCAV run. Every module ships through the customer portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Rainbow Six Siege cheats for Windows PC Multiplayer and SCAV run. Check status before you queue after a patch.',
  ],
  [
    'maintains private Rainbow Six Siege cheats for Windows PC Multiplayer and SCAV run. Check live status before every patch-day queue.',
    'sells Rainbow Six Siege cheats for Windows PC Multiplayer and SCAV run. Check status before you queue after a patch.',
  ],
  [
    'maintains private Rainbow Six Siege cheats for Windows PC Multiplayer and SCAV run.',
    'sells Rainbow Six Siege cheats for Windows PC Multiplayer and SCAV run.',
  ],
  [
    'ships a modular external suite for Windows PC ranked—not lobby hack codes. Aimbot tracks targets, loot assist clears POIs, ESP wallhack exposes third-parties, and utility tools like Radar Hack and Loadout Changer round out the toolkit. This is the complete feature map across',
    'sells external Rainbow Six Siege cheats for PC SCAV run. Aimbot, loot assist, ESP wallhack, radar and Loadout Changer. See',
  ],
];

for (const rel of files) {
  const file = path.join(root, rel);
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [from, to] of reps) text = text.split(from).join(to);
  if (text !== before) {
    fs.writeFileSync(file, text);
    console.log('updated', rel);
  } else {
    console.log('noop', rel);
  }
}
