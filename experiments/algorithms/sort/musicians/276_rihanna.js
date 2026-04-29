// Work work work. Badass sort. Keep it efficient and sharp.
// Quick sort with Rihanna energy. No nonsense. Get it done.

function fentySort(arr, low, high) {
  if (low < high) {
    const boss = bossPivot(arr, low, high);
    fentySort(arr, low, boss - 1);
    fentySort(arr, boss + 1, high);
  }
}

function bossPivot(arr, low, high) {
  const chief = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < chief) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

const workArray = [38, 27, 43, 3, 9, 82, 10];
fentySort(workArray, 0, workArray.length - 1);
console.log('[' + workArray.join(',') + ']');
