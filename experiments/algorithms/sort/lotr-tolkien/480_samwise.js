// Even the smallest of us can arrange things proper-like
const array = [82, 43, 10, 27, 38, 3, 9];

// A steady sort, with care and attention
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] < array[i]) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

console.log('[' + array.join(',') + ']');
