// Listen, I'm telling you, this thing over here is about integrity. We do this right.
for (let i = 1; i <= 100; i++) {
  let fuhgeddaboutit = '';
  if (i % 3 === 0) fuhgeddaboutit += 'Fizz';
  if (i % 5 === 0) fuhgeddaboutit += 'Buzz';
  console.log(fuhgeddaboutit || i);
}
