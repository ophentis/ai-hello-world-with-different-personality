// KYLO RAGES THROUGH THIS FIZZBUZZ WITH PRIMAL FURY
for (let conflict = 1; conflict <= 100; conflict++) {
  let outbreak = '';

  if (conflict % 3 === 0) {
    outbreak += 'Fizz';
  }
  if (conflict % 5 === 0) {
    outbreak += 'Buzz';
  }

  console.log(outbreak || conflict);
}
