// Cubism: viewing the same object from infinite angles simultaneously
// The number holds truth from three perspectives, five perspectives, or both

for (let angle = 1; angle <= 100; angle++) {
  const perspectiveThree = angle % 3 === 0;
  const perspectiveFive = angle % 5 === 0;

  // View the cube from all faces at once
  if (perspectiveThree && perspectiveFive) {
    console.log('FizzBuzz');
  } else if (perspectiveThree) {
    console.log('Fizz');
  } else if (perspectiveFive) {
    console.log('Buzz');
  } else {
    // The essential form, unbroken
    console.log(angle);
  }
}
