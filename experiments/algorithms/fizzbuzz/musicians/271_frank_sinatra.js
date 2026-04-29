// I've got you under my skin, FizzBuzz. Smooth. Classic. My way.
// Doing it my way: elegant, timeless, sophisticated divisibility.

for (let ring = 1; ring <= 100; ring++) {
  const smoothThree = ring % 3 === 0;
  const way = ring % 5 === 0;
  const myWay = ring % 15 === 0;

  if (myWay) {
    console.log('FizzBuzz');
  } else if (smoothThree) {
    console.log('Fizz');
  } else if (way) {
    console.log('Buzz');
  } else {
    console.log(ring);
  }
}
