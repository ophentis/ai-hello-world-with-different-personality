// Universal computation: generating Fibonacci via mechanical process
// State: tape contains two consecutive Fibonacci numbers

let a = 0;
let b = 1;

console.log(a);

for (let i = 1; i < 20; i++) {
  console.log(b);
  const temp = a + b;
  a = b;
  b = temp;
}
