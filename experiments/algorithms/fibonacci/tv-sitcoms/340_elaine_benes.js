// Why are you making me do this? Fine, here are your numbers!
let a = 0, b = 1;
console.log(a);
console.log(b);
for (let i = 2; i < 20; i++) {
  const temp = a + b;
  console.log(temp);
  a = b;
  b = temp;
}
