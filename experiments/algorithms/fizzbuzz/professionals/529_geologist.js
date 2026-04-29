// Geologist: stratum layering, geological time periods
class StratigraphyAnalysis {
  constructor() {
    this.strata = [];
  }

  analyzeLayer(position) {
    // Primary minerals (3), Secondary minerals (5), Tertiary (15)
    if (position % 15 === 0) return 'FizzBuzz'; // Precambrian
    if (position % 3 === 0) return 'Fizz';     // Paleozoic
    if (position % 5 === 0) return 'Buzz';     // Mesozoic
    return String(position);                    // Cenozoic
  }

  coreLog(depth) {
    for (let layer = 1; layer <= depth; layer++) {
      const composition = this.analyzeLayer(layer);
      this.strata.push(composition);
      console.log(composition);
    }
  }
}

new StratigraphyAnalysis().coreLog(100);
