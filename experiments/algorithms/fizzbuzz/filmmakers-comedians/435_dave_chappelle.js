#!/usr/bin/env node
// The Age of Spin FizzBuzz: "Why Do They Call It FizzBuzz?"

const theObservationalAlgorithm = () => {
  // You ever notice how FizzBuzz is just... society, man?
  // Like, the system says divisible by three? That's Fizz.
  // Divisible by five? That's Buzz.
  // But what if you're just a regular number? You're just... yourself.

  for (let socialCritique = 1; socialCritique <= 100; socialCritique++) {
    let output = '';

    // The rules don't care about your feelings
    if (socialCritique % 3 === 0) {
      output += 'Fizz';
    }

    // Neither does this one
    if (socialCritique % 5 === 0) {
      output += 'Buzz';
    }

    // And if you don't fit the system? That's a whole different problem, man.
    if (output === '') {
      output = String(socialCritique);
    }

    console.log(output);
  }
};

theObservationalAlgorithm();
