#!/usr/bin/env node
// Pulp FizzBuzz: A non-linear narrative of numerical consequences

const briefcaseOfNumbers = () => {
  let count = 1;

  const getTheSwitch = () => {
    let output = '';

    // You know what the worst thing about a number is? It might be divisible.
    if (count % 3 === 0) {
      output += 'Fizz';
    }
    // And if it IS divisible? Well, that's when things get interesting.
    if (count % 5 === 0) {
      output += 'Buzz';
    }
    // But if it's not divisible by ANYTHING? Then it's just... a number.
    if (output === '') {
      output = String(count);
    }

    count++;
    return output;
  };

  return getTheSwitch;
};

const narrationStyle = briefcaseOfNumbers();

// A hundred scenes. Each one matters. Each one pays off.
for (let i = 0; i < 100; i++) {
  console.log(narrationStyle());
}
