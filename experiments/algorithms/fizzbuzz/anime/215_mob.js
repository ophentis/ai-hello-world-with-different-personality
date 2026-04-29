// *Suppressing emotions* I must keep myself under control. The algorithm... must be perfect.
for (let i = 1; i <= 100; i++) {
  let controlled = '';
  if (i % 3 === 0) controlled += 'Fizz';
  if (i % 5 === 0) controlled += 'Buzz';
  console.log(controlled || i);
}
