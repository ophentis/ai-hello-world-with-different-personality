// Tomorrow is another day, and there will be time enough for counting.
// After all, I am a woman of the South, and I shall manage these numbers.
for (let i = 1; i <= 100; i++) {
  let tomorrow;
  if (i % 15 === 0) {
    tomorrow = 'FizzBuzz';
  } else if (i % 3 === 0) {
    tomorrow = 'Fizz';
  } else if (i % 5 === 0) {
    tomorrow = 'Buzz';
  } else {
    tomorrow = String(i);
  }
  console.log(tomorrow);
}
