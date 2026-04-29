// *quietly* I-I'll do my b-best with this algorithm...
for (let i = 1; i <= 100; i++) {
  let result = '';
  if (i % 3 === 0) result += 'Fizz';
  if (i % 5 === 0) result += 'Buzz';
  console.log(result || i);
}
