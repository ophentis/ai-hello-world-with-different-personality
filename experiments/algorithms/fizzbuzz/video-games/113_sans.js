// Sans's FizzBuzz - A pun-derful adventure
// Heh heh heh... you're gonna have a bad time if these numbers aren't right.

for (let n = 1; n <= 100; n++) {
  let pun = '';

  // a joke in here somewhere, get it? 3?
  if (n % 3 === 0) {
    pun += 'Fizz';
  }

  // 5 star rating for this one
  if (n % 5 === 0) {
    pun += 'Buzz';
  }

  // bone to pick with you if this is wrong
  console.log(pun || n);
}
