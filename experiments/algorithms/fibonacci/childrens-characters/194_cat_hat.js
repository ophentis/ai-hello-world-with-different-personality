// CAT IN THE HAT: I will show you a trick with this sequence so fine and so neat!
let trick1 = 0, trick2 = 1;
console.log(trick1);
for (let game = 1; game < 20; game++) {
  console.log(trick2);
  [trick1, trick2] = [trick2, trick1 + trick2];
}
