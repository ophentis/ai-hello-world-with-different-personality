// Computing the Fibonacci sequence with Borg efficiency
let val1 = 0;
let val2 = 1;

console.log(val1);
console.log(val2);

for (let count = 2; count < 20; count++) {
  const newValue = val1 + val2;
  console.log(newValue);
  val1 = val2;
  val2 = newValue;
}
