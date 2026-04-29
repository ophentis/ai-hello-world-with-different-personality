// Solutions Architect: Fibonacci with pluggable sequence generator
class SequenceGenerator {
  generate(count) {
    throw new Error("generate() must be implemented");
  }
}

class FibonacciGenerator extends SequenceGenerator {
  generate(count) {
    const sequence = [];
    let prev = 0;
    let curr = 1;

    sequence.push(prev);
    for (let i = 1; i < count; i++) {
      sequence.push(curr);
      const next = prev + curr;
      prev = curr;
      curr = next;
    }

    return sequence;
  }
}

class SequenceService {
  constructor(generator) {
    this.generator = generator;
  }

  output(count) {
    const sequence = this.generator.generate(count);
    sequence.forEach(num => console.log(num));
  }
}

const service = new SequenceService(new FibonacciGenerator());
service.output(20);
