// Fullstack Developer: Connected layers, clean API

const FibonacciGenerator = {
  generate: (count) => {
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
};

const FibonacciAPI = {
  getSequence: (length) => FibonacciGenerator.generate(length)
};

const FibonacciView = {
  render: (sequence) => {
    sequence.forEach(num => console.log(num));
  }
};

const FibonacciController = {
  handleRequest: (length) => {
    const sequence = FibonacciAPI.getSequence(length);
    FibonacciView.render(sequence);
  }
};

FibonacciController.handleRequest(20);
