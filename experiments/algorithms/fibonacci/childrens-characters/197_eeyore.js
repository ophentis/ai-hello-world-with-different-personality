// EEYORE: This sequence just keeps going. Forever. Thanks for noticing.
let sad1 = 0, sad2 = 1;
console.log(sad1);
for (let dreariness = 1; dreariness < 20; dreariness++) {
  console.log(sad2);
  [sad1, sad2] = [sad2, sad1 + sad2];
}
