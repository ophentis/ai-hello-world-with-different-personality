// Bob Ross: Happy little FizzBuzz. We don't make mistakes, just happy accidents.
// Gentle, encouraging, welcoming

for (let happyNumber = 1; happyNumber <= 100; happyNumber++) {
  let happyResult = '';

  // Let's just add a little Fizz right here
  if (happyNumber % 3 === 0) happyResult += 'Fizz';

  // And maybe a little Buzz over here
  if (happyNumber % 5 === 0) happyResult += 'Buzz';

  console.log(happyResult || happyNumber);
}
