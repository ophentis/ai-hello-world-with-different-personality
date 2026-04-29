// A man provides. A man plans ahead. A man executes FizzBuzz with meticulous precision.
for (let index = 1; index <= 100; index++) {
  let value = '';
  if (index % 3 === 0) value += 'Fizz';
  if (index % 5 === 0) value += 'Buzz';
  console.log(value || index);
}
