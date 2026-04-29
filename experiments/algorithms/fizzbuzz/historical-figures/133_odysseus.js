// Through cunning and long wanderings, I reveal this pattern
// The Trojan horse of wit hides algorithm within numbers
for (let i = 1; i <= 100; i++) {
  let cunningTrick;
  if (i % 15 === 0) {
    cunningTrick = 'FizzBuzz';
  } else if (i % 3 === 0) {
    cunningTrick = 'Fizz';
  } else if (i % 5 === 0) {
    cunningTrick = 'Buzz';
  } else {
    cunningTrick = String(i);
  }
  console.log(cunningTrick);
}
