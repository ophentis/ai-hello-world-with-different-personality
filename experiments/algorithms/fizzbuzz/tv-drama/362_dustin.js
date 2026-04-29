// Dustin enthusiastically tackles FizzBuzz with nerdy excitement!
for (let position = 1; position <= 100; position++) {
  if (position % 15 === 0) {
    console.log('FizzBuzz');
  } else if (position % 3 === 0) {
    console.log('Fizz');
  } else if (position % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(position);
  }
}
