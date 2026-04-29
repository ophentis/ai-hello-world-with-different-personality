// Vegeta's elite power sequence
const elite = () => {
  const powers = [0, 1];
  for (let rank = 2; rank < 20; rank++) {
    powers.push(powers[rank - 1] + powers[rank - 2]);
  }
  return powers;
};
const dynasty = elite();
dynasty.forEach(p => console.log(p));
