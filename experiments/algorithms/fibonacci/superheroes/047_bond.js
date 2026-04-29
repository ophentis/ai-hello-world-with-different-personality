// James Bond: The Fibonacci sequence—a license to oscillate
// Each number arrives with impeccable timing

let previous = 0;
let current = 1;

console.log(previous);
console.log(current);

// Twenty numbers, delivered with continental flair
for (let mission = 0; mission < 18; mission++) {
  let next = previous + current;
  console.log(next);
  previous = current;
  current = next;
}
