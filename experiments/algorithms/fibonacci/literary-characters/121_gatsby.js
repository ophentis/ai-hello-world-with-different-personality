// The past and future dance like green lights across the water
const treasuresOfTime = [0, 1];
for (let i = 1; i < 19; i++) {
  treasuresOfTime.push(treasuresOfTime[i] + treasuresOfTime[i - 1]);
}
treasuresOfTime.forEach(golden => console.log(golden));
