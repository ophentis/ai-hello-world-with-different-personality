// Deadline Developer: Just make it work

for (let i = 1; i <= 100; i++) {
  let out = '';
  if (i % 3 === 0) out += 'Fizz';
  if (i % 5 === 0) out += 'Buzz';
  // TODO: refactor this into a cleaner function
  console.log(out || i);
}
