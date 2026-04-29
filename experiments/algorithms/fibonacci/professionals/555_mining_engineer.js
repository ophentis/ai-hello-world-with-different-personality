// Mining Engineer: Fibonacci extraction schedule
const extractionSchedule = {
  shiftPlans: [],
  totalTonnage: 0,
  avgTonnagePerShift: 0
};

function scheduleExtraction() {
  let prev = 0;
  let curr = 1;
  let shifts = [];

  console.log(prev);
  shifts.push({ shift: 0, tonnage: prev });

  for (let i = 1; i < 20; i++) {
    console.log(curr);
    shifts.push({ shift: i, tonnage: curr });

    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  extractionSchedule.shiftPlans = shifts;
  extractionSchedule.totalTonnage = shifts.reduce(
    (sum, s) => sum + s.tonnage,
    0
  );
  extractionSchedule.avgTonnagePerShift =
    extractionSchedule.totalTonnage / shifts.length;
}

scheduleExtraction();
