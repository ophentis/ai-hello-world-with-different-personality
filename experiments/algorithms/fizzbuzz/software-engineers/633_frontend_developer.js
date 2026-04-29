// Frontend Developer: Event-driven, reactive thinking

class FizzBuzzUI {
  constructor() {
    this.handlers = [];
  }

  onValueNeeded(value) {
    this.handlers.forEach(handler => handler(value));
  }

  subscribe(handler) {
    this.handlers.push(handler);
  }

  run() {
    for (let i = 1; i <= 100; i++) {
      const result = this.calculateFizzBuzz(i);
      this.onValueNeeded(result);
    }
  }

  calculateFizzBuzz(num) {
    let output = '';
    if (num % 3 === 0) output += 'Fizz';
    if (num % 5 === 0) output += 'Buzz';
    return output || num;
  }
}

const ui = new FizzBuzzUI();
ui.subscribe(value => console.log(value));
ui.run();
