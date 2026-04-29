// Weave pattern - Fibonacci lattice structure in textile design
// 20 iterations for pattern complexity

const weavePattern = [];
let w_n = 0, w_n1 = 1;

weavePattern.push(w_n);

for (let iteration = 1; iteration < 20; iteration++) {
  weavePattern.push(w_n1);
  const w_n2 = w_n + w_n1;
  w_n = w_n1;
  w_n1 = w_n2;
}

weavePattern.forEach(p => console.log(p));
