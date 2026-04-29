// Keanu Reeves: Whoa. This is actually pretty simple if you think about it.
// Let's just... help these numbers find their order.

const data = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < data.length - 1; i++) {
  for (let j = 0; j < data.length - 1 - i; j++) {
    if (data[j] > data[j + 1]) {
      [data[j], data[j + 1]] = [data[j + 1], data[j]];
    }
  }
}

console.log('[' + data.join(',') + ']');
