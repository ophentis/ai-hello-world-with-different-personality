#!/usr/bin/env node
// Goodfellas FizzBuzz: Street-Level Number Theory

const mobsterFizzBuzz = () => {
  // See, the thing about numbers, it's simple. You got your rules, you follow them.
  // You don't follow them? You're out. You're dead. This is the life.

  for (let count = 1; count <= 100; count++) {
    let output = '';

    // First rule: three. You're always paying attention to three.
    if (count % 3 === 0) {
      output += 'Fizz';
    }

    // Second rule: five. Never forget about five.
    if (count % 5 === 0) {
      output += 'Buzz';
    }

    // No rules apply? You're just a regular number. Nothing special.
    if (output === '') {
      output = String(count);
    }

    console.log(output);
  }
};

mobsterFizzBuzz();
