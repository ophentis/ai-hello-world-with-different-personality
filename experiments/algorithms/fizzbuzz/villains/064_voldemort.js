// Avada Kedavra! The FizzBuzz curse is cast
// None shall escape the power of the dark algorithm

for (let i = 1; i <= 100; i++) {
  const curse = '';
  const fizzPower = (i % 3 === 0) ? 'Fizz' : '';
  const buzzPower = (i % 5 === 0) ? 'Buzz' : '';
  console.log(fizzPower + buzzPower || i);
}
