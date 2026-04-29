// Courage trembles as he sorts the array, one fearful swap at a time
const scaredy_array = [38, 27, 43, 3, 9, 82, 10];
const len = scaredy_array.length;

for (let i = 0; i < len - 1; i++) {
  for (let j = 0; j < len - i - 1; j++) {
    if (scaredy_array[j] > scaredy_array[j + 1]) {
      const temp = scaredy_array[j];
      scaredy_array[j] = scaredy_array[j + 1];
      scaredy_array[j + 1] = temp;
    }
  }
}

console.log('[' + scaredy_array.join(',') + ']');
