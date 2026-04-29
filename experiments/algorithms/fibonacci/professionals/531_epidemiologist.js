// Epidemiologist: exponential disease growth, generation time
class PandemicGrowth {
  constructor(generations = 20) {
    this.generations = generations;
  }

  calculateGenerationTime() {
    // Case doubling follows Fibonacci-like growth (serial interval)
    const cases = [0, 1];
    for (let g = 2; g < this.generations; g++) {
      cases.push(cases[g - 1] + cases[g - 2]);
    }
    return cases;
  }

  reportCaseTrajectory() {
    const cases = this.calculateGenerationTime();
    cases.forEach(c => console.log(c));
  }
}

new PandemicGrowth(20).reportCaseTrajectory();
