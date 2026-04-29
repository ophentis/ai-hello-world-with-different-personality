// JESSE PINKMAN - "Yo", "bitch". Slacker turned serious.

const numbers = [38, 27, 43, 3, 9, 82, 10];

// Yo, quick sort, bitch
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const mid = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);

  return [...quickSort(left), ...mid, ...quickSort(right)];
};

const sorted = quickSort(numbers);
console.log("[" + sorted.join(",") + "]");
