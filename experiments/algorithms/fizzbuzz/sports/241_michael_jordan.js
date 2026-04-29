// And I took that personally. The GOAT doesn't accept flaws.
for (let i = 1; i <= 100; i++) {
  let competitive = '';

  if (i % 3 === 0) {
    competitive += 'Fizz';
  }
  if (i % 5 === 0) {
    competitive += 'Buzz';
  }

  console.log(competitive || i);
}
