// Mr Rogers: Let's be kind neighbors and help these numbers find order

const values = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < values.length - 1; i++) {
  for (let j = i + 1; j < values.length; j++) {
    if (values[i] > values[j]) {
      const swap = values[i];
      values[i] = values[j];
      values[j] = swap;
    }
  }
}

console.log('[' + values.join(',') + ']');
