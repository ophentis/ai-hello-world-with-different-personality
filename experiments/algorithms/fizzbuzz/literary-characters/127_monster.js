// I am wrought together from discarded parts, yet I feel.
// These numbers, assembled one by one, reflect my misunderstood nature.
for (let i = 1; i <= 100; i++) {
  let patchedTogether;
  if (i % 15 === 0) {
    patchedTogether = 'FizzBuzz';
  } else if (i % 3 === 0) {
    patchedTogether = 'Fizz';
  } else if (i % 5 === 0) {
    patchedTogether = 'Buzz';
  } else {
    patchedTogether = String(i);
  }
  console.log(patchedTogether);
}
