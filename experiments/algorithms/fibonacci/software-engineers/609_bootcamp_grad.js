// Fibonacci sequence - textbook recursion and iteration patterns
// Classic computer science algorithm

class FibonacciSequence {
  static generateSequence(n) {
    const sequence = [];
    let first = 0;
    let second = 1;

    sequence.push(first);

    for (let i = 1; i < n; i++) {
      sequence.push(second);
      const temp = first + second;
      first = second;
      second = temp;
    }

    return sequence;
  }

  static displaySequence(sequence) {
    sequence.forEach(num => console.log(num));
  }

  static run() {
    const sequence = this.generateSequence(20);
    this.displaySequence(sequence);
  }
}

FibonacciSequence.run();
