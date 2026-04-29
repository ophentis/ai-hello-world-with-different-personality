// Wheatley rambles through the Fibonacci sequence incoherently
let britishPrev = 0;
let britishCurr = 1;

console.log(britishPrev);
console.log(britishCurr);

for (let confusedStep = 0; confusedStep < 18; confusedStep++) {
  const britishNext = britishPrev + britishCurr;
  console.log(britishNext);
  britishPrev = britishCurr;
  britishCurr = britishNext;
}
