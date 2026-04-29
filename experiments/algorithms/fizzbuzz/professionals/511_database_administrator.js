// DATABASE ADMIN: FizzBuzz indexed query execution
// Query optimization: Full scan with index selection hints.
// Normalization form: BCNF. Transaction: ACID properties enforced.

const RECORD_COUNT = 100;
const INDEX_A = 3;
const INDEX_B = 5;

// TABLE: fizzbuzz_records
for (let pk = 1; pk <= RECORD_COUNT; pk++) {
  let query_result = '';

  // Primary index lookup
  if (pk % INDEX_A === 0) {
    query_result += 'Fizz';
  }

  // Secondary index lookup
  if (pk % INDEX_B === 0) {
    query_result += 'Buzz';
  }

  // Default row value
  if (query_result === '') {
    query_result = pk.toString();
  }

  console.log(query_result);
}
