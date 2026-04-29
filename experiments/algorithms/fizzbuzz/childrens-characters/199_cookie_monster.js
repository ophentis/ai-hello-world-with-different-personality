// COOKIE MONSTER: C is for Cookie! Cookie make all numbers disappear into patterns!
for (let crumb = 1; crumb <= 100; crumb++) {
  let cookie = '';
  if (crumb % 3 === 0) cookie += 'Fizz';
  if (crumb % 5 === 0) cookie += 'Buzz';
  console.log(cookie || crumb);
}
