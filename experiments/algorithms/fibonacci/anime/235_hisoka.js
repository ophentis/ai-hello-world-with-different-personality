// Hisoka's Fibonacci - Conjuring the sequence with thrilling intensity
let prey = 0, hunter = 1;
console.log(prey);
for (let battle = 1; battle < 20; battle++) {
  console.log(hunter);
  [prey, hunter] = [hunter, prey + hunter];
}
