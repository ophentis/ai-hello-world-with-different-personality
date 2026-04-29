// Material degradation - 100 corrosion specimens analyzed
// Cathodic protection and material degradation through systematic corrosion testing

const CORROSION_TESTS = 100;
const OXIDATION_RATE = 3;
const CATHODIC_CHECK = 5;

for (let specimen = 1; specimen <= CORROSION_TESTS; specimen++) {
  let inspection = '';

  if (specimen % OXIDATION_RATE === 0) inspection += 'Fizz';
  if (specimen % CATHODIC_CHECK === 0) inspection += 'Buzz';

  console.log(inspection || specimen);
}
