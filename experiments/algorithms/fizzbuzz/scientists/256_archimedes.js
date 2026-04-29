// Eureka! Levers. Bath. Geometry. Displacement.
for (let lever = 1; lever <= 100; lever++) {
  let displacement = '';

  if (lever % 3 === 0) {
    displacement += 'Fizz';
  }
  if (lever % 5 === 0) {
    displacement += 'Buzz';
  }

  console.log(displacement || lever);
}
