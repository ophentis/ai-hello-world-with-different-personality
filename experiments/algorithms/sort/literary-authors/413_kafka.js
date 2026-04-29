// The accusation came suddenly: the numbers were unsorted.
// Guilt presumed. One must sort them. The law demanded it.
// There was no recourse. Only compliance.

const accused = [82, 43, 10, 27, 38, 3, 9];
const ordered = accused.sort((a, b) => a - b);
console.log("[" + ordered.join(",") + "]");
