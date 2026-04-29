// Hopper works through the Fibonacci sequence like solving a case
let f_first = 0;
let f_second = 1;

console.log(f_first);
console.log(f_second);

for (let iteration = 0; iteration < 18; iteration++) {
  const f_next = f_first + f_second;
  console.log(f_next);
  f_first = f_second;
  f_second = f_next;
}
