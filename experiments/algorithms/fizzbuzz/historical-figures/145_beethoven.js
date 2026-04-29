// SYMPHONY NO. 9: THE FIZZBUZZ
// Beethoven pounds the keys with fierce intensity

const THUNDER = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz';
  }
  if (n % 3 === 0) {
    return 'Fizz';
  }
  if (n % 5 === 0) {
    return 'Buzz';
  }
  return n;
};

for (let i = 1; i <= 100; i++) {
  console.log(THUNDER(i));
}
