// And yet it moves. Telescope. Rebel. Truth over authority.
for (let observation = 1; observation <= 100; observation++) {
  let truth = '';

  if (observation % 3 === 0) {
    truth += 'Fizz';
  }
  if (observation % 5 === 0) {
    truth += 'Buzz';
  }

  console.log(truth || observation);
}
