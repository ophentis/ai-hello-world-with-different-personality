// FizzBuzz - figured this out myself!
// Pretty clever solution mixing strings and conditionals

const doFizzBuzz = () => {
  for (let n = 1; n <= 100; n++) {
    let result = '';
    // Check multiples of 3 and 5
    if (n % 3 === 0) result = 'Fizz';
    if (n % 5 === 0) result += 'Buzz';
    // Print result or the number itself
    console.log(result || n);
  }
};

doFizzBuzz();
