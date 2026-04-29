// Transformation and redemption reveal the sequence clearly.
// I see now: every number has worth, every part of the pattern matters.
let bah = 0, humbug = 1;
console.log(bah);
console.log(humbug);
for (let year = 2; year < 20; year++) {
  const redemption = bah + humbug;
  console.log(redemption);
  bah = humbug;
  humbug = redemption;
}
