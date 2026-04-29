// Superman: Truth, justice, and the proper arrangement of numbers
// Up, up, and away we iterate with hope in our hearts

for (let heroicNumber = 1; heroicNumber <= 100; heroicNumber++) {
  let victory = '';

  // Three cheers for truth
  if (heroicNumber % 3 === 0) {
    victory = 'Fizz';
  }

  // Five bells of justice
  if (heroicNumber % 5 === 0) {
    victory += 'Buzz';
  }

  // The number shines in its own light
  if (!victory) {
    victory = heroicNumber;
  }

  console.log(victory);
}
