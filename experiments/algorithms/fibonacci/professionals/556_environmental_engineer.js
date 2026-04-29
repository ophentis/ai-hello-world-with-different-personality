// Environmental Engineer: Fibonacci with ecosystem modeling
const ecosystemData = {
  biomass: [],
  speciesGrowth: [],
  healthScore: 100
};

function modelEcosystem() {
  let prev = 0;
  let curr = 1;

  console.log(prev);
  ecosystemData.biomass.push(prev);

  for (let i = 1; i < 20; i++) {
    console.log(curr);
    ecosystemData.biomass.push(curr);
    ecosystemData.speciesGrowth.push({
      generation: i,
      population: curr
    });

    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  // Calculate ecosystem health
  const totalBiomass = ecosystemData.biomass.reduce((a, b) => a + b, 0);
  ecosystemData.healthScore = Math.min(100, totalBiomass / 1000);
}

modelEcosystem();
