// Sonic's FizzBuzz - GOTTA GO FAST!
// No time for slow algorithms! Speed through this!

for (let i = 1; i <= 100; i++) {
  let turbo = '';

  // Can't slow down for 3s!
  if (i % 3 === 0) {
    turbo += 'Fizz';
  }

  // Zoom past 5s!
  if (i % 5 === 0) {
    turbo += 'Buzz';
  }

  // GOTTA GO FAST!!!
  console.log(turbo || i);
}
