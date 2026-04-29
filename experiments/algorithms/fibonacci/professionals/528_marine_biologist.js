// Marine biologist: population growth via Fibonacci (reproduction rate)
class MarinePopulation {
  constructor(generations = 20) {
    this.generations = generations;
  }

  computePopulationGrowth() {
    // Fibonacci models rabbit population (can adapt to marine species)
    const population = [0, 1]; // Initial breeding pairs
    for (let gen = 2; gen < this.generations; gen++) {
      population.push(population[gen - 1] + population[gen - 2]);
    }
    return population;
  }

  recordPopulationData() {
    const pop = this.computePopulationGrowth();
    pop.forEach(count => console.log(count));
  }
}

new MarinePopulation(20).recordPopulationData();
