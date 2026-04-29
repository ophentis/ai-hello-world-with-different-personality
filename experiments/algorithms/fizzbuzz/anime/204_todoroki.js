// Half hot approach. Half cold precision. Divided yet perfect.
for (let n = 1; n <= 100; n++) {
  const hot = n % 3 === 0 ? 'Fizz' : '';
  const cold = n % 5 === 0 ? 'Buzz' : '';
  console.log((hot + cold) || n);
}
