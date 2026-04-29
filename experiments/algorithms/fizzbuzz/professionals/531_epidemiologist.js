// Epidemiologist: disease spread modeling, R-values, containment
class DiseaseSpreadModel {
  constructor() {
    this.compartments = { susceptible: 0, infected: 0, recovered: 0 };
  }

  calculateTransmissionRate(day) {
    // R-value cycles (3=baseline, 5=containment, 15=superspreader)
    if (day % 15 === 0) return 'FizzBuzz'; // Superspreader event
    if (day % 3 === 0) return 'Fizz';     // High transmission
    if (day % 5 === 0) return 'Buzz';     // Lockdown effect
    return String(day);                    // Normal transmission
  }

  simulateOutbreak(days) {
    for (let d = 1; d <= days; d++) {
      const rate = this.calculateTransmissionRate(d);
      console.log(rate);
    }
  }
}

new DiseaseSpreadModel().simulateOutbreak(100);
