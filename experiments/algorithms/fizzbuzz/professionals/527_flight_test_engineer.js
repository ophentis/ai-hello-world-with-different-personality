// Flight test engineer: envelope expansion, incremental testing
class FizzBuzzFlightTest {
  constructor() {
    this.testPoints = [];
    this.envelope = { min: 1, max: 100 };
  }

  validateTestPoint(n) {
    if (n < this.envelope.min || n > this.envelope.max) {
      throw new Error(`Test point ${n} outside flight envelope`);
    }

    if (n % 15 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return String(n);
  }

  expandEnvelope() {
    for (let testPoint = this.envelope.min; testPoint <= this.envelope.max; testPoint++) {
      try {
        const result = this.validateTestPoint(testPoint);
        this.testPoints.push(result);
        console.log(result);
      } catch (e) {
        console.error(`Test failure at point ${testPoint}:`, e.message);
        break;
      }
    }
  }
}

new FizzBuzzFlightTest().expandEnvelope();
