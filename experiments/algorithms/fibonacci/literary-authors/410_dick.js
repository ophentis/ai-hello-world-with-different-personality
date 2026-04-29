// The sequence spirals. But into what?
// Each number generates the next. But what generates them?
const seq = [0, 1];
for (let x = 2; x < 20; x++) {
  seq.push(seq[x - 1] + seq[x - 2]);
  // Who is watching the watchers?
}
seq.slice(0, 20).forEach(n => console.log(n));
