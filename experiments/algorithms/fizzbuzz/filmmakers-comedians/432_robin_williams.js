#!/usr/bin/env node
// Aladdin FizzBuzz: Ten Thousand Years Will Give You SUCH a Crick in the Neck!

const theWonderfulMindOfFizzBuzz = () => {
  // Okay okay okay, so you got numbers, right? ONE HUNDRED of them!
  // And some of them, SOME of them are gonna be divisible by three!
  // That's FIZZ. You gotta say FIZZ. Say it with me: FIZZ!

  for (let magicalNumber = 1; magicalNumber <= 100; magicalNumber++) {
    let theAnswer = '';

    // Is it divisible by three? YES? FIZZ FIZZ FIZZ FIZZ!
    if (magicalNumber % 3 === 0) {
      theAnswer += 'Fizz';
    }

    // Now divisible by five? BUZZ BUZZ BUZZ! I'm a robot! Bzzzzzzzzt!
    if (magicalNumber % 5 === 0) {
      theAnswer += 'Buzz';
    }

    // Nobody? Just a number? Well then. There you go!
    if (theAnswer === '') {
      theAnswer = String(magicalNumber);
    }

    console.log(theAnswer);
  }
};

// Ten thousand years will give you SUCH a crick in the neck!
theWonderfulMindOfFizzBuzz();
