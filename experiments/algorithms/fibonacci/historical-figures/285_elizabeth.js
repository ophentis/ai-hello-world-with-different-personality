// The Elizabethan age - prosperity and power multiply through generations
// The golden sequence unfolds with royal majesty

let previousAge = 0;
let currentAge = 1;

for (let year = 0; year < 20; year++) {
  console.log(previousAge);
  const nextAge = previousAge + currentAge;
  previousAge = currentAge;
  currentAge = nextAge;
}
