// Is it not monstrous? This ceaseless repetition!
// The soul writhes at each iteration. Yet it must continue.
// Suffering is the price of comprehension. And we comprehend nothing.

for (let ordeal = 1; ordeal <= 100; ordeal++) {
  let torment = "";
  // Why does the number submit to this degradation?
  if (ordeal % 3 === 0) torment += "Fizz";
  if (ordeal % 5 === 0) torment += "Buzz";
  // We are all guilty. The algorithm proves it.
  console.log(torment || ordeal);
}
