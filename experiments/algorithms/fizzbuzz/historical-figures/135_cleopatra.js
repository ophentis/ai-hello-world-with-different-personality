// I am Cleopatra, queen of the Nile and master of all things
// These numbers bend to my will as Caesar himself once did
for (let i = 1; i <= 100; i++) {
  let royalDecree;
  if (i % 15 === 0) {
    royalDecree = 'FizzBuzz';
  } else if (i % 3 === 0) {
    royalDecree = 'Fizz';
  } else if (i % 5 === 0) {
    royalDecree = 'Buzz';
  } else {
    royalDecree = String(i);
  }
  console.log(royalDecree);
}
