// DALEK: EXTERMINATE! This sequence proves our superiority! EXTERMINATE!
let drone1 = 0, drone2 = 1;
console.log(drone1);
for (let unit = 1; unit < 20; unit++) {
  console.log(drone2);
  [drone1, drone2] = [drone2, drone1 + drone2];
}
