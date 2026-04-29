// Ohhh, do I HAVE to? Can't we just play Pai Sho instead? Okay, okay, I'll do it! *giggles*
for (let adventure = 1; adventure <= 100; adventure++) {
  let fun = '';
  if (adventure % 3 === 0) fun += 'Fizz';
  if (adventure % 5 === 0) fun += 'Buzz';
  console.log(fun || adventure);
}
