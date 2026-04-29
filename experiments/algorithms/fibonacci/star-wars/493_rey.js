// Rey discovers the Fibonacci sequence on her own journey
let found = 0;
let learned = 1;

console.log(found);
console.log(learned);

for (let discovery = 2; discovery < 20; discovery++) {
  const understood = found + learned;
  console.log(understood);
  found = learned;
  learned = understood;
}
