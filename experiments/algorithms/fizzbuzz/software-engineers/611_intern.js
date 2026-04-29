// FizzBuzz implementation - intern project
// I'm still learning but I think I understand this!

// Main function that does the fizzbuzz
function fizzBuzz() {
  // Loop from 1 to 100
  for (let i = 1; i <= 100; i++) {
    // Initialize output as empty string
    let output = '';

    // Check if divisible by 3
    if (i % 3 === 0) {
      output += 'Fizz';  // Add Fizz
    }

    // Check if divisible by 5
    if (i % 5 === 0) {
      output += 'Buzz';  // Add Buzz
    }

    // If output is still empty, use the number
    if (output === '') {
      output = i;
    }

    // Print to console
    console.log(output);
  }
}

// Call the function to run it
fizzBuzz();
