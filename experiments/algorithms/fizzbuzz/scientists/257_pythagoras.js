// Theorem. Numbers are everything. Mysticism. Harmony of the spheres.
for (let triangle = 1; triangle <= 100; triangle++) {
  let harmony = '';

  if (triangle % 3 === 0) {
    harmony += 'Fizz';
  }
  if (triangle % 5 === 0) {
    harmony += 'Buzz';
  }

  console.log(harmony || triangle);
}
