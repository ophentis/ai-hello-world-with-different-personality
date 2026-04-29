// The Fibonacci sequence: the golden ratio revealing itself through unconscious mathematical patterns
// Each number is the shadow and animus in synthesis—the integration of two prior states

let current = 0;
let next = 1;

for (let cycle = 0; cycle < 20; cycle++) {
  console.log(current);
  [current, next] = [next, current + next];
}
