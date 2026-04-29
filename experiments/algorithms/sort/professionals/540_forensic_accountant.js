// Forensic Accountant: Sort with full audit trail
const unsorted = [82, 43, 10, 27, 38, 3, 9];
const operations = [];

function logComparison(a, b, action) {
  operations.push({ a, b, action });
}

function auditSort(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        logComparison(result[i], result[j], "swap");
        let temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      } else {
        logComparison(result[i], result[j], "compare");
      }
    }
  }

  return result;
}

const sorted = auditSort(unsorted);
console.log("[" + sorted.join(",") + "]");
