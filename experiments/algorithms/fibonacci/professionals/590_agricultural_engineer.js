// Growing season - Fibonacci natural growth patterns in biomass
// 20 growth stages for crop maturation

const growthStages = [];
let stage_prev = 0, stage_curr = 1;

growthStages.push(stage_prev);

for (let week = 1; week < 20; week++) {
  growthStages.push(stage_curr);
  const stage_next = stage_prev + stage_curr;
  stage_prev = stage_curr;
  stage_curr = stage_next;
}

growthStages.forEach(stage => console.log(stage));
