// Shinji Ikari's Fibonacci - I mustn't run away from this sequence
let prev = 0, current = 1;
console.log(prev);
for (let i = 1; i < 20; i++) {
  console.log(current);
  [prev, current] = [current, prev + current];
}
