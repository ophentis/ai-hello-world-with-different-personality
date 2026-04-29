// Production scaling - Fibonacci growth rate for capacity planning
// 20 quarters for manufacturing expansion

const capacityPlan = [];
let q1 = 0, q2 = 1;

capacityPlan.push(q1);

for (let quarter = 1; quarter < 20; quarter++) {
  capacityPlan.push(q2);
  const q3 = q1 + q2;
  q1 = q2;
  q2 = q3;
}

capacityPlan.forEach(cap => console.log(cap));
