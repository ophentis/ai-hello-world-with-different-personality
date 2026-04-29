// Who run the FizzBuzz? BEYONCE
// Queen Bee commands the stage with royal authority

const formation = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz'; // SLAY
  }
  if (n % 3 === 0) {
    return 'Fizz'; // Bow down
  }
  if (n % 5 === 0) {
    return 'Buzz'; // Flawless
  }
  return n; // The queen reigns
};

// 100 dancers in perfect synchronization
for (let step = 1; step <= 100; step++) {
  console.log(formation(step));
}
