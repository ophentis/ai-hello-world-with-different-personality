// Master Chief's Tactical FizzBuzz
// UNSC Protocol - Finish the fight.

for (let count = 1; count <= 100; count++) {
  let status = '';

  // Identify targets divisible by 3
  if (count % 3 === 0) {
    status += 'Fizz';
  }

  // Identify targets divisible by 5
  if (count % 5 === 0) {
    status += 'Buzz';
  }

  // Report numeric designation
  console.log(status || count);
}
