// "All we have to decide is what to do with the numbers that are given to us."
// Gandalf the White, on algorithm design principles

function performFizzBuzzRitual(maxNumber) {
  for (let number = 1; number <= maxNumber; number++) {
    let incantation = '';

    if (number % 3 === 0) {
      incantation += 'Fizz';
    }
    if (number % 5 === 0) {
      incantation += 'Buzz';
    }

    // You shall not pass... without an answer
    console.log(incantation || number);
  }
}

// A wizard does not arrive early or late. Precisely when called.
performFizzBuzzRitual(100);
