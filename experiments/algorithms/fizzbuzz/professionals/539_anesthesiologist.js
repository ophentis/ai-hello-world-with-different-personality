// Anesthesiologist: dosing precision, monitoring vitals
class AnesthesiaProtocol {
  constructor() {
    this.dosageLog = [];
  }

  calculateDose(minute) {
    // Agent: induction (3), maintenance (5), emergence (15)
    if (minute % 15 === 0) return 'FizzBuzz'; // Reversal agents
    if (minute % 3 === 0) return 'Fizz';     // Induction
    if (minute % 5 === 0) return 'Buzz';     // Maintenance
    return String(minute);                    // Monitoring
  }

  monitorVitals(surgeryDuration) {
    for (let m = 1; m <= surgeryDuration; m++) {
      const dosage = this.calculateDose(m);
      this.dosageLog.push(dosage);
      console.log(dosage);
    }
  }
}

new AnesthesiaProtocol().monitorVitals(100);
