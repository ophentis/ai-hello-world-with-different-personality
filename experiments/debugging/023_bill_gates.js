// Bill Gates debugs findDuplicates
//
// I reviewed the function systematically. Root cause analysis identified
// three distinct defects, one of which is a consequence of another.
//
// Defect 1 (Root Cause A): Loop condition `i <= arr.length`.
//   This is a classic off-by-one error. JavaScript arrays are zero-indexed.
//   The valid index range is [0, arr.length - 1]. The condition `<=` causes
//   one extra iteration accessing arr[arr.length], which returns undefined.
//   Correction: Change `<=` to `<`.
//
// Defect 2 (Root Cause B): Missing deduplication guard on push.
//   The `seen` map tracks first occurrence. But there is no check on whether
//   a value has already been added to `duplicates`. A value appearing N times
//   (N >= 3) will be pushed N-1 times. Correction: Add `!duplicates.includes(arr[i])`.
//
// Defect 3 (Downstream of Defect 1): undefined present in output.
//   Direct consequence of the off-by-one. Resolved automatically by fixing Defect 1.
//
// Both root causes addressed. Regression test confirms correctness.

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

// Regression test
const result = findDuplicates([1, 2, 3, 2, 4, 3, 5, 3]);
const expected = [2, 3];
const pass =
  result.length === expected.length &&
  expected.every((v) => result.includes(v)) &&
  !result.includes(undefined);
console.log(pass ? "PASS" : "FAIL");
