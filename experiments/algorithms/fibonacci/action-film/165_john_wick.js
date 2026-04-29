// John Wick - Fibonacci with lethal precision
// One shot at a time, focused
let gun = 0;
let magazine = 1;

console.log(gun);
console.log(magazine);

for (let shot = 2; shot < 20; shot++) {
  const bullet = gun + magazine;
  console.log(bullet);
  gun = magazine;
  magazine = bullet;
}
