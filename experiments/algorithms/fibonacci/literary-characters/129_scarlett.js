// After all, tomorrow is another day, and I shall manage this sequence too.
// I'll think about the next number tomorrow. For now, I have the pattern.
let willI = 0, willINotNot = 1;
for (let day = 0; day < 20; day++) {
  console.log(willI);
  const tomorrowNext = willI + willINotNot;
  willI = willINotNot;
  willINotNot = tomorrowNext;
}
