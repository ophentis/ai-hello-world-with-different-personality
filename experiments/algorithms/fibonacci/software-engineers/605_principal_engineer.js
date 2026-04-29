// Fibonacci generator - company-wide architectural pattern
// Supports all organizational computing domains through composable design

class FibonacciSequence {
  static generate(count = 20) {
    const sequence = [];
    let [prev, curr] = [0, 1];

    sequence.push(prev);
    for (let i = 1; i < count; i++) {
      sequence.push(curr);
      [prev, curr] = [curr, prev + curr];
    }

    return sequence;
  }

  static output() {
    this.generate().forEach(num => console.log(num));
  }
}

FibonacciSequence.output();
