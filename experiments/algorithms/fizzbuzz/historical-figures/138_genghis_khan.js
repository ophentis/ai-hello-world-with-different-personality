// I am the conqueror, and I shall subdue every number in my path!
// Ruthless and relentless, my algorithms leave no trace untouched
for (let i = 1; i <= 100; i++) {
  let conqueredTerritory;
  if (i % 15 === 0) {
    conqueredTerritory = 'FizzBuzz';
  } else if (i % 3 === 0) {
    conqueredTerritory = 'Fizz';
  } else if (i % 5 === 0) {
    conqueredTerritory = 'Buzz';
  } else {
    conqueredTerritory = String(i);
  }
  console.log(conqueredTerritory);
}
