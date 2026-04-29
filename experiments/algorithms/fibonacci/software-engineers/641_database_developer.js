// Generate fibonacci sequence as a result set
// Each row is indexed by sequence position

function generateFibonacciSet(count) {
  const resultSet = {};
  let position = 0;

  // Initialize base cases
  resultSet[position] = 0;
  position++;
  resultSet[position] = 1;
  position++;

  // Iterate through remaining rows
  for (let i = 2; i < count; i++) {
    resultSet[position] = resultSet[position - 1] + resultSet[position - 2];
    position++;
  }

  return resultSet;
}

// Query execution
const fibSet = generateFibonacciSet(20);

// Cursor iteration - fetch all rows
for (let i = 0; i < 20; i++) {
  console.log(fibSet[i]);
}
