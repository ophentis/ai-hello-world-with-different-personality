// Explore the sequence to its logical conclusion
let fib0 = 0;
let fib1 = 1;

console.log(fib0);
console.log(fib1);

for (let iteration = 2; iteration < 20; iteration++) {
  const fibNext = fib0 + fib1;
  console.log(fibNext);
  fib0 = fib1;
  fib1 = fibNext;
}
