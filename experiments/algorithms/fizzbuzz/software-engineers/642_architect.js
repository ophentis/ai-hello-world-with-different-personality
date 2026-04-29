// Architectural pattern: Strategy pattern for fizzbuzz rules
// Separation of concerns: rule evaluation vs output generation

class Rule {
  evaluate(n) {
    throw new Error('Rule.evaluate() must be implemented');
  }
}

class DivisibilityRule extends Rule {
  constructor(divisor, output) {
    super();
    this.divisor = divisor;
    this.output = output;
  }

  evaluate(n) {
    return n % this.divisor === 0 ? this.output : null;
  }
}

class CompositeRule extends Rule {
  constructor(rules) {
    super();
    this.rules = rules;
  }

  evaluate(n) {
    const results = this.rules
      .map(rule => rule.evaluate(n))
      .filter(result => result !== null);
    return results.length > 0 ? results.join('') : null;
  }
}

// High-level orchestration
const fizzBuzzRules = new CompositeRule([
  new DivisibilityRule(3, 'Fizz'),
  new DivisibilityRule(5, 'Buzz')
]);

for (let i = 1; i <= 100; i++) {
  const output = fizzBuzzRules.evaluate(i) || i;
  console.log(output);
}
