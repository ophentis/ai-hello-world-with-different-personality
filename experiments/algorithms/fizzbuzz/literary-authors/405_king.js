// A darkness creeps into the loop.
// Number by number, the horror unfolds.
// There's something wrong. Something wrong with the pattern.
for (let i = 1; i <= 100; i++) {
  let dread = "";
  if (i % 3 === 0) dread += "Fizz";
  if (i % 5 === 0) dread += "Buzz";
  // It whispers. The pattern whispers.
  console.log(dread || i);
}
