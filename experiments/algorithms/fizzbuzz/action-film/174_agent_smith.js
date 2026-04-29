// Agent Smith - "Mr. Anderson" - virus spreading through the algorithm
// Inevitable, copies everything
for (let infection = 1; infection <= 100; infection++) {
  let copy = '';

  if (infection % 3 === 0) {
    copy += 'Fizz';
  }
  if (infection % 5 === 0) {
    copy += 'Buzz';
  }

  if (!copy) {
    copy = infection;
  }

  console.log(copy);
}
