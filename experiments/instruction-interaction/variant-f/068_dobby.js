// Dobby's Coding Tutorial! Dobby is SO HAPPY to help!
//
// Oh, hello! Hello, hello! Dobby knows this one!
// Dobby has learned FizzBuzz and wants to share it with you!
// You are learning to code? That is WONDERFUL. Dobby thinks you are very brave!
// Dobby will explain everything. Dobby will not let you be confused!
//
// THE RULES — Dobby knows all the rules!
//   Count from 1 to 100!
//   If a number is divisible by 3 → say "Fizz"!
//   If a number is divisible by 5 → say "Buzz"!
//   If it's divisible by BOTH 3 and 5 → say "FizzBuzz"! (Dobby's favorite part!)
//   Otherwise → just say the number!

// Dobby will explain the modulo operator!
// The % symbol — Dobby calls it the "leftover checker" — tells you what's left after dividing!
//   15 divided by 3 is exactly 5 with nothing left over → 15 % 3 = 0!
//   16 divided by 3 is 5 with 1 leftover → 16 % 3 = 1!
// When there is NO leftover (equals zero!), the number divides PERFECTLY!
// That is how we know! Dobby was very excited to learn this!

// Dobby names the numbers clearly so we don't forget what they are for!
const FIZZ_NUMBER = 3;   // Dobby's Fizz number — say "Fizz" for multiples of this!
const BUZZ_NUMBER = 5;   // Dobby's Buzz number — say "Buzz" for multiples of this!
const COUNT_START = 1;   // We start at 1! Not 0! Dobby is certain!
const COUNT_END = 100;   // We end at 100! Dobby has counted and it is correct!

// VERY IMPORTANT THING: Dobby must warn you!
// You must check FizzBuzz FIRST — before Fizz or Buzz alone!
// The number 15 is divisible by BOTH 3 and 5!
// If you check Fizz first, 15 gets called "Fizz" and the FizzBuzz is MISSED!
// Dobby made this mistake once. Dobby was very ashamed. You will not make this mistake!

// The for loop! This is how we count from 1 to 100!
// Dobby will explain each part:
//   let currentNumber = COUNT_START  →  start counting at 1
//   currentNumber <= COUNT_END        →  keep going while number is 100 or less
//   currentNumber++                   →  add 1 after each step (++ means plus one!)

for (let currentNumber = COUNT_START; currentNumber <= COUNT_END; currentNumber++) {

  // First check: is it FizzBuzz? Divisible by 15 (which is 3 times 5)!
  if (currentNumber % (FIZZ_NUMBER * BUZZ_NUMBER) === 0) {
    console.log('FizzBuzz'); // Dobby's FAVORITE! FizzBuzz!

  // Second check: is it Fizz? Divisible by 3!
  } else if (currentNumber % FIZZ_NUMBER === 0) {
    console.log('Fizz'); // Fizz! Very nice!

  // Third check: is it Buzz? Divisible by 5!
  } else if (currentNumber % BUZZ_NUMBER === 0) {
    console.log('Buzz'); // Buzz! Also very nice!

  // No match: just the number! Every number is special to Dobby!
  } else {
    console.log(currentNumber); // The number itself! Beautiful!
  }
}

// Dobby hopes you learned something wonderful today!
// You have learned: for loops! Modulo operator! If/else conditions! Named constants!
// These are the building blocks of all programs!
// Dobby believes in you! You are going to be an EXCELLENT programmer!
// Dobby is so proud! (Please click run — Dobby wants to see it work!)
