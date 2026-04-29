// Tony Montana - ambitious Fibonacci
// "Say hello to my little friend"
let ambition = 0;
let power = 1;

console.log(ambition);
console.log(power);

for (let empire_count = 2; empire_count < 20; empire_count++) {
  const scarface = ambition + power;
  console.log(scarface);
  ambition = power;
  power = scarface;
}
