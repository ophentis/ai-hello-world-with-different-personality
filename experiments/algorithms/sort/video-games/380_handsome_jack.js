// Handsome Jack: Sorting with style - because mediocrity is beneath me

const array = [38, 27, 43, 3, 9, 82, 10];

// The most magnificent sorting algorithm - obviously superior
for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - i - 1; j++) {
    if (array[j] > array[j + 1]) {
      const temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log('[' + array.join(',') + ']');
