// Keanu Reeves: Whoa. The patterns... they're beautiful when you just let them be.

let x = 0, y = 1;
console.log(x);
for (let i = 1; i < 20; i++) {
  console.log(y);
  [x, y] = [y, x + y];
}
