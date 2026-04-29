// Bomb disposal technician: circuit resistance sorting, methodical order
class CircuitResistanceOrder {
  constructor(resistances) {
    this.ohms = resistances;
  }

  sortByOhms() {
    // Sort resistances from lowest to highest (safest to riskiest)
    const sorted = [...this.ohms].sort((a, b) => a - b);
    return sorted;
  }

  procedureOrder() {
    const sorted = this.sortByOhms();
    console.log(`[${sorted.join(',')}]`);
  }
}

new CircuitResistanceOrder([82, 43, 10, 27, 38, 3, 9]).procedureOrder();
