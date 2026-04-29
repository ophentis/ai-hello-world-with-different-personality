// Elon Musk: Optimize from first principles - use quicksort for efficiency
const data = [38, 27, 43, 3, 9, 82, 10];

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
};

const sorted = quickSort(data);
console.log('[' + sorted.join(',') + ']');
