// Chuck Norris - Fibonacci Facts
// Chuck Norris generates Fibonacci numbers by sheer force of will
let chuck = 0;
let norris = 1;

console.log(chuck);
console.log(norris);

for (let roundhouse_count = 2; roundhouse_count < 20; roundhouse_count++) {
  const unstoppable = chuck + norris;
  console.log(unstoppable);
  chuck = norris;
  norris = unstoppable;
}
