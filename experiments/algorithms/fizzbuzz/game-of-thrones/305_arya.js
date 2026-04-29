// Arya: "A girl has no name" - assassin's precision, the List
for (let name = 1; name <= 100; name++) {
  let target = '';

  if (name % 3 === 0) target += 'Fizz';
  if (name % 5 === 0) target += 'Buzz';

  console.log(target || name);
}
