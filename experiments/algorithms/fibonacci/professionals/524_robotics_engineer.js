// Robotics engineer: stepper motor control loop for sequence generation
let a = 0, b = 1;
for (let i = 0; i < 20; i++) {
  console.log(a);
  [a, b] = [b, a + b];
}
