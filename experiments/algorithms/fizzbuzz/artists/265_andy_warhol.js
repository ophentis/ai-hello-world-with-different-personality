// Repetition. Repetition. Repetition. Factory-produced art in numbered form.
// 15 minutes of FizzBuzz. Then another 15. And another. And another.

for (let repetition = 1; repetition <= 100; repetition++) {
  const divisibleByThree = repetition % 3 === 0;
  const divisibleByFive = repetition % 5 === 0;

  if (divisibleByThree && divisibleByFive) {
    console.log('FizzBuzz');
  } else if (divisibleByThree) {
    console.log('Fizz');
  } else if (divisibleByFive) {
    console.log('Buzz');
  } else {
    console.log(repetition);
  }
}
