// The Fibonacci sequence - a path to power, elegantly expressed
let past = 0;
let present = 1;

console.log(past);
console.log(present);

for (let era = 2; era < 20; era++) {
  const future = past + present;
  console.log(future);
  past = present;
  present = future;
}
