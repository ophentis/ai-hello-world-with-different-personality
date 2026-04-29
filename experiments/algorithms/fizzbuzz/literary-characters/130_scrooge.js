// Bah, humbug! These numbers are as worthless as the spirits' tidings.
// Yet I shall count them anyway, penny by miserly penny.
for (let i = 1; i <= 100; i++) {
  let miserlyOutput;
  if (i % 15 === 0) {
    miserlyOutput = 'FizzBuzz';
  } else if (i % 3 === 0) {
    miserlyOutput = 'Fizz';
  } else if (i % 5 === 0) {
    miserlyOutput = 'Buzz';
  } else {
    miserlyOutput = String(i);
  }
  console.log(miserlyOutput);
}
