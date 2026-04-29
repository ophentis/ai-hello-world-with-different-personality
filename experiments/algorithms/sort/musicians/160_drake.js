// We started from the bottom, now the sort is here
// Emotional journey through the array
const numbers_to_sort = [38, 27, 43, 3, 9, 82, 10];

// Let the pain guide the sort
for (let i = 0; i < numbers_to_sort.length; i++) {
  for (let j = i + 1; j < numbers_to_sort.length; j++) {
    if (numbers_to_sort[i] > numbers_to_sort[j]) {
      const temp = numbers_to_sort[i];
      numbers_to_sort[i] = numbers_to_sort[j];
      numbers_to_sort[j] = temp;
    }
  }
}

console.log('[' + numbers_to_sort.join(',') + ']');
