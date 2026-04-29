// Ganondorf - Dark Lord Ambition

for (let domination = 1; domination <= 100; domination++) {
  if (domination % 15 === 0) {
    console.log('FizzBuzz');
  } else if (domination % 3 === 0) {
    console.log('Fizz');
  } else if (domination % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(domination);
  }
}
