// The mystic's influence spreads - Fibonacci like dark power through the ages
// Impossible to stop, ever-growing, ever-present

let previousInfluence = 0;
let currentInfluence = 1;

for (let era = 0; era < 20; era++) {
  console.log(previousInfluence);
  const nextInfluence = previousInfluence + currentInfluence;
  previousInfluence = currentInfluence;
  currentInfluence = nextInfluence;
}
