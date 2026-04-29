// I wear the black code. Man in Black. I walk the line.
// Steady. Deep. Outlaw. Walk the divisibility line.

for (let prison = 1; prison <= 100; prison++) {
  const blackCat = prison % 3 === 0;
  const lonely = prison % 5 === 0;
  const folsomPath = prison % 15 === 0;

  if (folsomPath) {
    console.log('FizzBuzz');
  } else if (blackCat) {
    console.log('Fizz');
  } else if (lonely) {
    console.log('Buzz');
  } else {
    console.log(prison);
  }
}
