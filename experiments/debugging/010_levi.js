// Levi debugs findDuplicates
//
// This code is disgusting. I've seen cleaner titan guts.
//
// Bug 1: `i <= arr.length`. Are you serious? You're reading PAST THE ARRAY.
//   That undefined is a contamination. Unacceptable. Change it to `< arr.length`.
//   This is not a debate.
//
// Bug 2: No check before pushing. A triple-occurrence value ends up in
//   duplicates TWICE. This is not how a soldier operates. You check before
//   you act, every single time. Add `!duplicates.includes(arr[i])`.
//
// Bug 3: Consequence of Bug 1. undefined in the output. I don't even want
//   to look at it. Dealt with by fixing Bug 1.
//
// Fixed. Scrubbed clean. Don't hand me dirty code again or I'll have you
// cleaning the barracks with a toothbrush.

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

// Inspection
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");
