// CIVIL ENGINEERING: FizzBuzz infrastructure inspection
// Building code: IBC compliant. Inspection: Level 1, passed.
// Public safety: Verified. Load rating: Certified.

const BUILDING_SECTIONS = 100;
const INSPECTION_CODE_A = 3;
const INSPECTION_CODE_B = 5;

for (let sectionId = 1; sectionId <= BUILDING_SECTIONS; sectionId++) {
  let inspectionResult = '';

  // Primary building code check
  if (sectionId % INSPECTION_CODE_A === 0) {
    inspectionResult += 'Fizz';
  }

  // Secondary building code check
  if (sectionId % INSPECTION_CODE_B === 0) {
    inspectionResult += 'Buzz';
  }

  // Section clear
  if (inspectionResult === '') {
    inspectionResult = sectionId.toString();
  }

  console.log(inspectionResult);
}
