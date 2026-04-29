// Laws of motion. Calculus. 20 sequential manifestations of order.
let mass = 0;
let velocity = 1;

console.log(mass);
console.log(velocity);

for (let time = 0; time < 18; time++) {
  let momentum = mass + velocity;
  console.log(momentum);
  mass = velocity;
  velocity = momentum;
}
