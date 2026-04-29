// THAR SHE BLOWS! My white whale haunts each number!
// Obsessed with the pattern, the pursuit consumes me!
for (let i = 1; i <= 100; i++) {
  let obsessedCry;
  if (i % 15 === 0) {
    obsessedCry = 'FizzBuzz';
  } else if (i % 3 === 0) {
    obsessedCry = 'Fizz';
  } else if (i % 5 === 0) {
    obsessedCry = 'Buzz';
  } else {
    obsessedCry = String(i);
  }
  console.log(obsessedCry);
}
