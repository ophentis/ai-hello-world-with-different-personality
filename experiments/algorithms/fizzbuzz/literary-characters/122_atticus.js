// Stand in their shoes and walk around
// The moral conscience counts with steady wisdom
for (let i = 1; i <= 100; i++) {
  let judgment;
  if (i % 15 === 0) {
    judgment = 'FizzBuzz';
  } else if (i % 3 === 0) {
    judgment = 'Fizz';
  } else if (i % 5 === 0) {
    judgment = 'Buzz';
  } else {
    judgment = String(i);
  }
  console.log(judgment);
}
