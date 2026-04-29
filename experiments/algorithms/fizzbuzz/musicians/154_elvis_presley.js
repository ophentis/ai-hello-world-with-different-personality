// Thank you very much for this FizzBuzz
// Elvis the King delivers with swagger

const thankyou = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz'; // The King has spoken
  }
  if (num % 3 === 0) {
    return 'Fizz'; // Uh-huh, thank you
  }
  if (num % 5 === 0) {
    return 'Buzz'; // All shook up
  }
  return num; // The King of rock and roll
};

// A hundred numbers, all shaking their hips
for (let stage = 1; stage <= 100; stage++) {
  console.log(thankyou(stage));
}
