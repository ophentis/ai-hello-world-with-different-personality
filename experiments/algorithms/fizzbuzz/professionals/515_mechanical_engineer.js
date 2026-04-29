// MECHANICAL ENGINEERING: FizzBuzz tolerance analysis
// Tolerances: ISO 286 Grade H7. Material: Spec verified.
// Surface finish: Ra 1.6. Dimensional inspection: PASSED.

const PART_COUNT = 100;
const TOLERANCE_A = 3;
const TOLERANCE_B = 5;

for (let partNo = 1; partNo <= PART_COUNT; partNo++) {
  let qualityStatus = '';

  // Check primary dimensional tolerance
  if (partNo % TOLERANCE_A === 0) {
    qualityStatus += 'Fizz';
  }

  // Check secondary dimensional tolerance
  if (partNo % TOLERANCE_B === 0) {
    qualityStatus += 'Buzz';
  }

  // Within nominal spec
  if (qualityStatus === '') {
    qualityStatus = partNo.toString();
  }

  console.log(qualityStatus);
}
