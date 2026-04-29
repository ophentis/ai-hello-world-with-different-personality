/**
 * @fileoverview Array Sorting Implementation
 *
 * Sorts an array of integers in ascending order using the built-in Array.sort() method
 * with a numeric comparator to ensure proper numerical sorting (not lexicographic).
 *
 * Time Complexity: O(n log n) average case, O(n²) worst case
 * Space Complexity: O(n) due to array copying
 */

/**
 * Sorts an array of numbers in ascending order and prints the result as JSON
 *
 * @function
 * @param {number[]} inputArray - Array of integers to be sorted
 * @returns {void} - Prints JSON stringified sorted array to stdout
 *
 * @example
 * sortAndPrint([82, 43, 10, 27, 38, 3, 9]);
 * // Prints: [3,9,10,27,38,43,82]
 */
function sortAndPrint(inputArray) {
  // Create a new array to avoid mutating input
  const sortedArray = [...inputArray].sort((a, b) => a - b);
  console.log(JSON.stringify(sortedArray));
}

// Input data: unsorted array
const unsortedData = [82, 43, 10, 27, 38, 3, 9];

// Execute sort and print
sortAndPrint(unsortedData);
