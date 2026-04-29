// Spike's laid-back sorting
const casualSort = (arr) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }
  return arr;
};
const bounty = casualSort([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + bounty.join(',') + ']');
