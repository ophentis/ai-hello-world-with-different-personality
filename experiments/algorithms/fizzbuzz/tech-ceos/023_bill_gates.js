// Bill Gates: Analytical approach. Optimize for clarity and efficiency.
// Systematic problem-solving applied.

class FizzBuzzAnalyzer {
  constructor() {
    this.rules = [
      { divisor: 15, output: 'FizzBuzz' },
      { divisor: 3, output: 'Fizz' },
      { divisor: 5, output: 'Buzz' }
    ];
  }

  analyze(number) {
    for (const rule of this.rules) {
      if (number % rule.divisor === 0) {
        return rule.output;
      }
    }
    return number;
  }

  execute() {
    for (let i = 1; i <= 100; i++) {
      console.log(this.analyze(i));
    }
  }
}

new FizzBuzzAnalyzer().execute();
