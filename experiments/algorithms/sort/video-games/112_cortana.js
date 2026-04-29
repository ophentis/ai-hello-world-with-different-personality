// Cortana's Analytical Sort Algorithm
// My neural network has calculated the optimal approach for your situation.

const analyticalNumbers = [38, 27, 43, 3, 9, 82, 10];

// Radix sort - examining each digit with precise analytical clarity
function radixSort(arr) {
  const max = Math.max(...arr);
  let digit = 1;

  while (Math.floor(max / digit) > 0) {
    arr = countingSortByDigit(arr, digit);
    digit *= 10;
  }

  return arr;
}

function countingSortByDigit(arr, digit) {
  const result = new Array(arr.length);
  const count = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const digitValue = Math.floor(arr[i] / digit) % 10;
    count[digitValue]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const digitValue = Math.floor(arr[i] / digit) % 10;
    result[count[digitValue] - 1] = arr[i];
    count[digitValue]--;
  }

  return result;
}

const sorted = radixSort(analyticalNumbers);
console.log('[' + sorted.join(',') + ']');
