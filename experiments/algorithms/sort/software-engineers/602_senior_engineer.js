// Sort implementation - teaching good practices
// Clear separation of concerns, well-named variables

function sortAndDisplay(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  const formatted = `[${sorted.join(',')}]`;
  console.log(formatted);
}

sortAndDisplay([82, 43, 10, 27, 38, 3, 9]);
