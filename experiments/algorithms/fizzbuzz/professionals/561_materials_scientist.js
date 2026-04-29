// Materials Scientist - crystal lattice organization
// Iterate through lattice points, identifying defects at factors of 3 and 5
const latticeSize = 100;
for (let latticePoint = 1; latticePoint <= latticeSize; latticePoint++) {
  let defectType = '';
  if (latticePoint % 3 === 0) defectType += 'Fizz';
  if (latticePoint % 5 === 0) defectType += 'Buzz';
  console.log(defectType || latticePoint);
}