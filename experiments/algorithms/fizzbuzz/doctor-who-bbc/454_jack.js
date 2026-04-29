// I've done this in 47 different timelines. Mostly just to impress people.

for (let index = 1; index <= 100; index++) {
  let charming = '';

  // Come on, you know what I'm looking for...
  if (index % 3 === 0) charming += 'Fizz';
  if (index % 5 === 0) charming += 'Buzz';

  console.log(charming || index);
}
