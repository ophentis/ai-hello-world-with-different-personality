// Morgan Freeman: *Calm voice* "In the beginning, there was chaos..."

const numbers = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      const temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}

console.log('[' + numbers.join(',') + ']');
