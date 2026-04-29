// Factory pattern for FizzBuzz rule evaluation

class FizzBuzzRule {
  constructor(divisor, word) {
    this.divisor = divisor;
    this.word = word;
  }

  apply(n) {
    return n % this.divisor === 0 ? this.word : '';
  }
}

class FizzBuzzStrategy {
  constructor(rules) {
    this.rules = rules;
  }

  evaluate(n) {
    const result = this.rules.reduce((acc, rule) => acc + rule.apply(n), '');
    return result || String(n);
  }
}

class FizzBuzzGenerator {
  constructor(strategy, start = 1, end = 100) {
    this.strategy = strategy;
    this.start = start;
    this.end = end;
  }

  generate() {
    for (let i = this.start; i <= this.end; i++) {
      console.log(this.strategy.evaluate(i));
    }
  }
}

const rules = [new FizzBuzzRule(3, 'Fizz'), new FizzBuzzRule(5, 'Buzz')];
const strategy = new FizzBuzzStrategy(rules);
const generator = new FizzBuzzGenerator(strategy);
generator.generate();
