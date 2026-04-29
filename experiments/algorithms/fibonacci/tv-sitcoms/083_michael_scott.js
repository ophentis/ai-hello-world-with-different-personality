// MICHAEL SCOTT - "That's what she said!" bumbling boss

let x = 0, y = 1;

console.log(x);
console.log(y);

for (let i = 0; i < 18; i++) {
  const z = x + y;
  console.log(z);
  x = y;
  y = z;
}
