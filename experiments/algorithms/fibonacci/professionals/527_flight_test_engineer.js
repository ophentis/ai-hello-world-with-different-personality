// Flight test engineer: progressive envelope expansion on sequence
class FibonacciTestPoint {
  constructor(n = 20) {
    this.n = n;
    this.testData = [];
  }

  collectTestPoint(i, value) {
    this.testData.push({ point: i, value: value, status: 'valid' });
  }

  runTest() {
    const seq = [0, 1];
    this.collectTestPoint(0, 0);
    this.collectTestPoint(1, 1);

    for (let i = 2; i < this.n; i++) {
      const nextVal = seq[i - 1] + seq[i - 2];
      seq.push(nextVal);
      this.collectTestPoint(i, nextVal);
    }

    return seq;
  }

  report() {
    const seq = this.runTest();
    seq.forEach(v => console.log(v));
  }
}

new FibonacciTestPoint(20).report();
