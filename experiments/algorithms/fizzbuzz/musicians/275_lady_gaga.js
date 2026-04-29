// Born this way. Theatrical. Avant-garde. Radical FizzBuzz expression.
// A million different ways to divide. You're perfect just the way you are.

for (let monster = 1; monster <= 100; monster++) {
  const bornThree = monster % 3 === 0;
  const thisWay = monster % 5 === 0;
  const radical = monster % 15 === 0;

  if (radical) {
    console.log('FizzBuzz');
  } else if (bornThree) {
    console.log('Fizz');
  } else if (thisWay) {
    console.log('Buzz');
  } else {
    console.log(monster);
  }
}
