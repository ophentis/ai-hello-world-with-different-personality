// Jeff Bezos debugs findDuplicates
//
// Let me start where I always start: the customer.
//
// What does the customer want? An array of duplicates. Each one listed
// exactly once. Clean. Reliable. Every time.
//
// What were they getting? Three bugs degrading the customer experience:
//
// Customer Impact 1 (CRITICAL): `i <= arr.length` caused undefined to appear
//   in the output. Imagine ordering a product and receiving an empty box.
//   That's undefined in your duplicates array. Unacceptable. We fixed the
//   loop boundary to `i < arr.length`. Customer trust restored.
//
// Customer Impact 2 (HIGH): Elements appearing three or more times were
//   duplicated in the output. The customer ordered one item and received two.
//   We shipped excess. That erodes confidence. Added `!duplicates.includes(arr[i])`
//   to ensure each duplicate is reported exactly once. Precision at scale.
//
// Customer Impact 3 (DOWNSTREAM): undefined in the result array. A direct
//   consequence of Impact 1. When you fix the root cause, the downstream
//   problem resolves itself. That's operational excellence.
//
// Day 1 thinking: we are not satisfied with bugs. We are not satisfied with
// "good enough." The customer deserves correct code. We deliver correct code.

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

// Customer acceptance test
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");
