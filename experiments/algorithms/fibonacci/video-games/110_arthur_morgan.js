// Arthur Morgan's Fibonacci Observations
// Boah. The numbers... they grow like the Van der Linde gang's troubles...

let journalA = 0;
let journalB = 1;

console.log(journalA);

for (let page = 0; page < 19; page++) {
  console.log(journalB);
  let journalC = journalA + journalB;
  journalA = journalB;
  journalB = journalC;
}
