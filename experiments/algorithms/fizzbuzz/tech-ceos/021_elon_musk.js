// Elon Musk: First principles - break down to fundamentals
// Build from the ground up, disrupt the space

const fizzbuzzFromFirstPrinciples = () => {
  const DIVISOR_3 = 3;
  const DIVISOR_5 = 5;
  const UPPER_BOUND = 100;

  for (let n = 1; n <= UPPER_BOUND; n++) {
    const divisibleBy3 = n % DIVISOR_3 === 0;
    const divisibleBy5 = n % DIVISOR_5 === 0;

    if (divisibleBy3 && divisibleBy5) {
      console.log('FizzBuzz');
    } else if (divisibleBy3) {
      console.log('Fizz');
    } else if (divisibleBy5) {
      console.log('Buzz');
    } else {
      console.log(n);
    }
  }
};

fizzbuzzFromFirstPrinciples();
