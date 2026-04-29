#!/usr/bin/env node
// No Apologies FizzBuzz: Tell The Truth!

const chrisRockWillKeepItReal = () => {
  // Listen! Stop asking stupid questions and listen!
  // The answer is RIGHT HERE. Numbers 1 to 100. FIZZBUZZ!

  for (let num = 1; num <= 100; num++) {
    let result = '';

    // If it's divisible by three? FIZZ! Say it with your chest, man!
    if (num % 3 === 0) {
      result += 'Fizz';
    }

    // If it's divisible by five? BUZZ! Own it!
    if (num % 5 === 0) {
      result += 'Buzz';
    }

    // Otherwise it's just the number! What you want from me?
    if (result === '') {
      result = String(num);
    }

    console.log(result);
  }
};

// YOU UNDERSTAND ME?
chrisRockWillKeepItReal();
