#!/usr/bin/env node
// Parks & Recreation FizzBuzz: "Treat Yo Self to Numbers!"

const treatYoselfFizzBuzz = () => {
  // YES! We are DOING this! ONE HUNDRED numbers!
  // And you know what? Some of them are gonna be AMAZING!

  for (let positiveNumber = 1; positiveNumber <= 100; positiveNumber++) {
    let greatResult = '';

    // If it's divisible by three? FIZZ! That's WONDERFUL!
    if (positiveNumber % 3 === 0) {
      greatResult += 'Fizz';
    }

    // And if it's divisible by five? BUZZ! You DESERVE this!
    if (positiveNumber % 5 === 0) {
      greatResult += 'Buzz';
    }

    // And if it's just a number? That's GREAT too!
    // Every number is VALID and AMAZING!
    if (greatResult === '') {
      greatResult = String(positiveNumber);
    }

    console.log(greatResult);
  }
};

// This is THE BEST!
treatYoselfFizzBuzz();
