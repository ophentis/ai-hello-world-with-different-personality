// The oceans swell - each generation of Poseidon's offspring grows
// Fibonacci multiplies across the seas

let previousWaves = 0;
let currentTide = 1;

for (let season = 0; season < 20; season++) {
  console.log(previousWaves);
  const nextTide = previousWaves + currentTide;
  previousWaves = currentTide;
  currentTide = nextTide;
}
