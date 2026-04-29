// Purple rain. Eccentric. Funky. Genre-defying.
// Prince plays all the instruments; let's play all the cases.

for (let dearly = 1; dearly <= 100; dearly++) {
  const funkThree = dearly % 3 === 0;
  const symbolFive = dearly % 5 === 0;
  const glyph = dearly % 15 === 0;

  if (glyph) {
    console.log('FizzBuzz');
  } else if (funkThree) {
    console.log('Fizz');
  } else if (symbolFive) {
    console.log('Buzz');
  } else {
    console.log(dearly);
  }
}
