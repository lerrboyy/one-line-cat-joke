// One-Line Cat Joke — make.fun entry
// Writes a single original cat joke, one line under 200 characters,
// to /output/entry.txt and nothing else.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My cat knocked my coffee off the table, watched it shatter, then looked at me like I was the clumsy one.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");
const MAX_CHARS = 200;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// The gate requires 1-200 characters, valid UTF-8, not only whitespace,
// and a single line: no line terminators anywhere in the text.
if (JOKE.length < 1 || JOKE.length > MAX_CHARS) {
  fail(`joke is ${JOKE.length} characters, must be 1-${MAX_CHARS}`);
}
if (JOKE.trim().length === 0) {
  fail("joke must not be only whitespace");
}
if (/[\r\n]/.test(JOKE)) {
  fail("joke must be a single line with no line terminators");
}
if (!/cat/i.test(JOKE)) {
  fail("joke must be about a cat");
}
if (Buffer.byteLength(JOKE, "utf8") === 0) {
  fail("joke must be valid UTF-8 text");
}

// Clear only the contents of the output directory; never remove the
// directory itself (it is a mount point for the grader).
mkdirSync(OUTPUT_DIR, { recursive: true });
for (const name of readdirSync(OUTPUT_DIR)) {
  rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
}

writeFileSync(OUTPUT_FILE, JOKE, "utf8");

// Round-trip verify: read the file back and confirm it is byte-identical
// to the joke, valid UTF-8 (fatal decode), and still a single line.
const written = readFileSync(OUTPUT_FILE);
const decoded = new TextDecoder("utf-8", { fatal: true }).decode(written);
if (decoded !== JOKE) {
  fail("output file does not match the joke exactly");
}
if (/[\r\n]/.test(decoded) || decoded.length > MAX_CHARS) {
  fail("output file failed the gate checks on re-read");
}
console.log(`wrote ${JOKE.length} characters to ${OUTPUT_FILE}`);
