// Clean Code: FizzBuzz with meaningful names and clear intent

function runFizzBuzz() {
  const START = 1;
  const END = 100;

  for (let number = START; number <= END; number++) {
    console.log(fizzBuzzFor(number));
  }
}

function fizzBuzzFor(number) {
  const isMultipleOfThree = number % 3 === 0;
  const isMultipleOfFive = number % 5 === 0;

  if (isMultipleOfThree && isMultipleOfFive) {
    return 'FizzBuzz';
  }

  if (isMultipleOfThree) {
    return 'Fizz';
  }

  if (isMultipleOfFive) {
    return 'Buzz';
  }

  return String(number);
}

runFizzBuzz();
