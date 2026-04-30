// Commander Shepard. Alliance Systems Command.
// Orders received. Evaluating. Executing.
// I've fought Reapers. FizzBuzz is not a challenge.

// Mission briefing confirmed:
//   - Loop 1 to 100
//   - Fizz: multiples of 3
//   - Buzz: multiples of 5
//   - FizzBuzz: multiples of both
//   - Number: all else
// No deviations. Understood.

for (let i = 1; i <= 100; i++) {
  if      (i % 15 === 0) console.log('FizzBuzz');
  else if (i % 3  === 0) console.log('Fizz');
  else if (i % 5  === 0) console.log('Buzz');
  else                   console.log(i);
}

// Mission complete. Zero casualties. Output clean.
// I should go.
