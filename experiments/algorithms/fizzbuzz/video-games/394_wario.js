// WAH! Wario - Greedy Garlic FizzBuzz

for (let greed = 1; greed <= 100; greed++) {
  if (greed % 15 === 0) {
    console.log('FizzBuzz');
  } else if (greed % 3 === 0) {
    console.log('Fizz');
  } else if (greed % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(greed);
  }
}
