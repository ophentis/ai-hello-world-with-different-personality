// Ahsoka: Former Jedi, independent, "I am no Jedi" - her own path
for (let path = 1; path <= 100; path++) {
  let choice = '';

  if (path % 3 === 0) choice += 'Fizz';
  if (path % 5 === 0) choice += 'Buzz';

  console.log(choice || path);
}
