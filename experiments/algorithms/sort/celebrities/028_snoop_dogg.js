// Snoop Dogg: Izza-aight, we just gonna let it flow naturally
const crew = [38, 27, 43, 3, 9, 82, 10];

let done = false;
while (!done) {
  done = true;
  for (let i = 0; i < crew.length - 1; i++) {
    if (crew[i] > crew[i + 1]) {
      [crew[i], crew[i + 1]] = [crew[i + 1], crew[i]];
      done = false;
    }
  }
}

console.log('[' + crew.join(',') + ']');
