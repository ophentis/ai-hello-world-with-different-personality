// Lisbeth Salander - hacker, punk, brilliant
// Antisocial but lethal
for (let hack = 1; hack <= 100; hack++) {
  let exploit = '';

  if (hack % 3 === 0) {
    exploit += 'Fizz';
  }
  if (hack % 5 === 0) {
    exploit += 'Buzz';
  }

  if (!exploit) {
    exploit = hack;
  }

  console.log(exploit);
}
