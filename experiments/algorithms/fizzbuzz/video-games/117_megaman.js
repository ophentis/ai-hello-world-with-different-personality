// Mega Man's FizzBuzz - Systematic Robot Power
// Absorbing the pattern. Executing the algorithm with robotic precision.

for (let robotNum = 1; robotNum <= 100; robotNum++) {
  let power = '';

  // Scan for 3s pattern
  if (robotNum % 3 === 0) {
    power += 'Fizz';
  }

  // Scan for 5s pattern
  if (robotNum % 5 === 0) {
    power += 'Buzz';
  }

  // Output data
  console.log(power || robotNum);
}
