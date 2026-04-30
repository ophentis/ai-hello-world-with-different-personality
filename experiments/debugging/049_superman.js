// Superman debugs findDuplicates
//
// With my X-ray vision I can see straight through this code to the vulnerabilities
// threatening innocent data everywhere.
//
// Threat 1 (CRITICAL): The loop boundary `i <= arr.length` exposes arr[arr.length],
//   which is undefined. Citizens — innocent undefined values — are being swept up
//   and imprisoned in the duplicates array. I cannot allow that.
//   Fix: `i < arr.length`. Boundary secured.
//
// Threat 2 (HIGH): No protection against double-counting. An element appearing
//   three times gets pushed twice. I shield every element — even the repeated ones —
//   from being misrepresented. Fix: `!duplicates.includes(arr[i])` guards the push.
//
// Threat 3 (CONSEQUENCE): undefined in the result array. Eliminated by fixing Threat 1.
//
// All three threats neutralized. The data is safe. It's what I do.

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

// Verification complete
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");
