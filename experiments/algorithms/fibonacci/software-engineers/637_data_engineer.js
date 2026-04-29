// Data Engineer: Pipeline-based sequence generation

class FibonacciETL {
  constructor(count) {
    this.count = count;
    this.data = [];
  }

  extract() {
    // Initialize generator
    return { prev: 0, curr: 1, remaining: this.count };
  }

  transform(state) {
    // Generate sequence
    while (state.remaining > 0) {
      this.data.push(state.prev);
      const next = state.prev + state.curr;
      state.prev = state.curr;
      state.curr = next;
      state.remaining--;
    }
    return this.data;
  }

  load(data) {
    // Stream output
    data.forEach(value => console.log(value));
  }

  run() {
    const state = this.extract();
    const result = this.transform(state);
    this.load(result);
  }
}

const pipeline = new FibonacciETL(20);
pipeline.run();
