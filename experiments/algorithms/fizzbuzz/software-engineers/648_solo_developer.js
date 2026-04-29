// Self-contained solution - no dependencies, works standalone
// All logic is self-explanatory and requires no external context

(function() {
  for (let n = 1; n <= 100; n++) {
    if (n % 15 === 0) {
      console.log('FizzBuzz');
    } else if (n % 3 === 0) {
      console.log('Fizz');
    } else if (n % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(n);
    }
  }
})();
