// Vegeta: Prince demands absolute order
const royalCommand = () => {
  for (let position = 1; position <= 100; position++) {
    let command = '';
    if (position % 3 === 0) command += 'Fizz';
    if (position % 5 === 0) command += 'Buzz';
    console.log(command || position);
  }
};
royalCommand();
