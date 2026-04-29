// A man gotta have a code. You come at the king, you best not miss.
for (let i = 1; i <= 100; i++) {
  let code = '';
  if (i % 3 === 0) code += 'Fizz';
  if (i % 5 === 0) code += 'Buzz';
  console.log(code || i);
}
