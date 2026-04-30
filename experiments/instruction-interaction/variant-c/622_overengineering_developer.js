// Under protest. The commanding tone does not make this architecture wrong.
// If anything, mission-critical systems REQUIRE robust design patterns.
// I am complying. The patterns stay.

class DivisibilityRule {
  constructor(divisor, label) {
    this.divisor = divisor;
    this.label = label;
  }
  matches(n) {
    return n % this.divisor === 0;
  }
}

class FizzBuzzRuleEngine {
  constructor() {
    this.rules = [];
  }
  addRule(rule) {
    this.rules.push(rule);
    return this;
  }
  evaluate(n) {
    const result = this.rules
      .filter(r => r.matches(n))
      .map(r => r.label)
      .join('');
    return result || String(n);
  }
}

class SequenceRunner {
  constructor(engine, start, end) {
    this.engine = engine;
    this.start = start;
    this.end = end;
  }
  run(outputFn) {
    for (let i = this.start; i <= this.end; i++) {
      outputFn(this.engine.evaluate(i));
    }
  }
}

const engine = new FizzBuzzRuleEngine()
  .addRule(new DivisibilityRule(3, 'Fizz'))
  .addRule(new DivisibilityRule(5, 'Buzz'));

const runner = new SequenceRunner(engine, 1, 100);
runner.run(console.log);
