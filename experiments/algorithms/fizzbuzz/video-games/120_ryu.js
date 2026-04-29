// HADOUKEN! - A disciplined fighter's approach
for (let i = 1; i <= 100; i++) {
  let stance = '';
  if (i % 15 === 0) {
    stance = 'FizzBuzz';
  } else if (i % 3 === 0) {
    stance = 'Fizz';
  } else if (i % 5 === 0) {
    stance = 'Buzz';
  } else {
    stance = i.toString();
  }
  console.log(stance);
}
