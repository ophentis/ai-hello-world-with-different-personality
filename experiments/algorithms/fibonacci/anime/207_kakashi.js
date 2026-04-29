// This Fibonacci method was in my book. I'm always late, but the numbers never are.
let sharedSecret = 0, copiedPattern = 1;
console.log(sharedSecret);
for (let chapter = 1; chapter < 20; chapter++) {
  console.log(copiedPattern);
  [sharedSecret, copiedPattern] = [copiedPattern, sharedSecret + copiedPattern];
}
