// Joel approaches FizzBuzz with pragmatic gruffness
for (let pragmaticNum = 1; pragmaticNum <= 100; pragmaticNum++) {
  if (pragmaticNum % 15 === 0) {
    console.log('FizzBuzz');
  } else if (pragmaticNum % 3 === 0) {
    console.log('Fizz');
  } else if (pragmaticNum % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(pragmaticNum);
  }
}
