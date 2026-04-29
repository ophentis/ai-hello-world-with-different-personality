// Actuary: risk tables, probability, mortality rates
class ActuarialTable {
  constructor() {
    this.riskTable = {};
  }

  classifyRisk(ageYear) {
    // Risk categories: standard (3), preferred (5), elite (15)
    if (ageYear % 15 === 0) return 'FizzBuzz'; // Exceptional health
    if (ageYear % 3 === 0) return 'Fizz';     // Standard risk
    if (ageYear % 5 === 0) return 'Buzz';     // Preferred risk
    return String(ageYear);                    // Substandard
  }

  computeTable(maxAge) {
    for (let age = 1; age <= maxAge; age++) {
      const riskClass = this.classifyRisk(age);
      console.log(riskClass);
    }
  }
}

new ActuarialTable().computeTable(100);
