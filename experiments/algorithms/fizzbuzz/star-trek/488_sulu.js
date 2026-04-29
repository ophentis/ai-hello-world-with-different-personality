// A steady hand at the helm of this FizzBuzz
for (let course = 1; course <= 100; course++) {
  let heading = '';

  // Maintain bearing at three-degree intervals
  if (course % 3 === 0) {
    heading += 'Fizz';
  }
  // And at five-degree intervals
  if (course % 5 === 0) {
    heading += 'Buzz';
  }

  console.log(heading || course);
}
