// Platform Engineer: Extensible architecture, composable components

class SequenceGenerator {
  generate(count) {
    throw new Error('generate() must be implemented');
  }
}

class FibonacciSequenceGenerator extends SequenceGenerator {
  generate(count) {
    const sequence = [];
    let prev = 0, curr = 1;
    for (let i = 0; i < count; i++) {
      sequence.push(prev);
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
    return sequence;
  }
}

class SequenceFormatter {
  format(sequence) {
    throw new Error('format() must be implemented');
  }
}

class LineByLineFormatter extends SequenceFormatter {
  format(sequence) {
    sequence.forEach(val => console.log(val));
  }
}

class SequencePlatform {
  constructor(generator, formatter) {
    this.generator = generator;
    this.formatter = formatter;
  }

  execute(count) {
    const sequence = this.generator.generate(count);
    this.formatter.format(sequence);
  }
}

const generator = new FibonacciSequenceGenerator();
const formatter = new LineByLineFormatter();
const platform = new SequencePlatform(generator, formatter);

platform.execute(20);
