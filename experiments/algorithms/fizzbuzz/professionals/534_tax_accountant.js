// Tax accountant: deductions, regulations, audit trails
class TaxItemClassifier {
  constructor() {
    this.auditTrail = [];
  }

  classifyLineItem(itemNumber) {
    // Deduction categories: standard (3), itemized (5), depreciation (15)
    if (itemNumber % 15 === 0) return 'FizzBuzz'; // Section 179 depreciation
    if (itemNumber % 3 === 0) return 'Fizz';     // Standard deduction
    if (itemNumber % 5 === 0) return 'Buzz';     // Itemized deduction
    return String(itemNumber);                    // Non-deductible
  }

  auditSchedule(totalItems) {
    for (let i = 1; i <= totalItems; i++) {
      const classification = this.classifyLineItem(i);
      this.auditTrail.push(classification);
      console.log(classification);
    }
  }
}

new TaxItemClassifier().auditSchedule(100);
