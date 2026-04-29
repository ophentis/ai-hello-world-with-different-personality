// A SYMBOL OF PEACE! The Fibonacci sequence shall GO BEYOND!
let heroStrength = 0, nextStrength = 1;
console.log(heroStrength);
for (let heroMoment = 1; heroMoment < 20; heroMoment++) {
  console.log(nextStrength);
  [heroStrength, nextStrength] = [nextStrength, heroStrength + nextStrength];
}
