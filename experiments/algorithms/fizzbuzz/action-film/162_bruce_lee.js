// Bruce Lee - "Be Water"
// Flowing, focused algorithm - no unnecessary form
for (let i = 1; i <= 100; i++) {
  let form = '';

  if (i % 3 === 0) {
    form += 'Fizz';
  }
  if (i % 5 === 0) {
    form += 'Buzz';
  }

  if (!form) {
    form = i;
  }

  console.log(form);
}
