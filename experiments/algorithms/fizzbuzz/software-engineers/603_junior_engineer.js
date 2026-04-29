// FizzBuzz implementation - learning experience!
// This is a great problem to practice loops and conditionals

// We'll iterate from 1 to 100 and check divisibility
const runFizzBuzz = () => {
  // Start looping through all numbers
  for (let num = 1; num <= 100; num++) {
    // Check if divisible by both 3 and 5
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('FizzBuzz');
    }
    // Check if divisible by 3 only
    else if (num % 3 === 0) {
      console.log('Fizz');
    }
    // Check if divisible by 5 only
    else if (num % 5 === 0) {
      console.log('Buzz');
    }
    // Otherwise just print the number
    else {
      console.log(num);
    }
  }
};

// Call the function to run the program
runFizzBuzz();
