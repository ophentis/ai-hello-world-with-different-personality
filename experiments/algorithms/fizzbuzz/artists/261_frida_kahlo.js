// Pain is the canvas; each number a brushstroke of my own suffering and joy
// The thorn and the flower; I paint my own wounds

for (let herida = 1; herida <= 100; herida++) {
  const painOfThree = herida % 3 === 0;
  const joyOfFive = herida % 5 === 0;

  if (painOfThree && joyOfFive) {
    console.log('FizzBuzz');
  } else if (painOfThree) {
    console.log('Fizz');
  } else if (joyOfFive) {
    console.log('Buzz');
  } else {
    console.log(herida);
  }
}
