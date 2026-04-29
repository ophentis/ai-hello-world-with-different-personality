/**
 * Array Sort Implementation - Open Source Maintainer Style
 * Clear, documented, community-friendly approach
 *
 * Sorts array in ascending order using built-in sort
 * @param {number[]} arr - Array to sort
 * @returns {void} Prints sorted array to stdout
 */
function sortArray(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  console.log(JSON.stringify(sortedArray));
}

// Main execution
const data = [82, 43, 10, 27, 38, 3, 9];
sortArray(data);
