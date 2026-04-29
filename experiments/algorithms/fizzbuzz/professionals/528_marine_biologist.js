// Marine biologist: species classification, ecosystem patterns
class MarineSpeciesClassifier {
  constructor() {
    this.ecosystem = {};
  }

  classifySpecies(n) {
    // Herbivores (mod 3), Carnivores (mod 5), Apex (mod 15)
    if (n % 15 === 0) return 'FizzBuzz'; // Apex predator (rare)
    if (n % 3 === 0) return 'Fizz';    // Herbivore (common)
    if (n % 5 === 0) return 'Buzz';    // Carnivore (moderate)
    return String(n);                   // Detritus feeder (very common)
  }

  surveyEcosystem(limit) {
    for (let specimen = 1; specimen <= limit; specimen++) {
      const classification = this.classifySpecies(specimen);
      console.log(classification);
    }
  }
}

new MarineSpeciesClassifier().surveyEcosystem(100);
