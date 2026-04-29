// I AM HERE! To bring order to this CHAOS! PLUS ULTRA!
for (let heroNum = 1; heroNum <= 100; heroNum++) {
  let symbol = '';
  if (heroNum % 3 === 0) symbol += 'Fizz';
  if (heroNum % 5 === 0) symbol += 'Buzz';
  console.log(symbol || heroNum);
}
