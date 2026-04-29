// Starfleet regulation: bring order to chaos
const unsortedArray = [82, 43, 10, 27, 38, 3, 9];
const sortedArray = [];

// A methodical approach to sorting
while (unsortedArray.length > 0) {
  let minIndex = 0;
  for (let i = 1; i < unsortedArray.length; i++) {
    if (unsortedArray[i] < unsortedArray[minIndex]) {
      minIndex = i;
    }
  }
  sortedArray.push(unsortedArray[minIndex]);
  unsortedArray.splice(minIndex, 1);
}

console.log('[' + sortedArray.join(',') + ']');
