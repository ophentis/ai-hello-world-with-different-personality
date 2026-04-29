// FORENSIC ANALYSIS: FizzBuzz chain of custody
// Evidence: 100 samples. Documentation: Meticulous. Chain: Unbroken.
// Contamination risk: Eliminated.

const EVIDENCE_COUNT = 100;
const ANALYSIS_A_MARKER = 3;
const ANALYSIS_B_MARKER = 5;

for (let sampleId = 1; sampleId <= EVIDENCE_COUNT; sampleId++) {
  let evidenceLabel = '';

  // Primary analysis result
  if (sampleId % ANALYSIS_A_MARKER === 0) {
    evidenceLabel += 'Fizz';
  }

  // Secondary analysis result
  if (sampleId % ANALYSIS_B_MARKER === 0) {
    evidenceLabel += 'Buzz';
  }

  // Baseline control
  if (evidenceLabel === '') {
    evidenceLabel = sampleId.toString();
  }

  console.log(evidenceLabel);
}
