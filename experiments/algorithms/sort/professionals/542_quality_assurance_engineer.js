// QA Engineer: Sort with edge case coverage
const testCases = [];

function runSortTest(input, testName) {
  testCases.push({ name: testName, input: input.slice(), passed: false });

  let sorted = input.slice();
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      if (sorted[i] > sorted[j]) {
        const temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
      }
    }
  }

  // Verify all elements in order
  let isValid = true;
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] > sorted[i + 1]) {
      isValid = false;
      break;
    }
  }

  testCases[testCases.length - 1].passed = isValid;
  return sorted;
}

const result = runSortTest([82, 43, 10, 27, 38, 3, 9], "standard sort");
console.log("[" + result.join(",") + "]");
