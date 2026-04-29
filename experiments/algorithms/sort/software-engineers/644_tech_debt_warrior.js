// CLEANUP: Removed custom comparator complexity - native sort is stable
// DEPRECATION: Old merge sort implementation removed (oversized for this use case)
// REFACTOR: Simplified to native approach with better readability

function sortArray(arr) {
  // Direct mutation discouraged in new patterns, but acceptable here for performance
  // TODO: Consider Object.freeze() for immutability audit
  return arr.sort((a, b) => a - b);
}

const input = [82, 43, 10, 27, 38, 3, 9];
const result = sortArray([...input]); // Defensive copy to avoid side effects

console.log('[' + result.join(',') + ']');
