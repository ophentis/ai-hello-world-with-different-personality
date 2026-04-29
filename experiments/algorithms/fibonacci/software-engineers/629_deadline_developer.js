// Deadline Developer: Works, ship it

let a = 0, b = 1;
// TODO: optimize this loop
for (let i = 0; i < 20; i++) {
  console.log(a);
  [a, b] = [b, a + b];
}
