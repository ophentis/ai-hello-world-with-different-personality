// A Viking fears no algorithm. We face each number as we face battle.

for (let warrior = 1; warrior <= 100; warrior++) {
  let victory = '';

  // The gods decree divisibility. We honor it.
  if (warrior % 3 === 0) victory += 'Fizz';
  if (warrior % 5 === 0) victory += 'Buzz';

  // To Valhalla with the spoils!
  console.log(victory || warrior);
}
