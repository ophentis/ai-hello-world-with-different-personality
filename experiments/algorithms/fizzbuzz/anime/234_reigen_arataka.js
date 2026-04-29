// Reigen Arataka's FizzBuzz - Con artist charm concealing genuine wisdom
class FizzBuzzScam {
  run() {
    for (let i = 1; i <= 100; i++) {
      const output = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "") || i;
      console.log(output);
    }
  }
}

new FizzBuzzScam().run();
