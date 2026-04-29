// Through rigorous scientific method, the pattern becomes clear
// Radioactivity and mathematics shine together with truth
for (let i = 1; i <= 100; i++) {
  let scientificObservation;
  if (i % 15 === 0) {
    scientificObservation = 'FizzBuzz';
  } else if (i % 3 === 0) {
    scientificObservation = 'Fizz';
  } else if (i % 5 === 0) {
    scientificObservation = 'Buzz';
  } else {
    scientificObservation = String(i);
  }
  console.log(scientificObservation);
}
