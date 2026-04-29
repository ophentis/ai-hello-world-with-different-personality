// *Airbending through the Fibonacci sequence* This is gonna be AMAZING! Yip yip!
let play1 = 0, play2 = 1;
console.log(play1);
for (let bison = 1; bison < 20; bison++) {
  console.log(play2);
  [play1, play2] = [play2, play1 + play2];
}
