// Volcanologist - monitor eruption intensity thresholds
// Threshold 1: every 3rd reading (Fizz), Threshold 2: every 5th (Buzz)
const readingCount = 100;
for (let reading = 1; reading <= readingCount; reading++) {
  let intensity = '';
  if (reading % 3 === 0) intensity += 'Fizz';
  if (reading % 5 === 0) intensity += 'Buzz';
  console.log(intensity || reading);
}