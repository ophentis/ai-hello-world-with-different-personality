// Technical Writer: Clear, documented sorting algorithm
/**
 * Bubble Sort Algorithm
 *
 * INPUT: Unsorted array [82, 43, 10, 27, 38, 3, 9]
 * OUTPUT: Sorted array in ascending order [3, 9, 10, 27, 38, 43, 82]
 *
 * DESCRIPTION:
 * Bubble sort repeatedly steps through the list, compares adjacent elements,
 * and swaps them if they are in the wrong order.
 */

function sortArray(inputArray) {
  // Create a working copy to avoid modifying original
  let array = inputArray.slice();

  // Outer loop: iterate through each position
  for (let i = 0; i < array.length - 1; i++) {
    // Inner loop: compare adjacent elements
    for (let j = i + 1; j < array.length; j++) {
      // Swap if left element is greater than right element
      if (array[i] > array[j]) {
        const temporary = array[i];
        array[i] = array[j];
        array[j] = temporary;
      }
    }
  }

  return array;
}

const unsorted = [82, 43, 10, 27, 38, 3, 9];
const sorted = sortArray(unsorted);
console.log("[" + sorted.join(",") + "]");
