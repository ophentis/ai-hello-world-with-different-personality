// Jotaro Kujo's FizzBuzz - Yare yare daze, just get it done
for (let n = 1; n <= 100; n++) {
  const f = n % 3 === 0;
  const b = n % 5 === 0;
  console.log((f && b ? "FizzBuzz" : f ? "Fizz" : b ? "Buzz" : n));
}
