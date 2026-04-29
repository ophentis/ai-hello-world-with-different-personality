// This is so like me. I can't even do Fibonacci right. Wait, actually, this is correct. I'm shocked.
let sarcasm_a = 0, sarcasm_b = 1;
console.log(sarcasm_a);
for (let awkward = 0; awkward < 19; awkward++) {
  console.log(sarcasm_b);
  [sarcasm_a, sarcasm_b] = [sarcasm_b, sarcasm_a + sarcasm_b];
}
