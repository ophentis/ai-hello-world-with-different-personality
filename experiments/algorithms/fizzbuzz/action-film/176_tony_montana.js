// Tony Montana - "Say hello to my little friend"
// Ambitious, aggressive, all in
for (let empire = 1; empire <= 100; empire++) {
  let cocaine = '';

  if (empire % 3 === 0) {
    cocaine += 'Fizz';
  }
  if (empire % 5 === 0) {
    cocaine += 'Buzz';
  }

  if (!cocaine) {
    cocaine = empire;
  }

  console.log(cocaine);
}
