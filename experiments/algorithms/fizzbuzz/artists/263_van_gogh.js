// Swirling through madness and beauty, each number a brushstroke in the starry night
// The passion burns; divisibility becomes the torrent, the vortex

for (let star = 1; star <= 100; star++) {
  const vortexThree = star % 3 === 0;
  const swirlfFive = star % 5 === 0;
  const whirlwindBoth = star % 15 === 0;

  if (whirlwindBoth) {
    console.log('FizzBuzz');
  } else if (vortexThree) {
    console.log('Fizz');
  } else if (swirlfFive) {
    console.log('Buzz');
  } else {
    console.log(star);
  }
}
