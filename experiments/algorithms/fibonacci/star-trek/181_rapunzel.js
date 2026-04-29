// RAPUNZEL: Each number builds on the last... like my journey beyond the tower.
let first = 0, second = 1;
console.log(first);
// How far will this sequence go?
for (let i = 1; i < 20; i++) {
  console.log(second);
  [first, second] = [second, first + second];
}
