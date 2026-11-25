import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "He makes me remember his anniversary, then forgets it himself — so this year I reminded his wife first. Five stars.";

if (!line.trim()) throw new Error("entry line must not be empty");
if (line.length > 200) {
  throw new Error(`entry line is ${line.length} chars, over the 200-char gate`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, { encoding: "utf8" });
