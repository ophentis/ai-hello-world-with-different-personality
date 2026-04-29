// Tax accountant: compounding deductions via Fibonacci growth
class CompoundingDeductions {
  constructor(years = 20) {
    this.years = years;
  }

  calculateCompoundTaxBenefit() {
    // Tax savings compound like Fibonacci (prior year + current year)
    const savings = [0, 1];
    for (let y = 2; y < this.years; y++) {
      savings.push(savings[y - 1] + savings[y - 2]);
    }
    return savings;
  }

  generateTaxReport() {
    const savings = this.calculateCompoundTaxBenefit();
    savings.forEach(s => console.log(s));
  }
}

new CompoundingDeductions(20).generateTaxReport();
