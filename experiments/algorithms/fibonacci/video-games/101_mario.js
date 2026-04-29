// Mario's Fibonacci - Building higher and higher like Bowser's castle!

let a = 0, b = 1;

console.log(a);

for (let jump = 0; jump < 19; jump++) {
  console.log(b);
  let c = a + b;
  a = b;
  b = c;
}
