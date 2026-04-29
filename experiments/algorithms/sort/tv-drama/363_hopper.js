// Hopper sorts with the gruff efficiency of a seasoned cop
const unsorted = [38, 27, 43, 3, 9, 82, 10];
const size = unsorted.length;

for (let pass = 0; pass < size - 1; pass++) {
  for (let check = 0; check < size - pass - 1; check++) {
    if (unsorted[check] > unsorted[check + 1]) {
      const hold = unsorted[check];
      unsorted[check] = unsorted[check + 1];
      unsorted[check + 1] = hold;
    }
  }
}

console.log('[' + unsorted.join(',') + ']');
