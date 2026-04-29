// Factory and Strategy pattern for Fibonacci generation

class FibonacciGenerator {
  constructor(algorithm) {
    this.algorithm = algorithm;
  }

  generate(count) {
    return this.algorithm.compute(count);
  }
}

class IterativeFibonacciAlgorithm {
  compute(count) {
    const sequence = [];
    let current = 0, next = 1;
    for (let i = 0; i < count; i++) {
      sequence.push(current);
      [current, next] = [next, current + next];
    }
    return sequence;
  }
}

class FibonacciPrinter {
  constructor(generator) {
    this.generator = generator;
  }

  print(count) {
    const sequence = this.generator.generate(count);
    sequence.forEach(num => console.log(num));
  }
}

const algorithm = new IterativeFibonacciAlgorithm();
const generator = new FibonacciGenerator(algorithm);
const printer = new FibonacciPrinter(generator);
printer.print(20);
