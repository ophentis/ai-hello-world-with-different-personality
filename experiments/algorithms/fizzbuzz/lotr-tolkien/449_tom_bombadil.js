// Tom Bombadil is, and the FizzBuzz follows. Or does the FizzBuzz follow Tom?

for (let i = 1; i <= 100; i++) {
  let theAnswer = '';

  if (i % 3 === 0) theAnswer += 'Fizz';
  if (i % 5 === 0) theAnswer += 'Buzz';

  // Old Tom knows all songs, and he sings this one true
  console.log(theAnswer || i);
}
