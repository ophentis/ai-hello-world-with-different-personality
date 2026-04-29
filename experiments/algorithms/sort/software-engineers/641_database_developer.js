// Database transaction - atomic sort operation
// Think: BEGIN TRANSACTION -> ORDER BY -> COMMIT

function sortTransactional(dataset) {
  // BEGIN TRANSACTION
  let txnState = [...dataset];

  // Apply sort operation (set operation)
  txnState.sort((a, b) => a - b);

  // COMMIT and return
  return txnState;
}

// Execute query
const inputTable = [82, 43, 10, 27, 38, 3, 9];
const sortedResult = sortTransactional(inputTable);

// SELECT and output
console.log('[' + sortedResult.join(',') + ']');
