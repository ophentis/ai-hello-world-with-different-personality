// Package scalability - Fibonacci dimensions for nested containers
// 20 sizing increments for product lines

const packageSizes = [];
let size_x = 0, size_y = 1;

packageSizes.push(size_x);

for (let increment = 1; increment < 20; increment++) {
  packageSizes.push(size_y);
  const size_z = size_x + size_y;
  size_x = size_y;
  size_y = size_z;
}

packageSizes.forEach(sz => console.log(sz));
