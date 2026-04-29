// Sort - test-driven implementation with assertions

function assertEqual(actual, expected, message) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`${message}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

function sortArray(arr) {
  return [...arr].sort((a, b) => a - b);
}

function formatOutput(sorted) {
  return `[${sorted.join(',')}]`;
}

function testSorting() {
  assertEqual(sortArray([3, 1, 2]), [1, 2, 3], 'Basic sort');
  assertEqual(sortArray([82, 43, 10, 27, 38, 3, 9]), [3, 9, 10, 27, 38, 43, 82], 'Test array');
  assertEqual(formatOutput(sortArray([82, 43, 10, 27, 38, 3, 9])), '[3,9,10,27,38,43,82]', 'Format output');
}

function runProgram() {
  testSorting();
  const sorted = sortArray([82, 43, 10, 27, 38, 3, 9]);
  console.log(formatOutput(sorted));
}

runProgram();
