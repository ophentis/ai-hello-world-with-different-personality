// Charles Darwin - Evolution, natural selection, Galapagos, methodical observer
// Observe. Record. Natural selection favors the fit.

class Organism {
  constructor(trait) {
    this.trait = trait;
    this.fitness = 0;
  }

  adapt() {
    if (Math.random() > 0.7) this.fitness++;
  }
}

// Population on the Galapagos of Ideas
const population = Array(5).fill().map(() =>
  new Organism("Hello, World!")
);

// Over generations, fitness increases through selection
for (let g = 0; g < 10; g++) {
  population.forEach(org => org.adapt());
}

const mostFit = population.reduce((best, curr) =>
  curr.fitness > best.fitness ? curr : best
);

console.log(mostFit.trait);

// The fit survive. Unfit vanish. Order emerges from time.
