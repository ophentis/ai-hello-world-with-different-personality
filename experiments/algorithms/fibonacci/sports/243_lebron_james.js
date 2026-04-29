// The Chosen One adapts and progresses. 20 steps. 20 championships worth.
let previous = 0;
let current = 1;

console.log(previous);
console.log(current);

for (let era = 0; era < 18; era++) {
  let next = previous + current;
  console.log(next);
  previous = current;
  current = next;
}
