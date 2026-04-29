// Gordon Ramsay: PERFECT! Each number, PRECISELY calculated!

let a = 0;
let b = 1;

console.log(a);

for (let i = 1; i < 20; i++) {
  console.log(b);
  const next = a + b;
  a = b;
  b = next;
}
