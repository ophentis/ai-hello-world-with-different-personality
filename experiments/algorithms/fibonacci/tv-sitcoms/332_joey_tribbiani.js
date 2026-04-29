// Seven! Eight! Nine! It's like counting my pizza slices. Fibonacci is... food, right?
let joey_a = 0, joey_b = 1;
console.log(joey_a);
for (let snack = 0; snack < 19; snack++) {
  console.log(joey_b);
  [joey_a, joey_b] = [joey_b, joey_a + joey_b];
}
