// Elizabeth perceives the Fibonacci sequence across infinite timelines
let tear_p = 0;
let tear_q = 1;

console.log(tear_p);
console.log(tear_q);

for (let infiniteStep = 0; infiniteStep < 18; infiniteStep++) {
  const tear_r = tear_p + tear_q;
  console.log(tear_r);
  tear_p = tear_q;
  tear_q = tear_r;
}
