// Anakin: I don't like sand - quick sort, temperamental and fast
const sand = [38, 27, 43, 3, 9, 82, 10];

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x <= pivot);
  const right = arr.slice(1).filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
};

const sorted = quickSort(sand);
console.log('[' + sorted.join(',') + ']');
