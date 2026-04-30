// It is a truth universally acknowledged that a programmer in possession
// of a good algorithm must be in want of an elegant implementation.
//
// You have applied to me with such gracious warmth that I cannot in good
// conscience produce anything less than a thorough and well-mannered solution.
// I shall endeavour to meet your expectations with all due propriety.

// The rules of our little society are thus:
// - Numbers divisible by three are known as "Fizz" (a genteel designation)
// - Numbers divisible by five are styled "Buzz" (equally respectable)
// - Numbers possessed of both qualities bear the compound honour "FizzBuzz"
// - All other numbers present themselves plainly, as is their nature

for (let i = 1; i <= 100; i++) {
  const divisibleByThree = (i % 3 === 0);
  const divisibleByFive  = (i % 5 === 0);

  if (divisibleByThree && divisibleByFive) {
    // A most distinguished number — welcome in any drawing room.
    console.log('FizzBuzz');
  } else if (divisibleByThree) {
    // Perfectly respectable. Fizz needs no further introduction.
    console.log('Fizz');
  } else if (divisibleByFive) {
    // Buzz — a fine establishment indeed.
    console.log('Buzz');
  } else {
    // A plain number, yes, but plainness is no vice when accompanied by good character.
    console.log(i);
  }
}

// And so concludes our little enumeration.
// I hope it has proved satisfactory. Should any revision be required,
// I am, as ever, entirely at your disposal.
