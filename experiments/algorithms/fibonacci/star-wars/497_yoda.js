// Yoda perceives the Fibonacci sequence, ancient it is
let wisdom_past = 0;
let wisdom_present = 1;

console.log(wisdom_past);
console.log(wisdom_present);

for (let era = 2; era < 20; era++) {
  const wisdom_future = wisdom_past + wisdom_present;
  console.log(wisdom_future);
  wisdom_past = wisdom_present;
  wisdom_present = wisdom_future;
}
