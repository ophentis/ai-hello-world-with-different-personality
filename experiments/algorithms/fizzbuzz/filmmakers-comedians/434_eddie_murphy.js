#!/usr/bin/env node
// Beverly Hills Cop FizzBuzz: "Axel F" (In Your Head, Right Now)

const axelDoesNumbers = () => {
  // Yo, check it out. So you got these numbers, right? And some of 'em?
  // Some of 'em got to be Fizz. Fizz! That's divisible by three, baby!
  // Then you got your Buzz numbers. Five! It's all good in the hood!

  for (let number = 1; number <= 100; number++) {
    let output = '';

    // Now listen, if this number goes into three?
    if (number % 3 === 0) {
      output += 'Fizz';
    }

    // And if it ALSO goes into five? Double action! Boom!
    if (number % 5 === 0) {
      output += 'Buzz';
    }

    // Otherwise, it's just chillin' as itself. That's cool too!
    if (output === '') {
      output = String(number);
    }

    console.log(output);
  }
};

// Now THAT'S what I'm talkin' about!
axelDoesNumbers();
