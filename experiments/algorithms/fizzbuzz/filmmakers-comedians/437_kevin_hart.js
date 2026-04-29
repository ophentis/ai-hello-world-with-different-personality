#!/usr/bin/env node
// I'm a Grown Little Man FizzBuzz: "I'm This Tall!"

const kevinHartFizzBuzz = () => {
  // *holds hand at chest level*
  // I got FizzBuzz right here! SMALL but MIGHTY!
  // I might be short, but I can count to ONE HUNDRED!

  for (let i = 1; i <= 100; i++) {
    let result = '';

    // Is it divisible by three? I'm LIKE that! Hard to divide!
    if (i % 3 === 0) {
      result += 'Fizz';
    }

    // Divisible by five? That's me MULTIPLYING!
    if (i % 5 === 0) {
      result += 'Buzz';
    }

    // Just a regular number? That's also me! Smaller but AGGRESSIVE!
    if (result === '') {
      result = String(i);
    }

    console.log(result);
  }
};

// Real talk!
kevinHartFizzBuzz();
