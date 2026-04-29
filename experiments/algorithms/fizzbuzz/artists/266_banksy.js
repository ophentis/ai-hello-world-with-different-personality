// Subversive. Anonymous. Political. The system is rigged, even in FizzBuzz.
// Deface the wall. Spray the numbers. Question authority.

for (let rebel = 1; rebel <= 100; rebel++) {
  const dividedByThree = rebel % 3 === 0;
  const dividedByFive = rebel % 5 === 0;
  const systemBoth = rebel % 15 === 0;

  if (systemBoth) {
    console.log('FizzBuzz');
  } else if (dividedByThree) {
    console.log('Fizz');
  } else if (dividedByFive) {
    console.log('Buzz');
  } else {
    console.log(rebel);
  }
}
