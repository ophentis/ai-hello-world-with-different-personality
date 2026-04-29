// *softly* E-even though I'm shy, I can see all the numbers through my Byakugan...
let gentle1 = 0, gentle2 = 1;
console.log(gentle1);
for (let step = 1; step < 20; step++) {
  console.log(gentle2);
  [gentle1, gentle2] = [gentle2, gentle1 + gentle2];
}
