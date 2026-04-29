// Yennefer: Sorceress, ambitious, powerful, lilac aura - commanding
for (let spell = 1; spell <= 100; spell++) {
  let incant = '';

  if (spell % 3 === 0) incant += 'Fizz';
  if (spell % 5 === 0) incant += 'Buzz';

  console.log(incant || spell);
}
