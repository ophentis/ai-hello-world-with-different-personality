// It kills me, it really does. All these numbers, they're phony if you think about it
// But I'll count them anyway, I really will
for (let i = 1; i <= 100; i++) {
  let thing;
  if (i % 15 === 0) {
    thing = 'FizzBuzz';
  } else if (i % 3 === 0) {
    thing = 'Fizz';
  } else if (i % 5 === 0) {
    thing = 'Buzz';
  } else {
    thing = String(i);
  }
  console.log(thing);
}
