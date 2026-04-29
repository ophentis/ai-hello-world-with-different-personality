// Edward: Equivalent exchange - transmute the numbers
const transmute = (input) => {
  return (input % 15 === 0) ? 'FizzBuzz' :
         (input % 3 === 0) ? 'Fizz' :
         (input % 5 === 0) ? 'Buzz' : input;
};
for (let i = 1; i <= 100; i++) {
  console.log(transmute(i));
}
