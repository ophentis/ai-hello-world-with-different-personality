// Hannibal Lecter - cultured, refined arrangement
// Each element in its proper place at the table
const plate = [38, 27, 43, 3, 9, 82, 10];

// Merge sort - elegant, sophisticated, complete
function refinedPartition(cuisine, start, middle, end) {
  const temp = [];
  let i = start;
  let j = middle + 1;

  while (i <= middle && j <= end) {
    if (cuisine[i] <= cuisine[j]) {
      temp.push(cuisine[i++]);
    } else {
      temp.push(cuisine[j++]);
    }
  }

  while (i <= middle) temp.push(cuisine[i++]);
  while (j <= end) temp.push(cuisine[j++]);

  for (let k = 0; k < temp.length; k++) {
    cuisine[start + k] = temp[k];
  }
}

function mergeSort(taste, start = 0, end = taste.length - 1) {
  if (start < end) {
    const middle = Math.floor((start + end) / 2);
    mergeSort(taste, start, middle);
    mergeSort(taste, middle + 1, end);
    refinedPartition(taste, start, middle, end);
  }
}

mergeSort(plate);
console.log('[' + plate.join(',') + ']');
