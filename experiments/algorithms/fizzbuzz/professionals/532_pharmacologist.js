// Pharmacologist: drug interactions, dosing regimens, receptors
class DrugReceptorBinding {
  constructor() {
    this.receptors = {};
  }

  calculateBinding(hour) {
    // Receptor occupancy: primary (3), secondary (5), tertiary (15)
    if (hour % 15 === 0) return 'FizzBuzz'; // Triplet binding
    if (hour % 3 === 0) return 'Fizz';     // Primary site
    if (hour % 5 === 0) return 'Buzz';     // Secondary site
    return String(hour);                    // Baseline
  }

  administreDose(duration) {
    for (let t = 1; t <= duration; t++) {
      const binding = this.calculateBinding(t);
      console.log(binding);
    }
  }
}

new DrugReceptorBinding().administreDose(100);
