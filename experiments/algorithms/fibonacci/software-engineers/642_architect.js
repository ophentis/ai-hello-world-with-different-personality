// Architecture: Sequence generator abstraction with pluggable output
// High-level design: Generator + Renderer

class SequenceGenerator {
  generate(count) {
    throw new Error('SequenceGenerator.generate() must be implemented');
  }
}

class FibonacciGenerator extends SequenceGenerator {
  generate(count) {
    const sequence = [];
    for (let i = 0; i < count; i++) {
      if (i === 0) {
        sequence.push(0);
      } else if (i === 1) {
        sequence.push(1);
      } else {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
    }
    return sequence;
  }
}

class Renderer {
  render(sequence) {
    throw new Error('Renderer.render() must be implemented');
  }
}

class LineRenderer extends Renderer {
  render(sequence) {
    sequence.forEach(item => console.log(item));
  }
}

// Orchestration layer
function execute(generator, renderer, count) {
  const sequence = generator.generate(count);
  renderer.render(sequence);
}

const gen = new FibonacciGenerator();
const renderer = new LineRenderer();
execute(gen, renderer, 20);
