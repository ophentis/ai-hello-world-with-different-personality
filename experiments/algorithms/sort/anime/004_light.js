// Light's strategic ordering
const arrange = (unsorted) => {
  const n = unsorted.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (unsorted[j] < unsorted[minIndex]) {
        minIndex = j;
      }
    }
    [unsorted[i], unsorted[minIndex]] = [unsorted[minIndex], unsorted[i]];
  }
  return unsorted;
};
const result = arrange([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + result.join(',') + ']');
