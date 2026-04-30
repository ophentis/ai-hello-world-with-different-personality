// Sasuke debugs findDuplicates
//
// Pathetic. Three weaknesses, all exposed immediately.
//
// Weakness 1: The loop condition. `i <= arr.length` is a fatal flaw.
//   It reads past the boundary. undefined infiltrates the result.
//   A shinobi who overextends dies first.
//
// Weakness 2: The duplicate guard is absent. An element appearing three
//   times corrupts the output. No discipline in the push condition.
//
// Weakness 3: A direct consequence of weakness 1. undefined in the result.
//   Impure. Unacceptable.
//
// I've corrected them. Don't waste my time with code this weak again.

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

// Confirm the fix
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");
