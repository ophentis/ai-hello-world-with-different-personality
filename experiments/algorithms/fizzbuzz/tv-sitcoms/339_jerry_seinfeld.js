// What's the deal with FizzBuzz? I mean, you got your Fizzes, you got your Buzzes...
for (let i = 1; i <= 100; i++) {
  let whatsDeal = '';
  if (i % 3 === 0) whatsDeal += 'Fizz';
  if (i % 5 === 0) whatsDeal += 'Buzz';
  console.log(whatsDeal || i);
}
