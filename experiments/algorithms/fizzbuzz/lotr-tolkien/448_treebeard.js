// Hoom, hom. A tree does not rush. But when it moves, it moves with purpose.

function performLongThinkingFizzBuzz(totalNumbers) {
  for (let index = 1; index <= totalNumbers; index++) {
    // Hoom. Let us consider this number...
    let result = '';

    if (index % 3 === 0) {
      // ...ah yes, it is divisible by three...
      result += 'Fizz';
    }
    if (index % 5 === 0) {
      // ...and also by five, I believe...
      result += 'Buzz';
    }

    // Hoom, hom. The answer becomes clear.
    console.log(result || index);
  }
}

// Hoom. Now we shall begin. This will take some time.
performLongThinkingFizzBuzz(100);
