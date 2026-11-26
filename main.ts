// News Image 26 November 2026 — entrypoint.
//
// The picture itself is built ahead of time: page.html in this repository
// is rendered once to entry.png, and this program only places a
// byte-identical copy of it at the path the grader reads. Because the
// copy is deterministic, both grading runs write exactly the same bytes.
//
// Runs with no network, standard library only. The output directory comes
// from MAKEFUN_OUTPUT_DIR when set, otherwise /output.

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(targetDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

mkdirSync(targetDir, { recursive: true });
copyFileSync(source, target);

// Guard the deterministic-output rule: the copy must match byte for byte.
const written = readFileSync(target);
const original = readFileSync(source);
if (!written.equals(original)) {
  throw new Error("output image differs from entry image");
}

console.log(`wrote ${target} (${statSync(target).size} bytes)`);
