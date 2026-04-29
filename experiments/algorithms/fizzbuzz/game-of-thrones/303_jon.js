// Jon: "You know nothing" - honorable, straightforward, brooding
for (let watch = 1; watch <= 100; watch++) {
  if (watch % 15 === 0) {
    console.log('FizzBuzz');
  } else if (watch % 3 === 0) {
    console.log('Fizz');
  } else if (watch % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(watch);
  }
}
