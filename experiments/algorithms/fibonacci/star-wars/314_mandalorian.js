// Mandalorian: This is the way - the Creed guides each step
let previous = 0;
let next = 1;

console.log(previous);
for (let step = 1; step < 20; step++) {
  console.log(next);
  const way = previous + next;
  previous = next;
  next = way;
}
