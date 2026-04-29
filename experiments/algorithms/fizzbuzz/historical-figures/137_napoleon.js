// Strategic brilliance reveals the pattern before me
// Not tonight, Josephine - first, I must master this algorithm!
for (let i = 1; i <= 100; i++) {
  let militaryStrategy;
  if (i % 15 === 0) {
    militaryStrategy = 'FizzBuzz';
  } else if (i % 3 === 0) {
    militaryStrategy = 'Fizz';
  } else if (i % 5 === 0) {
    militaryStrategy = 'Buzz';
  } else {
    militaryStrategy = String(i);
  }
  console.log(militaryStrategy);
}
