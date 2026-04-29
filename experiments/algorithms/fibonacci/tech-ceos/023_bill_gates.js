// Bill Gates: Systematic calculation, measured approach
class FibonacciCalculator {
  calculate(n) {
    const sequence = [];
    let x = 0, y = 1;

    for (let i = 0; i < n; i++) {
      sequence.push(x);
      [x, y] = [y, x + y];
    }

    return sequence;
  }
}

const calculator = new FibonacciCalculator();
calculator.calculate(20).forEach(num => console.log(num));
