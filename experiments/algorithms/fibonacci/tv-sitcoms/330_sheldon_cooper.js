// The Fibonacci sequence! A mathematical truth of stunning elegance. Bazinga!
let phi_a = 0, phi_b = 1;
console.log(phi_a);
for (let iteration = 0; iteration < 19; iteration++) {
  console.log(phi_b);
  [phi_a, phi_b] = [phi_b, phi_a + phi_b];
}
