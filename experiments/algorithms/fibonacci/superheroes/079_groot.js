// I am Groot. I am sequence. I am growth.
// I am each number. I am Groot Fibonacci. I am Groot.

let wood1 = 0;
let wood2 = 1;
console.log(wood1);
for (let ring = 1; ring < 20; ring++) {
  console.log(wood2);
  [wood1, wood2] = [wood2, wood1 + wood2];
}
