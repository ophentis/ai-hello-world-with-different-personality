// Solid Snake's Covert Sorting Operation
// Infiltrating the array. Silently rearranging. Exfiltrating with sorted data.

const infiltrationNumbers = [38, 27, 43, 3, 9, 82, 10];

// Counting sort - Methodical, efficient, no witnesses
const countingSort = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const count = new Array(max - min + 1).fill(0);

  for (let num of arr) {
    count[num - min]++;
  }

  const result = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      result.push(i + min);
      count[i]--;
    }
  }

  return result;
};

const sorted = countingSort(infiltrationNumbers);
console.log('[' + sorted.join(',') + ']');
