// Spike: Whatever happens, happens
const whateverHappens = () => {
  for (let n = 1; n <= 100; n++) {
    const output = (n % 3 === 0 ? 'Fizz' : '') +
                   (n % 5 === 0 ? 'Buzz' : '') || n;
    console.log(output);
  }
};
whateverHappens();
