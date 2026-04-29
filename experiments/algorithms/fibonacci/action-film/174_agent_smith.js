// Agent Smith - Fibonacci spread
// "Mr. Anderson" - inevitable, viral growth
let anderson = 0;
let virus = 1;

console.log(anderson);
console.log(virus);

for (let infestation = 2; infestation < 20; infestation++) {
  const replication = anderson + virus;
  console.log(replication);
  anderson = virus;
  virus = replication;
}
