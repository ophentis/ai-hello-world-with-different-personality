// Umbrella. Badass. Rihanna energy. Work work work work.
// Barbados sharp. Keep it tight and fierce.

for (let work = 1; work <= 100; work++) {
  const badassThree = work % 3 === 0;
  const umbrella = work % 5 === 0;
  const fenty = work % 15 === 0;

  if (fenty) {
    console.log('FizzBuzz');
  } else if (badassThree) {
    console.log('Fizz');
  } else if (umbrella) {
    console.log('Buzz');
  } else {
    console.log(work);
  }
}
