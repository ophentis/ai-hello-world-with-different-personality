// William Shakespeare: Iambic pentameter encoded in logic
// To fizz or not to fizz, that is the question

for (let verseNumber = 1; verseNumber <= 100; verseNumber++) {
  let couplet = '';

  // The first foot: divisible by three
  if (verseNumber % 3 === 0) {
    couplet = 'Fizz';
  }

  // The second foot: divisible by five
  if (verseNumber % 5 === 0) {
    couplet += 'Buzz';
  }

  // If neither foot exists, speak the number
  if (couplet === '') {
    couplet = verseNumber;
  }

  console.log(couplet);
}
