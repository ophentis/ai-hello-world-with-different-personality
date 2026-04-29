// Veni, vidi, vici! I came, I saw, I counted the numbers!
// The ambition of Rome burns through each iteration
for (let i = 1; i <= 100; i++) {
  let conquest;
  if (i % 15 === 0) {
    conquest = 'FizzBuzz';
  } else if (i % 3 === 0) {
    conquest = 'Fizz';
  } else if (i % 5 === 0) {
    conquest = 'Buzz';
  } else {
    conquest = String(i);
  }
  console.log(conquest);
}
