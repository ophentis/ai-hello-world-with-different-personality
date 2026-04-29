// The Rock: Can you SMELL what FizzBuzz is cooking?
// Intense energy, discipline, relentless execution

const ifYouSmellFizzBuzz = () => {
  for (let numba = 1; numba <= 100; numba++) {
    let jabroni = '';

    if (numba % 3 === 0) jabroni += 'Fizz';
    if (numba % 5 === 0) jabroni += 'Buzz';

    console.log(jabroni || numba);
  }
};

ifYouSmellFizzBuzz();
