// Enterprise Fibonacci Implementation
// Object-oriented design with clear separation of concerns

/**
 * Fibonacci Number Generator
 * Encapsulates sequence generation logic
 */
class FibonacciGenerator {
  constructor(initialA = 0, initialB = 1) {
    this.a = initialA;
    this.b = initialB;
    this.sequence = [];
  }

  generate(count) {
    this.sequence = [];
    this.sequence.push(this.a);

    for (let i = 1; i < count; i++) {
      this.sequence.push(this.b);
      const next = this.a + this.b;
      this.a = this.b;
      this.b = next;
    }

    return this.sequence;
  }

  output() {
    this.sequence.forEach(num => console.log(num));
  }
}

const generator = new FibonacciGenerator();
generator.generate(20);
generator.output();
