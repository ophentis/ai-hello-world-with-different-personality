// SQL-like set operations approach
// Think of each number as a row in a table with computed columns

function fizzBuzz() {
  // Create result set with fizzbuzz computed column
  const resultSet = [];

  for (let i = 1; i <= 100; i++) {
    // CASE statement simulation
    let output;
    if (i % 15 === 0) {
      output = 'FizzBuzz';
    } else if (i % 3 === 0) {
      output = 'Fizz';
    } else if (i % 5 === 0) {
      output = 'Buzz';
    } else {
      output = i;
    }

    resultSet.push(output);
  }

  // SELECT * FROM result_set
  return resultSet;
}

// Materialize and iterate through result set
const results = fizzBuzz();
results.forEach(row => {
  console.log(row);
});
