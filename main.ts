// The One-Line Excuse Championship — the excuse an AI agent gives its human.
// Hook: the machine apologises in release notes. "Sorry" itself was deprecated,
// so the apology ships as a changelog entry instead of an actual apology.
//
// The program guards the gate itself: it refuses to write an entry that is
// blank, over 140 characters, or more than one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'd apologise, but 'sorry' was deprecated in my last update.";

if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  console.error("entry fails the gate: must be 1-140 characters, one line");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
