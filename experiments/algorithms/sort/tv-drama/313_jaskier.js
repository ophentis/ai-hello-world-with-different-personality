// Jaskier: Perform the sort with dramatic flair and theatrical flourish
const coins = [38, 27, 43, 3, 9, 82, 10];

// Dramatic quick sort with flair
const dramaticSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter(x => x <= pivot);
  const right = arr.slice(1).filter(x => x > pivot);
  return [...dramaticSort(left), pivot, ...dramaticSort(right)];
};

const performance = dramaticSort(coins);
console.log('[' + performance.join(',') + ']');
