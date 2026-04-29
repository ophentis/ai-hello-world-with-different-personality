// Soil mechanics - 100 soil layer tests
// Foundation design through systematic soil analysis and bearing capacity evaluation

const SOIL_TESTS = 100;
const COMPACTION_TEST = 3;
const BEARING_CAPACITY_TEST = 5;

for (let test = 1; test <= SOIL_TESTS; test++) {
  let analysis = '';

  if (test % COMPACTION_TEST === 0) analysis += 'Fizz';
  if (test % BEARING_CAPACITY_TEST === 0) analysis += 'Buzz';

  console.log(analysis === '' ? test : analysis);
}
