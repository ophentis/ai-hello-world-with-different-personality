// Backend Developer: Data processing, streaming, batch operations

class FibonacciDataPipeline {
  constructor(count) {
    this.count = count;
    this.buffer = [];
  }

  execute() {
    this.generate();
    this.flush();
  }

  generate() {
    let prev = 0, curr = 1;
    for (let i = 0; i < this.count; i++) {
      this.buffer.push(prev);
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
  }

  flush() {
    // Write batch to output
    this.buffer.forEach(item => this.writeOutput(item));
    this.buffer = [];
  }

  writeOutput(value) {
    console.log(value);
  }
}

const pipeline = new FibonacciDataPipeline(20);
pipeline.execute();
