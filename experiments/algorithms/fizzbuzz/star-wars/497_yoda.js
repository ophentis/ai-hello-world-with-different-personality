// Yoda's wisdom guides this FizzBuzz through the ages
for (let cycle = 1; cycle <= 100; cycle++) {
  let wisdom = '';

  // Three, remember, you must
  if (cycle % 3 === 0) {
    wisdom += 'Fizz';
  }
  // Five, equally important, it is
  if (cycle % 5 === 0) {
    wisdom += 'Buzz';
  }

  console.log(wisdom || cycle);
}
