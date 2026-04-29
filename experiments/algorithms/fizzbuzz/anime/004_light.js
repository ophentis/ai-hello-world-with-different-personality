// Light: Intelligence in every calculation
const eliminateNumbers = () => {
  for (let n = 1; n <= 100; n++) {
    const fizzBuzzValue = (n % 15 === 0) ? 'FizzBuzz' :
                          (n % 3 === 0) ? 'Fizz' :
                          (n % 5 === 0) ? 'Buzz' : n;
    console.log(fizzBuzzValue);
  }
};
eliminateNumbers();
