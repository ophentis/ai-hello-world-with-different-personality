// A mathematical composition for the Analytical Engine
// Ada Lovelace examines divisibility as logical operations

const analyzePattern = (index) => {
  const divisibleByThree = index % 3 === 0;
  const divisibleByFive = index % 5 === 0;

  if (divisibleByThree && divisibleByFive) {
    return 'FizzBuzz';
  } else if (divisibleByThree) {
    return 'Fizz';
  } else if (divisibleByFive) {
    return 'Buzz';
  }
  return index;
};

for (let step = 1; step <= 100; step++) {
  console.log(analyzePattern(step));
}
