// The cold never bothered me anyway... or this sequence
// Let it flow, the Fibonacci numbers in eternal ice

let cold = 0;
let power = 1;
console.log(cold);
for (let moment = 1; moment < 20; moment++) {
  console.log(power);
  [cold, power] = [power, cold + power];
}
