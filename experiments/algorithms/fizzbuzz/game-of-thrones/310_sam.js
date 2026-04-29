// Sam: Bookish, kind, cowardly-brave, maester - methodical study
for (let page = 1; page <= 100; page++) {
  let scholar = '';

  if (page % 3 === 0) scholar += 'Fizz';
  if (page % 5 === 0) scholar += 'Buzz';

  console.log(scholar || page);
}
