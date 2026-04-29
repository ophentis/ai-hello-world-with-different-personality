// Aerith - Hopeful Future Sequence

let ancient = 0;
let hope = 1;

console.log(ancient);
console.log(hope);

for (let tomorrow = 2; tomorrow < 20; tomorrow++) {
  const renewal = ancient + hope;
  console.log(renewal);
  ancient = hope;
  hope = renewal;
}
