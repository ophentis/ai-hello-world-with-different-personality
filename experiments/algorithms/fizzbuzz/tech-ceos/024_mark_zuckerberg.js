// Mark Zuckerberg: Move fast. Hack it. Get it working.
// Scale concerns are secondary to shipping velocity.

const fb = n => {
  let s = '';
  if (n % 3 === 0) s += 'Fizz';
  if (n % 5 === 0) s += 'Buzz';
  return s || n;
};

for (let i = 1; i <= 100; i++) console.log(fb(i));
