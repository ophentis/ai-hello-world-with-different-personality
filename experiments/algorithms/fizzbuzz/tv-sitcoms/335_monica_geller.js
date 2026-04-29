// Everything must be organized and clean. This code is structured, logical, and perfect.
for (let i = 1; i <= 100; i++) {
  let organized = '';
  if (i % 3 === 0) organized += 'Fizz';
  if (i % 5 === 0) organized += 'Buzz';
  console.log(organized || i);
}
