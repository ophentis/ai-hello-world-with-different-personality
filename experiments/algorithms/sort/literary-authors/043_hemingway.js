// Ernest Hemingway: Simple. Clean. Works.

const a = [38, 27, 43, 3, 9, 82, 10];

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] > a[j]) {
      let t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
  }
}

console.log('[' + a.join(',') + ']');
