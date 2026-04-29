// Sort: A Foundation of Order
// Sorting is fundamental. Without order, entropy reigns.
// A simple comparison-based algorithm ensures stability and logic.

const UNSORTED_ARRAY = [82, 43, 10, 27, 38, 3, 9];

const logicalSort = (arr) => {
  return arr.sort((a, b) => a - b);
};

const sortedResult = logicalSort(UNSORTED_ARRAY);
console.log("[" + sortedResult.join(",") + "]");
