// L's meticulous examination
const examine = (arr) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};
const sorted = examine([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + sorted.join(',') + ']');
