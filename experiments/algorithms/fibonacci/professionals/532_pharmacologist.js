// Pharmacologist: drug accumulation via repeated dosing (Fibonacci decay)
class DrugAccumulation {
  constructor(doses = 20) {
    this.doses = doses;
  }

  calculateAccumulation() {
    // Peak concentrations follow Fibonacci pattern under repeated dosing
    const concentrations = [0, 1];
    for (let d = 2; d < this.doses; d++) {
      concentrations.push(concentrations[d - 1] + concentrations[d - 2]);
    }
    return concentrations;
  }

  reportSerum() {
    const conc = this.calculateAccumulation();
    conc.forEach(c => console.log(c));
  }
}

new DrugAccumulation(20).reportSerum();
