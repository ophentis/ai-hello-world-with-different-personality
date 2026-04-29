// God is dead; so too are conventional divisibility rules
// Nietzsche embraces the will to power through FizzBuzz

const willToPower = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz'; // The overman transcends
  }
  if (n % 3 === 0) {
    return 'Fizz'; // Embrace the chaos of three
  }
  if (n % 5 === 0) {
    return 'Buzz'; // Conquer the tyranny of five
  }
  return n; // Become who you are
};

// A hundred declarations of independence
for (let i = 1; i <= 100; i++) {
  console.log(willToPower(i));
}
