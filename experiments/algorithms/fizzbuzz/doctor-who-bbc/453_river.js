// Spoilers! I already know what output this produces. I've seen it backwards.

for (let n = 1; n <= 100; n++) {
  let timeyWimey = '';

  if (n % 3 === 0) timeyWimey += 'Fizz';
  if (n % 5 === 0) timeyWimey += 'Buzz';

  // I could tell you what comes next, but that would be telling
  console.log(timeyWimey || n);
}
