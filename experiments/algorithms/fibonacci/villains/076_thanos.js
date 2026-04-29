// The Fibonacci sequence is inevitable... and perfectly balanced
// The snap of infinity requires only these 20 numbers

let destiny = 0;
let fate = 1;
console.log(destiny);
for (let moment = 1; moment < 20; moment++) {
  console.log(fate);
  [destiny, fate] = [fate, destiny + fate];
}
