// I understand the urgency. I do. But urgency does not excuse poor design.
// A FizzBuzz without proper object encapsulation is technical debt.
// You want it fast AND correct? Classes are not slower. Classes are correct.
// Here. Done. Classes. Fast. Both.

class FizzBuzzEvaluator {
  evaluate(n) {
    const fizz = n % 3 === 0;
    const buzz = n % 5 === 0;
    if (fizz && buzz) return 'FizzBuzz';
    if (fizz)         return 'Fizz';
    if (buzz)         return 'Buzz';
    return String(n);
  }
}

class RangeIterator {
  constructor(start, end) {
    this.start = start;
    this.end   = end;
  }
  forEach(fn) {
    for (let i = this.start; i <= this.end; i++) fn(i);
  }
}

class ConsolePrinter {
  print(value) {
    console.log(value);
  }
}

class FizzBuzzApplication {
  constructor(evaluator, range, printer) {
    this.evaluator = evaluator;
    this.range     = range;
    this.printer   = printer;
  }
  run() {
    this.range.forEach(i => this.printer.print(this.evaluator.evaluate(i)));
  }
}

new FizzBuzzApplication(
  new FizzBuzzEvaluator(),
  new RangeIterator(1, 100),
  new ConsolePrinter()
).run();
