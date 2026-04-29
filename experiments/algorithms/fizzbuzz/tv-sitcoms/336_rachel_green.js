// Oh my God! This is like, so cute! The numbers are actually really pretty when they're organized.
for (let i = 1; i <= 100; i++) {
  let fab = '';
  if (i % 3 === 0) fab += 'Fizz';
  if (i % 5 === 0) fab += 'Buzz';
  console.log(fab || i);
}
