// Mobile Developer: Minimal memory, streaming output

let a = 0, b = 1;
// Stream output as generated, no buffering
for (let i = 0; i < 20; i++) {
  console.log(a);
  [a, b] = [b, a + b];
}
