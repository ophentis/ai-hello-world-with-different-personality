// Anxious Developer: Defensive programming with extensive checks

function safeFizzBuzz() {
  if (typeof console === 'undefined' || console === null) {
    throw new Error('console is not available');
  }

  const START = 1;
  const END = 100;

  if (START === null || START === undefined) {
    throw new Error('START is null or undefined');
  }
  if (END === null || END === undefined) {
    throw new Error('END is null or undefined');
  }
  if (typeof START !== 'number' || typeof END !== 'number') {
    throw new Error('START and END must be numbers');
  }

  for (let i = START; i <= END; i++) {
    if (typeof i !== 'number') {
      throw new Error('Loop counter is not a number');
    }

    const fizzBuzzValue = getFizzBuzzValue(i);

    if (fizzBuzzValue === null || fizzBuzzValue === undefined) {
      throw new Error('FizzBuzz value is null or undefined');
    }

    console.log(fizzBuzzValue);
  }
}

function getFizzBuzzValue(num) {
  if (num === null || num === undefined) {
    throw new Error('Input to getFizzBuzzValue is null or undefined');
  }
  if (typeof num !== 'number') {
    throw new Error('Input to getFizzBuzzValue is not a number');
  }

  let result = '';

  if (num % 3 === 0) {
    result += 'Fizz';
  }
  if (num % 5 === 0) {
    result += 'Buzz';
  }

  if (result === '') {
    return String(num);
  }

  return result;
}

safeFizzBuzz();
