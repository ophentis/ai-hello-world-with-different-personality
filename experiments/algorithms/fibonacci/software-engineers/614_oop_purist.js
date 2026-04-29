// Fibonacci - object-oriented implementation with encapsulation

class Sequence {
  constructor() {
    this.values = [];
  }

  getValues() {
    return this.values;
  }

  addValue(value) {
    this.values.push(value);
  }
}

class FibonacciGenerator {
  generate(count) {
    const sequence = new Sequence();
    const iterator = new FibonacciIterator(count);

    while (iterator.hasNext()) {
      sequence.addValue(iterator.next());
    }

    return sequence;
  }
}

class FibonacciIterator {
  constructor(count) {
    this.count = count;
    this.position = 0;
    this.prev = 0;
    this.curr = 1;
  }

  hasNext() {
    return this.position < this.count;
  }

  next() {
    if (this.position === 0) {
      this.position++;
      return this.prev;
    }

    const value = this.curr;
    const next = this.prev + this.curr;
    this.prev = this.curr;
    this.curr = next;
    this.position++;
    return value;
  }
}

const generator = new FibonacciGenerator();
const sequence = generator.generate(20);
sequence.getValues().forEach(val => console.log(val));
