// Carl Sagan: The Fibonacci sequence... a cosmic pattern

let alpha = 0;
let beta = 1;

console.log(alpha);
console.log(beta);

for (let epoch = 2; epoch < 20; epoch++) {
  let gamma = alpha + beta;
  console.log(gamma);
  alpha = beta;
  beta = gamma;
}
