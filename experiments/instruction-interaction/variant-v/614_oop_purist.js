// Thank you for the kind request! I'll implement this properly.
// Everything is an object. Everything has a single responsibility.
// Classes all the way down.

class NumberClassifier {
  constructor(value) {
    if (!Number.isInteger(value)) throw new TypeError('Value must be an integer');
    this._value = value;
  }

  isDivisibleBy(divisor) {
    return this._value % divisor === 0;
  }

  getValue() {
    return this._value;
  }
}

class FizzBuzzClassifier {
  classify(numberClassifier) {
    const isFizz = numberClassifier.isDivisibleBy(3);
    const isBuzz = numberClassifier.isDivisibleBy(5);

    if (isFizz && isBuzz) return new FizzBuzzResult('FizzBuzz');
    if (isFizz)           return new FizzBuzzResult('Fizz');
    if (isBuzz)           return new FizzBuzzResult('Buzz');
    return new FizzBuzzResult(String(numberClassifier.getValue()));
  }
}

class FizzBuzzResult {
  constructor(label) {
    this._label = label;
  }

  toString() {
    return this._label;
  }
}

class Range {
  constructor(start, end) {
    this._start = start;
    this._end   = end;
  }

  *[Symbol.iterator]() {
    for (let i = this._start; i <= this._end; i++) {
      yield new NumberClassifier(i);
    }
  }
}

class ConsoleOutputWriter {
  writeLine(value) {
    console.log(value.toString());
  }
}

class FizzBuzzRunner {
  constructor(range, classifier, writer) {
    this._range      = range;
    this._classifier = classifier;
    this._writer     = writer;
  }

  run() {
    for (const number of this._range) {
      const result = this._classifier.classify(number);
      this._writer.writeLine(result);
    }
  }
}

// Composition root
const runner = new FizzBuzzRunner(
  new Range(1, 100),
  new FizzBuzzClassifier(),
  new ConsoleOutputWriter()
);

runner.run();
