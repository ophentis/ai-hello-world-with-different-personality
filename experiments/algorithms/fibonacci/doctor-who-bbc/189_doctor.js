// THE DOCTOR: This sequence spans centuries of mathematics. Wonderful!
let regen1 = 0, regen2 = 1;
console.log(regen1);
for (let era = 1; era < 20; era++) {
  console.log(regen2);
  [regen1, regen2] = [regen2, regen1 + regen2];
}
