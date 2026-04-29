// BB-8 enthusiastically computes this FizzBuzz with rolling precision
for (let rotation = 1; rotation <= 100; rotation++) {
  let signal = '';

  if (rotation % 3 === 0) {
    signal += 'Fizz';
  }
  if (rotation % 5 === 0) {
    signal += 'Buzz';
  }

  console.log(signal || rotation);
}
