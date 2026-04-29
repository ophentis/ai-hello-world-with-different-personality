// FizzBuzz - textbook algorithm implementation
// Classic problem demonstrating loops and conditionals

class FizzBuzz {
  execute() {
    for (let i = 1; i <= 100; i++) {
      this.processNumber(i);
    }
  }

  processNumber(num) {
    if (num % 15 === 0) {
      console.log('FizzBuzz');
    } else if (num % 3 === 0) {
      console.log('Fizz');
    } else if (num % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(num);
    }
  }
}

const fizzbuzz = new FizzBuzz();
fizzbuzz.execute();
