// My precious sequence... eats it raw
// Each number births the next, yesss, precious golden numbers

let a = 0, b = 1;
console.log(a);
for (let c = 1; c < 20; c++) {
  console.log(b);
  [a, b] = [b, a + b];
}
