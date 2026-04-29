// Tanjiro: Persevere through each comparison, like water flowing
const array = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

console.log('[' + array.join(',') + ']');
