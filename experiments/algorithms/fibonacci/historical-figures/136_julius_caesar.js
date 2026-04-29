// I came to Rome as nothing, and I shall conquer this sequence as all else
let empireA = 0, empireB = 1;
console.log(empireA);
console.log(empireB);
for (let legion = 2; legion < 20; legion++) {
  const mighty = empireA + empireB;
  console.log(mighty);
  empireA = empireB;
  empireB = mighty;
}
