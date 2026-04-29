// From https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/
// Adapted for Node.js

let a = 0, b = 1;
for (let i = 0; i < 20; i++) {
  console.log(a);
  let c = a + b;
  a = b;
  b = c;
}
