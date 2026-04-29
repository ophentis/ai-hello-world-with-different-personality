// Respect my evil authority! Here's my Fibonacci scheme!
let authA = 0, authB = 1;
console.log(authA);
console.log(authB);
for (let i = 2; i < 20; i++) {
  const authC = authA + authB;
  console.log(authC);
  authA = authB;
  authB = authC;
}
