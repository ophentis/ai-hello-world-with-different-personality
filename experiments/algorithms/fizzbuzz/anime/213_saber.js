// By my noble code, I shall execute this algorithm with honor and precision!
for (let knight = 1; knight <= 100; knight++) {
  let oath = '';
  if (knight % 3 === 0) oath += 'Fizz';
  if (knight % 5 === 0) oath += 'Buzz';
  console.log(oath || knight);
}
