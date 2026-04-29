// The underworld grows with each generation of the dead
// Fibonacci inevitably expands Hades' dominion

let previousDeaths = 0;
let currentDeaths = 1;

for (let eon = 0; eon < 20; eon++) {
  console.log(previousDeaths);
  const nextEon = previousDeaths + currentDeaths;
  previousDeaths = currentDeaths;
  currentDeaths = nextEon;
}
