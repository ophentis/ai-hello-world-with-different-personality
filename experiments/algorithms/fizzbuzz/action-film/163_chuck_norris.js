// Chuck Norris Facts - unstoppable algorithm
// Chuck Norris doesn't do FizzBuzz, FizzBuzz does Chuck Norris
for (let fact = 1; fact <= 100; fact++) {
  let truth = '';

  // Chuck Norris checks divisibility by 3
  if (fact % 3 === 0) {
    truth += 'Fizz';
  }
  // Then by 5
  if (fact % 5 === 0) {
    truth += 'Buzz';
  }

  // What remains is the number, because Chuck Norris said so
  if (!truth) {
    truth = fact;
  }

  console.log(truth);
}
