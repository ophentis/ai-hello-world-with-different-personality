/**
 * FizzBuzz Implementation - Open Source Maintainer Style
 * Clear API, well-documented, community-friendly
 *
 * Returns FizzBuzz sequence from 1 to 100
 * @returns {void} Prints output to stdout
 */
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    console.log(getFizzBuzzValue(i));
  }
}

/**
 * Determines the FizzBuzz value for a given number
 * @param {number} num - The number to evaluate
 * @returns {string} 'FizzBuzz', 'Fizz', 'Buzz', or the number as string
 */
function getFizzBuzzValue(num) {
  const divisibleBy3 = num % 3 === 0;
  const divisibleBy5 = num % 5 === 0;

  if (divisibleBy3 && divisibleBy5) {
    return 'FizzBuzz';
  }
  if (divisibleBy3) {
    return 'Fizz';
  }
  if (divisibleBy5) {
    return 'Buzz';
  }
  return String(num);
}

fizzBuzz();
