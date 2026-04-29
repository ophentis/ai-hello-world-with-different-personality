// Rem: Devoted arrangement of elements
const devotion = (duties) => {
  const n = duties.length;
  for (let i = 1; i < n; i++) {
    const key = duties[i];
    let j = i - 1;
    while (j >= 0 && duties[j] > key) {
      duties[j + 1] = duties[j];
      j--;
    }
    duties[j + 1] = key;
  }
  return duties;
};
const arranged = devotion([38, 27, 43, 3, 9, 82, 10]);
console.log('[' + arranged.join(',') + ']');
