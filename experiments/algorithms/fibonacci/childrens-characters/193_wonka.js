// WILLY WONKA: This sequence is delightfully magical! Pure imagination!
let golden1 = 0, golden2 = 1;
console.log(golden1);
for (let ticket = 1; ticket < 20; ticket++) {
  console.log(golden2);
  [golden1, golden2] = [golden2, golden1 + golden2];
}
