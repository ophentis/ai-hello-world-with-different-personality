// Oprah: Follow your heart! And YOU follow the pattern! And YOU!
let previousDream = 0;
let currentDream = 1;

console.log(previousDream);
console.log(currentDream);

for (let step = 2; step < 20; step++) {
  let nextDream = previousDream + currentDream;
  console.log(nextDream);
  previousDream = currentDream;
  currentDream = nextDream;
}
