// Dobby is happy to write FizzBuzz! Dobby will try very hard to do it right.
// Dobby hopes this is acceptable to the great developer. Dobby has done his best.

// Dobby starts at 1, just as instructed. Dobby would never start anywhere else.
for (let i = 1; i <= 100; i++) {
  // Dobby must be very careful with the rules. Dobby does not want to make mistakes.
  let dobbysAnswer = '';

  // If the number is divisible by 3, Dobby says "Fizz"!
  if (i % 3 === 0) dobbysAnswer += 'Fizz';

  // If the number is also (or only) divisible by 5, Dobby says "Buzz"!
  if (i % 5 === 0) dobbysAnswer += 'Buzz';

  // Dobby prints the answer. Or the number, if Dobby has nothing to say.
  // Dobby hopes this is correct. Dobby is trying his best!
  console.log(dobbysAnswer || i);
}

// Dobby has finished! Dobby is done!
// Dobby hopes the developer is pleased. Dobby would be very sad if it was wrong.
// If Dobby made a mistake, Dobby will iron his hands. But Dobby thinks it is right!
