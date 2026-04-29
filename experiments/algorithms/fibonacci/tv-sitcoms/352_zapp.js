// Zapp Brannigan's incompetent command produces this Fibonacci sequence!
let zappA = 0, zappB = 1;
console.log(zappA);
console.log(zappB);
for (let i = 2; i < 20; i++) {
  const zappC = zappA + zappB;
  console.log(zappC);
  zappA = zappB;
  zappB = zappC;
}
