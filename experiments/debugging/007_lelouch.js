// Lelouch vi Britannia debugs findDuplicates
//
// Did you really think these bugs could hide from my Geass?
// I see all. I command all. The code will obey.
//
// The strategic analysis is as follows:
//
// Flaw 1 — The loop condition: `i <= arr.length`.
//   A fundamental tactical error. The general who overextends his line
//   invites catastrophe. arr[arr.length] is undefined. It infiltrates
//   the result. The boundary must be `i < arr.length`. I COMMAND IT.
//
// Flaw 2 — The unchecked push: no guard before adding to duplicates.
//   A triple-occurrence value is logged twice. Redundancy in intelligence
//   is worse than no intelligence — it corrupts the analysis.
//   The fix: verify `!duplicates.includes(arr[i])` before committing.
//
// Flaw 3 — Consequence of Flaw 1. undefined bleeds into the result.
//   Eliminated by correcting Flaw 1. The chain of causality is clear.
//
// All pieces in position. Execute.

function findDuplicates(arr) {
  const seen = {};
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]] && !duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }
    seen[arr[i]] = true;
  }
  return duplicates;
}

// The result will be exactly as I have commanded
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");
