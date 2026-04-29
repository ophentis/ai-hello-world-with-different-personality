// FizzBuzz - company-wide technical standard
// Framework supporting organizational consistency across all domains

class FizzBuzzProcessor {
  static rules = [
    { divisor: 3, label: 'Fizz' },
    { divisor: 5, label: 'Buzz' }
  ];

  static process(n) {
    const result = this.rules
      .filter(rule => n % rule.divisor === 0)
      .map(rule => rule.label)
      .join('');
    return result || n;
  }

  static run(limit = 100) {
    for (let i = 1; i <= limit; i++) {
      console.log(this.process(i));
    }
  }
}

FizzBuzzProcessor.run();
