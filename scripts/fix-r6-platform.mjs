import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'src');
const REPLACEMENTS = [
  ['Counter-Strike: Global Offensive and BattlEye receive', 'Counter-Strike: Global Offensive and BattlEye receive'],
  ['Easy Anti-Hack or Counter-Strike: Global Offensive', 'BattlEye or Counter-Strike: Global Offensive'],
  ['Easy Anti-Hack', 'BattlEye'],
  ['Easy Anti-Hack', 'BattlEye'],
  ['BattlEye patch-day', 'BattlEye patch-day'],
  ['After BattlEye Ban', 'After BattlEye ban'],
  ['BattlEye and report', 'BattlEye and report'],
  ['BattlEye does not', 'BattlEye does not'],
  ['BattlEye risk', 'BattlEye risk'],
  ['account-only BattlEye', 'account-only BattlEye'],
  ['BattlEye cases', 'BattlEye cases'],
  ['BattlEye bans', 'BattlEye bans'],
  ['BattlEye ban', 'BattlEye ban'],
  ['BattlEye Unable to verify', 'BattlEye connection issues on'],
  ['BattlEye cannot verify', 'BattlEye cannot verify'],
  ['if BattlEye cannot', 'if BattlEye cannot'],
  ['from the loader or Steam', 'from the loader or BSG Connect'],
  ['launch Counter-Strike: Global Offensive on Steam', 'launch Counter-Strike: Global Offensive through BSG Connect'],
  ['Counter-Strike: Global Offensive on Steam', 'Counter-Strike: Global Offensive on PC'],
  ['for Steam players', 'for PC players'],
  ['on Steam PC', 'on PC'],
  ['Steam PC', 'PC'],
  ['Steam platform', 'PC platform'],
  ['Gearbox, 2K and Steam', 'BSG'],
  ['Steam locker', 'in-game inventory'],
  ['Steam inventory', 'in-game inventory'],
  ['Steam review', 'BSG review'],
  ['Steam restrictions', 'BSG account restrictions'],
  ['Steam ban appeals', 'BSG ban appeals'],
  ['Steam game file verification', 'BSG Connect file verification'],
  ['through Steam', 'through BSG Connect'],
  ['normal Steam launch', 'normal BSG Connect launch'],
  ['into the Steam folder', 'into the game folder'],
  ['Loot-shooter action on Steam', 'Tactical shooter action on PC'],
  ['Mw4 Hacks', 'CSGO Cheats'],
];

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f, out);
    else if (/\.(ts|astro)$/.test(e.name)) out.push(f);
  }
  return out;
}

let n = 0;
for (const file of walk(root)) {
  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  for (const [a, b] of REPLACEMENTS) after = after.split(a).join(b);
  if (after !== before) {
    fs.writeFileSync(file, after);
    n++;
  }
}
console.log(`Platform cleanup: ${n} files.`);
