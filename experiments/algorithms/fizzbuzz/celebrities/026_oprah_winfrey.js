// Oprah: Empowering everyone! YOU solve it! Everyone gets a solution!
// "And YOU get Fizz! And YOU get Buzz! And YOU get a number!"

const giveEveryoneTheirResult = (num) => {
  let result = '';
  if (num % 3 === 0) result += 'Fizz';
  if (num % 5 === 0) result += 'Buzz';
  return result || num;
};

for (let i = 1; i <= 100; i++) {
  console.log(giveEveryoneTheirResult(i));
}
