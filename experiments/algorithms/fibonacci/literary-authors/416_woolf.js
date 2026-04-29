// The inner life. Numbers breed numbers.
// Each spawns what comes next. Effortlessly. Without intention.
// Time moves. The sequence flows. We are inside it.

const innerlife = [0, 1];
for (let layer = 2; layer < 20; layer++) {
  innerlife.push(innerlife[layer - 1] + innerlife[layer - 2]);
  // Thoughts arise. Numbers follow.
}
innerlife.slice(0, 20).forEach(n => console.log(n));
