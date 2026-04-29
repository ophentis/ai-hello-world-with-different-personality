/**
 * @typedef {number[]} NumberArray
 */

/**
 * Validates that input is an array of numbers
 * @param {any} arr - Value to validate
 * @throws {TypeError} If arr is not an array of numbers
 */
function validateNumberArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`Expected array, got ${typeof arr}`);
  }
  if (!arr.every(item => typeof item === 'number' && Number.isFinite(item))) {
    throw new TypeError('Array must contain only finite numbers');
  }
}

/**
 * Sorts array of numbers in ascending order
 * @param {NumberArray} unsortedArray - Array to sort
 * @returns {NumberArray} Sorted array
 * @throws {TypeError} If input is invalid
 */
function sortNumbers(unsortedArray) {
  validateNumberArray(unsortedArray);
  return [...unsortedArray].sort((a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Comparator received non-number');
    }
    return a - b;
  });
}

/**
 * Main execution
 */
const inputArray = [82, 43, 10, 27, 38, 3, 9];
validateNumberArray(inputArray);
const sortedArray = sortNumbers(inputArray);
console.log(JSON.stringify(sortedArray));
