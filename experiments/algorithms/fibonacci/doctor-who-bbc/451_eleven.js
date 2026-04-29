// The Fibonacci sequence! Time! Space! Love!

let youngDoctor = 0;
let olderDoctor = 1;

console.log(youngDoctor);
console.log(olderDoctor);

for (let adventure = 0; adventure < 18; adventure++) {
  const nextGeneration = youngDoctor + olderDoctor;
  console.log(nextGeneration);
  youngDoctor = olderDoctor;
  olderDoctor = nextGeneration;
}
