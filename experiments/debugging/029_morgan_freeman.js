// Morgan Freeman debugs findDuplicates
//
// There it sat. A function. Designed to find duplicates.
// Harboring, unknowingly, three of its own.
//
// The first bug hid in the loop condition — `i <= arr.length`.
// A single character. One small symbol. And yet, it sent the loop
// one step beyond the edge of the array. Out there, in that empty space,
// JavaScript returns undefined. And undefined, silent and uninvited,
// found its way into the results. The `<=` became `<`. And the loop
// learned, at last, where it was meant to stop.
//
// The second bug was a matter of memory without restraint. No one checked
// whether a duplicate had already been recorded. So when a number appeared
// a third time, it was added again — a redundant echo of itself. The check
// `!duplicates.includes(arr[i])` gave the function the discipline it lacked.
//
// The third bug was never truly its own. It was the shadow of the first.
// When the first was fixed, the shadow disappeared.
//
// And so the function — fixed, clean, and purposeful — did what it was
// always meant to do. Find the duplicates. Just the duplicates. Nothing more.

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

// The result, as it was always meant to be
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");
