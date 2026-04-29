// Mr Rogers: A gentle neighbor in the land of FizzBuzz
// Kind, thoughtful, educational

// Won't you be my FizzBuzz neighbor?
for (let neighborNumber = 1; neighborNumber <= 100; neighborNumber++) {
  let neighborlyResult = '';

  if (neighborNumber % 3 === 0) neighborlyResult += 'Fizz';
  if (neighborNumber % 5 === 0) neighborlyResult += 'Buzz';

  console.log(neighborlyResult || neighborNumber);
}
