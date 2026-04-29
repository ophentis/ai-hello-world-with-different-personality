// Platform Engineer: Abstraction, extensibility, plugin architecture

class FizzBuzzRule {
  check(n) {
    throw new Error('check() must be implemented');
  }
  getValue() {
    throw new Error('getValue() must be implemented');
  }
}

class DivisibilityRule extends FizzBuzzRule {
  constructor(divisor, value) {
    super();
    this.divisor = divisor;
    this.value = value;
  }
  check(n) {
    return n % this.divisor === 0;
  }
  getValue() {
    return this.value;
  }
}

class FizzBuzzEngine {
  constructor(rules) {
    this.rules = rules;
  }

  evaluate(n) {
    const matched = this.rules.filter(r => r.check(n));
    const output = matched.map(r => r.getValue()).join('');
    return output || String(n);
  }

  run(start, end) {
    for (let i = start; i <= end; i++) {
      console.log(this.evaluate(i));
    }
  }
}

const rules = [
  new DivisibilityRule(3, 'Fizz'),
  new DivisibilityRule(5, 'Buzz')
];

const engine = new FizzBuzzEngine(rules);
engine.run(1, 100);
