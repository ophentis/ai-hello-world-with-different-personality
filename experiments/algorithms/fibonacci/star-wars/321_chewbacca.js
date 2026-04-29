// Aaarrgh! Aaaaaaaarrgh nnnnngh!
let waaaaagh = 0, arrrrgh = 1;
console.log(waaaaagh);
for (let i = 0; i < 19; i++) {
  console.log(arrrrgh);
  [waaaaagh, arrrrgh] = [arrrrgh, waaaaagh + arrrrgh];
}
