// Lightning speed. 20 numbers. Record-breaking pace.
let stride = 0;
let leap = 1;

console.log(stride);
console.log(leap);

for (let meter = 0; meter < 18; meter++) {
  let nextStep = stride + leap;
  console.log(nextStep);
  stride = leap;
  leap = nextStep;
}
