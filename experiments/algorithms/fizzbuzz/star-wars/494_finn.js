// Finn escaped the First Order - now he tackles FizzBuzz with new freedom
for (let beat = 1; beat <= 100; beat++) {
  let defection = '';

  if (beat % 3 === 0) {
    defection += 'Fizz';
  }
  if (beat % 5 === 0) {
    defection += 'Buzz';
  }

  console.log(defection || beat);
}
