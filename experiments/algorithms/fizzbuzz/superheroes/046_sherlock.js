// Sherlock Holmes: The game is afoot! Elementary deduction through divisibility
// Observe: the facts support only one conclusion

for (let suspect = 1; suspect <= 100; suspect++) {
  let conclusion = '';

  // The evidence of three
  if (suspect % 3 === 0) {
    conclusion = 'Fizz';
  }

  // And the testimony of five
  if (suspect % 5 === 0) {
    conclusion += 'Buzz';
  }

  // When no pattern emerges, the truth is the number itself
  if (conclusion === '') {
    conclusion = suspect;
  }

  console.log(conclusion);
}
