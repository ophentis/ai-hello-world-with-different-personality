// We were on a BREAK! But seriously, if you look at this algorithmically, it's quite elegant.
for (let i = 1; i <= 100; i++) {
  let paleontological = '';
  if (i % 3 === 0) paleontological += 'Fizz';
  if (i % 5 === 0) paleontological += 'Buzz';
  console.log(paleontological || i);
}
