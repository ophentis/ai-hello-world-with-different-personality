// MOANA: I will sail as far as the horizon, each number a new island.
let current = 0, next = 1;
console.log(current);
for (let island = 1; island < 20; island++) {
  console.log(next);
  [current, next] = [next, current + next];
}
