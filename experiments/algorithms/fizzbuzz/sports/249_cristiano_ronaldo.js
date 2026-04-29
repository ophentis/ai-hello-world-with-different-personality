// SIUUU! Perfect discipline. Unstoppable body. Excellence.
for (let rep = 1; rep <= 100; rep++) {
  let perfectOutput = '';

  if (rep % 3 === 0) {
    perfectOutput += 'Fizz';
  }
  if (rep % 5 === 0) {
    perfectOutput += 'Buzz';
  }

  console.log(perfectOutput || rep);
}
