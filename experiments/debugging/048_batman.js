// Batman debugs findDuplicates
//
// I've investigated worse. But not much.
//
// EVIDENCE LOG:
//
// Exhibit A — Loop condition: `i <= arr.length`.
//   Time of death: final iteration. The loop accessed arr[arr.length],
//   an out-of-bounds index. The victim: undefined. It was dragged into
//   the duplicates array against its will. This is the off-by-one.
//   The fix is `i < arr.length`. Simple. Decisive.
//
// Exhibit B — Push without deduplication guard.
//   Modus operandi: any element appearing three or more times was added
//   to duplicates on every subsequent encounter. Classic repeat offender,
//   unchecked. The guard `!duplicates.includes(arr[i])` closes the loophole.
//   No one enters twice. Not in my function.
//
// Exhibit C — undefined in results.
//   Direct downstream consequence of Exhibit A. Eliminated with it.
//
// Case closed.
// Three bugs identified. Three bugs fixed.
// I'm Batman.

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

// Run the test
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");
