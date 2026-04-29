// Katniss Everdeen - Fibonacci survivor
// One arrow, one step, one number at a time
let district = 0;
let volunteer = 1;

console.log(district);
console.log(volunteer);

for (let arena = 2; arena < 20; arena++) {
  const tribute = district + volunteer;
  console.log(tribute);
  district = volunteer;
  volunteer = tribute;
}
