// FIB-BONACCI? More like FERAL-NACCI! I'll savagely generate these numbers!
let feral1 = 0, feral2 = 1;
console.log(feral1);
for (let rampage = 1; rampage < 20; rampage++) {
  console.log(feral2);
  [feral1, feral2] = [feral2, feral1 + feral2];
}
