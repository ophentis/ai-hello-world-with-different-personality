// Frontend Developer: Reactive, event-driven sequence generation

class FibonacciStore {
  constructor() {
    this.items = [];
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach(obs => obs(this.items));
  }

  generateSequence(length) {
    let prev = 0, curr = 1;
    for (let i = 0; i < length; i++) {
      this.items.push(prev);
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
    this.notifyObservers();
  }

  render() {
    this.items.forEach(item => console.log(item));
  }
}

const store = new FibonacciStore();
store.addObserver(() => store.render());
store.generateSequence(20);
