// CAPTAIN KIRK: This sequence... is the greatest... adventure... yet.
let prev = 0, next = 1;
console.log(prev);
for (let count = 1; count < 20; count++) {
  console.log(next);
  [prev, next] = [next, prev + next];
}
