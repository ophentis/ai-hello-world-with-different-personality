// Astrophysicist - track stellar evolution phases
// Phase 3 (Fizz), Phase 5 (Buzz) in Hertzsprung-Russell classification
const stellarSequence = 100;
for (let sequenceNum = 1; sequenceNum <= stellarSequence; sequenceNum++) {
  let phase = '';
  if (sequenceNum % 3 === 0) phase += 'Fizz';
  if (sequenceNum % 5 === 0) phase += 'Buzz';
  console.log(phase || sequenceNum);
}