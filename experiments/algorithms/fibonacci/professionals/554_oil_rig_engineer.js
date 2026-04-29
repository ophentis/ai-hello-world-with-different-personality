// Oil Rig Engineer: Fibonacci with drilling depth tracking
const boreholeMetrics = {
  depth: 0,
  maxDepth: 50000,
  pressure: 0,
  drillState: "active"
};

function advanceBorehole(depthUnit) {
  boreholeMetrics.depth += depthUnit * 10;
  boreholeMetrics.pressure += depthUnit * 5;
  if (boreholeMetrics.depth > boreholeMetrics.maxDepth) {
    boreholeMetrics.drillState = "paused";
  }
}

let prev = 0;
let curr = 1;
console.log(prev);
advanceBorehole(prev);

for (let i = 1; i < 20; i++) {
  console.log(curr);
  advanceBorehole(curr);
  const next = prev + curr;
  prev = curr;
  curr = next;
}
