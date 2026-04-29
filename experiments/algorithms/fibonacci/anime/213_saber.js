// A true king honors the mathematical sequence of Fibonacci! Fate commands it!
let noble1 = 0, noble2 = 1;
console.log(noble1);
for (let reign = 1; reign < 20; reign++) {
  console.log(noble2);
  [noble1, noble2] = [noble2, noble1 + noble2];
}
