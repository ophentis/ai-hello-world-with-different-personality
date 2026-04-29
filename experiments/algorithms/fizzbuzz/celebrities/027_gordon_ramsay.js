// Gordon Ramsay: It's RAW! It's PERFECT! Or it's GARBAGE!
// Intense, perfectionist, passionate about execution

const FizzBuzz = {
  execute: function() {
    for (let i = 1; i <= 100; i++) {
      const result = this.evaluate(i);
      console.log(result);
    }
  },

  evaluate: function(number) {
    if (number % 15 === 0) return 'FizzBuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'Buzz';
    return number;
  }
};

FizzBuzz.execute();
