// Ahsoka: Chart her own course, independent sort
const myWay = [38, 27, 43, 3, 9, 82, 10];

// Ahsoka's unique approach - quick sort with independence
const independentSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x <= pivot);
  const right = arr.slice(1).filter(x => x > pivot);
  return [...independentSort(left), pivot, ...independentSort(right)];
};

const result = independentSort(myWay);
console.log('[' + result.join(',') + ']');
