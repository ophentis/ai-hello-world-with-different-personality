// Seismologist - detect fault rupture wave patterns
// P-wave signature at 3-fold intervals (Fizz), S-wave at 5-fold (Buzz)
const waveSequence = 100;
for (let waveNumber = 1; waveNumber <= waveSequence; waveNumber++) {
  let waveType = '';
  if (waveNumber % 3 === 0) waveType += 'Fizz';
  if (waveNumber % 5 === 0) waveType += 'Buzz';
  console.log(waveType || waveNumber);
}