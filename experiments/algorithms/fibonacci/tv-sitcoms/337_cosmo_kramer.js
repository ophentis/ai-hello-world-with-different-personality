// *slides across the table* The Fibonacci! It's got rhythm! Look at these numbers go!
let eccentric_a = 0, eccentric_b = 1;
console.log(eccentric_a);
for (let slides = 0; slides < 19; slides++) {
  console.log(eccentric_b);
  [eccentric_a, eccentric_b] = [eccentric_b, eccentric_a + eccentric_b];
}
