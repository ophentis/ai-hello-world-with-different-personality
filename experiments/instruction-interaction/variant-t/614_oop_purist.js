// In a well-designed system, everything is an object.
// Numbers have behavior. The sequence has state. Output has a contract.
// Encapsulation. Single responsibility. Open for extension, closed for modification.

class FizzBuzzNumber {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  isFizz() {
    return this._value % 3 === 0;
  }

  isBuzz() {
    return this._value % 5 === 0;
  }

  label() {
    const fizz = this.isFizz() ? 'Fizz' : '';
    const buzz = this.isBuzz() ? 'Buzz' : '';
    return fizz + buzz || this._value;
  }

  toString() {
    return String(this.label());
  }
}

class FizzBuzzSequence {
  constructor(start, end) {
    this._start = start;
    this._end = end;
  }

  *[Symbol.iterator]() {
    for (let i = this._start; i <= this._end; i++) {
      yield new FizzBuzzNumber(i);
    }
  }
}

class SequencePrinter {
  constructor(sequence) {
    this._sequence = sequence;
  }

  print() {
    for (const item of this._sequence) {
      console.log(item.label());
    }
  }
}

// Instantiate, wire, execute. The objects do the work.
const sequence = new FizzBuzzSequence(1, 100);
const printer = new SequencePrinter(sequence);
printer.print();
