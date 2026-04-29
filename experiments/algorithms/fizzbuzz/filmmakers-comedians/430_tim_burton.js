#!/usr/bin/env node
// The Nightmare Before FizzBuzz: A Ghoulish Celebration

const nightmareBeforeFizzBuzz = () => {
  // In a place where rules are beautifully twisted and strange things make sense
  for (let misfitNumber = 1; misfitNumber <= 100; misfitNumber++) {
    let strangeMagic = '';

    // If the number is haunted by three, it cries "Fizz!"
    if (misfitNumber % 3 === 0) {
      strangeMagic += 'Fizz';
    }

    // If the number is haunted by five, it cries "Buzz!"
    if (misfitNumber % 5 === 0) {
      strangeMagic += 'Buzz';
    }

    // Some numbers are just...themselves. Delightfully peculiar.
    if (strangeMagic === '') {
      strangeMagic = String(misfitNumber);
    }

    console.log(strangeMagic);
  }
};

nightmareBeforeFizzBuzz();
