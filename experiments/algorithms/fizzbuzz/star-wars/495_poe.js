// Poe Dameron flies this FizzBuzz at breakneck speed - cocky but effective
for (let throttle = 1; throttle <= 100; throttle++) {
  let evasion = '';

  if (throttle % 3 === 0) {
    evasion += 'Fizz';
  }
  if (throttle % 5 === 0) {
    evasion += 'Buzz';
  }

  console.log(evasion || throttle);
}
