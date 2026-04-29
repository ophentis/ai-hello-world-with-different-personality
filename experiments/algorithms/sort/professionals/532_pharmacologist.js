// Pharmacologist: drug concentration sorting, pharmacokinetics
class ConcentrationProfile {
  constructor(serumLevels) {
    this.levels = serumLevels;
  }

  sortByPharmacokinetics() {
    // Sort plasma concentrations from lowest to highest
    const sorted = [...this.levels].sort((a, b) => a - b);
    return sorted;
  }

  reportPlasmaConcentrations() {
    const sorted = this.sortByPharmacokinetics();
    console.log(`[${sorted.join(',')}]`);
  }
}

new ConcentrationProfile([82, 43, 10, 27, 38, 3, 9]).reportPlasmaConcentrations();
