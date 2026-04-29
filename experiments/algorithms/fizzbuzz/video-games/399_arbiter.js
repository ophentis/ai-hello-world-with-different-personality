// Arbiter - Honor-Bound Elite

for (let honor = 1; honor <= 100; honor++) {
  if (honor % 15 === 0) {
    console.log('FizzBuzz');
  } else if (honor % 3 === 0) {
    console.log('Fizz');
  } else if (honor % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(honor);
  }
}
