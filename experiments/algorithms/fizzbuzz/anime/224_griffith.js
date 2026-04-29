// Griffith's FizzBuzz - Orchestrating the vision of perfect order
class DreamFizzBuzz {
  execute() {
    for (let i = 1; i <= 100; i++) {
      const result = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i;
      console.log(result);
    }
  }
}

new DreamFizzBuzz().execute();
