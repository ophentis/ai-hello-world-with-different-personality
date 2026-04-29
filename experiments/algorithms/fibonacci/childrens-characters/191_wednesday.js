// WEDNESDAY: A sequence destined to spiral endlessly into infinity. Macabre.
let morbid1 = 0, morbid2 = 1;
console.log(morbid1);
for (let decay = 1; decay < 20; decay++) {
  console.log(morbid2);
  [morbid1, morbid2] = [morbid2, morbid1 + morbid2];
}
