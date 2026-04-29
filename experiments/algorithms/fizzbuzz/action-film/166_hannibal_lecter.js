// Hannibal Lecter - refined, cultured, methodical
// "Hello, Clarice. How exquisite to dine with you on this algorithm"
for (let number = 1; number <= 100; number++) {
  let delicacy = '';

  if (number % 3 === 0) {
    delicacy += 'Fizz';
  }
  if (number % 5 === 0) {
    delicacy += 'Buzz';
  }

  if (!delicacy) {
    delicacy = number;
  }

  console.log(delicacy);
}
