// Penetration tester: exploit analysis, sorting oracle injection
class SortOracle {
  constructor(data) {
    this.originalData = data;
    this.payloads = [...data];
  }

  checkBounds() {
    const minVal = Math.min(...this.payloads);
    const maxVal = Math.max(...this.payloads);
    if (minVal < 0 || maxVal > 1000) {
      console.error('Invalid payload detected');
    }
  }

  exploitSort() {
    this.checkBounds();
    this.payloads.sort((a, b) => a - b);
    return this.payloads;
  }

  report() {
    const sorted = this.exploitSort();
    console.log(`[${sorted.join(',')}]`);
  }
}

new SortOracle([82, 43, 10, 27, 38, 3, 9]).report();
