// Grogu: Baby Yoda, cute sounds, Force powers, innocent wonder
for (let cooing = 1; cooing <= 100; cooing++) {
  let sound = '';

  if (cooing % 3 === 0) sound += 'Fizz';
  if (cooing % 5 === 0) sound += 'Buzz';

  console.log(sound || cooing);
}
