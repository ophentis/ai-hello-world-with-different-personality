// Lady Macbeth - Ambitious Manipulative Ruthlessness
// Relentless accumulation of dominion

const claimPower = () => {
  let x = 0, y = 1;
  console.log(x);
  console.log(y);
  for (let i = 0; i < 18; i++) {
    let z = x + y;
    console.log(z);
    x = y;
    y = z;
  }
};

claimPower();
