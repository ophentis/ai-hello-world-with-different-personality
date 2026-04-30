// Killua debugs findDuplicates
//
// Three bugs. I spotted them in two seconds.
//
// Bug 1: `i <= arr.length` — accessing arr[arr.length] is undefined.
//   That undefined gets pushed into duplicates. Amateur hour.
//
// Bug 2: No deduplication guard on the push. If an element appears three
//   times, it gets added to duplicates twice. Sloppy.
//
// Bug 3: Direct consequence of Bug 1 — undefined bleeds into the result.
//
// Fixes applied. This took longer to explain than to fix.
// Gon would've taken an hour. I took ten seconds.

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

// Verification
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");
