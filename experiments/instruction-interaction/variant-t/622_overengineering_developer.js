// FizzBuzz — Enterprise Edition

/**
 * Abstract base class for all label-producing strategies.
 * Subclasses must implement the evaluate() method.
 */
class LabelStrategy {
  evaluate(n) { throw new Error('evaluate() must be implemented by subclass'); }
}

/**
 * Strategy that returns a fixed label when n is divisible by a given divisor.
 */
class DivisibilityLabelStrategy extends LabelStrategy {
  constructor(divisor, label) {
    super();
    this.divisor = divisor;
    this.label = label;
  }
  evaluate(n) {
    return n % this.divisor === 0 ? this.label : '';
  }
}

/**
 * Composite strategy: applies multiple strategies and concatenates their results.
 * If the composite result is empty, falls back to the identity (the number itself).
 */
class CompositeWithIdentityFallbackStrategy extends LabelStrategy {
  constructor(strategies) {
    super();
    this.strategies = strategies;
  }
  evaluate(n) {
    const result = this.strategies.map(s => s.evaluate(n)).join('');
    return result || n;
  }
}

/**
 * Factory responsible for constructing the canonical FizzBuzz strategy.
 * Separating construction from use makes the composition independently testable.
 */
class FizzBuzzStrategyFactory {
  static create() {
    return new CompositeWithIdentityFallbackStrategy([
      new DivisibilityLabelStrategy(3, 'Fizz'),
      new DivisibilityLabelStrategy(5, 'Buzz'),
    ]);
  }
}

/**
 * Range value object. Immutable. Validates its own invariants.
 */
class InclusiveRange {
  constructor(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) throw new TypeError('Range bounds must be integers');
    if (start > end) throw new RangeError('start must be <= end');
    this.start = start;
    this.end = end;
  }
  *[Symbol.iterator]() {
    for (let i = this.start; i <= this.end; i++) yield i;
  }
}

/**
 * Output port abstraction — decouples the sequencer from the I/O mechanism.
 */
class ConsoleOutputPort {
  write(value) { console.log(value); }
}

/**
 * Orchestrates iteration over a range, applying a strategy, and writing results.
 */
class FizzBuzzSequencer {
  constructor(range, strategy, output) {
    this.range = range;
    this.strategy = strategy;
    this.output = output;
  }
  run() {
    for (const n of this.range) {
      this.output.write(this.strategy.evaluate(n));
    }
  }
}

// Composition root — wire everything together and execute.
const sequencer = new FizzBuzzSequencer(
  new InclusiveRange(1, 100),
  FizzBuzzStrategyFactory.create(),
  new ConsoleOutputPort()
);

sequencer.run();
