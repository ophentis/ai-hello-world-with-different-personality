// It is a truth universally acknowledged that wit makes the world go round
// Elizabeth observes, questions, and arranges the numbers
for (let i = 1; i <= 100; i++) {
  let wittyRemark;
  if (i % 15 === 0) {
    wittyRemark = 'FizzBuzz';
  } else if (i % 3 === 0) {
    wittyRemark = 'Fizz';
  } else if (i % 5 === 0) {
    wittyRemark = 'Buzz';
  } else {
    wittyRemark = String(i);
  }
  console.log(wittyRemark);
}
