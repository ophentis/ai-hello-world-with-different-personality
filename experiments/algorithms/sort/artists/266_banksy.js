// Disruptive sorting. Spray it on the wall. Quick sort: aggressive, fast, subversive.
// The establishment says bubble sort. We do quick sort. We are anonymous.

function subversiveSort(array, low, high) {
  if (low < high) {
    const wall = partitionWall(array, low, high);
    subversiveSort(array, low, wall - 1);
    subversiveSort(array, wall + 1, high);
  }
}

function partitionWall(array, low, high) {
  const spray = array[high];
  let position = low - 1;
  for (let i = low; i < high; i++) {
    if (array[i] < spray) {
      position++;
      [array[position], array[i]] = [array[i], array[position]];
    }
  }
  [array[position + 1], array[high]] = [array[high], array[position + 1]];
  return position + 1;
}

const graffiti = [38, 27, 43, 3, 9, 82, 10];
subversiveSort(graffiti, 0, graffiti.length - 1);
console.log('[' + graffiti.join(',') + ']');
