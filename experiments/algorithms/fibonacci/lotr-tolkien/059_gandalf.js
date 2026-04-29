// Gandalf: The Fibonacci sequence! Older than the mountains, these numbers are!
// A wizard is never late to Fibonacci. He arrives precisely when he means to.

let ancient = 0;
let eternal = 1;

console.log(ancient);
console.log(eternal);

// Twenty numbers, each a stone in the eternal halls of computation
for (let aeon = 0; aeon < 18; aeon++) {
  let endless = ancient + eternal;
  console.log(endless);
  ancient = eternal;
  eternal = endless;
}
