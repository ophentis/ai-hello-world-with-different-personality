// Yoshi - Loyal and True

for (let joy = 1; joy <= 100; joy++) {
  if (joy % 15 === 0) {
    console.log('FizzBuzz');
  } else if (joy % 3 === 0) {
    console.log('Fizz');
  } else if (joy % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(joy);
  }
}
