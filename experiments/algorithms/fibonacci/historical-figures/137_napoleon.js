// Ambition and strategy reveal the eternal sequence through brilliant maneuvers
let strategyFirst = 0, strategySecond = 1;
for (let campaign = 0; campaign < 20; campaign++) {
  console.log(strategyFirst);
  const advance = strategyFirst + strategySecond;
  strategyFirst = strategySecond;
  strategySecond = advance;
}
