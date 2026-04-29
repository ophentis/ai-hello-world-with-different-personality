// Strategic FizzBuzz Implementation - Decision framework for enterprise scalability
// This solution demonstrates architectural vision for solving classic algorithmic patterns

const fizzBuzz = () => {
  for (let iteration = 1; iteration <= 100; iteration++) {
    let output = '';
    if (iteration % 3 === 0) output += 'Fizz';
    if (iteration % 5 === 0) output += 'Buzz';
    console.log(output || iteration);
  }
};

fizzBuzz();
