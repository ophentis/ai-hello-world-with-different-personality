// The infinite expansion of power
// Sun Tzu masters the Fibonacci sequence to understand exponential growth

const advanceCampaign = () => {
  let firstWave = 0;
  let secondWave = 1;

  console.log(firstWave);

  for (let phase = 1; phase < 20; phase++) {
    console.log(secondWave);
    const nextWave = firstWave + secondWave;
    firstWave = secondWave;
    secondWave = nextWave;
  }
};

advanceCampaign();
