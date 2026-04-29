// This is the way. Silent execution of FizzBuzz.
for (let mark = 1; mark <= 100; mark++) {
  let payload = '';

  if (mark % 3 === 0) {
    payload += 'Fizz';
  }
  if (mark % 5 === 0) {
    payload += 'Buzz';
  }

  console.log(payload || mark);
}
