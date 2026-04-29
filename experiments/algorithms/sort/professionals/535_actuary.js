// Actuary: mortality rate sorting, risk stratification
class MortalityStratification {
  constructor(rates) {
    this.rates = rates;
  }

  stratifyByRisk() {
    // Sort mortality rates from lowest to highest
    const sorted = [...this.rates].sort((a, b) => a - b);
    return sorted;
  }

  publishTables() {
    const sorted = this.stratifyByRisk();
    console.log(`[${sorted.join(',')}]`);
  }
}

new MortalityStratification([82, 43, 10, 27, 38, 3, 9]).publishTables();
