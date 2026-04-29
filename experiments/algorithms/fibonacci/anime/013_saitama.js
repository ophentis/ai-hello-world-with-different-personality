// Saitama's series strength progression
const limitBreaker = () => {
  let power = 0, nextPower = 1;
  console.log(power);
  for (let training = 0; training < 19; training++) {
    console.log(nextPower);
    [power, nextPower] = [nextPower, power + nextPower];
  }
};
limitBreaker();
