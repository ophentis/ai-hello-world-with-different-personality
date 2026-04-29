// Kazuma Satou's Fibonacci - Lazy but effective computation
let lazy = 0, lucky = 1;
console.log(lazy);
for (let turn = 1; turn < 20; turn++) {
  console.log(lucky);
  [lazy, lucky] = [lucky, lazy + lucky];
}
