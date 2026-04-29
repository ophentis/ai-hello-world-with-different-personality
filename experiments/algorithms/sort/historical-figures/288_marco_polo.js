// The Silk Road - connecting distant places through careful navigation
// Radix sort - organize by decade, like organizing the journey by stage

const trade = [38, 27, 43, 3, 9, 82, 10];

function radixSort(arr) {
  const maxNum = Math.max(...arr);
  let divisor = 1;

  while (divisor <= maxNum) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (const num of arr) {
      const digit = Math.floor((num / divisor) % 10);
      buckets[digit].push(num);
    }

    arr = buckets.flat();
    divisor *= 10;
  }

  return arr;
}

const arranged = radixSort([...trade]);
console.log('[' + arranged.join(',') + ']');
