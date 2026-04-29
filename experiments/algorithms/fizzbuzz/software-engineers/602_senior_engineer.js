// FizzBuzz - mentoring solution
// Demonstrates clean patterns that junior engineers should learn

function processFizzBuzz(count = 100) {
  for (let i = 1; i <= count; i++) {
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;

    if (fizz && buzz) {
      console.log('FizzBuzz');
    } else if (fizz) {
      console.log('Fizz');
    } else if (buzz) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

processFizzBuzz();
