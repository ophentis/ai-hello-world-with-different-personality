// We will, we will FIZZBUZZ you!
// Freddie Mercury delivers the ultimate show

const isAChampion = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz'; // DAHLING, it's SPECTACULAR!
  }
  if (n % 3 === 0) {
    return 'Fizz'; // The show must go on!
  }
  if (n % 5 === 0) {
    return 'Buzz'; // Don't stop me now!
  }
  return n; // The greatest number!
};

// Thunderbolt and lightning, very very frightening me
for (let i = 1; i <= 100; i++) {
  console.log(isAChampion(i));
}
