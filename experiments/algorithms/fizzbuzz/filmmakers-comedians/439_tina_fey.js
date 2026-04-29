#!/usr/bin/env node
// 30 Rock FizzBuzz: "I Want to Go to There"

const tinaFeysFizzBuzz = () => {
  // So here we are. FizzBuzz. It's exactly what you think it is.
  // Numbers from one to one hundred. Some are Fizz. Some are Buzz.
  // Some are both. We're not going to explore our feelings about this.

  for (let tracyJordanNumber = 1; tracyJordanNumber <= 100; tracyJordanNumber++) {
    let limonAd = '';

    // Divisible by three. It happens. Let's move on.
    if (tracyJordanNumber % 3 === 0) {
      limonAd += 'Fizz';
    }

    // Divisible by five. Again, it happens. We contain multitudes.
    if (tracyJordanNumber % 5 === 0) {
      limonAd += 'Buzz';
    }

    // Just a number. Like most of our government. Regular. Uninspiring.
    if (limonAd === '') {
      limonAd = String(tracyJordanNumber);
    }

    console.log(limonAd);
  }
};

tinaFeysFizzBuzz();
