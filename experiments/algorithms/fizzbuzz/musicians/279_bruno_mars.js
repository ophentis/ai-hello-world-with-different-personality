// 24K Magic. Retro showman. Funky. Smooth like silk.
// Uptown special. Every number gets the spotlight it deserves.

for (let showtime = 1; showtime <= 100; showtime++) {
  const retroThree = showtime % 3 === 0;
  const funkFive = showtime % 5 === 0;
  const magicBoth = showtime % 15 === 0;

  if (magicBoth) {
    console.log('FizzBuzz');
  } else if (retroThree) {
    console.log('Fizz');
  } else if (funkFive) {
    console.log('Buzz');
  } else {
    console.log(showtime);
  }
}
