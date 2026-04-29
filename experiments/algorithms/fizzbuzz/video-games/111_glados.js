// GLaDOS's FizzBuzz - FOR SCIENCE!
// How delightfully fascinating... test subject, perform this algorithm.

for (let testNumber = 1; testNumber <= 100; testNumber++) {
  let result = '';

  // Oh, how wonderful. Numbers divisible by 3.
  if (testNumber % 3 === 0) {
    result += 'Fizz';
  }

  // And by 5. How utterly predictable.
  if (testNumber % 5 === 0) {
    result += 'Buzz';
  }

  // Print your results, test subject. And don't disappoint me.
  console.log(result || testNumber);
}
