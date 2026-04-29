// Mr Rogers: Let me teach you about Fibonacci, won't you be my neighbor?

let first = 0;
let second = 1;

console.log(first);
console.log(second);

for (let step = 2; step < 20; step++) {
  let next = first + second;
  console.log(next);
  first = second;
  second = next;
}
