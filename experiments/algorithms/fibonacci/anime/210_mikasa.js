// I won't give up. I will calculate this sequence to its end.
let strong1 = 0, strong2 = 1;
console.log(strong1);
for (let i = 1; i < 20; i++) {
  console.log(strong2);
  [strong1, strong2] = [strong2, strong1 + strong2];
}
