// Enterprise FizzBuzz Implementation
// Following SOLID principles with abstraction layers and design patterns

/**
 * Abstract base class for transformation rules
 */
class TransformationRule {
  apply(value) {
    throw new Error('Must implement apply method');
  }
}

/**
 * Divisibility rule implementation
 */
class DivisibilityRule extends TransformationRule {
  constructor(divisor, replacement) {
    super();
    this.divisor = divisor;
    this.replacement = replacement;
  }

  apply(value) {
    return value % this.divisor === 0 ? this.replacement : '';
  }
}

/**
 * FizzBuzz Processor - Main orchestrator
 */
class FizzBuzzProcessor {
  constructor() {
    this.rules = [
      new DivisibilityRule(3, 'Fizz'),
      new DivisibilityRule(5, 'Buzz')
    ];
  }

  process(n) {
    const result = this.rules.map(rule => rule.apply(n)).join('');
    return result || String(n);
  }

  execute(limit) {
    for (let i = 1; i <= limit; i++) {
      console.log(this.process(i));
    }
  }
}

const processor = new FizzBuzzProcessor();
processor.execute(100);
