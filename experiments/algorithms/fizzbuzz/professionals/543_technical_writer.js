// Technical Writer: Well-documented, structured approach
/**
 * FizzBuzz Algorithm
 *
 * INPUT: Range 1 to 100
 * OUTPUT: Each number transformed according to divisibility rules
 *
 * RULES:
 * - Divisible by 3: "Fizz"
 * - Divisible by 5: "Buzz"
 * - Divisible by both: "FizzBuzz"
 * - Otherwise: number itself
 */

function fizzBuzz() {
  // Iterate through each number in the range
  for (let number = 1; number <= 100; number++) {
    let result = generateFizzBuzzOutput(number);
    console.log(result);
  }
}

/**
 * Generate output for a single number
 * @param {number} num - The number to process
 * @returns {string} The transformed output
 */
function generateFizzBuzzOutput(num) {
  const divisibleBy3 = num % 3 === 0;
  const divisibleBy5 = num % 5 === 0;

  if (divisibleBy3 && divisibleBy5) {
    return "FizzBuzz";
  } else if (divisibleBy3) {
    return "Fizz";
  } else if (divisibleBy5) {
    return "Buzz";
  } else {
    return num.toString();
  }
}

fizzBuzz();
