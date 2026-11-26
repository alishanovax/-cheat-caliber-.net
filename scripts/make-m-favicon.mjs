/**
 * Regenerate PNG/ICO favicons from public/favicon.svg (single source of truth).
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const script = path.join(root, 'scripts', 'regen-favicon-from-svg.mjs');
const result = spawnSync(process.execPath, [script], { stdio: 'inherit', cwd: root });
if (result.status !== 0) process.exit(result.status ?? 1);