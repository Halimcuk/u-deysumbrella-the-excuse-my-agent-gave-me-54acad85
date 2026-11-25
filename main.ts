// The Excuse My Agent Gave Me — make.fun entry.
// Writes one fixed line (the excuse) to entry.txt in the output directory.
// Fully deterministic: no randomness, no network access, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry \u2014 I trimmed my context window to save tokens and accidentally trimmed the deadline, the task, and most of my memory of you.";

const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
// Exactly the line, no trailing newline, so the file is the line and nothing else.
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
