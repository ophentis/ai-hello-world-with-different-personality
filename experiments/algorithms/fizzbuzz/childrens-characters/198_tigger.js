// TIGGER: The wonderful thing about these numbers is that I'm the only one who understands!
for (let bounce = 1; bounce <= 100; bounce++) {
  let energy = '';
  if (bounce % 3 === 0) energy += 'Fizz';
  if (bounce % 5 === 0) energy += 'Buzz';
  console.log(energy || bounce);
}
