// Tax accountant: transaction sorting by deductibility, audit order
class TransactionLedger {
  constructor(amounts) {
    this.transactions = amounts;
  }

  sortByDeductibility() {
    // Sort from least to most deductible
    const sorted = [...this.transactions].sort((a, b) => a - b);
    return sorted;
  }

  generateLedger() {
    const sorted = this.sortByDeductibility();
    console.log(`[${sorted.join(',')}]`);
  }
}

new TransactionLedger([82, 43, 10, 27, 38, 3, 9]).generateLedger();
