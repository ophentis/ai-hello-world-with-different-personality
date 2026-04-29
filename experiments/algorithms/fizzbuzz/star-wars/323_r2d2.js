// Beep beep boop! Whirrrr, beep! Boop boop whooooosh!
for (let i = 1; i <= 100; i++) {
  let beepBoop = '';
  if (i % 3 === 0) beepBoop += 'Fizz';
  if (i % 5 === 0) beepBoop += 'Buzz';
  console.log(beepBoop || i);
}
