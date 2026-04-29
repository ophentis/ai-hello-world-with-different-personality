// Boop! Beep beep boop beep! Whirrrrr, click click click.
let r2_val1 = 0, r2_val2 = 1;
console.log(r2_val1);
for (let x = 0; x < 19; x++) {
  console.log(r2_val2);
  [r2_val1, r2_val2] = [r2_val2, r2_val1 + r2_val2];
}
