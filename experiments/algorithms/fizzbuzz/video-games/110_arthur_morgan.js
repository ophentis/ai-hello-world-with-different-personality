// Arthur Morgan's FizzBuzz Journal Entry
// "Boah... there's a strange pattern to these numbers..."

for (let entry = 1; entry <= 100; entry++) {
  let notation = '';

  // Mark the threes in the journal
  if (entry % 3 === 0) {
    notation += 'Fizz';
  }

  // Mark the fives in the journal
  if (entry % 5 === 0) {
    notation += 'Buzz';
  }

  // Write down the observation, boah
  console.log(notation || entry);
}
