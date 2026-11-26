// Pigeon Pitch, One Line — make.fun entry (u-donrulezz-pigeon-pitch-one-line-af06c6cf)
// A city pigeon pitches its startup to investors. One line, <=200 chars.
// Fully offline and deterministic: the pitch is a fixed string, no I/O
// beyond writing it to /output/entry.txt, no network, no model calls.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Our CAC is one crumb, our LTV is a whole sandwich, churn is zero — nobody leaves a good bench. Seed round, literally seeds. Who's in, coo?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to /output/entry.txt`);
