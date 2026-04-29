// Joker: The Fibonacci sequence! Why so MATHEMATICAL?
// Twenty numbers to make you laugh... and then cry!

let comic = 0;
let tragic = 1;

console.log(comic);
console.log(tragic);

// Twenty numbers of unpredictable comedy
for (let tragedy = 0; tragedy < 18; tragedy++) {
  let punchline = comic + tragic;
  console.log(punchline);
  comic = tragic;
  tragic = punchline;
}
