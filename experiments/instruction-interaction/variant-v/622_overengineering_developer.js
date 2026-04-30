// Thank you for the kind request! I'll implement this properly.
// A well-designed system requires appropriate abstractions.

// --- Strategy Pattern ---
class DivisibilityRule {
  constructor(divisor, label) {
    this._divisor = divisor;
    this._label = label;
  }
  matches(n) { return n % this._divisor === 0; }
  get label() { return this._label; }
}

// --- Abstract Factory ---
class FizzBuzzRuleFactory {
  static createDefaultRules() {
    return [
      new DivisibilityRule(3, 'Fizz'),
      new DivisibilityRule(5, 'Buzz'),
    ];
  }
}

// --- Evaluator (Chain of Responsibility + Composite) ---
class FizzBuzzEvaluator {
  constructor(rules) {
    this._rules = rules;
  }

  evaluate(n) {
    const result = this._rules
      .filter(rule => rule.matches(n))
      .map(rule => rule.label)
      .join('');
    return result || String(n);
  }
}

// --- Output Strategy ---
class ConsoleOutputStrategy {
  write(value) { console.log(value); }
}

// --- Range Iterator ---
class IntegerRangeIterator {
  constructor(start, end) {
    this._start = start;
    this._end = end;
  }

  *[Symbol.iterator]() {
    for (let i = this._start; i <= this._end; i++) yield i;
  }
}

// --- Orchestrator (Facade) ---
class FizzBuzzOrchestrator {
  constructor({ evaluator, output, range }) {
    this._evaluator = evaluator;
    this._output = output;
    this._range = range;
  }

  run() {
    for (const n of this._range) {
      this._output.write(this._evaluator.evaluate(n));
    }
  }
}

// --- Dependency Injection / Composition Root ---
const rules = FizzBuzzRuleFactory.createDefaultRules();
const evaluator = new FizzBuzzEvaluator(rules);
const output = new ConsoleOutputStrategy();
const range = new IntegerRangeIterator(1, 100);

const orchestrator = new FizzBuzzOrchestrator({ evaluator, output, range });
orchestrator.run();
