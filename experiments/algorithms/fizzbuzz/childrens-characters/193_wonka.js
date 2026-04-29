// WILLY WONKA: The most magical and mysterious transformation of these peculiar numbers!
for (let sweet = 1; sweet <= 100; sweet++) {
  let enchanted = '';
  if (sweet % 3 === 0) enchanted += 'Fizz';
  if (sweet % 5 === 0) enchanted += 'Buzz';
  console.log(enchanted || sweet);
}
