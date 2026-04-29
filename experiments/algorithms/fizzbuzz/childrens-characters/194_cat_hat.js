// CAT IN THE HAT: Oh, what fun! What glee! This amazing sequence, you see!
for (let thing = 1; thing <= 100; thing++) {
  let rhyme = '';
  if (thing % 3 === 0) rhyme += 'Fizz';
  if (thing % 5 === 0) rhyme += 'Buzz';
  console.log(rhyme || thing);
}
