// Eleven uses her mind to psychokinetically arrange the numbers
const numbers = [38, 27, 43, 3, 9, 82, 10];
const mindBound = numbers.length;

for (let telekinetic_i = 0; telekinetic_i < mindBound - 1; telekinetic_i++) {
  for (let telekinetic_j = 0; telekinetic_j < mindBound - telekinetic_i - 1; telekinetic_j++) {
    if (numbers[telekinetic_j] > numbers[telekinetic_j + 1]) {
      const temp = numbers[telekinetic_j];
      numbers[telekinetic_j] = numbers[telekinetic_j + 1];
      numbers[telekinetic_j + 1] = temp;
    }
  }
}

console.log('[' + numbers.join(',') + ']');
