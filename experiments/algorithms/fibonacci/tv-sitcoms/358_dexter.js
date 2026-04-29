// Dee Dee! This Fibonacci sequence is a scientific marvel! Stay away!
let scienceA = 0, scienceB = 1;
console.log(scienceA);
console.log(scienceB);
for (let i = 2; i < 20; i++) {
  const scienceC = scienceA + scienceB;
  console.log(scienceC);
  scienceA = scienceB;
  scienceB = scienceC;
}
