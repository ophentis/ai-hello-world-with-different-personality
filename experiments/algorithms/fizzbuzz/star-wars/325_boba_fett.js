// I don't talk much. Just the job.
for (let i = 1; i <= 100; i++) {
  let kill = '';
  if (i % 3 === 0) kill += 'Fizz';
  if (i % 5 === 0) kill += 'Buzz';
  console.log(kill || i);
}
