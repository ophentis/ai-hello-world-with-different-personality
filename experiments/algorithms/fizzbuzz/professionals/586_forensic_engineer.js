// Failure analysis - 100 evidence points examined
// Root cause investigation through systematic evidence evaluation

(function analyzeFailure() {
  const EVIDENCE_POINTS = 100;
  const PRIMARY_FAILURE_MODE = 3;
  const SECONDARY_FAILURE_MODE = 5;

  for (let evidenceId = 1; evidenceId <= EVIDENCE_POINTS; evidenceId++) {
    let investigation = '';

    if (evidenceId % PRIMARY_FAILURE_MODE === 0) investigation += 'Fizz';
    if (evidenceId % SECONDARY_FAILURE_MODE === 0) investigation += 'Buzz';

    console.log(investigation || evidenceId);
  }
})();
