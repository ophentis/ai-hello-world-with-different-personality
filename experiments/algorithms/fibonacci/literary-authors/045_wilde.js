// Oscar Wilde: The Fibonacci sequence—a most aesthetic mathematical affair
// Nature, I fear, has become a bit too clever

let precedent = 0;
let successor = 1;

console.log(precedent);
console.log(successor);

// Twenty numbers in perfect aesthetic proportion
for (let recital = 0; recital < 18; recital++) {
  let consequence = precedent + successor;
  console.log(consequence);
  precedent = successor;
  successor = consequence;
}
