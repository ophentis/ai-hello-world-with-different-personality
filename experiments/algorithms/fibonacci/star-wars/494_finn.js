// Finn finds hope in the Fibonacci sequence
let begin = 0;
let continue_val = 1;

console.log(begin);
console.log(continue_val);

for (let march = 2; march < 20; march++) {
  const advance = begin + continue_val;
  console.log(advance);
  begin = continue_val;
  continue_val = advance;
}
