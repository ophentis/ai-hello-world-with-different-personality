// Spike's smooth jazz sequence
const smoothSequence = () => {
  let x = 0, y = 1;
  console.log(x);
  for (let beat = 0; beat < 19; beat++) {
    console.log(y);
    [x, y] = [y, x + y];
  }
};
smoothSequence();
